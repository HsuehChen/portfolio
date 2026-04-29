// Sections.jsx — Hero, About, Contact, CV, Footer

function Hero() {
  return (
    <section className="hero-album-wrap" id="home">
      <div className="hero-album-caption">
        <div className="hero-album-eyebrow">
          <span>Hsueh&nbsp;Chen</span>
          <span className="hero-album-sep">/</span>
          <span>Service, UI/UX &amp; game design</span>
        </div>
        <div className="hero-album-hint">
          <span><kbd>Hover</kbd> show</span>
          <span><kbd>Drag</kbd> pin</span>
          <span><kbd>Click</kbd> open</span>
        </div>
      </div>
      <div id="album" />
    </section>
  );
}

function About() {
  return (
    <section className="ps-section about-page" id="about" style={{ maxWidth: 980 }}>
      <div className="section-head">
        <div className="eyebrow">About</div>
      </div>

      {/* === Bio: photo + paragraphs === */}
      <div className="about-bio">
        <div className="about-bio-photo">
          <img src="assets/about-me.jpg" alt="Hsueh Chen — portrait under cherry blossoms in Stockholm, holding a Starbucks cup, wearing a black blazer over a striped shirt" />
        </div>
        <div className="about-bio-text">
          <p>
            <strong>Hsueh&nbsp;Chen — 薛晨</strong> is a UX/UI designer focused on
            human-centered design, mixed-reality navigation, and accessibility.
            He is currently a master&rsquo;s student in the{' '}
            <a href="https://www.kth.se/en/studies/master/interactive-media-technology" target="_blank" rel="noopener">
              Interactive Media Technology
            </a>{' '}programme at KTH Royal Institute of Technology, Stockholm. Before
            KTH, he was a UX/UI designer at{' '}
            <strong>AccuOrtho Co.</strong> for 3+ years, where he designed
            intra-operative MR navigation systems for total hip and total knee
            replacement surgery. He holds a bachelor&rsquo;s degree in Computer Science
            and Information Engineering from National Taiwan University of Science
            and Technology, with a focus on interaction design, and spent an
            exchange semester at <strong>Aalto University</strong> studying HCI.
          </p>
          <p>
            As a designer, Chen sees user experience as the place where empathy
            and engineering meet. He is drawn to design problems where small
            interaction decisions carry real consequence — surgical workflows
            where attention is finite, accessibility tools where every tap matters,
            and educational products where the user is still learning the rules.
            His practice pairs human-centered research — usability testing with
            10+ surgeons, contextual interviews, and field observation — with
            high-fidelity craft in Figma, Unity, and Swift.
          </p>
          <p>
            His work has been recognised by COMPUTEX (Taipei, 2025), the Frontier
            Innovation Award (Osaka, 2025), and Taiwan&rsquo;s National Innovation Award
            (2024). At KTH he is exploring multimodal interaction, sound in
            interaction, and human-centred technology for disability — with the
            goal of becoming an HCI researcher who builds for underserved
            communities and makes technology more accessible to every body.
          </p>
        </div>
      </div>

      {/* === Education === */}
      <h2 className="about-h">Education</h2>
      <div className="about-list">
        <div className="about-row">
          <div className="about-row-org">
            <strong>KTH Royal Institute of Technology</strong> &nbsp;Stockholm, Sweden
          </div>
          <div className="about-row-meta"><em>Aug. 2025 — Jun. 2027 (expected)</em></div>
          <div className="about-row-body">
            MSc in Interactive Media Technology<br/>
            Coursework: Multimodal Interaction and Interfaces, Human-Centered
            Technology for Disabilities.
          </div>
        </div>

        <div className="about-row">
          <div className="about-row-org">
            <strong>Aalto University, School of Science</strong> &nbsp;Espoo, Finland
          </div>
          <div className="about-row-meta"><em>Aug. 2023 — Dec. 2023</em></div>
          <div className="about-row-body">
            Exchange Semester — Human-Computer Interaction, User Interface
            Construction.
          </div>
        </div>

        <div className="about-row">
          <div className="about-row-org">
            <strong>National Taiwan University of Science and Technology</strong> &nbsp;Taipei, Taiwan
          </div>
          <div className="about-row-meta"><em>Sep. 2019 — Jun. 2024</em></div>
          <div className="about-row-body">
            BSc in Computer Science and Information Engineering<br/>
            Concentration: Interaction Design Programme.
          </div>
        </div>
      </div>

      {/* === Professional Experience === */}
      <h2 className="about-h">Professional Experience</h2>
      <div className="about-list">
        <div className="about-row">
          <div className="about-row-org">
            <strong>AccuOrtho Co.</strong> &nbsp;Taipei, Taiwan
          </div>
          <div className="about-row-meta">
            Design Technologist, <em>AccuKnee</em> &nbsp; · &nbsp; <em>Jun. 2025 — Jul. 2025</em>
          </div>
          <div className="about-row-body">
            Total Knee Replacement (TKA) MR Navigation System. Architected a
            field-centric MR interface that distributes critical alignment data
            across the surgeon&rsquo;s peripheral vision — reducing intra-operative
            system interaction time by over 50% and mitigating gaze redirection
            during critical surgical steps.
          </div>
        </div>

        <div className="about-row">
          <div className="about-row-org">
            <strong>AccuOrtho Co.</strong> &nbsp;Taipei, Taiwan
          </div>
          <div className="about-row-meta">
            UX/UI Designer, <em>AccuHip</em> &nbsp; · &nbsp; <em>Oct. 2022 — May 2025</em>
          </div>
          <div className="about-row-body">
            Total Hip Replacement (THA) MR Navigation System. Facilitated iterative
            usability testing with 10+ surgeons; designed high-fidelity spatial UI
            in Figma and refined interactive feedback in Unity. Translated
            surgical workflow research into shippable MR product design.
          </div>
        </div>

        <div className="about-row">
          <div className="about-row-org">
            <strong>International Game System Co.</strong> &nbsp;Taipei, Taiwan
          </div>
          <div className="about-row-meta">
            Backend Developer Intern &nbsp; · &nbsp; <em>Jun. 2022 — Feb. 2023</em>
          </div>
          <div className="about-row-body">
            Competitive Game Analysis System. Architected and implemented scalable
            API structures integrated with MongoDB, supporting an internal tool
            used by the gameplay design team.
          </div>
        </div>
      </div>

      {/* === Awards === */}
      <h2 className="about-h">Awards</h2>

      <h3 className="about-h-sub">Design &amp; Research Awards</h3>
      <ul className="about-bullets">
        <li><strong>Exhibited at COMPUTEX</strong> &nbsp;— MR Hip Replacement Surgery Navigation System &middot; TAITRA. <em>2025</em></li>
        <li><strong>Gold Award, Interactive Technology</strong> &nbsp;— Frontier Innovation Award, FC2025, Osaka. <em>2025</em></li>
        <li><strong>National Innovation Award</strong> &nbsp;— MR Hip Replacement Navigation System &middot; IBMI. <em>2024</em></li>
        <li><strong>Honorable Mention</strong> &nbsp;— Electric wheelchair controller, 30th Ergonomics Society of Taiwan (EST). <em>2023</em></li>
        <li><strong>Bronze Award</strong> &nbsp;— Museum service experience design with MoCA Taipei. <em>2023</em></li>
        <li><strong>Best Game Design &amp; Best Innovation</strong> &nbsp;— Wagyu Rush, 7th Innovation Game Design Competition. <em>2022</em></li>
      </ul>

      <h3 className="about-h-sub">Academic Awards</h3>
      <ul className="about-bullets">
        <li><strong>Two-time Academic Excellence Award</strong> &nbsp;— NTUST, Dept. of Computer Science and Information Engineering. <em>2022, 2023</em></li>
      </ul>

      {/* === Skills === */}
      <h2 className="about-h">Skills</h2>
      <div className="about-skills-flat">
        <p><strong>Core</strong> &nbsp;HCI, User-Centered Design, User Research, Usability Testing, Interaction Design, Mixed Reality Development, Surgical Workflow Design, Accessibility &amp; Inclusive Design.</p>
        <p><strong>Technical</strong> &nbsp;C++, C#, Python, JavaScript, TypeScript, Swift, Processing, p5.js, Arduino, MongoDB.</p>
        <p><strong>Design tools</strong> &nbsp;Figma, Unity, Miro, Adobe Illustrator, Webflow.</p>
        <p><strong>Deliverables</strong> &nbsp;Wireframing, Information Architecture, Prototyping, User Flows, User Journey Mapping, Design Systems.</p>
        <p><strong>Languages</strong> &nbsp;Mandarin (native) &middot; English (proficient) &middot; Swedish (basic) &middot; Finnish (basic).</p>
      </div>

      {/* === Contact === */}
      <h2 className="about-h">Contact</h2>
      <div className="about-contact-lines">
        <p className="about-contact-row">
          <span className="about-contact-label">Email</span>
          <a href="mailto:hsuehchen.sw@gmail.com">hsuehchen.sw@gmail.com</a>
        </p>
        <p className="about-contact-row">
          <span className="about-contact-label">Phone</span>
          <a href="tel:+46733057247">+46 733 057 247</a>
        </p>
        <p className="about-contact-row">
          <span className="about-contact-label">LinkedIn</span>
          <a href="https://www.linkedin.com/in/hsuehchen" target="_blank" rel="noopener">linkedin.com/in/hsuehchen</a>
        </p>
      </div>

      {/* === CV === */}
      <h2 className="about-h">CV</h2>
      <p className="about-contact-line">
        <a href="assets/CV_chen-hsueh.pdf" target="_blank" rel="noopener">View / Download CV (PDF)</a>
      </p>
    </section>
  );
}

