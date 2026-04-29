// ProjectPage.jsx — full case study page

function ProjectPage({ project, onBack, projects, onOpen }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, [project?.id]);
  if (!project) return null;

  // Custom case study for Tap Taipei — fully bespoke layout.
  if (project.id === 'taptaipei' && window.TapTaipeiPage) {
    const TapTaipei = window.TapTaipeiPage;
    return <TapTaipei project={project} projects={projects} onBack={onBack} onOpen={onOpen} />;
  }

  // Custom case study for MoCA — fully bespoke layout.
  if (project.id === 'moca' && window.MocaPage) {
    const Moca = window.MocaPage;
    return <Moca project={project} projects={projects} onBack={onBack} onOpen={onOpen} />;
  }

  // Custom case study for Share it — fully bespoke layout.
  if (project.id === 'shareit' && window.ShareItPage) {
    const ShareIt = window.ShareItPage;
    return <ShareIt project={project} projects={projects} onBack={onBack} onOpen={onOpen} />;
  }

  // Custom case study for Wagyu Rush — fully bespoke layout.
  if (project.id === 'wagyu' && window.WagyuPage) {
    const Wagyu = window.WagyuPage;
    return <Wagyu project={project} projects={projects} onBack={onBack} onOpen={onOpen} />;
  }

  // Custom case study for Other Works — collection page.
  if (project.id === 'other' && window.OtherWorksPage) {
    const Other = window.OtherWorksPage;
    return <Other project={project} projects={projects} onBack={onBack} onOpen={onOpen} />;
  }

  const idx = projects.findIndex(p => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="detail">
      <div className="detail-crumb">
        <button type="button" onClick={onBack}>Work</button>
        <img src="assets/icons/chevron-right.svg" width="12" height="12" alt="" />
        <span>{project.num} · {project.title}</span>
      </div>
      <header>
        <div className="detail-eyebrow">Case study {project.num} · {project.kind}</div>
        <h1>{project.title}</h1>
        <p className="detail-lede">{project.summary}</p>
        <div className="detail-palette" aria-label="Project palette">
          {project.palette.map(c => (
            <div key={c} className="sw" style={{ background: c }} title={c} />
          ))}
        </div>
      </header>
      <div className="detail-meta">
        <div><div className="eyebrow">Role</div><div className="v">{project.role}</div></div>
        <div><div className="eyebrow">Team</div><div className="v">{project.team}</div></div>
        <div><div className="eyebrow">Timeline</div><div className="v">{project.duration}</div></div>
        <div><div className="eyebrow">Instructor</div><div className="v">{project.instructor}</div></div>
      </div>
      <figure className="detail-hero">
        <img src={project.cover} alt={project.title} />
      </figure>
      {project.sections.map((s, i) => (
        <section key={i} className="detail-section">
          <div className="detail-eyebrow">{s.eyebrow}</div>
          {s.heading && <h2>{s.heading}</h2>}
          {s.body && <p>{s.body}</p>}
          {s.list && (
            <ul className="detail-list">
              {s.list.map((li, j) => <li key={j}>{li}</li>)}
            </ul>
          )}
          {s.stats && (
            <div className="stat-row">
              {s.stats.map((st, j) => (
                <div key={j} className="stat">
                  <div className="stat-num">{st.num}</div>
                  <div className="stat-lbl">{st.lbl}</div>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
      <nav className="detail-nav">
        <button className="btn btn-ghost" onClick={onBack}>
          <span>← Back to work</span>
        </button>
        <button className="btn btn-tertiary btn-icon" onClick={() => onOpen(next.id)}>
          <span>Next · {next.title}</span>
          <img src="assets/icons/arrow-right.svg" alt="" />
        </button>
      </nav>
    </article>
  );
}

window.ProjectPage = ProjectPage;
