// OtherWorksPage.jsx — collection case study page (id: 'other').
// Each work in the collection is its own section. We build them up
// one at a time. This iteration ships Section 01 — Rhythm of the Wind.

function OtherWorksPage({ project, onBack, onOpen, projects }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, [project?.id]);
  const idx = projects.findIndex(p => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  // Index of works inside this collection. Add an entry per work as we ship them.
  const works = [
    { num: '01', id: 'wind',    title: 'Rhythm of the Wind', kind: 'Creative coding · p5.js × Orca', year: '2023', status: 'Live' },
    { num: '02', id: 'clock',   title: "Schrödinger's Clock", kind: 'Creative coding · p5.js × FaceMesh', year: '2023', status: 'Live' },
    { num: '03', id: 'wheel',   title: 'Electric Wheelchair Controller', kind: 'Accessibility · Human factors', year: '2022', status: 'Live' },
    { num: '04', id: 'newbal',  title: 'New Balance iOS',     kind: 'UI \u00b7 iOS implementation',     year: '2022', status: 'Live' },
  ];

  return (
    <article className="ow">
      {/* ============== sticky breadcrumb ============== */}
      <div className="ow-crumb">
        <div className="ow-crumb-inner">
          <button type="button" onClick={onBack}>← Work</button>
          <span className="ow-crumb-sep">/</span>
          <span>Other Works</span>
          <span className="ow-crumb-spacer" />
          <span className="ow-crumb-meta">05 / 05 · Hsueh Chen</span>
        </div>
      </div>

      {/* ============== HERO ============== */}
      <section className="ow-hero">
        <div className="ow-hero-eyebrow">Case study · 05 — collection</div>
        <h1 className="ow-hero-title">Other Works.</h1>
        <p className="ow-hero-lede">
          A collection of smaller works across creative coding, accessibility, brand and
          interface design — different problems, one design practice. Each of these started
          as a side project and earned its keep by teaching me something the day-job briefs
          rarely cover: human factors, generative behaviour, tone of voice. They live here
          together so the through-line is visible.
        </p>
      </section>

      {/* ============== INDEX OF WORKS ============== */}
      <section className="ow-index">
        <div className="ow-index-head">Index</div>
        <ul className="ow-index-list">
          {works.map(w => {
            const live = w.status === 'Live';
            return (
              <li key={w.id} className={live ? 'is-live' : 'is-pending'}>
                <a href={live ? `#${w.id}` : undefined}>
                  <span className="ow-index-num">{w.num}</span>
                  <span className="ow-index-title">{w.title}</span>
                  <span className="ow-index-kind">{w.kind}</span>
                  <span className="ow-index-year">{w.year}</span>
                  <span className="ow-index-status">{live ? '↓ Read' : 'Soon'}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      {/* =========================================================
          01 — RHYTHM OF THE WIND
          p5.js × Orca audio-reactive composition
         ========================================================= */}
      <section id="wind" className="ow-wind">
        <div className="ow-wind-marker">
          <span className="ow-wind-marker-num">01</span>
          <span>Rhythm of the Wind</span>
          <span>·</span>
          <span>Creative coding · 2023</span>
        </div>

        {/* hero copy */}
        <div className="ow-wind-hero">
          <div>
            <div className="ow-wind-cn">風 的 律 動</div>
            <h2 className="ow-wind-title">
              Rhythm of <em>the&nbsp;Wind</em>.
            </h2>
          </div>
          <p className="ow-wind-lede">
            An audio-reactive sketch in p5.js, scored in Orca. A drifting field of particles
            traces invisible currents — the wind we cannot see, only feel. Gusts arrive on cue
            from the synth, accelerating the lines into spirals; quiet passages let them
            settle into long, slow tides.
          </p>
        </div>

        <dl className="ow-wind-meta">
          <div><dt>Year</dt><dd>2023 · solo</dd></div>
          <div><dt>Tools</dt><dd>p5.js · Orca · Web Audio</dd></div>
          <div><dt>Output</dt><dd>Audio-visual sketch</dd></div>
          <div><dt>Brief</dt><dd>Audio Visualization Proposal</dd></div>
        </dl>

        {/* cinematic still */}
        <div className="ow-wind-cinema">
          <figure className="ow-wind-cinema-frame">
            <img src="assets/covers/wind-fast-2.png" alt="Wind sketch — particle trails sweeping across the canvas, gathering into multiple slow spirals" />
          </figure>
          <figcaption className="ow-wind-cinema-cap">
            <span>Fig. 01 — full canvas, mid-gust</span>
            <span>p5.js · 1920 × 1080</span>
          </figcaption>
        </div>

        {/* concept quotes pulled from the proposal */}
        <div className="ow-wind-concept">
          <div className="ow-wind-concept-grid">
            <aside className="ow-wind-concept-side">Concept · 概念</aside>
            <div>
              <blockquote className="ow-wind-concept-quote">
                To us, the wind is <span className="accent">invisible</span> — we only know it
                through the things it moves, or through what we ourselves can feel.
                <span className="small">對人類而言，風是看不見的，只能透過觀察其他物體的動靜或是自身去體會去感受風的存在。</span>
              </blockquote>
              <blockquote className="ow-wind-concept-quote">
                Our impression of the wind is <span className="accent">flowing, weightless,
                free</span> — unbound to anything.
                <span className="small">我們對風的印象，是流動的、輕盈的、是自由且無拘無束的。</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* process — orca patch + sketch pipeline */}
        <div className="ow-wind-process">
          <header className="ow-wind-process-head">
            <div className="ow-wind-eyebrow">Process · 製作</div>
            <h3 className="ow-wind-h2">A score in <em>Orca</em>, played by a flow field.</h3>
            <p className="ow-wind-p">
              Orca handles the music — a livecoded grid where two-character operators emit
              MIDI. I wrote a light, airy melody and seeded it with intermittent gusts of
              noise. p5.js listens to the audio amplitude on every frame and pushes a
              Perlin-noise vector field accordingly: louder = faster, more turbulence,
              tighter spirals.
            </p>
          </header>

          <div className="ow-wind-stack">
            <div className="ow-wind-stack-img">
              <img src="assets/covers/wind-orca.png" alt="Orca livecoding environment — a dark grid of pale-green operators arranged in two columns of voices, sending MIDI" />
              <span className="ow-wind-tag">Orca · score</span>
            </div>
            <div className="ow-wind-stack-text">
              <div className="ow-wind-eyebrow">The instrument</div>
              <h4 className="ow-wind-h3">Two voices, one wind.</h4>
              <p className="ow-wind-p">
                Two symmetrical voice columns trade phrases — a steady three-note motif on the
                left, a contrasting figure on the right. Random walks (<code>R</code>) and
                clocks (<code>C</code>) introduce just enough drift that no two runs are the
                same. A bang-triggered noise channel becomes the gust.
              </p>
              <p className="ow-wind-p">
                The score is short on purpose. The sketch is meant to <em>breathe</em>, not
                perform.
              </p>
            </div>
          </div>

          <div className="ow-wind-pipeline">
            <div className="ow-wind-pipeline-step">
              <div className="num"><span>Step 01</span></div>
              <h4>Orca → MIDI</h4>
              <p>Operators tick on a 60 BPM clock, sending pitch &amp; velocity over MIDI to a soft synth and a noise channel.</p>
            </div>
            <div className="ow-wind-pipeline-step">
              <div className="num"><span>Step 02</span></div>
              <h4>p5.sound listens</h4>
              <p>An <code>FFT</code> reads bass / mid / treble each frame and exposes a normalised energy value.</p>
            </div>
            <div className="ow-wind-pipeline-step">
              <div className="num"><span>Step 03</span></div>
              <h4>Flow field draws</h4>
              <p>A Perlin-noise vector field steers thousands of particles; their speed and curl track the audio.</p>
            </div>
          </div>
        </div>

        {/* behaviour comparison */}
        <div className="ow-wind-behavior">
          <header className="ow-wind-behavior-head">
            <div className="ow-wind-eyebrow">Behaviour · 風速</div>
            <h3 className="ow-wind-h2">When the gust hits, the lines <em>spin</em>.</h3>
            <p className="ow-wind-p">
              The same flow field, two states. Quiet passages let particles settle into long,
              parallel tides. Gusts collapse them inwards into vortices — tracing where the
              wind would have caught a leaf, if any leaves were present.
            </p>
          </header>

          <div className="ow-wind-compare">
            <div className="ow-wind-compare-card">
              <div className="ow-wind-compare-frame">
                <img src="assets/covers/wind-slow-2.png" alt="Slow wind — particles drift in gentle, mostly parallel curves" />
                <span className="ow-wind-tag">Slow · 風速慢</span>
                <span className="ow-wind-compare-meter">
                  <span className="bars">
                    <span className="bar" style={{height:6}} />
                    <span className="bar dim" style={{height:10}} />
                    <span className="bar dim" style={{height:14}} />
                    <span className="bar dim" style={{height:18}} />
                  </span>
                  <span>amp · low</span>
                </span>
              </div>
              <div className="ow-wind-compare-body">
                <div className="sub">State A · 0.0 – 0.3 amp</div>
                <h4>Lines drift.</h4>
                <p>Long, slow curves. Few spirals form, and those that do are wide and lazy.
                  The score is sparse — single notes, with the noise channel silent.</p>
              </div>
            </div>

            <div className="ow-wind-compare-card">
              <div className="ow-wind-compare-frame">
                <img src="assets/covers/wind-fast-1.png" alt="Fast wind — many particles converging into pronounced spirals" />
                <span className="ow-wind-tag">Fast · 風速快</span>
                <span className="ow-wind-compare-meter">
                  <span className="bars">
                    <span className="bar" style={{height:6}} />
                    <span className="bar" style={{height:10}} />
                    <span className="bar" style={{height:14}} />
                    <span className="bar" style={{height:18}} />
                  </span>
                  <span>amp · high</span>
                </span>
              </div>
              <div className="ow-wind-compare-body">
                <div className="sub">State B · 0.6 – 1.0 amp</div>
                <h4>Lines spiral.</h4>
                <p>The gust channel fires. Particles speed up, curl tightens, and pockets of
                  pressure pull lines into legible vortices that bloom and dissolve.</p>
              </div>
            </div>
          </div>
        </div>

        {/* gallery */}
        <div className="ow-wind-gallery">
          <header className="ow-wind-behavior-head">
            <div className="ow-wind-eyebrow">Gallery · 截圖</div>
            <h3 className="ow-wind-h2">Stills from a <em>generative</em> performance.</h3>
            <p className="ow-wind-p">
              No two runs are alike — Orca's random walks and Perlin's drift see to that. These
              are four moments captured during a single five-minute play.
            </p>
          </header>

          <div className="ow-wind-gallery-grid">
            <div className="ow-wind-gallery-item tall">
              <img src="assets/covers/wind-fast-2.png" alt="Wind still — wide field of swirling lines" />
              <span className="ow-wind-gallery-cap">00:42 · gust</span>
            </div>
            <div className="ow-wind-gallery-item">
              <img src="assets/covers/wind-slow-1.png" alt="Wind still — calm, sparse drift" />
              <span className="ow-wind-gallery-cap">01:18 · calm</span>
            </div>
            <div className="ow-wind-gallery-item">
              <img src="assets/covers/wind-fast-1.png" alt="Wind still — vortex forming bottom-left" />
              <span className="ow-wind-gallery-cap">02:55 · vortex</span>
            </div>
          </div>
        </div>

        {/* reflection */}
        <div className="ow-wind-reflection">
          <blockquote className="ow-wind-reflection-quote">
            What surprised me wasn't the visual — it was how much the <em>sound</em> changed
            when I started watching the lines. The eye taught the ear to listen for gusts.
          </blockquote>

          <div className="ow-wind-stats">
            <div className="ow-wind-stat">
              <div className="n">2</div>
              <div className="l">Tools combined<br/>p5.js × Orca</div>
            </div>
            <div className="ow-wind-stat">
              <div className="n">~3k</div>
              <div className="l">Particles<br/>per frame</div>
            </div>
            <div className="ow-wind-stat">
              <div className="n">5'</div>
              <div className="l">Loop length<br/>generative</div>
            </div>
          </div>
        </div>

        <div className="ow-wind-foot">
          <span>End of section 01 · 風的律動</span>
          <span>↓ More works coming</span>
        </div>
      </section>

      {/* =========================================================
          02 — SCHRÖDINGER'S CLOCK
          p5.js + webcam eye-tracking — observation collapses chaos
         ========================================================= */}
      <section id="clock" className="ow-clock">
        <div className="ow-clock-marker">
          <span className="num">02</span>
          <span>Schrödinger's Clock</span>
          <span>·</span>
          <span>Creative coding · 2023</span>
        </div>

        <div className="ow-clock-hero">
          <div>
            <div className="ow-clock-cn">薛 丁 格 的 時 鐘</div>
            <h2 className="ow-clock-title">
              The clock <span className="obs">only exists</span> when&nbsp;you <span className="red">look</span>.
            </h2>
          </div>
          <p className="ow-clock-lede">
            A p5.js piece for a class on perception. A swarm of digit-particles drifts in mutual
            attraction — chaotic, undecided. The webcam watches your face: the moment your eyes
            meet the screen, the swarm collapses into a clock. Look away and it dissolves back
            into noise.
          </p>
        </div>

        <dl className="ow-clock-meta">
          <div><dt>Year</dt><dd>2023 · solo</dd></div>
          <div><dt>Tools</dt><dd>p5.js · ml5 FaceMesh · Webcam</dd></div>
          <div><dt>Output</dt><dd>Interactive installation</dd></div>
          <div><dt>Theme</dt><dd>Observation · superposition</dd></div>
        </dl>

        {/* unobserved vs observed pair */}
        <div className="ow-clock-states">
          <header className="ow-clock-states-head">
            <div className="ow-clock-eyebrow">States · 兩種狀態</div>
            <h3>Two states, <em>one observer.</em></h3>
            <p>
              Until the camera detects a pair of open eyes pointed at the screen, the digits are
              free — sixty point-masses pulling on each other through a soft mutual-attraction
              field. The instant observation begins, they snap into a clock face: a ring of 60
              digits orbiting clockwise, with the current second highlighted in red.
            </p>
          </header>

          <div className="ow-clock-pair">
            <div className="ow-clock-pair-cell">
              <div className="ow-clock-pair-frame">
                <img src="assets/covers/clock-unobserved-1.png" alt="Unobserved — digits tangle in chaotic, swirling chains" />
                <span className="ow-clock-pair-tag"><span className="dot" />Unobserved · 未觀察</span>
                <span className="ow-clock-pair-eye">eye · n/a</span>
              </div>
              <div className="ow-clock-pair-body">
                <div className="sub">State A · superposition</div>
                <h4>Mutual attraction.</h4>
                <p>Sixty digit-particles drift through space, pulling on each other through a
                  weak attractive force. They braid into chains, knot, and unwind. No time is
                  shown — there is no clock here, only candidates for one.</p>
              </div>
            </div>

            <div className="ow-clock-pair-cell">
              <div className="ow-clock-pair-frame">
                <img src="assets/covers/clock-observed-1.png" alt="Observed — digits arrange into a circular clock face reading 10:09" />
                <span className="ow-clock-pair-tag is-on"><span className="dot" />Observed · 觀察中</span>
                <span className="ow-clock-pair-eye">eye · detected</span>
              </div>
              <div className="ow-clock-pair-body">
                <div className="sub">State B · collapsed</div>
                <h4>The clock appears.</h4>
                <p>Particles are bound to a ring, ordered 0–59, rotating clockwise once per
                  minute. The current hour : minute reads at center; the digit matching the
                  current second turns red and pulses with the tick.</p>
              </div>
            </div>
          </div>
        </div>

        {/* the rule, stated plainly */}
        <div className="ow-clock-rule">
          <aside className="ow-clock-rule-side">The rule · 規則</aside>
          <blockquote>
            A clock that <span className="accent">is</span> and <span className="accent">is not</span> the time —
            its certainty held in your gaze, and only your gaze.
            <span className="small">Borrowed shamelessly from Schrödinger. The cat is fine; only the seconds are uncertain.</span>
          </blockquote>
        </div>

        {/* mechanics */}
        <div className="ow-clock-mech">
          <div>
            <div className="ow-clock-eyebrow">Mechanics · 製作</div>
            <h3>How <em>observation</em> rewrites the system.</h3>
            <p>
              The simulation runs the same loop in both states. What changes is which forces
              act on the particles, and how strongly. A weighted blend between the two regimes
              gives the collapse a soft 600 ms ease — chaos doesn't snap, it <em>resolves</em>.
            </p>
            <p>
              Eye detection runs on a small ml5 / FaceMesh model in the browser. Two eyes, both
              open, pointed roughly at the screen → <code>observed = true</code>. Anything else
              → unobserved. A short hysteresis prevents the clock from flickering when you blink.
            </p>
          </div>

          <ul className="ow-clock-mech-list">
            <li>
              <span className="k">01 · Particle</span>
              <div>
                <h4>60 digit-bodies</h4>
                <p>Each particle is a single character, 0–9, instanced six times to reach 60.
                  Position, velocity, mass, and a target slot on the ring.</p>
              </div>
            </li>
            <li>
              <span className="k">02 · Forces</span>
              <div>
                <h4>Mutual attraction (off) · ring spring (on)</h4>
                <p>When unobserved, particles pull on each other (1/r² capped). When observed,
                  each particle is pulled toward its assigned slot via a Hookean spring.</p>
              </div>
            </li>
            <li>
              <span className="k">03 · Collapse</span>
              <div>
                <h4>Soft 600ms blend</h4>
                <p>A 0–1 <code>observation</code> value eases between regimes. Trails fade so
                  the chaotic state still leaves a faint memory underneath the clock.</p>
              </div>
            </li>
            <li>
              <span className="k">04 · Tick</span>
              <div>
                <h4>Current second → red</h4>
                <p>Once per second the digit at the active slot tints red. The previous red
                  resets to white. The ring rotates one slot clockwise per second.</p>
              </div>
            </li>
            <li>
              <span className="k">05 · Eyes</span>
              <div>
                <h4>FaceMesh in-browser</h4>
                <p>ml5's FaceMesh runs on the webcam feed at ~15 fps. Two open eyes facing the
                  screen flips observation on; a 400 ms hysteresis ignores blinks.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* second-hand callout */}
        <div className="ow-clock-second">
          <figure className="ow-clock-second-img">
            <img src="assets/covers/clock-observed-2.png" alt="Clock face reading 10:10 — one digit on the ring is glowing red as the current second" />
            <span className="ow-clock-second-callout" />
          </figure>
          <div className="ow-clock-second-body">
            <span className="stamp">Detail · second hand</span>
            <h4>The red digit <em>is</em> the second hand.</h4>
            <p>There is no needle. Sixty positions, one per second; the digit at the current
              position turns red and pulses. As the ring rotates, the red travels with it —
              the seconds are simultaneously a number and a place.</p>
            <p>It feels obvious in hindsight. The clock face was always a number line bent
              into a circle; we just lost sight of it once minute hands were invented.</p>
          </div>
        </div>

        {/* in-context gallery */}
        <div className="ow-clock-context">
          <header className="ow-clock-context-head">
            <div className="ow-clock-eyebrow">In situ · 情境</div>
            <h3>A clock for <em>shared</em> space.</h3>
            <p>
              The piece was imagined for monitors and wall-mounted screens — places where it can
              be seen at a glance, then ignored, then glanced at again. Each glance restores it.
            </p>
          </header>

          <div className="ow-clock-context-grid">
            <div className="ow-clock-context-item span2">
              <img src="assets/covers/clock-context-5.png" alt="Gallery wall — a tall portrait monitor displaying the clock at 12:37, a person facing it from the left" />
              <span className="ow-clock-context-cap">Gallery · 12:37 · observed</span>
            </div>
            <div className="ow-clock-context-item">
              <img src="assets/covers/clock-context-1.png" alt="Desktop monitor in an office — clock face reads 10:09" />
              <span className="ow-clock-context-cap">Desk · observed</span>
            </div>
            <div className="ow-clock-context-item">
              <img src="assets/covers/clock-context-4.png" alt="The same monitor, no observer — chaotic particle swirl on screen" />
              <span className="ow-clock-context-cap">Desk · unobserved</span>
            </div>
            <div className="ow-clock-context-item">
              <img src="assets/covers/clock-context-3.png" alt="Laptop on an outdoor wooden table — clock face reads 10:10" />
              <span className="ow-clock-context-cap">Café · observed</span>
            </div>
            <div className="ow-clock-context-item span2">
              <img src="assets/covers/clock-context-2.png" alt="The same outdoor laptop scene — chaotic particle swirl on screen" />
              <span className="ow-clock-context-cap">Café · unobserved</span>
            </div>
          </div>
        </div>

        {/* reflection */}
        <div className="ow-clock-reflect">
          <blockquote>
            The piece taught me that <em>noticing</em> is itself a verb of design — what the
            interface does when no one is looking is part of the interface.
          </blockquote>

          <div className="ow-clock-stats">
            <div className="cell">
              <div className="n">60</div>
              <div className="l">digit particles<br/>one per second</div>
            </div>
            <div className="cell">
              <div className="n"><span className="red">1</span></div>
              <div className="l">red second<br/>tracks the tick</div>
            </div>
            <div className="cell">
              <div className="n">600<span style={{fontSize: 22}}>ms</span></div>
              <div className="l">collapse ease<br/>chaos → clock</div>
            </div>
            <div className="cell">
              <div className="n">15<span style={{fontSize: 22}}>fps</span></div>
              <div className="l">facemesh poll<br/>in-browser</div>
            </div>
          </div>
        </div>

        <div className="ow-clock-foot">
          <span>End of section 02 · 薛丁格的時鐘</span>
          <span>↓ More works coming</span>
        </div>
      </section>

      {/* =========================================================
          03 — ELECTRIC WHEELCHAIR CONTROLLER
          Accessibility · human factors · industrial design
         ========================================================= */}
      <section id="wheel" className="ow-wheel">
        <div className="ow-wheel-marker">
          <span className="num">03</span>
          <span>Electric Wheelchair Controller</span>
          <span>·</span>
          <span>Accessibility · 2022</span>
        </div>

        {/* hero */}
        <header className="ow-wheel-hero">
          <div className="ow-wheel-cn">電 動 輪 椅 控 制 器</div>
          <h2 className="ow-wheel-title">A controller, redesigned for the <em>hand that uses it</em>.</h2>
          <p className="ow-wheel-lede">
            A six-person human-factors project to redesign the joystick, base, and on-screen interface
            of a powered wheelchair. We sized the housing for the 95th-percentile hand, tilted the
            display toward the user&rsquo;s line of sight, and rebuilt every icon around two principles
            from ergonomics: <em>movement compatibility</em> and <em>conceptual compatibility</em>.
          </p>
        </header>

        <dl className="ow-wheel-meta">
          <div><dt>Year</dt><dd>2022 · academic, six-person team</dd></div>
          <div><dt>My role</dt><dd>Interface · iconography · spec doc</dd></div>
          <div><dt>Method</dt><dd>Field study · anthropometrics · 3D print</dd></div>
          <div><dt>Coursework</dt><dd>Human Factors Engineering, final project</dd></div>
        </dl>

        {/* product hero — two real photos */}
        <div className="ow-wheel-product">
          <div className="ow-wheel-product-img">
            <img src="assets/covers/wheel-product-2.png" alt="Prototype mounted to a wheelchair armrest, with an elderly user&rsquo;s hand resting near the joystick" />
            <span className="stamp">Fig. 01 · In situ</span>
          </div>
          <div className="ow-wheel-product-side">
            <div className="img">
              <img src="assets/covers/wheel-product-1.png" alt="3D-printed prototype of the redesigned wheelchair controller — black housing with five circular illuminated buttons and a soft-touch joystick, hand pressing the centre button" />
              <span className="stamp">Fig. 02 · Prototype, top-down</span>
            </div>
            <div className="body">
              <div className="eyebrow">The artefact</div>
              <h4>3D-printed, mounted, used.</h4>
              <p>
                The final prototype was printed in matte black ABS and tested on an actual
                wheelchair armrest. Buttons are recessed and tactilely distinct, so the user can
                find each one without looking down — critical while the chair is in motion.
              </p>
            </div>
          </div>
        </div>

        {/* fieldwork callout */}
        <div className="ow-wheel-field">
          <aside>Field study · 實地探勘</aside>
          <blockquote>
            None of us had a powered wheelchair at home, so we went to the
            <span className="accent"> Taipei Assistive Devices Resource Center</span> and used the
            real thing — measuring angles, button spacing, and the way the joystick wants to be
            held when an aging hand actually holds it.
            <span className="small">
              因為組內沒人家裡有電動輪椅，零售商也只接訂購，最後是輔具中心讓我們實際操作到產品本身——量角度，量按鍵間距，量手真正握上去的位置。
            </span>
          </blockquote>
        </div>

        {/* compatibility — movement + concept */}
        <div className="ow-wheel-compat">
          <div className="ow-wheel-compat-head">
            <div className="ow-wheel-eyebrow">01 · Cognition · 認知</div>
            <h3>Two kinds of <em>compatibility</em>, governing every button.</h3>
            <p>
              An interface is <em>compatible</em> when its layout matches the user&rsquo;s mental
              model. We held every control on the housing to two tests: does the direction it
              moves match the direction the chair moves, and does the symbol on it match what
              people already think the symbol means?
            </p>
          </div>
          <div className="ow-wheel-compat-grid">
            <article className="ow-wheel-compat-card">
              <div className="sub">Movement compatibility</div>
              <h4>移動相容性</h4>
              <p>
                Push the joystick forward, the chair goes forward. Press the &quot;+&quot; button,
                speed goes up — and it sits <em>ahead of</em> the &quot;−&quot; button, which sits
                behind. The left turn signal lives on the left of the housing, the right on the
                right. Direction-of-control matches direction-of-effect, every time.
              </p>
              <div className="ow-wheel-compat-diagram">
                <svg className="ow-wheel-diagram-svg" viewBox="0 0 240 160" aria-hidden="true">
                  {/* crosshair axes */}
                  <line className="axis" x1="120" y1="20" x2="120" y2="140" />
                  <line className="axis" x1="30"  y1="80" x2="210" y2="80"  />
                  {/* joystick body */}
                  <circle className="body" cx="120" cy="80" r="22" />
                  <circle className="accent" cx="120" cy="80" r="4" />
                  {/* arrows */}
                  <path className="accent-stroke" d="M 120 50 L 120 28 M 116 34 L 120 28 L 124 34" />
                  <path className="accent-stroke" d="M 120 110 L 120 132 M 116 126 L 120 132 L 124 126" />
                  <path className="accent-stroke" d="M 90 80 L 60 80 M 66 76 L 60 80 L 66 84" />
                  <path className="accent-stroke" d="M 150 80 L 180 80 M 174 76 L 180 80 L 174 84" />
                  {/* labels */}
                  <text x="120" y="18" textAnchor="middle">Forward · 前進</text>
                  <text x="120" y="152" textAnchor="middle">Reverse · 後退</text>
                  <text x="30"  y="75">Left</text>
                  <text x="195" y="75">Right</text>
                </svg>
              </div>
            </article>

            <article className="ow-wheel-compat-card">
              <div className="sub">Conceptual compatibility</div>
              <h4>概念相容性</h4>
              <p>
                Power is green because we have always agreed power is green. The horn is yellow,
                hazards are red, the headlight is a beam, and speed is a turtle on one end and a
                rabbit on the other. Each glyph is a single recognisable shape that maps to a meaning
                people already carry — so it reads at a glance, even in motion.
              </p>
              <div className="ow-wheel-compat-diagram">
                <svg className="ow-wheel-diagram-svg" viewBox="0 0 360 100" aria-hidden="true" style={{maxWidth:'360px'}}>
                  {/* power */}
                  <g transform="translate(36 44)">
                    <path d="M 0 -16 L 0 -2" stroke="#22a36a" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                    <path d="M -10 -8 A 12 12 0 1 0 10 -8" stroke="#22a36a" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                    <text y="38" textAnchor="middle">Power</text>
                    <text y="50" textAnchor="middle" className="label-orange">電源</text>
                  </g>
                  {/* horn — trumpet shape with sound waves */}
                  <g transform="translate(96 44)">
                    <path d="M -12 -6 L -2 -6 L 8 -14 L 12 -14 L 12 14 L 8 14 L -2 6 L -12 6 Z" fill="#e6b800" stroke="#a88600" strokeWidth="1" strokeLinejoin="round" />
                    <path d="M 16 -6 Q 20 0 16 6" stroke="#a88600" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    <text y="38" textAnchor="middle">Horn</text>
                    <text y="50" textAnchor="middle" className="label-orange">喇叭</text>
                  </g>
                  {/* headlight — beam */}
                  <g transform="translate(156 44)">
                    <path d="M -12 -10 Q -2 -16 6 -10 L 6 10 Q -2 16 -12 10 Z" fill="#3a7a4a" />
                    <line x1="10" y1="-9" x2="18" y2="-9" stroke="#3a7a4a" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="10" y1="-3" x2="18" y2="-3" stroke="#3a7a4a" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="10" y1="3" x2="18" y2="3" stroke="#3a7a4a" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="10" y1="9" x2="18" y2="9" stroke="#3a7a4a" strokeWidth="1.6" strokeLinecap="round" />
                    <text y="38" textAnchor="middle">Headlight</text>
                    <text y="50" textAnchor="middle" className="label-orange">頭燈</text>
                  </g>
                  {/* hazard triangle */}
                  <g transform="translate(216 44)">
                    <path d="M 0 -16 L 14 10 L -14 10 Z" fill="none" stroke="#d13a26" strokeWidth="2" strokeLinejoin="round" />
                    <line x1="0" y1="-7" x2="0" y2="3" stroke="#d13a26" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="0" cy="7" r="1.4" fill="#d13a26" />
                    <text y="38" textAnchor="middle">Hazard</text>
                    <text y="50" textAnchor="middle" className="label-orange">雙黃燈</text>
                  </g>
                  {/* turtle — slow */}
                  <g transform="translate(276 44)">
                    <ellipse cx="0" cy="0" rx="14" ry="9" fill="#3a7a4a" />
                    <path d="M -14 0 Q -16 -3 -16 -1 Q -17 1 -14 2 Z" fill="#3a7a4a" />
                    <circle cx="-15" cy="-1" r="1" fill="#fff" opacity="0.5" />
                    <rect x="-12" y="6" width="3" height="3" fill="#3a7a4a" />
                    <rect x="9" y="6" width="3" height="3" fill="#3a7a4a" />
                    <rect x="-12" y="-9" width="3" height="3" fill="#3a7a4a" />
                    <rect x="9" y="-9" width="3" height="3" fill="#3a7a4a" />
                    <path d="M -8 -4 Q -4 -7 0 -4 M 0 -4 Q 4 -7 8 -4 M -6 2 Q -2 0 2 2" stroke="#1f4429" strokeWidth="0.8" fill="none" />
                    <text y="38" textAnchor="middle">Slow</text>
                    <text y="50" textAnchor="middle" className="label-orange">慢速</text>
                  </g>
                  {/* rabbit — fast */}
                  <g transform="translate(336 44)">
                    <ellipse cx="-1" cy="2" rx="11" ry="8" fill="#3a7a4a" />
                    <circle cx="9" cy="-1" r="6" fill="#3a7a4a" />
                    <ellipse cx="6" cy="-9" rx="2" ry="6" fill="#3a7a4a" transform="rotate(-12 6 -9)" />
                    <ellipse cx="11" cy="-10" rx="2" ry="6" fill="#3a7a4a" transform="rotate(8 11 -10)" />
                    <circle cx="11" cy="-1" r="0.9" fill="#fff" />
                    <path d="M -10 8 Q -14 6 -13 2" stroke="#3a7a4a" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <text y="38" textAnchor="middle">Fast</text>
                    <text y="50" textAnchor="middle" className="label-orange">快速</text>
                  </g>
                </svg>
              </div>
            </article>
          </div>
        </div>

        {/* anthropometrics */}
        <div className="ow-wheel-anthro">
          <div className="ow-wheel-anthro-side">
            <div className="ow-wheel-eyebrow">02 · Anthropometrics · 人體測計</div>
            <h3>Sized for <em>95% of the hands</em> that will use it.</h3>
            <p>
              We mixed two design strategies. The grip diameter is a P50 — the average palm — so
              the median user holds it comfortably. Finger reach to every button is a
              P5 extreme — the smallest fingers — so even the shortest reach can find every
              control without stretching.
            </p>
            <div className="ow-wheel-specs">
              <div className="ow-wheel-specs-row head">
                <span>Dimension</span>
                <span className="val">Strategy</span>
                <span className="val">P5</span>
                <span className="val">P50</span>
                <span className="val">P95</span>
              </div>
              <div className="ow-wheel-specs-row">
                <span className="label">Palm width 手掌寬</span>
                <span className="val">P50</span>
                <span className="val">7.4</span>
                <span className="val hi">8.2</span>
                <span className="val">9.1</span>
              </div>
              <div className="ow-wheel-specs-row">
                <span className="label">Index finger 食指</span>
                <span className="val">P5 reach</span>
                <span className="val hi">6.8</span>
                <span className="val">7.6</span>
                <span className="val">8.5</span>
              </div>
              <div className="ow-wheel-specs-row">
                <span className="label">Middle finger 中指</span>
                <span className="val">P5 reach</span>
                <span className="val hi">7.6</span>
                <span className="val">8.5</span>
                <span className="val">9.5</span>
              </div>
              <div className="ow-wheel-specs-row">
                <span className="label">Grip diameter 握把直徑</span>
                <span className="val">P50</span>
                <span className="val">—</span>
                <span className="val hi">3.4</span>
                <span className="val">—</span>
              </div>
            </div>
            <div className="ow-wheel-specs-foot">
              All values cm · Taiwanese elderly population (Wang 2002, MOEA-IDB anthropometric DB) · grip is symmetric so left- and right-handed users share one part.
            </div>
          </div>
        </div>

        {/* interface buttons spec */}
        <div className="ow-wheel-iface">
          <header className="ow-wheel-iface-head">
            <div className="ow-wheel-eyebrow">03 · Interface · 介面</div>
            <h3>Six controls. <em>Each one</em> defended.</h3>
            <p>
              Every button on the housing was redrawn from scratch. Each one obeys both
              compatibility rules, uses a colour that matches its meaning, and adds a redundant
              visual cue (illumination, ring count, numeral) so users can read it from across the
              room or while moving.
            </p>
          </header>
          <div className="ow-wheel-iface-grid">
            {/* power */}
            <article className="ow-wheel-iface-card">
              <div className="ow-wheel-iface-icon">
                <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#22a36a" strokeWidth="2"/><path d="M 16 9 L 16 17" fill="none" stroke="#22a36a" strokeWidth="2.2" strokeLinecap="round"/><path d="M 10.5 12.5 A 7 7 0 1 0 21.5 12.5" fill="none" stroke="#22a36a" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h4>Power <span className="cn">電源</span></h4>
                <div className="sub">Conceptual · green = on</div>
                <p>Bright green ring so the eye finds it instantly. Sits top-left of the housing — first thing the hand meets when it lands.</p>
              </div>
            </article>

            {/* speed up / down */}
            <article className="ow-wheel-iface-card">
              <div className="ow-wheel-iface-icon">
                <svg viewBox="0 0 32 32"><line x1="16" y1="7" x2="16" y2="25" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><line x1="7" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h4>Speed + / − <span className="cn">加減速</span></h4>
                <div className="sub">Movement · ahead = faster</div>
                <p>Plus sits ahead, minus sits behind — direction of press matches direction of effect. Twelve segments + numeric value as redundant cues.</p>
              </div>
            </article>

            {/* horn */}
            <article className="ow-wheel-iface-card">
              <div className="ow-wheel-iface-icon">
                <svg viewBox="0 0 32 32"><path d="M 9 12 L 14 12 L 22 6 L 22 26 L 14 20 L 9 20 Z" fill="#e6b800" stroke="#a88600" strokeWidth="1.2"/></svg>
              </div>
              <div>
                <h4>Horn <span className="cn">喇叭</span></h4>
                <div className="sub">Conceptual · yellow = warn</div>
                <p>Placed at the lower edge so the thumb finds it without leaving the joystick — the hand can warn without losing steering.</p>
              </div>
            </article>

            {/* hazard */}
            <article className="ow-wheel-iface-card">
              <div className="ow-wheel-iface-icon">
                <svg viewBox="0 0 32 32"><path d="M 6 16 L 16 6 L 26 16 L 16 26 Z" fill="none" stroke="#d13a26" strokeWidth="2"/><path d="M 16 12 L 16 18 M 16 21 L 16 22" stroke="#d13a26" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h4>Hazards <span className="cn">雙黃燈</span></h4>
                <div className="sub">Conceptual · red = emergency</div>
                <p>Translucent housing back-lights when active, so a glance — or a passer-by — can confirm the chair is signalling distress.</p>
              </div>
            </article>

            {/* turn signals */}
            <article className="ow-wheel-iface-card">
              <div className="ow-wheel-iface-icon">
                <svg viewBox="0 0 32 32"><path d="M 22 10 L 12 16 L 22 22 Z" fill="#e6b800" stroke="#a88600" strokeWidth="1"/></svg>
              </div>
              <div>
                <h4>Turn signals <span className="cn">方向燈</span></h4>
                <div className="sub">Movement · left=L, right=R</div>
                <p>Arrow icons. Left signal sits on the left of the housing, right signal on the right. Translucent caps light up to confirm activation.</p>
              </div>
            </article>

            {/* battery */}
            <article className="ow-wheel-iface-card">
              <div className="ow-wheel-iface-icon">
                <svg viewBox="0 0 32 32"><rect x="6" y="11" width="19" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6"/><rect x="25" y="14" width="2" height="4" fill="currentColor"/><rect x="8" y="13" width="4" height="6" fill="#22a36a"/><rect x="13" y="13" width="4" height="6" fill="#e6b800"/><rect x="18" y="13" width="5" height="6" fill="#d13a26" opacity="0.4"/></svg>
              </div>
              <div>
                <h4>Battery <span className="cn">電量</span></h4>
                <div className="sub">Redundant · 3 cues</div>
                <p>Three independent dimensions — colour (R/Y/G), position (L→R), and bar count — so users with low colour acuity can still read the level.</p>
              </div>
            </article>
          </div>
        </div>

        {/* base — adjustable + tilt */}
        <div className="ow-wheel-base">
          <header className="ow-wheel-base-head">
            <div className="ow-wheel-eyebrow">04 · Base · 基座</div>
            <h3>The housing knows the <em>hand isn&rsquo;t straight</em>.</h3>
            <p>
              Two adjustments most off-the-shelf controllers don&rsquo;t make. The interface plate
              rotates in the horizontal plane to accommodate the natural ulnar deviation of either
              hand, and tilts up toward the user&rsquo;s sightline — so reading the display never
              competes with watching the path ahead.
            </p>
          </header>
          <div className="ow-wheel-base-grid">
            {/* rotation */}
            <article className="ow-wheel-base-card">
              <div className="diagram">
                <svg viewBox="0 0 280 180" className="ow-wheel-diagram-svg" style={{maxWidth:'100%'}} aria-hidden="true">
                  {/* base */}
                  <rect className="body" x="40" y="110" width="200" height="40" rx="6" />
                  {/* plate ghost */}
                  <g opacity="0.32">
                    <rect className="body" x="90" y="40" width="100" height="60" rx="6" transform="rotate(-15 140 70)" />
                  </g>
                  <g opacity="0.32">
                    <rect className="body" x="90" y="40" width="100" height="60" rx="6" transform="rotate(15 140 70)" />
                  </g>
                  {/* plate active */}
                  <rect className="body" x="90" y="40" width="100" height="60" rx="6" />
                  <circle className="accent" cx="140" cy="110" r="4" />
                  {/* arc */}
                  <path className="accent-stroke" d="M 100 90 A 50 50 0 0 0 180 90" />
                  <text x="140" y="170" textAnchor="middle">±15° rotation · 旋轉</text>
                </svg>
              </div>
              <div className="body">
                <div className="sub">Adjustable plate</div>
                <h4>Rotates ±15° for either hand</h4>
                <p>
                  Most controllers force a vertical hand. Ours pivots so the wrist can stay in
                  ulnar deviation — the natural resting angle — through long days of use. One
                  housing serves left- and right-handed users, since the cost of mirrored mouldings
                  is what kept this from existing in the first place.
                </p>
              </div>
            </article>

            {/* tilt */}
            <article className="ow-wheel-base-card">
              <div className="diagram">
                <svg viewBox="0 0 280 180" className="ow-wheel-diagram-svg" style={{maxWidth:'100%'}} aria-hidden="true">
                  {/* armrest */}
                  <rect className="body" x="40" y="130" width="200" height="20" rx="3" />
                  {/* face */}
                  <circle className="body" cx="232" cy="40" r="14" />
                  <line className="axis" x1="232" y1="54" x2="232" y2="130" />
                  {/* sightline */}
                  <line className="accent-stroke" x1="222" y1="50" x2="110" y2="108" strokeDasharray="4 4" />
                  {/* tilted plate */}
                  <g transform="rotate(-22 100 110)">
                    <rect className="body" x="60" y="80" width="100" height="36" rx="4" />
                    <rect className="accent" x="70" y="90" width="22" height="6" rx="1" />
                    <rect fill="currentColor" x="96"  y="90" width="22" height="6" rx="1" opacity="0.4" />
                    <rect fill="currentColor" x="122" y="90" width="22" height="6" rx="1" opacity="0.4" />
                  </g>
                  <text x="140" y="170" textAnchor="middle">22° tilt · 顯示器傾斜</text>
                </svg>
              </div>
              <div className="body">
                <div className="sub">Tilted display</div>
                <h4>Faces the user, not the floor</h4>
                <p>
                  Existing controllers lay flat, forcing users to bow their head to read battery or
                  speed — exactly when they should be watching the path. We tilted the display
                  plate by 22°, so the icons sit on the user&rsquo;s natural sightline and a glance
                  costs nothing.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* reflection + stats */}
        <div className="ow-wheel-reflect">
          <blockquote>
            Existing controllers borrow their visual language from old TV remotes — small icons,
            crowded labels, low contrast. They are <span style={{color:'var(--wh-orange)',fontStyle:'italic'}}>hard to read while moving</span>, which
            is the only time a wheelchair controller is ever read. We simplified the glyphs,
            enlarged the active states, and made every cue redundant — so a user can read the
            housing while the chair is in motion, and still keep their eyes on the path.
          </blockquote>
          <div className="ow-wheel-stats">
            <div className="cell">
              <div className="n">P<span className="accent">95</span></div>
              <div className="l">housing fits 95% of <br/>elder hand sizes</div>
            </div>
            <div className="cell">
              <div className="n">22<span className="accent">°</span></div>
              <div className="l">display tilt to user<br/>sightline</div>
            </div>
            <div className="cell">
              <div className="n">±15<span className="accent">°</span></div>
              <div className="l">plate rotation —<br/>L &amp; R hand</div>
            </div>
            <div className="cell">
              <div className="n">3<span className="accent">×</span></div>
              <div className="l">redundant cues per<br/>battery / speed read</div>
            </div>
          </div>
        </div>

        <div className="ow-wheel-foot">
          <span>End of section 03 · 電動輪椅控制器</span>
          <span>↓ More works coming</span>
        </div>
      </section>

      {/* =========================================================
          04 — NEW BALANCE iOS
          UI · iOS implementation · brand-led commerce app
         ========================================================= */}
      <section id="newbal" className="ow-nb">
        <div className="ow-nb-marker">
          <span className="num">04</span>
          <span>New Balance iOS</span>
          <span>·</span>
          <span>UI · 2022</span>
        </div>

        {/* hero */}
        <header className="ow-nb-hero">
          <div className="ow-nb-hero-grid">
            <div className="ow-nb-hero-left">
              <div className="ow-nb-hero-wm">
                <span className="nbmark">
                  <svg viewBox="0 0 60 24" aria-hidden="true">
                    <path d="M 4 18 L 18 4 L 22 4 L 14 12 L 28 4 L 32 4 L 18 18 Z M 30 18 L 44 4 L 48 4 L 40 12 L 54 4 L 58 4 L 44 18 Z" fill="currentColor" />
                  </svg>
                </span>
                <span>new balance · iOS</span>
              </div>
              <div className="ow-nb-hero-cn">紐 巴 倫 · 應 用 程 式</div>
              <h1 className="ow-nb-hero-title">Declare<br/>your <em>path</em>.</h1>
              <p className="ow-nb-hero-lede">
                An end-to-end iOS commerce app for New Balance, designed and built from scratch in
                Swift. The brief was simple: NB doesn&rsquo;t have an app, and what their loyal customers
                do every week — <em>browse new drops</em> — should not be a clunky mobile-web detour.
                So I built the whole thing: brand-led splash, auth, shop, product detail, cart, and
                an Apple-Pay-styled checkout.
              </p>
              <div className="ow-nb-hero-status">
                <div><span className="k">Status</span><span className="v live">Built · unreleased</span></div>
                <div><span className="k">Platform</span><span className="v">iOS · Swift</span></div>
                <div><span className="k">Scope</span><span className="v">End-to-end</span></div>
                <div><span className="k">Year</span><span className="v">2022</span></div>
              </div>
            </div>
            <div className="ow-nb-hero-right">
              <div className="ow-nb-hero-mock">
                <img src="assets/covers/nb-inhand-mockup.png" alt="New Balance app open in-hand — Made US 990AL3 product page on an iPhone, held by a user in green denim" />
                <div className="ow-nb-hero-tag">
                  <span className="dot"></span>
                  <span>In-hand · iPhone 14 Pro</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* meta strip */}
        <dl className="ow-nb-meta">
          <div><dt>Brief</dt><dd>NB has no native app — design and ship one for the loyal-customer audience the brand serves.</dd></div>
          <div><dt>My role</dt><dd>Solo · UX · UI · iOS implementation · brand application</dd></div>
          <div><dt>Build</dt><dd>Swift · UIKit · 5 screens · pre-selected sizes · Apple-Pay checkout</dd></div>
          <div><dt>Audience</dt><dd>Loyal NB customers — repeat buyers who follow drops, not first-time discovery.</dd></div>
        </dl>

        {/* === 01 · Brand entry === */}
        <header className="ow-nb-secthead">
          <div className="num">01 · Brand entry</div>
          <div>
            <h3>Land in the <em>brand</em>, not in a form.</h3>
            <p>
              Most commerce apps open with a sign-in wall. New Balance&rsquo;s campaign creative is
              their best asset, so the splash leads with editorial campaign stills — Brenda
              Martinez running, the silhouette of a 990 mid-stride — over the campaign tag
              &ldquo;Declare Your Path.&rdquo; A single primary CTA, no friction.
            </p>
          </div>
        </header>

        <figure className="ow-nb-clean ow-nb-clean-dark">
          <img src="assets/covers/nb-clean-splash.png" alt="Splash screen — black background, new balance wordmark with red N flying-N mark, Brenda Martinez running below the campaign tag DECLARE YOUR PATH, red 開始探索 CTA pinned at the bottom" />
          <figcaption>
            <span className="step">01 · Splash</span>
            <p>Editorial campaign still, NB wordmark, single red CTA. <strong>開始探索</strong>. No sign-in wall.</p>
          </figcaption>
        </figure>

        {/* === 02 · Shop === */}
        <header className="ow-nb-secthead">
          <div className="num">02 · Shop · 商品瀏覽</div>
          <div>
            <h3>A grid that <em>respects the shoe</em>.</h3>
            <p>
              The shop is the heart of the app — it&rsquo;s why loyal customers open it. Two-up grid,
              full-bleed product photography on neutral grey, name and price in NB&rsquo;s standard
              type. The red &ldquo;+&rdquo; on every card is the only colour on the page; tapping it
              adds the user&rsquo;s registered size straight to cart, so a regular drop-watcher can
              buy in two taps from open.
            </p>
          </div>
        </header>

        <figure className="ow-nb-clean">
          <img src="assets/covers/nb-clean-shop.png" alt="Shop grid — six product cards in two columns, each card with a shoe on neutral grey, red plus button top-right; products include Made US 990AL3, 990GY2, jjjjound 990JJ3, 990BK5, with prices in NT$" />
          <figcaption>
            <span className="step">02 · Shop</span>
            <p>2-up grid, NB Made-US 990 line. The red <strong>+</strong> adds the user&rsquo;s registered size in one tap.</p>
          </figcaption>
        </figure>

        {/* === 03 · Product detail === */}
        <header className="ow-nb-secthead">
          <div className="num">03 · Product · 商品頁</div>
          <div>
            <h3>One shoe, <em>seen properly</em>, sized at a glance.</h3>
            <p>
              The product page is the only screen with the NB N-mark front and centre — a quiet
              callback to the brand entry. Pagination dots cycle six angles, the size selector
              pre-selects the user&rsquo;s registered size (12 here), and the description copy is
              lifted verbatim from NB&rsquo;s Taiwan storefront — same tone, same factory-pride
              cadence (&ldquo;打造世界第一的跑鞋… 1982 年問世&rdquo;).
            </p>
          </div>
        </header>

        <div className="ow-nb-clean-pair">
          <figure className="ow-nb-clean">
            <img src="assets/covers/nb-clean-product.png" alt="Product page for Made US 990AL3 — 3/4 angle hero photo of the shoe, six pagination dots, 中性 鞋類, NT$8,280, model number M990AL3, and a Mandarin description about the 1982 origin of the 990" />
            <figcaption>
              <span className="step">03a · Product</span>
              <p>Hero photo, six angles via pagination dots. Copy lifted from NB&rsquo;s own storefront voice.</p>
            </figcaption>
          </figure>

          <figure className="ow-nb-clean">
            <img src="assets/covers/nb-clean-size.png" alt="Size selector for the 990AL3 — a 5-column grid of US sizes from 4 through 13 (no 12.5), size 12 highlighted black; below, 產品詳情 in Mandarin and a red 加入購物車 CTA pinned to the bottom" />
            <figcaption>
              <span className="step">03b · Size</span>
              <p>21 sizes, 5 per row. Your registered size pre-selected. Red <strong>加入購物車</strong> pinned.</p>
            </figcaption>
          </figure>
        </div>

        {/* === 04 · Cart === */}
        <header className="ow-nb-secthead">
          <div className="num">04 · Cart · 購物車</div>
          <div>
            <h3>Cart, then <em>Apple Pay</em>, then thanks.</h3>
            <p>
              The whole purchase flow ends in the iOS Pay button — the whole point is that loyal
              customers shouldn&rsquo;t have to type a credit card again. Cart shows quantity
              steppers, trash icons, and a live total that updates as you edit. Three items,
              NT$32,790, one tap to confirm.
            </p>
          </div>
        </header>

        <figure className="ow-nb-clean">
          <img src="assets/covers/nb-clean-cart.png" alt="My Cart screen — three items (990AL3, 990GY2, 990JJ3) with thumbnails on neutral grey, sizes, quantity steppers, prices, and red trash icons; total NT$32,790.00; black Check out with Apple Pay button pinned at the bottom" />
          <figcaption>
            <span className="step">04 · My Cart</span>
            <p>Quantity steppers, trash icons, live total. The Check-out button is the iOS Pay button — typed cards have no place here.</p>
          </figcaption>
        </figure>

        {/* reflection */}
        <div className="ow-nb-reflect">
          <blockquote>
            New Balance markets to <em>loyal customers</em> — the people who already know the
            difference between a 990v3 and a 990v4. The right app for that audience isn&rsquo;t a
            discovery engine; it&rsquo;s a clean, brand-true checkout that respects what they already
            know. So I designed the smallest possible surface — splash, browse, buy — and built
            it.
          </blockquote>
        </div>

        <div className="ow-nb-foot">
          <span>End of section 04 · New Balance iOS</span>
          <span>↓ More works coming</span>
        </div>
      </section>

      {/* ============== NAV ============== */}
      <nav className="ow-nav">
        <button className="btn btn-ghost" onClick={onBack}>
          <span>← All work</span>
        </button>
        <button className="btn btn-tertiary btn-icon" onClick={() => onOpen(next.id)}>
          <span>Next · {next.title}</span>
          <img src="assets/icons/arrow-right.svg" alt="" />
        </button>
      </nav>
    </article>
  );
}

window.OtherWorksPage = OtherWorksPage;
