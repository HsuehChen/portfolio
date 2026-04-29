// TapTaipeiPage.jsx — case study built from the user's pre-designed
// website-version frames. The frames already encode all typography,
// layout and palette (MRT blue + accent colours), so this page is a
// vertical image stack with the standard sticky breadcrumb + footer nav.

function TapTaipeiPage({ project, projects, onBack, onOpen }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, [project?.id]);
  const idx = projects.findIndex(p => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  // narrative order matches the PDF/website flow:
  //   hero → context → process → discover → define → develop → deliver → reflection
  // (filenames don't match content because the upload order ≠ narrative order;
  //  this maps each slot to the file whose actual content fits.)
  const frames = [
    // 1 — hero
    { src: 'assets/covers/tap-18-ui-commute.png',        alt: 'Tap Taipei — Taipei Metro App Redesign hero with two iPhone mockups, project tags and metadata', className: 'tt-hero' },
    // 2 — background + impact
    { src: 'assets/covers/tap-20-ui-genie.png',          alt: 'Background and Impact — context for the hackathon and what the redesign delivered', style: { marginTop: '-40px', marginBottom: '-40px' } },
    // 3 — design process (Double Diamond)
    { src: 'assets/covers/tap-22-learned.png',           alt: 'Design Process — Double Diamond with Discover, Define, Develop, Deliver phase cards over MRT line graphics', style: { marginTop: '-90px' } },
    // 4 — Discovery / IA
    { src: 'assets/covers/tap-02-background.png',        alt: 'Discovery — Information Architecture organisation of the existing app, with three primary categories' },
    // 5 — Competitive analysis
    { src: 'assets/covers/tap-05-competitive.png',       alt: 'Competitive analysis comparing Google Maps, KakaoMetro, DOT tickets and Metro Taipei across navigation, accessibility and trip planning' },
    // 6 — App store reviews
    { src: 'assets/covers/tap-04-ia.png',                alt: 'App Store review content analysis — overwhelming UI, time-consuming workflow, scattered tourist information' },
    // 7 — Usability testing of original
    { src: 'assets/covers/tap-03-process.png',           alt: 'Usability testing of the original app — tasks for daily commuters, tourists and accessibility users with quotes' },
    // 8 — User interview
    { src: 'assets/covers/tap-06-reviews.png',           alt: 'User interview — six participants across three user groups: daily commuters, tourists, accessible passengers' },
    // 9 — Define / Affinity diagram
    { src: 'assets/covers/tap-08-interview.png',         alt: 'Define — Affinity diagram on FigJam consolidating ten insights and three main themes' },
    // 10 — Insight 1
    { src: 'assets/covers/tap-09-affinity.png',          alt: 'Insight 1 — Prioritize Essential Functions: MRT map, arrival times, travel time between stations on the homepage' },
    // 11 — Insight 2
    { src: 'assets/covers/tap-10-insight1.png',          alt: 'Insight 2 — Missing but Highly Needed Features: nearest station navigation, current train position, clear exit information, other transport, last-train info' },
    // 12 — Insight 3
    { src: 'assets/covers/tap-11-insight2.png',          alt: 'Insight 3 — Users want cleaner IA and a more appealing UI, with playful functions' },
    // 13 — Persona
    { src: 'assets/covers/tap-12-insight3.png',          alt: 'Personas — Jason, Hazel and Mei representing daily commuter, tourist and accessible passenger with goals and pain points' },
    // 14 — How might we
    { src: 'assets/covers/tap-13-persona.png',           alt: 'How might we questions framing the redesign opportunity' },
    // 15 — Develop / Sketches
    { src: 'assets/covers/tap-14-hmw.png',               alt: 'Develop — Brainstorm sketches for tourist theme map flow and AI chatbot conversation design' },
    // 16 — Wireframes
    { src: 'assets/covers/tap-15-sketches.png',          alt: 'Wireframes — three explorations: transportation navigation flow, MRT tourist theme map, AI chatbot inspiring trip planner', className: 'tt-bleed' },
    // 17 — Deliver / Prototype & test
    { src: 'assets/covers/tap-16-wireframes.png',        alt: 'Deliver — prototype and usability test, tasks and key quotes from daily commuter, tourist and accessibility users' },
    // 18 — UI 1 Commute Navigation
    { src: 'assets/covers/tap-07-usability-original.png', alt: 'UI Design 1 — Commute Navigation: detailed itinerary, nearby exit recommendation, route recommendation, station details, real-time departures' },
    // 19 — UI 2 City Exploration Map
    { src: 'assets/covers/tap-19-ui-explore.png',        alt: 'UI Design 2 — City Exploration Map: theme filtering, attraction search and AI trip planning' },
    // 20 — UI 3 Metro Genie
    { src: 'assets/covers/tap-17-prototype-test.png',    alt: 'UI Design 3 — AI assistance, the Metro Genie chatbot generating trip mini-cards' },
    // 21 — UI 4 Accessibility
    { src: 'assets/covers/tap-21-ui-accessibility.png',  alt: 'UI Design 4 — Accessibility mode optimised for elevator/exit info and colourblind users' },
    // 22 — From inclusive to non-clusive (deep blue reflection)
    { src: 'assets/covers/tap-23-non-clusive.png',       alt: 'From inclusive to non-clusive — reflection on shifting from inclusive thinking to Non-clusive Design, with all designed screens floating against MRT-blue', className: 'tt-bleed-blue' }
  ];

  return (
    <article className="taptaipei">
      {/* sticky breadcrumb */}
      <div className="tt-crumb">
        <div className="tt-crumb-inner">
          <button type="button" onClick={onBack}>← Work</button>
          <span className="tt-crumb-sep">/</span>
          <span className="tt-crumb-cn">Tap Taipei</span>
          <span className="tt-crumb-sep">·</span>
          <span>Taipei Metro App Redesign</span>
          <span className="tt-crumb-spacer" />
          <span className="tt-crumb-meta">01 / 05 · 2025</span>
        </div>
      </div>

      {/* stitched image stack */}
      <div className="tt-stack">
        {frames.map((f, i) => (
          <figure
            key={i}
            className={`tt-frame ${f.className || ''}`.trim()}
            style={{ margin: 0 }}
          >
            <img src={f.src} alt={f.alt} loading={i < 2 ? 'eager' : 'lazy'} style={f.style} />
          </figure>
        ))}
      </div>

      {/* footer nav */}
      <nav className="tt-foot">
        <button type="button" onClick={onBack}>← Back to work</button>
        <button type="button" className="tt-foot-next" onClick={() => onOpen(next.id)}>
          Next · {next.title} →
        </button>
      </nav>
    </article>
  );
}

window.TapTaipeiPage = TapTaipeiPage;
