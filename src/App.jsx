// App.jsx — shell, state, and per-page rendering. Each HTML file sets window.__PAGE__
// ('work' | 'about' | 'contact' | 'cv' | 'project') to pick the view.

const PIN_KEY = 'portfolio.pins.v1';
const ORDER_KEY = 'portfolio.order.v1';
const STICKER_KEY = 'portfolio.stickers.v1';
const THEME_KEY = 'portfolio.theme.v1';
const TWEAKS_KEY = 'portfolio.tweaks.v2';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "photoSize": 200,
  "accent": "#FFC341",
  "spread": 0.7,
  "theme": "light",
  "stickersOn": true
}/*EDITMODE-END*/;

function useReducedMotion() {
  const [rm, setRm] = React.useState(() => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const h = () => setRm(mq.matches);
    mq.addEventListener?.('change', h);
    return () => mq.removeEventListener?.('change', h);
  }, []);
  return rm;
}

function useLocalState(key, init) {
  const [v, setV] = React.useState(() => {
    try { const raw = localStorage.getItem(key); if (raw) return JSON.parse(raw); } catch(e){}
    return init;
  });
  React.useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch(e){} }, [key, v]);
  return [v, setV];
}

function Header({ page, theme, onToggleTheme }) {
  const items = [
    { id: 'work',    label: 'Work',    href: 'index.html' },
    { id: 'about',   label: 'About',   href: 'about.html' },
  ];
  const activeId = page === 'project' ? 'work' : page;
  return (
    <header className="ps-header">
      <a className="ps-brand" href="index.html">
        <span className="ps-brand-name">HSUEH&nbsp;CHEN</span>
        <span className="ps-brand-dot" />
      </a>
      <nav className="ps-nav">
        {items.map(i => (
          <a key={i.id}
            href={i.href}
            className={'ps-nav-item' + (activeId === i.id ? ' is-active' : '')}>
            {i.label}
          </a>
        ))}
      </nav>
      <div className="ps-spacer" />
      <button className="ps-icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
        <img src={`assets/icons/${theme === 'dark' ? 'sun' : 'moon'}.svg`} width="20" height="20" alt="" style={{filter: theme==='dark' ? 'invert(1)' : ''}} />
      </button>
    </header>
  );
}

