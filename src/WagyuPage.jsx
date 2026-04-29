// WagyuPage.jsx — bespoke case study page for the Wagyu Rush project.
// Palette: brown #83511E · cream #E4E1DC · lilac #D0D5ED · peach
// Mirrors the PDF booklet's warm cream/peach pages with a brown anchor.

function WagyuPage({ project, onBack, onOpen, projects }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, [project?.id]);
  const idx = projects.findIndex(p => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="wagyu">
      {/* ============== sticky breadcrumb ============== */}
      <div className="wg-crumb">
        <div className="wg-crumb-inner">
          <button type="button" onClick={onBack}>← Work</button>
          <span className="wg-crumb-sep">/</span>
          <span className="wg-crumb-cn">Wagyu Rush</span>
          <span className="wg-crumb-sep">·</span>
          <span>Game Design</span>
          <span className="wg-crumb-spacer" />
          <span className="wg-crumb-meta">04 / 05 · Hsueh Chen</span>
        </div>
      </div>

      {/* ============== HERO ============== */}
      <section className="wg-hero">
        <figure className="wg-hero-photo">
          <img src="assets/covers/wagyu-preview.png" alt="Wagyu Rush key art — pixel-art wagyu cow, big horns, and the title 'Wagyu Rush'" />
        </figure>

        <aside className="wg-hero-card">
          <div className="wg-eyebrow">Case study · 04</div>
          <h1 className="wg-hero-title">Wagyu Rush</h1>
          <div className="wg-hero-rule" />
          <div className="wg-hero-sub">Puzzle Game Design</div>

          <dl className="wg-hero-meta">
            <div><dt>Team</dt><dd>School Team Project · Team of 4 (ToBeDiff)</dd></div>
            <div><dt>Role</dt><dd>Conceptualization · Gameplay Design · UI Design · UI Construction</dd></div>
            <div><dt>Timeline</dt><dd>2021.09 — 2022.01 · 16 weeks</dd></div>
            <div><dt>Instructor</dt><dd>Wen-Kai, Tai</dd></div>
          </dl>

          <p className="wg-hero-brief">
            Our team members enjoy games that spark creativity, so we set out to create a unique
            puzzle experience for a like-minded audience. In <b>Wagyu Rush</b>, players step into
            the role of a Wagyu farm manager — guiding wagyu cattle to the truck and competing in
            the Wagyu bodybuilding contest. Along the way, players face various challenges that
            test their problem-solving skills, bringing a unique twist to classic puzzle games.
          </p>

          <div className="wg-hero-awards">
            <span className="wg-award-chip">🏆 Best Game Design Award</span>
            <span className="wg-award-chip">🏆 Best Innovation Award</span>
          </div>
        </aside>
      </section>

      {/* ============== AT A GLANCE ============== */}
      <section className="wg-section">
        <div className="wg-glance-grid">
          <div className="wg-glance-cell">
            <div className="wg-eyebrow wg-eyebrow-peach">Problem</div>
            <h3>Puzzle games feel familiar.</h3>
            <p>Most puzzle games rely on one core mechanic. We wanted to combine three proven
              ideas — sliding blocks, fixed-tile shifting, and path rotation — into a single
              fresh experience players had not seen before.</p>
          </div>
          <div className="wg-glance-cell">
            <div className="wg-eyebrow wg-eyebrow-peach">Insight</div>
            <h3>Cute keeps you in.</h3>
            <p>A nurturing village theme and pixel-art wagyu give the brain a soft place to land.
              Players relax with the world, then commit to the harder mechanics underneath.</p>
          </div>
          <div className="wg-glance-cell">
            <div className="wg-eyebrow wg-eyebrow-peach">Outcome</div>
            <h3>Two awards · 8 mechanics shipped.</h3>
            <p>Best Game Design and Best Innovation at the Innovation Design Competition. A full
              playable game with 8 levels, item systems, and a custom map editor for rapid
              level iteration.</p>
          </div>
        </div>
      </section>

      {/* ============== CONCEPTUALIZATION ============== */}
      <section className="wg-section">
        <header className="wg-head">
          <div className="wg-eyebrow">01 / Conceptualization</div>
          <h2 className="wg-h2">Conceptualization</h2>
          <p className="wg-head-lede">
            In the game ideation phase, I held a workshop and <mark>used the Innovation Matrix
            and the modified 6-3-5 Brainwriting method to generate ideas with both breadth and
            depth.</mark> This approach allowed us to explore a wide range of creative directions
            while diving deeply into specific concepts.
          </p>
        </header>

        <figure className="wg-concept-figure">
          <img src="assets/covers/wagyu-conceptualization.png" alt="Conceptualization — Innovation Matrix grid mapping puzzle / strategy / adventure / survival / collaboration / management ideas, and 4-3-5 Brainwriting worksheets" />
        </figure>

        <div className="wg-concept-callouts">
          <div>
            <div className="wg-eyebrow wg-eyebrow-peach">Divergent thinking</div>
            <h3 className="wg-h3">Innovation Matrix</h3>
            <p>The game elements were categorized into dimensions such as puzzle-solving,
              real-time strategy, adventure, survival, collaboration, and management. Through
              brainstorming sessions, we classified and combined these elements, ultimately
              voting on the most promising themes and mechanics.</p>
          </div>
          <div>
            <div className="wg-eyebrow wg-eyebrow-peach">In-depth exploration</div>
            <h3 className="wg-h3">4-3-5 Brainwriting Method</h3>
            <p>Using the 4-3-5 method (modified 6-3-5 method), our <mark>four team members
              generated 48 gameplay ideas in a short time.</mark> By building on and refining
              each other's ideas, we achieved an <mark>in-depth exploration of a single theme.</mark></p>
          </div>
        </div>
      </section>

      {/* ============== MECHANICS INSPIRATION ============== */}
      <section className="wg-section">
        <header className="wg-head">
          <div className="wg-eyebrow">02 / Mechanics</div>
          <h2 className="wg-h2 wg-h2-ink">Mechanics Inspiration</h2>
          <p className="wg-head-lede">
            <mark>Our game concept was inspired by three different games</mark> in the market.
            We combine the sliding mechanics of <b>2048</b>, the shifting blocks of
            <b> SolveThis</b>, and the path rotation of <b>Plumber</b> to create a unique
            puzzle experience that offers varied gameplay.
          </p>
        </header>

        <div className="wg-mech-cards">
          <MechCard
            icon={<SlideIcon />}
            title="Sliding Puzzle"
            body="Slide tiles up, down, left, or right to move them into the correct position." />
          <MechCard
            icon={<ShiftIcon />}
            title="Fixed Tile Shifting"
            body="Use stationary tiles to shift other tiles into the correct positions." />
          <MechCard
            icon={<RotateIcon />}
            title="Tile Rotation"
            body="Rotate tiles to connect pathways, allowing the cow to pass through." />
        </div>

        <div className="wg-mech-bigtext">
          <div>
            <div className="wg-eyebrow wg-eyebrow-peach">Brainstorming Output</div>
            <h3 className="wg-h3">From 48 ideas to a feature set.</h3>
            <p>Based on the 48 gameplay mechanics ideas, we conducted an internal vote to select
              staged gameplay features for a Wagyu Rush puzzle game. <mark>We categorized our
              brainstorming results into core puzzle mechanics and external mechanics.</mark>
              This brainstorming session helped us explore the potential of combining puzzle
              elements with a nurturing game from various perspectives, providing valuable
              inspiration and direction for the subsequent design implementation and game
              development.</p>
          </div>
          <div className="wg-mech-list">
            <div className="wg-mech-list-head">Core puzzle mechanics</div>
            <ol>
              <li><span><b>Night Levels:</b> Only areas near streetlights are illuminated, adding to the challenge.</span></li>
              <li><span><b>Daily Puzzle:</b> A new, difficult Wagyu-themed puzzle is available each day.</span></li>
              <li><span><b>Level Grading:</b> The Wagyu's grade is determined by the number of moves used to complete the level.</span></li>
              <li><span><b>Status Bar:</b> A sidebar displays information about the Wagyu's stamina.</span></li>
              <li><span><b>Hunger:</b> The Wagyu needs to graze in-game to replenish fullness; if it goes too long without eating, it may die.</span></li>
              <li><span><b>Random Dance:</b> The Wagyu may occasionally stand up and dance, triggered at random.</span></li>
              <li><span><b>Trap:</b> Bear traps appear on the ground, and getting caught decreases that Wagyu's stamina.</span></li>
            </ol>

            <div className="wg-mech-list-head" style={{ marginTop: 24 }}>External mechanics</div>
            <ol>
              <li><span><b>Move Tracking:</b> Records the number of moves the player takes to complete each level and shows the ideal number of moves.</span></li>
              <li><span><b>In-Game Purchases:</b> After winning a contest, players can buy new Wagyu appearances or upgrade the ranch.</span></li>
              <li><span><b>Breed Development:</b> Allows players to raise different Wagyu breeds, such as dairy cows, adding nurturing elements to the gameplay.</span></li>
            </ol>
            <div className="wg-mech-foot">*These are not the final game features</div>
          </div>
        </div>
      </section>

      {/* ============== GAMEPLAY ============== */}
      <section className="wg-section">
        <div className="wg-gameplay">
          <div>
            <div className="wg-eyebrow">03 / Gameplay</div>
            <h2 className="wg-h2 wg-h2-ink" style={{ fontSize: 42 }}>Gameplay Mechanics</h2>
            <p style={{ marginTop: 16 }}>
              The game's basic movement mechanics are similar to 2048, where all blocks shift
              in the direction controlled by the player. <mark>If there's a connected path in the
              direction the cow is facing, the cow will move to the furthest reachable point.</mark>
            </p>

            <h3 className="wg-h3" style={{ marginTop: 32, fontSize: 24, color: 'var(--brown)' }}>Game Objective</h3>
            <p>
              Players need to move blocks to help their Wagyu cow secure a ticket for a fitness
              competition, ensuring the cow maintains a healthy physique and doesn't lose weight
              from excessive movement. Ultimately, the goal is to guide the Wagyu cow onto a
              truck heading to the <b>Golden Wagyu Cup</b> competition.
            </p>
          </div>
          <figure className="wg-gameplay-figure">
            <img src="assets/covers/wagyu-gameplay.png" alt="Gameplay mechanics diagram — pressing the right arrow first shifts blocks, then the wagyu moves to the furthest reachable point" />
          </figure>
        </div>
      </section>

      {/* ============== AESTHETICS ============== */}
      <section className="wg-section">
        <header className="wg-head">
          <div className="wg-eyebrow">04 / Aesthetics</div>
          <h2 className="wg-h2 wg-h2-ink">Aesthetics Design</h2>
          <p className="wg-head-lede">
            With a village theme, we want to create an adorable experience for players, evoking
            a sense of relaxation. We use a <mark>pixel art style</mark> to capture this atmosphere.
          </p>
        </header>

        <div className="wg-aesthetics-card">
          <figure className="wg-aesthetics-figure">
            <img src="assets/covers/wagyu-aesthetics.png" alt="Wagyu Rush logo — pixelated font with horns and a nose ring" style={{ aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: '0% 18%' }} />
          </figure>
          <div>
            <div className="wg-eyebrow wg-eyebrow-peach">Logo & Color Scheme</div>
            <h3 className="wg-h3" style={{ marginBottom: 8 }}>Wagyu Rush wordmark.</h3>
            <p style={{ marginBottom: 8 }}>
              The logo combines pixelated font with Wagyu cow features, like horns and a nose
              ring, to reflect the game's pixel art style and create a playful, relaxing vibe.
            </p>
            <div className="wg-swatch-row">
              <div className="wg-swatch"><div className="wg-swatch-chip" style={{ background: '#83511E' }} /><span className="wg-swatch-hex">#83511E</span></div>
              <div className="wg-swatch"><div className="wg-swatch-chip" style={{ background: '#E4E1DC' }} /><span className="wg-swatch-hex">#E4E1DC</span></div>
              <div className="wg-swatch"><div className="wg-swatch-chip" style={{ background: '#D0D5ED' }} /><span className="wg-swatch-hex">#D0D5ED</span></div>
              <div className="wg-swatch"><div className="wg-swatch-chip" style={{ background: '#FFFFFF', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)' }} /><span className="wg-swatch-hex">#FFFFFF</span></div>
              <div className="wg-swatch"><div className="wg-swatch-chip" style={{ background: '#000000' }} /><span className="wg-swatch-hex">#000000</span></div>
            </div>
          </div>
        </div>

        <figure className="wg-views-figure">
          <img src="assets/covers/wagyu-aesthetics.png" alt="Tile design and item design — pixel-art tiles, items including haystack, portal, bear trap, ticket and headphones" style={{ objectPosition: 'center 75%', aspectRatio: '16 / 5', objectFit: 'cover' }} />
        </figure>

        <div className="wg-views-grid">
          <div>
            <div className="wg-eyebrow wg-eyebrow-peach">Tile Design</div>
            <p>The game features diverse road designs combined with rotating tiles, offering all
              the paths needed for the Wagyu to navigate through. Trees serve as fixed obstacles
              and won't move with the player's actions.</p>
          </div>
          <div>
            <div className="wg-eyebrow wg-eyebrow-peach">Item Design</div>
            <p>Various items are designed to enrich gameplay, such as cards that increase or
              decrease the Wagyu's fullness, affecting the game's final score. Other items
              include teleport gates and headphones (stop moving 3 steps), adding more
              difficulty and variety to the player's experience.</p>
          </div>
        </div>
      </section>

      {/* ============== GAMEPLAY VIEWS / MAP EDITOR ============== */}
      <section className="wg-section">
        <header className="wg-head">
          <div className="wg-eyebrow">05 / UI</div>
          <h2 className="wg-h2 wg-h2-ink">Gameplay View & Map Editor</h2>
          <p className="wg-head-lede">
            Two surfaces, one craft. The player view holds the level, target, fullness, and item
            descriptions; the editor lets us — and players — <mark>build and rotate levels in
            seconds.</mark>
          </p>
        </header>

        <figure className="wg-views-figure">
          <img src="assets/covers/wagyu-views.png" alt="Two screens — the gameplay view with a Haystack tooltip showing satiety information, and the Map Editor with right-click-to-rotate-the-tile callout" />
        </figure>

        <div className="wg-views-grid">
          <div>
            <h4 className="wg-h4">Gameplay View</h4>
            <p>In the main game screen, helpful information such as the current target,
              fullness of your Wagyu and descriptions of item functions are displayed to guide
              players.</p>
          </div>
          <div>
            <h4 className="wg-h4">Map Editor</h4>
            <p>After multiple iterations, we designed a system that not only improves the
              efficiency of map levels development and testing instead of using paper prototype
              but also <mark>allows players to intuitively create and edit levels through the
              map editor</mark>, providing a platform for innovation and creation.</p>
          </div>
        </div>
      </section>

      {/* ============== SCREENS GALLERY ============== */}
      <section className="wg-section">
        <div className="wg-screens">
          <div className="wg-screens-copy">
            <div className="wg-eyebrow">06 / Build</div>
            <h2>A relaxing and playful journey into the world of puzzles.</h2>
            <p>Eight worlds, multiple item types, a portal level, a rhythm-based stage, and a
              custom map editor — all wrapped in a cream-and-pixel aesthetic the team built
              from scratch.</p>
          </div>
          <figure className="wg-screens-figure">
            <img src="assets/covers/wagyu-screens.png" alt="Tilted gallery of Wagyu Rush in-game screens — title menu, world select, levels 1-1, 5-1, 6-8, map editor, rhythm, and trophy stage" />
          </figure>
        </div>
      </section>

      {/* ============== AWARD ============== */}
      <section className="wg-section">
        <header className="wg-head">
          <div className="wg-eyebrow">07 / Outcome</div>
          <h2 className="wg-h2 wg-h2-ink">Innovation Design Competition</h2>
        </header>

        <div className="wg-award">
          <div>
            <div className="wg-award-meta">
              <p style={{ fontSize: 16, color: 'var(--ink)', marginBottom: 6 }}><b>Game:</b> Wagyu Rush</p>
              <p style={{ fontSize: 16, color: 'var(--ink)', marginBottom: 16 }}><b>Team:</b> ToBeDiff</p>

              <div className="wg-eyebrow wg-eyebrow-peach" style={{ marginBottom: 6 }}>Awards</div>
              <ul>
                <li>Best Game Design Award</li>
                <li>Best Innovation Award</li>
              </ul>

              <div className="wg-eyebrow wg-eyebrow-peach" style={{ marginBottom: 6 }}>Highlights</div>
              <p style={{ marginBottom: 4 }}><b>Innovative Theme:</b> Combines casual, puzzle-solving, and strategy elements.</p>
              <p style={{ marginBottom: 0 }}><b>Unique Gameplay:</b> Original mechanics that balance fun and challenge.</p>
            </div>

            <div className="wg-feedback">
              <div className="wg-feedback-head">Judges' Feedback</div>
              <p className="wg-feedback-quote">
                Wagyu Rush demonstrates exceptional originality and execution, with an engaging
                theme and diverse gameplay mechanics that offer both enjoyment and challenge.
                The team's impressive design skills were evident in both their presentation
                and live demo.
              </p>
            </div>
          </div>

          <figure className="wg-award-figure">
            <img src="assets/covers/wagyu-award.png" alt="Team ToBeDiff at the Innovation Design Competition with two award certificates" />
          </figure>
        </div>
      </section>

      {/* ============== NAV ============== */}
      <nav className="wg-nav">
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

function MechCard({ icon, title, body }) {
  return (
    <div className="wg-mech-card">
      <div className="wg-mech-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

function SlideIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="14" width="12" height="12" fill="currentColor" />
      <path d="M20 4 L24 8 L16 8 Z" fill="currentColor"/>
      <path d="M20 36 L24 32 L16 32 Z" fill="currentColor"/>
      <path d="M4 20 L8 16 L8 24 Z" fill="currentColor"/>
      <path d="M36 20 L32 16 L32 24 Z" fill="currentColor"/>
    </svg>
  );
}
function ShiftIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="14" height="14" fill="currentColor" opacity="0.55"/>
      <rect x="20" y="20" width="14" height="14" fill="currentColor"/>
    </svg>
  );
}
function RotateIcon() {
  // Lucide-style RotateCw icon. Arc opens at top, filled triangle arrowhead
  // at the arc's terminus pointing in the direction of rotation.
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M21 12a9 9 0 1 1-3.51-7.13"
        stroke="currentColor" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="21 3 21 8 16 8"
        stroke="currentColor" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

window.WagyuPage = WagyuPage;
