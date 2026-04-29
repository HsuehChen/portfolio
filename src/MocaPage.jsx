// MocaPage.jsx — custom case study page for the MoCA Taipei project.
// Fully bespoke layout that mirrors the PDF booklet's visual language:
//   cream #EBE7D6, amber #EEB94D, deep navy #364F92, rounded cards, icon bullets,
//   double-diamond process, SWOT, persona, CJM strip, awards.

function MocaPage({ project, onBack, onOpen, projects }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, [project?.id]);
  const idx = projects.findIndex(p => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="moca">
      {/* ============== sticky breadcrumb ============== */}
      <div className="moca-crumb">
        <div className="moca-crumb-inner">
          <button type="button" onClick={onBack}>← Work</button>
          <span className="moca-crumb-sep">/</span>
          <span className="moca-crumb-cn">小玩藝策展趣</span>
          <span className="moca-crumb-sep">·</span>
          <span>Service Design</span>
          <span className="moca-crumb-spacer" />
          <span className="moca-crumb-meta">02 / 05 · Hsueh Chen</span>
        </div>
      </div>

      {/* ============== HERO ============== */}
      <section className="moca-hero">
        <div className="moca-hero-photo">
          <img src="assets/covers/moca-hero.jpg" alt="MoCA Taipei façade" />
          <div className="moca-hero-logo">
            <img src="assets/covers/moca-logo-mark.png?v=2" alt="MoCA logo" />
          </div>
          <div className="moca-hero-wordmark">
            <img src="assets/covers/moca-wordmark.png?v=2" alt="小玩藝策展趣 — Curated Exhibits Adventure" />
          </div>
        </div>

        <aside className="moca-hero-card">
          <div className="moca-eyebrow">Case study · 02</div>
          <h1 className="moca-hero-title">小玩藝策展趣</h1>
          <div className="moca-hero-rule" />
          <div className="moca-hero-sub">
            The Museum of Contemporary Art (MoCA)<br/>
            Post-epidemic Museum Experience Design
          </div>

          <dl className="moca-hero-meta">
            <div><dt>Team</dt><dd>School team project · 6 members</dd></div>
            <div><dt>Role</dt><dd>Background research · User interview · Service design · Prototyping · User testing</dd></div>
            <div><dt>Timeline</dt><dd>2022.09 — 2023.01 · 16 weeks</dd></div>
            <div><dt>Instructor</dt><dd>Shih-Ju, Wang</dd></div>
          </dl>

          <p className="moca-hero-brief">
            The COVID-19 pandemic significantly impacted visitor behavior. With the rise of digital
            exhibition experiences, we set out to understand those shifts through user studies —
            identifying typical and potential visitors of MoCA Taipei. To grow return visits
            and reach new customer groups, we designed an experience that resolves those issues
            whatever circumstance the museum faces next.
          </p>

          <div className="moca-hero-award">
            <span className="moca-award-ribbon">🥉 Bronze</span>
            <span>Innovation Design Competition — Service Design Category</span>
          </div>
        </aside>
      </section>

      {/* ============== AT A GLANCE ============== */}
      <section className="moca-section moca-glance">
        <div className="moca-glance-grid">
          <div className="moca-glance-cell">
            <div className="moca-eyebrow moca-eyebrow-amber">Problem</div>
            <h3>Museums lost their rhythm.</h3>
            <p>Foot traffic dropped, loyal visitors drifted online, and parent-child programs
              — MoCA's strongest emotional hook — had no clear on-ramp after lockdown.</p>
          </div>
          <div className="moca-glance-cell">
            <div className="moca-eyebrow moca-eyebrow-amber">Insight</div>
            <h3>Kids are future loyal visitors.</h3>
            <p>Parent-child customers are the seed of loyal customers. Design the child's
              experience end-to-end and the flywheel takes care of itself.</p>
          </div>
          <div className="moca-glance-cell">
            <div className="moca-eyebrow moca-eyebrow-amber">Outcome</div>
            <h3>Four features · Bronze award.</h3>
            <p>Four prototypes shipped — LINE tag-promotion, curation class, kid's exhibition,
              certificate of participation — tested with real MoCA staff and target families.</p>
          </div>
        </div>
      </section>

      {/* ============== DESIGN PROCESS (Double Diamond) ============== */}
      <section className="moca-section">
        <header className="moca-head">
          <div className="moca-eyebrow moca-eyebrow-navy">01 / Approach</div>
          <h2 className="moca-h2">Double Diamond, family at the center.</h2>
          <p className="moca-head-lede">
            A two-phase process based on the Double Diamond. We start by identifying design entry
            points from visitors' behavioral shifts, then develop and refine creative solutions so
            they truly meet user needs and enhance the overall experience.
          </p>
        </header>

        <figure className="moca-figure">
          <img src="assets/covers/moca-dd.jpg" alt="Double Diamond design process — Research (Discover, Define) and Design (Ideate, Deliver)" />
        </figure>

        <div className="moca-phase-notes">
          <div>
            <div className="moca-eyebrow moca-eyebrow-navy">Research phase</div>
            <p>Desk research, field research, in-depth interviews, empathy mapping, and Moments
              of Truth to understand user needs and behavioral shifts. Insights from Persona and
              Customer Journey Map analysis defined our core challenges.</p>
          </div>
          <div>
            <div className="moca-eyebrow moca-eyebrow-amber">Design phase</div>
            <p>Ideate key design features from brainstorming to address the defined challenges.
              Concepts refined through a revised CJM, service blueprint, and user testing to
              ensure the solutions meet user needs and project goals.</p>
          </div>
        </div>
      </section>

      {/* ============== DISCOVER ============== */}
      <section className="moca-section moca-discover">
        <header className="moca-head">
          <div className="moca-eyebrow moca-eyebrow-navy">02 / Discover</div>
          <h2 className="moca-h2 moca-h2-navy">Discover</h2>
          <p className="moca-head-lede">
            Background research on MoCA Taipei's positioning across each channel — official website,
            physical promotion, social media — alongside a SWOT to surface the spaces we could move in.
          </p>
        </header>

        <div className="moca-discover-grid">
          <div>
            <h4 className="moca-h4-amber">MoCA Taipei</h4>
            <p>Taiwan's first contemporary art museum and a historic site, serving as a rare
              example of a multi-functional structure that operates both as a school and an art
              museum.</p>

            <h4 className="moca-h4-amber">U12 Kid's Space</h4>
            <p>A dedicated area within the museum designed specifically for children under 12.
              The space features hands-on activities, workshops, and educational programs —
              cultivating an early appreciation for the arts and encouraging creative thinking.</p>
          </div>

          <div className="moca-swot">
            {[
              { L: 'S', key: 'trengths', color: 'navy', items: ['Unique art collection','Historic buildings',"Children's art courses",'Family-friendly environment'] },
              { L: 'W', key: 'eaknesses', color: 'navy', items: ['Limited space','Unstable visitor flow','No works in collection','Many staff are volunteers'] },
              { L: 'O', key: 'pportunities', color: 'navy', items: ['Community collaboration','Art educational program','Art forum podcast','Expansion of digital platforms'] },
              { L: 'T', key: 'hreats', color: 'navy', items: ['Loss of foreign visitors','Economic uncertainty','Aging infrastructure','The rise of online exhibition'] },
            ].map((s, i) => (
              <div key={i} className="moca-swot-card">
                <div className="moca-swot-head">
                  <span className="moca-swot-letter">{s.L}</span>
                  <span className="moca-swot-rest">{s.key}</span>
                </div>
                <ul>{s.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>

        <div className="moca-discover-objective">
          <div>
            <h4>Objective</h4>
            <p>Designing a service to ensure a consistent number of customers while enhancing
              the emotional connection between customers and MoCA Taipei.</p>
          </div>
          <div className="moca-obj-split">
            <div>
              <div className="moca-eyebrow moca-eyebrow-amber">MoCA Taipei</div>
              <p>MoCA Taipei aims to <mark>attract new visitors and retain existing ones</mark> by
                offering engaging exhibitions and innovative programs.</p>
            </div>
            <div>
              <div className="moca-eyebrow moca-eyebrow-amber">Customers</div>
              <p>Customers seek <mark>meaningful experiences that build emotional connections.</mark>
                They value opportunities for learning through exhibitions and events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== DEFINE / PERSONA ============== */}
      <section className="moca-section moca-define">
        <header className="moca-head">
          <div className="moca-eyebrow moca-eyebrow-navy">03 / Define</div>
          <h2 className="moca-h2 moca-h2-navy">Define</h2>
          <p className="moca-head-lede">
            Target audience: <mark>parents who value their children's art education.</mark>
            Build for the parent-child pair and the loyal-customer cycle takes care of itself.
          </p>
        </header>

        <figure className="moca-figure">
          <img src="assets/covers/moca-persona.jpg?v=2" alt="Persona — Ya-Pei Chen, 35, mother of a 6-year-old who values children's art education" />
        </figure>

        <div className="moca-cycle-wrap">
          <div className="moca-cycle-copy">
            <div className="moca-eyebrow moca-eyebrow-navy">Customer cycle</div>
            <h3 className="moca-h3">The loyal-customer flywheel.</h3>
            <p>
              Potential customers (parents) bring their children to art activities, where the children
              form emotional connections. As they grow up, these children become loyal customers.
              Eventually, they may <mark>bring their own children to the activities</mark>, continuing
              the loyal customer cycle.
            </p>
          </div>
          <figure className="moca-figure moca-figure-cycle">
            <img src="assets/covers/moca-cycle.jpg?v=2" alt="Customer cycle diagram — potential customers become loyal customers" />
          </figure>
        </div>
      </section>

      {/* ============== KEY INSIGHTS ============== */}
      <section className="moca-section moca-insights">
        <div className="moca-eyebrow moca-eyebrow-navy">Key insights</div>
        <ol className="moca-insight-list">
          <li><mark>Parent-child customers can make children become loyal customers</mark> in the future.</li>
          <li>Loyal customers are those who have a <mark>relatively open mind</mark> towards art and are willing to accept the impact and reflection of contemporary art.</li>
          <li>The exhibition content is <mark>not suitable for children under 5 years old</mark>.</li>
        </ol>
      </section>

      {/* ============== FIELD / EMPATHY ============== */}
      <section className="moca-section moca-field">
        <header className="moca-head">
          <div className="moca-eyebrow moca-eyebrow-navy">04 / Empathy</div>
          <h2 className="moca-h2">Seeing through visitors' eyes.</h2>
          <p className="moca-head-lede">
            Field research at MoCA across two floors, then an empathy map summarising
            how visitors Think, Hear, See, and Say/Do during an exhibition.
          </p>
        </header>

        <figure className="moca-figure moca-figure-empathy">
          <img src="assets/covers/moca-empathy.jpg?v=2" alt="Empathy map — Think & Feel / See / Hear / Say & Do around the customer" />
        </figure>

        <div className="moca-pain-gain">
          <div className="moca-pg moca-pg-pain">
            <div className="moca-eyebrow moca-eyebrow-navy">Pain</div>
            <p>The overall atmosphere is too gloomy.</p>
          </div>
          <div className="moca-pg moca-pg-gain">
            <div className="moca-eyebrow moca-eyebrow-navy">Gain</div>
            <p>The flow of exhibition should be smoother.</p>
          </div>
        </div>
      </section>

      {/* ============== POV ============== */}
      <section className="moca-section moca-pov">
        <header className="moca-head">
          <div className="moca-eyebrow moca-eyebrow-navy">05 / Point of view</div>
          <h2 className="moca-h2 moca-h2-navy">Three factors. One family-friendly story.</h2>
          <p className="moca-head-lede">
            By targeting three factors, we create a family-friendly space that parents
            choose for quality time, children enjoy enough to request revisits, and families
            <mark> proudly share on social media</mark> — increasing visits, retention, and
            community visibility.
          </p>
        </header>

        <div className="moca-pov-cards">
          <PovCard tag="Store Entry Rate" title="Become an option for family time."
            body="Incorporate this activity into weekend family routine." icon="family" />
          <PovCard tag="Repurchase Rate" title="Leave a good time with their child."
            body="The child's feedback will influence whether the parents decide to visit again." icon="handshake" />
          <PovCard tag="Share Rate" title="Share child's output on social media."
            body="As more parents learn about the place, more families will participate." icon="share" />
        </div>
      </section>

      {/* ============== DELIVER — DESIGN FEATURES ============== */}
      <section className="moca-section moca-deliver">
        <header className="moca-head">
          <div className="moca-eyebrow moca-eyebrow-navy">06 / Deliver</div>
          <h2 className="moca-h2 moca-h2-navy">Deliver — service design.</h2>
          <div className="moca-strategy">
            <div className="moca-eyebrow moca-eyebrow-amber">Design strategy</div>
            <p>Enhancing emotional memory points and strengthening promotion to increase
              awareness of art courses, encouraging participation from both parents and children
              in art activities.</p>
            <div className="moca-arrow">
              <div className="moca-arrow-from">It is pity that the public don't know the valuable art courses</div>
              <div className="moca-arrow-line">→</div>
              <div className="moca-arrow-to">Attracting more parents and children to participate in the art activities</div>
            </div>
          </div>
        </header>

        <h3 className="moca-sub">Design features</h3>
        <div className="moca-features">
          <Feature icon="line" title="Line integrated promotion"
            body="Incorporating course promotion and notifications to improve participation rates." />
          <Feature icon="curation" title="Children's curation course"
            body="Facilitating parent-child interaction while teaching children space-planning skills." />
          <Feature icon="exhibit" title="Children's artworks exhibition"
            body="Providing opportunities for children to exhibit their own artworks in the museum." />
          <Feature icon="cert" title="Certificate of participation"
            body="Children acquire a sense of accomplishment and leave emotional memory points." />
        </div>
      </section>

      {/* ============== VISUAL ============== */}
      <section className="moca-section moca-visual">
        <header className="moca-head">
          <div className="moca-eyebrow moca-eyebrow-navy">Visual identity</div>
          <h2 className="moca-h2 moca-h2-navy">小玩藝策展趣 — Curated Exhibits Adventure.</h2>
          <p className="moca-head-lede">
            A child-like wordmark, a cream-amber-navy palette, and a participation kit
            (artwork storage box · exhibition certificate · invitation card) that children
            can bring home as a souvenir.
          </p>
        </header>
        <figure className="moca-figure moca-figure-visual">
          <img src="assets/covers/moca-visual.jpg?v=2" alt="Visual identity — logo, color scheme, font, and participation kit" />
        </figure>
      </section>

      {/* ============== DESIGNED CJM STRIP ============== */}
      <section className="moca-section moca-cjm">
        <header className="moca-head">
          <div className="moca-eyebrow moca-eyebrow-navy">07 / Journey</div>
          <h2 className="moca-h2">CJM of designed service.</h2>
          <p className="moca-head-lede">
            The interactive experience for a children's artworks exhibition — from
            <mark> event reminders, to creating artwork, curation course, and earning a
              participation certificate.</mark> Child-centric engagement, end-to-end.
          </p>
        </header>

        <figure className="moca-figure moca-figure-cjm">
          <img src="assets/covers/moca-cjm-before.jpg?v=2" alt="Existing CJM — Before entering MoCA, Joining activity, Attending exhibition, After leaving" />
          <figcaption>Existing CJM · opportunity points identified across four stages</figcaption>
        </figure>

        <figure className="moca-figure moca-figure-cjm">
          <img src="assets/covers/moca-cjm-after.jpg?v=2" alt="Designed service CJM — 7 stages from receiving the event reminder to obtaining the participation certificate" />
          <figcaption>Designed service CJM · 7 stages from event reminder to participation certificate</figcaption>
        </figure>

        <figure className="moca-figure moca-figure-cjm">
          <img src="assets/covers/moca-blueprint.jpg?v=2" alt="Service blueprint — front-of-stage, back-of-stage, and support processes with failure, waiting, and decision points" />
          <figcaption>Service blueprint · front/back-of-stage interactions with failure, waiting, and decision points</figcaption>
        </figure>
      </section>

      {/* ============== TESTING ============== */}
      <section className="moca-section moca-testing">
        <div className="moca-testing-grid">
          <div>
            <div className="moca-eyebrow moca-eyebrow-amber">Testing feedback from</div>
            <h3 className="moca-h3">Target audiences</h3>

            <div className="moca-feedback-card">
              <FeedbackRow icon="line"
                title="Adding LINE's Tag function into promotion"
                body="LINE's tag function can more accurately promote activities of interest based on personal habits." />
              <FeedbackRow icon="curation"
                title="Children's curation course helps them learn more"
                body="The class can help children know how to present their artworks, learning the spirit of curatorship." />
              <FeedbackRow icon="exhibit"
                title="Children's exhibition can attract more visitors"
                body="Since there is an exhibition of artworks, I would like to invite relatives and friends to watch it." />
              <FeedbackRow icon="cert"
                title="The certificates serve as an achievement"
                body="Give parents and children a sense of achievement and also be regarded as a souvenir." />
            </div>

            <div className="moca-eyebrow moca-eyebrow-amber" style={{ marginTop: 32 }}>Testing feedback from</div>
            <h3 className="moca-h3">Staff of MoCA</h3>
            <blockquote className="moca-staff-quote">
              <span className="moca-qmark">“</span>
              The parent-child group is what we have always hoped to cultivate in depth.
              Through this process, it can indeed expose the museum's resources to a greater extent.
              <span className="moca-qmark moca-qmark-close">”</span>
            </blockquote>
          </div>

          <div>
            <h3 className="moca-h3">Goals achieved</h3>
            <p>Through service design, we achieved our objectives by attracting more customers
              and fostering loyalty, while also building <mark>emotional connections through
              parent-child interaction, promoting children's art education, and creating lasting
              memories.</mark></p>

            <div className="moca-goals-split">
              <div>
                <div className="moca-eyebrow moca-eyebrow-amber">MoCA Taipei</div>
                <ol>
                  <li>Effective promotion to Target Audiences</li>
                  <li>Building a customer cycle</li>
                  <li>Acquiring more loyal customers</li>
                </ol>
              </div>
              <div>
                <div className="moca-eyebrow moca-eyebrow-amber">Customers</div>
                <ol>
                  <li>Fostering parent-child interaction</li>
                  <li>Promoting children's art education</li>
                  <li>Creating emotional memories</li>
                </ol>
              </div>
            </div>

            <div className="moca-evidence">
              <div className="moca-evidence-left">
                <div className="moca-evidence-card">
                  <div className="moca-evidence-label">Children's artworks exhibition</div>
                  <img src="assets/covers/moca-exhibit.jpg?v=2" alt="Children's artworks exhibition" />
                </div>
                <div className="moca-evidence-card">
                  <div className="moca-evidence-label">Present a demo to the director of MoCA</div>
                  <img src="assets/covers/moca-demo.jpg?v=2" alt="Presenting to MoCA director" />
                </div>
              </div>
              <div className="moca-evidence-card moca-evidence-award">
                <div className="moca-evidence-label">Bronze Award</div>
                <img src="assets/covers/moca-award.jpg?v=2" alt="Bronze Award certificate" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== NAV ============== */}
      <nav className="moca-nav">
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

/* ===== sub-components ===== */

function TraitBar({ left, right, pos }) {
  return (
    <div className="moca-trait-row">
      <span className="moca-trait-l">{left}</span>
      <div className="moca-trait-bar">
        <div className="moca-trait-dot" style={{ left: `calc(${pos * 100}% - 6px)` }} />
      </div>
      <span className="moca-trait-r">{right}</span>
    </div>
  );
}

function DoubleDiamond() {
  // Two diamonds — Research (navy) and Design (amber)
  return (
    <div className="moca-dd">
      <div className="moca-dd-phase moca-dd-research">
        <div className="moca-dd-phase-label">
          <span className="moca-dd-phase-num">01</span>
          <span className="moca-dd-phase-name">Research</span>
        </div>
        <div className="moca-dd-diamonds">
          <Diamond color="#364F92" title="Discover"
            items={['Desk Research','Field Research','In-depth Interview','Empathy Map','MOT']} />
          <Diamond color="#364F92" title="Define"
            items={['Persona','Customer Cycle','CJM Analysis','Point of View']} />
        </div>
      </div>
      <div className="moca-dd-phase moca-dd-design">
        <div className="moca-dd-phase-label">
          <span className="moca-dd-phase-num moca-dd-phase-num-amber">02</span>
          <span className="moca-dd-phase-name">Design</span>
        </div>
        <div className="moca-dd-diamonds">
          <Diamond color="#EEB94D" title="Ideate" items={['Ideation Process','Design Features']} />
          <Diamond color="#EEB94D" title="Deliver" items={['CJM of Designed Service','Service Blueprint','Testing']} />
        </div>
      </div>
    </div>
  );
}

function Diamond({ color, title, items }) {
  return (
    <div className="moca-diamond" style={{ '--dc': color }}>
      <svg viewBox="0 0 160 220" className="moca-diamond-svg" aria-hidden="true">
        <polygon points="80,6 154,110 80,214 6,110" fill="none" stroke={color} strokeWidth="2"/>
      </svg>
      <div className="moca-diamond-content">
        <div className="moca-diamond-title">{title}</div>
        <ul>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>
      </div>
    </div>
  );
}

function CustomerCycle() {
  return (
    <div className="moca-cycle">
      <div className="moca-eyebrow moca-eyebrow-navy">Customer cycle</div>
      <p className="moca-head-lede">
        Potential customers (parents) bring their children to art activities, where the children
        form emotional connections. As they grow up, these children become loyal customers.
        Eventually, they may <mark>bring their own children to the activities</mark>, continuing
        the loyal customer cycle.
      </p>

      <div className="moca-cycle-diagram">
        <CycleNode label="Potential" sub="Customers" face="mom" pos="tl" />
        <CycleNode label="Potential" sub="Customers" face="mom2" pos="tr" />
        <CycleNode label="Loyal" sub="Customers" face="son" pos="bl" />
        <CycleNode label="Loyal" sub="Customers" face="dad" pos="br" />
        <svg className="moca-cycle-arrows" viewBox="0 0 600 260" aria-hidden="true">
          {/* top arrow */}
          <path d="M 150 48 L 450 48" fill="none" stroke="#EEB94D" strokeWidth="2" markerEnd="url(#arrA)"/>
          {/* right arrow down */}
          <path d="M 510 90 L 510 180" fill="none" stroke="#EEB94D" strokeWidth="2" markerEnd="url(#arrA)"/>
          {/* bottom arrow */}
          <path d="M 450 222 L 150 222" fill="none" stroke="#EEB94D" strokeWidth="2" markerEnd="url(#arrA)"/>
          {/* left arrow up */}
          <path d="M 90 180 L 90 90" fill="none" stroke="#EEB94D" strokeWidth="2" markerEnd="url(#arrA)"/>
          <defs>
            <marker id="arrA" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 z" fill="#EEB94D" />
            </marker>
          </defs>
          <text x="300" y="38" textAnchor="middle" fontSize="11" fill="#6f6f6f" fontFamily="IBM Plex Mono">Parents share with one another</text>
          <text x="300" y="240" textAnchor="middle" fontSize="11" fill="#6f6f6f" fontFamily="IBM Plex Mono">Parents bring their children to art activities</text>
          <text x="540" y="135" textAnchor="middle" fontSize="11" fill="#6f6f6f" fontFamily="IBM Plex Mono" transform="rotate(90,540,135)">Grow up and become parents</text>
          <text x="60" y="135" textAnchor="middle" fontSize="11" fill="#6f6f6f" fontFamily="IBM Plex Mono" transform="rotate(-90,60,135)">Children create emotional connection</text>
        </svg>
      </div>
    </div>
  );
}

function CycleNode({ label, sub, face, pos }) {
  return (
    <div className={`moca-cycle-node moca-cycle-${pos}`}>
      <div className="moca-cycle-face" data-face={face}>
        <Face type={face} />
      </div>
      <div className="moca-cycle-lbl">
        <div>{label}</div><div className="moca-cycle-lbl-sub">{sub}</div>
      </div>
    </div>
  );
}

function Face({ type }) {
  // super-simple avatar illustrations
  const skin = '#f7dfb5';
  if (type === 'mom') return (
    <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="#EEB94D"/>
      <circle cx="30" cy="26" r="12" fill={skin}/><path d="M10 60 C14 44, 46 44, 50 60 Z" fill="#F2AC4E"/>
      <path d="M18 20 Q30 10 42 20 Q38 16 30 16 Q22 16 18 20" fill="#6b3a1a"/></svg>);
  if (type === 'mom2') return (
    <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="#EEB94D"/>
      <circle cx="30" cy="26" r="12" fill={skin}/><path d="M10 60 C14 44, 46 44, 50 60 Z" fill="#D96B44"/>
      <path d="M16 18 Q30 8 44 18 L44 28 Q40 22 30 22 Q20 22 16 28 Z" fill="#a34a1a"/></svg>);
  if (type === 'dad') return (
    <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="#364F92"/>
      <circle cx="30" cy="26" r="12" fill={skin}/><path d="M10 60 C14 44, 46 44, 50 60 Z" fill="#2a3a6f"/>
      <path d="M20 20 Q30 14 40 20 L40 24 Q30 20 20 24 Z" fill="#1f1f1f"/></svg>);
  return ( // son
    <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="#364F92"/>
      <circle cx="30" cy="26" r="12" fill={skin}/><path d="M10 60 C14 44, 46 44, 50 60 Z" fill="#4d7bff"/>
      <path d="M20 20 Q30 14 40 20 L40 22 Q30 18 20 22 Z" fill="#3a2410"/></svg>);
}

function EmpathyMap() {
  return (
    <div className="moca-empathy">
      <div className="moca-empathy-quad tl">
        <div className="moca-empathy-h">Think &amp; Feel?</div>
        <p>The movement flow is bad, and it is easy to be blocked.</p>
        <p>The sound from other rooms is a bit disturbing.</p>
        <p>The signs are not clear enough.</p>
      </div>
      <div className="moca-empathy-quad tr">
        <div className="moca-empathy-h">See?</div>
        <p>The rooms are so dark.</p>
        <p>Check-in area is not clearly marked.</p>
        <p>Group tour including many people.</p>
      </div>
      <div className="moca-empathy-quad bl">
        <div className="moca-empathy-h">Hear?</div>
        <p>The child said it was scary.</p>
        <p>Video sound from next door.</p>
        <p>Explanation by tour guide.</p>
      </div>
      <div className="moca-empathy-quad br">
        <div className="moca-empathy-h">Say &amp; Do?</div>
        <p>Participate in interactive works.</p>
        <p>Detour due to many people in a specific room.</p>
        <p>Walk again to visit rooms I didn't enter at first.</p>
      </div>
      <div className="moca-empathy-center" aria-hidden="true">
        <svg viewBox="0 0 160 80" width="110">
          <circle cx="80" cy="36" r="22" fill="#EEB94D"/>
          <circle cx="80" cy="32" r="10" fill="#fff"/>
          <rect x="50" y="56" width="60" height="16" rx="3" fill="#EEB94D"/>
          <text x="80" y="68" textAnchor="middle" fill="#000" fontSize="8" fontFamily="IBM Plex Mono" letterSpacing="1">CUSTOMER</text>
        </svg>
      </div>
      <svg className="moca-empathy-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="0" x2="100" y2="100" stroke="#8ca0cf" strokeWidth="0.3"/>
        <line x1="100" y1="0" x2="0" y2="100" stroke="#8ca0cf" strokeWidth="0.3"/>
      </svg>
    </div>
  );
}

function PovCard({ tag, title, body, icon }) {
  return (
    <div className="moca-pov-card">
      <span className="moca-pov-tag">{tag}</span>
      <div className="moca-pov-icon"><IconGlyph name={icon}/></div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

function Feature({ icon, title, body }) {
  return (
    <div className="moca-feature">
      <div className="moca-feature-icon"><IconGlyph name={icon} /></div>
      <div>
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
    </div>
  );
}

function FeedbackRow({ icon, title, body }) {
  return (
    <div className="moca-fb">
      <div className="moca-feature-icon"><IconGlyph name={icon} /></div>
      <div>
        <h6>{title}</h6>
        <p>{body}</p>
      </div>
    </div>
  );
}

function IconGlyph({ name }) {
  // Simple inline SVGs used throughout the PDF
  const stroke = '#364F92';
  const fill   = '#EEB94D';
  const props = { width: 28, height: 28, viewBox: '0 0 40 40', fill: 'none', stroke, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'line': return (
      <svg {...props}>
        <rect x="6" y="8" width="28" height="22" rx="6" fill={fill} stroke="#0f7d3b"/>
        <text x="20" y="24" textAnchor="middle" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="10" fill="#0f7d3b" stroke="none">LINE</text>
        <path d="M14 30 l-2 4 6 -4" fill={fill} stroke="#0f7d3b"/>
      </svg>);
    case 'curation': return (
      <svg {...props}>
        <rect x="6" y="10" width="28" height="20" rx="2"/>
        <circle cx="14" cy="18" r="2" fill={fill} stroke={fill}/>
        <path d="M6 26 l8 -6 6 4 6 -8 8 8"/>
      </svg>);
    case 'exhibit': return (
      <svg {...props}>
        <rect x="6" y="8" width="28" height="24" rx="2"/>
        <path d="M6 24 l8 -6 4 3 5 -5 11 10"/>
        <circle cx="14" cy="16" r="2" fill={fill} stroke={fill}/>
      </svg>);
    case 'cert': return (
      <svg {...props}>
        <rect x="6" y="6" width="28" height="22" rx="2"/>
        <circle cx="20" cy="16" r="4" fill={fill} stroke={fill}/>
        <path d="M16 26 l-2 8 6 -4 6 4 -2 -8"/>
      </svg>);
    case 'family': return (
      <svg {...props}>
        <circle cx="13" cy="14" r="4"/>
        <circle cx="27" cy="14" r="4"/>
        <circle cx="20" cy="26" r="3" fill={fill} stroke={fill}/>
        <path d="M7 28 C8 22, 18 22, 19 26"/>
        <path d="M21 26 C22 22, 32 22, 33 28"/>
      </svg>);
    case 'handshake': return (
      <svg {...props}>
        <path d="M4 20 l8 -6 8 6 -4 4 -6 -4"/>
        <path d="M36 20 l-8 -6 -8 6 4 4 6 -4"/>
        <path d="M14 24 l6 6 6 -6" fill={fill} stroke={fill}/>
      </svg>);
    case 'share': return (
      <svg {...props}>
        <rect x="8" y="10" width="24" height="20" rx="3"/>
        <path d="M14 18 h4 M14 22 h12 M14 26 h8"/>
        <circle cx="30" cy="12" r="4" fill={fill} stroke={fill}/>
        <text x="30" y="15" textAnchor="middle" fontSize="7" fontFamily="IBM Plex Sans" fontWeight="700" fill="#000" stroke="none">#</text>
      </svg>);
    default: return <svg {...props}><circle cx="20" cy="20" r="10" fill={fill}/></svg>;
  }
}

window.MocaPage = MocaPage;