function Tweaks({ tweaks, setTweaks, persist, page }) {
  const [open, setOpen] = React.useState(true);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setVisible(true);
      if (d.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  if (!visible) return null;

  const set = (k, v) => {
    setTweaks(prev => {
      const next = { ...prev, [k]: v };
      persist(next);
      return next;
    });
  };

  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <button onClick={() => setOpen(o => !o)}>{open ? '\u2013' : '+'}</button>
      </div>
      {open && (
        <div className="tweaks-body">
          <div className="tweaks-row">
            <label>Theme</label>
            <div className="opts">
              <button className={tweaks.theme==='light'?'on':''} onClick={() => set('theme','light')}>Light</button>
              <button className={tweaks.theme==='dark'?'on':''} onClick={() => set('theme','dark')}>Dark</button>
            </div>
          </div>
          {page === 'work' && (
            <>
              <div className="tweaks-row">
                <label>Photo size <span className="val">{tweaks.photoSize}px</span></label>
                <input type="range" min="180" max="320" step="10" value={tweaks.photoSize}
                  onChange={e => set('photoSize', +e.target.value)} />
              </div>
              <div className="tweaks-row">
                <label>Scatter spread <span className="val">{tweaks.spread.toFixed(2)}\u00D7</span></label>
                <input type="range" min="0.4" max="1.8" step="0.05" value={tweaks.spread}
                  onChange={e => set('spread', +e.target.value)} />
              </div>
              <div className="tweaks-row">
                <label>Stickers</label>
                <div className="opts">
                  <button className={tweaks.stickersOn?'on':''} onClick={() => set('stickersOn', true)}>On</button>
                  <button className={!tweaks.stickersOn?'on':''} onClick={() => set('stickersOn', false)}>Off</button>
                </div>
              </div>
            </>
          )}
          <div className="tweaks-row">
            <label>Accent</label>
            <div className="opts">
              {[
                ['#FFC341','Amber'],
                ['#0f62fe','Blue'],
                ['#24a148','Green'],
                ['#da1e28','Red'],
              ].map(([c,n]) => (
                <button key={c} className={tweaks.accent===c?'on':''}
                        onClick={() => set('accent', c)}>{n}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('p');
}

function App() {
  const projects = window.PROJECTS;
  const reducedMotion = useReducedMotion();

  // Page is set in each HTML file before this script loads.
  const page = window.__PAGE__ || 'work';

  const [theme, setTheme] = useLocalState(THEME_KEY, 'light');
  const [pinned, setPinned] = useLocalState(PIN_KEY, {});
  const [stackOrder, setStackOrder] = useLocalState(ORDER_KEY, projects.map(p => p.id));
  const [stickers, setStickers] = useLocalState(STICKER_KEY, {});
  const [tweaks, setTweaks] = useLocalState(TWEAKS_KEY, TWEAK_DEFAULTS);

  const [preview, setPreview] = React.useState(null); // project id

  // Keep stackOrder in sync if project list changes
  React.useEffect(() => {
    const known = new Set(stackOrder);
    const missing = projects.filter(p => !known.has(p.id)).map(p => p.id);
    if (missing.length) setStackOrder(prev => [...prev, ...missing]);
  }, [projects]);

  // Apply theme & CSS custom props from tweaks
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme || theme);
    document.documentElement.style.setProperty('--accent-50', tweaks.accent);
    document.documentElement.style.setProperty('--photo-w', tweaks.photoSize + 'px');
    document.documentElement.style.setProperty('--spread', String(tweaks.spread));
  }, [tweaks, theme]);

  const toggleTheme = () => {
    setTweaks(prev => {
      const next = { ...prev, theme: (prev.theme === 'dark' ? 'light' : 'dark') };
      persistTweaksFile(next);
      return next;
    });
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  };

  const persistTweaksFile = (next) => {
    try {
      window.parent.postMessage({ type:'__edit_mode_set_keys', edits: next }, '*');
    } catch(e) {}
  };

  const onOpenPreview = (id) => setPreview(id);
  const closePreview = () => setPreview(null);
  // Navigate to project detail page (work.html?p=id)
  const viewProject = (id) => { window.location.href = 'work.html?p=' + id; };

  const previewProject = preview && projects.find(p => p.id === preview);

  // Render the photo stack into the hero's #album container via portal-style effect
  const [albumEl, setAlbumEl] = React.useState(null);
  React.useEffect(() => {
    if (page !== 'work') return;
    const el = document.getElementById('album');
    setAlbumEl(el);
  }, [page]);

  // Determine if we're on a project detail page
  const projectId = page === 'project' ? getProjectIdFromUrl() : null;
  const currentProject = projectId ? projects.find(p => p.id === projectId) : null;

  return (
    <div className="ps-shell">
      <Header page={page} theme={tweaks.theme || theme} onToggleTheme={toggleTheme} />

      <main className="ps-main">
        {page === 'project' && currentProject && (
          <ProjectPage
            project={currentProject}
            projects={projects}
            onBack={() => { window.location.href = 'index.html'; }}
            onOpen={(id) => { window.location.href = 'work.html?p=' + id; }}
          />
        )}

        {page === 'work' && (
          <>
            <Hero />
            {albumEl && ReactDOM.createPortal(
              <PhotoStack
                projects={projects}
                onOpen={onOpenPreview}
                pinned={pinned}
                setPinned={setPinned}
                stackOrder={stackOrder}
                setStackOrder={setStackOrder}
                stickers={stickers}
                setStickers={setStickers}
                stickersOn={tweaks.stickersOn !== false}
                reducedMotion={reducedMotion}
              />, albumEl)}
          </>
        )}

        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
        {page === 'cv' && <CV />}
      </main>

      {previewProject && (
        <Preview
          project={previewProject}
          onClose={closePreview}
          onView={viewProject}
        />
      )}

      <Tweaks tweaks={tweaks} setTweaks={setTweaks} persist={persistTweaksFile} page={page} />
    </div>
  );
}

window.App = App;