function CV() {
  const pdf = 'assets/CV_chen-hsueh.pdf';
  return (
    <section className="ps-section" id="cv" style={{maxWidth: 1100}}>
      <div className="section-head">
        <div className="eyebrow">CV</div>
        <div className="cv-actions">
          <a className="cv-download" href={pdf} target="_blank" rel="noopener">
            <img src="assets/icons/launch.svg" alt=""/><span>Open in new tab</span>
          </a>
          <a className="cv-download cv-download-primary" href={pdf} download>
            <img src="assets/icons/download.svg" alt=""/><span>Download PDF</span>
          </a>
        </div>
      </div>
      <div className="cv-pdf-wrap">
        <iframe className="cv-pdf-frame" src={pdf + '#view=FitH'} title="Hsueh Chen — CV"/>
      </div>
      <p className="cv-fallback">
        Can&rsquo;t see the PDF? <a href={pdf} target="_blank" rel="noopener">Open it directly</a>.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="ps-section ps-section-sm" id="contact">
      <div className="section-head">
        <div className="eyebrow">Contact</div>
        <h2>Say hi.</h2>
      </div>
      <div className="contact-grid">
        <div>
          <p style={{fontSize:16, lineHeight:1.6, color:'var(--fg2)', marginTop:0}}>
            I read everything. Best for new work, collaborations, or a chat about
            service design and game mechanics.
          </p>
        </div>
        <div className="contact-list">
          <a className="contact-link" href="mailto:hsuehchen.sw@gmail.com">
            <img src="assets/icons/email.svg" alt=""/><span>hsuehchen.sw@gmail.com</span>
          </a>
          <a className="contact-link" href="tel:+46733057247">
            <img src="assets/icons/email.svg" alt=""/><span>+46 733 057 247 &middot; Stockholm</span>
          </a>
          <a className="contact-link" href="#">
            <img src="assets/icons/logo-linkedin.svg" alt=""/><span>linkedin.com/in/hsuehchen</span>
          </a>
          <a className="contact-link" href="#">
            <img src="assets/icons/logo-github.svg" alt=""/><span>github.com/hsuehchen</span>
          </a>
          <a className="contact-link" href="uploads/Portfolio.pdf" target="_blank" rel="noopener">
            <img src="assets/icons/download.svg" alt=""/><span>Download portfolio (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ps-footer">
      <div>
        <div className="eyebrow">Colophon</div>
        <p>Built on IBM Plex and Carbon design tokens.
           Motion by Framer Motion. Layout respects <span>prefers-reduced-motion</span>.</p>
      </div>
      <div>
        <div className="eyebrow">Elsewhere</div>
        <a href="#"><img src="assets/icons/logo-github.svg" alt=""/><span>github</span></a>
        <a href="#"><img src="assets/icons/logo-linkedin.svg" alt=""/><span>linkedin</span></a>
        <a href="mailto:hsuehchen.sw@gmail.com"><img src="assets/icons/email.svg" alt=""/><span>email</span></a>
      </div>
      <div>
        <div className="eyebrow">Last updated</div>
        <p>April 2026 &mdash; Stockholm</p>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, About, Contact, CV, Footer });
