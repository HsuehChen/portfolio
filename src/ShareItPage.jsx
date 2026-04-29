// ShareItPage.jsx — custom case study page for the Share it 教流趣 project.
// Palette: indigo #3331B7, amber #EEB94D, lilac #D0D5ED, mist #E8E8EE, peach #E3BAB6
// Font reference: Lato. Tone: teacher-facing product story with real PDF figures.

function ShareItPage({ project, onBack, onOpen, projects }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, [project?.id]);
  const idx = projects.findIndex(p => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="shareit">
      {/* ============== sticky breadcrumb ============== */}
      <div className="si-crumb">
        <div className="si-crumb-inner">
          <button type="button" onClick={onBack}>← Work</button>
          <span className="si-crumb-sep">/</span>
          <span className="si-crumb-cn">教流趣 Share it</span>
          <span className="si-crumb-sep">·</span>
          <span>UI/UX design</span>
          <span className="si-crumb-spacer" />
          <span className="si-crumb-meta">03 / 05 · Hsueh Chen</span>
        </div>
      </div>

      {/* ============== HERO ============== */}
      <section className="si-hero">
        <div className="si-hero-text">
          <div className="si-eyebrow">Case study · 03</div>
          <h1 className="si-hero-title">
            教流趣<span className="si-hero-title-en"> Share it</span>
          </h1>
          <div className="si-hero-rule" />
          <div className="si-hero-sub">Lesson Plan Sharing App Design</div>

          <dl className="si-hero-meta">
            <div><dt>Team</dt><dd>School Team Project · Team of 6</dd></div>
            <div><dt>Role</dt><dd>User Research · User Interview · Wireframe · Conceptualization · UI Design · User Testing</dd></div>
            <div><dt>Timeline</dt><dd>2022.02 — 2023.06 · 16 weeks</dd></div>
            <div><dt>Instructor</dt><dd>Hsin-Hui, Liao</dd></div>
          </dl>

          <p className="si-hero-brief">
            Share it is a platform designed for sharing teaching resources, providing a solution
            for teachers to prepare lessons efficiently. It helps address challenges such as
            inconsistent student progress by providing access to shared lesson plans. It also
            supports part-time teachers reducing preparation time, enhancing both teaching
            quality and enjoyment.
          </p>
        </div>

        <figure className="si-hero-figure">
          <img src="assets/covers/shareit-hero.png" alt="Share it — two phone mockups showing lesson plan discovery and personal profile, with 教流趣 Share It wordmark" />
        </figure>
      </section>

      {/* ============== AT A GLANCE ============== */}
      <section className="si-section si-glance">
        <div className="si-glance-grid">
          <div className="si-glance-cell">
            <div className="si-eyebrow si-eyebrow-amber">Problem</div>
            <h3>Teachers prepare alone.</h3>
            <p>Inconsistent student progress forces constant replanning. Part-time teachers have
              no staff room, no peer exchange, and resources scattered across Facebook groups,
              LINE chats, and personal drives.</p>
          </div>
          <div className="si-glance-cell">
            <div className="si-eyebrow si-eyebrow-amber">Insight</div>
            <h3>Stand on shoulders.</h3>
            <p>Referencing others' experiences in advance lets teachers adapt faster. A shared
              library closes the preparation gap and turns lesson-making into a collaborative
              practice.</p>
          </div>
          <div className="si-glance-cell">
            <div className="si-eyebrow si-eyebrow-amber">Outcome</div>
            <h3>Three feature pillars.</h3>
            <p>Integrated lesson library, experience-sharing feed, and a personal profile to
              save and categorize — tested with experienced teachers, interns, trainees, and
              cram-school TAs.</p>
          </div>
        </div>
      </section>

      {/* ============== DESIGN CONCEPT ============== */}
      <section className="si-section">
        <header className="si-head">
          <div className="si-eyebrow si-eyebrow-indigo">01 / Design concept</div>
          <h2 className="si-h2">
            Maximize the sharing of teaching resources —<br/>
            Prepare lessons by standing on the shoulders of teachers!
          </h2>
        </header>

        <div className="si-concept">
          <div className="si-concept-copy">
            <p>
              Teachers often <mark>encounter students in their classes who fall behind, causing
              adjustments to the teaching pace</mark> or unexpected challenges that deviate from
              the original plan. By referencing others' experiences in advance and utilizing
              online resources, these students can be encouraged to self-study at home, helping
              address the learning gap in their levels.
            </p>
            <p>
              For many part-time teachers who have other jobs, there are limited opportunities
              for peer interaction and attending workshops with experienced teachers. This
              platform allows them to <mark>explore lesson plans and teaching experiences shared
              by others or access ready-to-use materials</mark>, saving preparation time and
              supporting their teaching objectives.
            </p>
            <p>
              Furthermore, this platform fosters a collaborative community where teachers can
              <mark> share best practices and seek advice from their peers.</mark> By connecting
              educators, it enhances professional development and enriches the learning experience
              for students.
            </p>
          </div>
          <figure className="si-figure si-figure-concept">
            <img src="assets/covers/shareit-concept-student.png" alt="A child resting on a desk during class with notebook and binder beside him" />
            <img src="assets/covers/shareit-concept-teacher.png" alt="A teacher pausing at a pinboard, organising lesson ideas across charts and notes" />
          </figure>
        </div>
      </section>

      {/* ============== RESEARCH — PERSONAS ============== */}
      <section className="si-section si-research">
        <header className="si-head">
          <div className="si-eyebrow si-eyebrow-indigo">02 / Research</div>
          <h2 className="si-h2">Five perspectives on teaching.</h2>
          <p className="si-head-lede">
            To understand diverse perspectives on teaching challenges and resource sharing, we
            interviewed educators, teacher trainees, and teaching assistants. This research
            delves into their unique experiences and challenges, inspiring a design solution
            that <mark>fosters meaningful collaboration in teaching.</mark>
          </p>
        </header>

        <figure className="si-figure">
          <img src="assets/covers/shareit-personas.jpg" alt="Five persona cards — Olivia, Winny, Dustin, Olivia, Karl — across teacher, student, and TA roles, with an interview analysis card summarising experienced teachers, intern teachers, teacher trainees, and cram-school TAs" />
        </figure>
      </section>

      {/* ============== CARD SORTING & FOUR STAGES ============== */}
      <section className="si-section si-cardsort">
        <header className="si-head">
          <div className="si-eyebrow si-eyebrow-indigo">03 / Synthesis</div>
          <h2 className="si-h2">Card sorting → four stages.</h2>
          <p className="si-head-lede">
            We extracted key information from interview transcripts and consolidated concepts
            through laddering analysis, identifying pain points and insights across the
            educational process — <mark>separated into four stages.</mark>
          </p>
        </header>

        <figure className="si-figure">
          <img src="assets/covers/shareit-cardsort.jpg" alt="Card sorting artifacts on the left — three grouped sticky-note columns — and a four-stage pain/insights diagram on the right covering pre-class preparation, in-class execution, post-class discussion, and outside-class sharing" />
        </figure>

        <div className="si-pillars">
          {[
            { n: '01', t: 'Pre-class Preparation' },
            { n: '02', t: 'In-class Execution' },
            { n: '03', t: 'Post-class Discussion' },
            { n: '04', t: 'Outside-class Sharing' },
          ].map(s => (
            <div key={s.n} className="si-pillar">
              <span className="si-pillar-num">{s.n}</span>
              <span className="si-pillar-t">{s.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============== DESIGN FEATURES + VISUAL ============== */}
      <section className="si-section si-deliver">
        <header className="si-head">
          <div className="si-eyebrow si-eyebrow-indigo">04 / Deliver</div>
          <h2 className="si-h2">Design features & visual identity.</h2>
          <p className="si-head-lede">
            Three design features addressing the four-stage pain points, and a visual system
            built around the dialogue-box to carry the concept of interactive exchange.
          </p>
        </header>

        <figure className="si-figure">
          <img src="assets/covers/shareit-features.jpg" alt="Design Features card listing three feature pillars, a Logic Flow diagram, and a Visual identity card showing the Share It logo with fonts (Lato) and the color scheme #3331B7, #EEB94D, #D0D5ED, #E8E8EE, #E3BAB6" />
        </figure>
      </section>

      {/* ============== FEATURE 1 — EXPLORE LESSON PLANS ============== */}
      <section className="si-section si-feature">
        <div className="si-feature-grid">
          <div className="si-feature-copy">
            <div className="si-eyebrow si-eyebrow-indigo">Feature 01</div>
            <h3 className="si-h3">Explore Lesson Plans</h3>
            <p>
              Browse lesson plans using <mark>filters like subject, grade level, and class size.</mark>
              Users can quickly find relevant plans that match their teaching needs.
            </p>
            <p>
              View detailed information about each lesson plan, including objectives, structure,
              and materials. Comment or provide reviews on specific plans, fostering a
              collaborative environment.
            </p>
          </div>
          <figure className="si-figure si-figure-feature">
            <img src="assets/covers/shareit-lessonplans.jpg" alt="Three phone screens — recommended lesson plans list with filters, a lesson plan detail view with whiteboard image, and a comments section with replies and reactions" />
          </figure>
        </div>
      </section>

      {/* ============== FEATURE 2 + 3 — EXPERIENCE SHARING + PROFILE ============== */}
      <section className="si-section si-feature">
        <div className="si-feature-grid">
          <div className="si-feature-copy">
            <div className="si-eyebrow si-eyebrow-indigo">Feature 02 · 03</div>
            <h3 className="si-h3">Experience Sharing & Personal Profile</h3>
            <p>
              A platform where <mark>non-formal educators can share and exchange teaching
              experiences,</mark> encouraging a relaxed, open dialogue to foster knowledge
              sharing outside of structured lesson plans.
            </p>
            <p>
              Users can also <mark>organize their lesson plans, posts, and saved content,</mark>
              making it easier to manage their teaching resources and track their contributions.
              Save and categorize lesson plans for quick retrieval.
            </p>
          </div>
          <figure className="si-figure si-figure-feature">
            <img src="assets/covers/shareit-experience.jpg" alt="Three phone screens — an experience-sharing feed with teacher posts and thumbnails, a personal profile showing my lesson plans list with a tooltip 'The lesson plan is still editing.', and a saved collections tab with a tooltip about quick retrieval" />
          </figure>
        </div>
      </section>

      {/* ============== OUTCOME ============== */}
      <section className="si-section si-outcome">
        <header className="si-head">
          <div className="si-eyebrow si-eyebrow-indigo">05 / Outcome</div>
          <h2 className="si-h2">What the platform delivers.</h2>
        </header>
        <div className="si-outcome-grid">
          <div className="si-outcome-card">
            <h4>Integration of Teaching Resources</h4>
            <p><mark>Organize shared lesson plans into detailed categories</mark> to better align
              with users' needs for reference resources, such as subject, number of students,
              and duration.</p>
          </div>
          <div className="si-outcome-card">
            <h4>Sharing & Viewing Teaching Experiences</h4>
            <p>By reviewing others' lesson plans, teachers can anticipate potential issues and
              make adjustments to their own teaching plans in advance. Lesson plan sharing can
              <mark> include various media formats,</mark> such as videos to aid students in
              post-class learning.</p>
          </div>
          <div className="si-outcome-card">
            <h4>A Platform for Open Exchange</h4>
            <p><mark>Non-formal teachers can also use this platform to share teaching
              experiences.</mark> Users can leave comments or share their evaluations after
              applying a particular lesson plan.</p>
          </div>
        </div>
      </section>

      {/* ============== NAV ============== */}
      <nav className="si-nav">
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

window.ShareItPage = ShareItPage;
