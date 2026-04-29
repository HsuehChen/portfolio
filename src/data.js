// data.js — project data extracted from the portfolio PDF

window.PROJECTS = [
  {
    id: 'taptaipei',
    num: '01',
    title: 'Tap Taipei',
    subtitle: 'Taipei Metro app redesign',
    year: '2025',
    duration: '2025 · Hackathon',
    kind: 'UI/UX · Service',
    team: 'Team of 3, Hackathon',
    role: 'UX research \u00b7 Wireframe \u00b7 UI design \u00b7 Prototype \u00b7 Usability testing',
    instructor: '\u2014',
    cover: 'assets/covers/taptaipei-hero.png',
    coverPreview: 'assets/covers/taptaipei-hero.png',
    palette: ['#0079A9', '#4D2161', '#E0A41F', '#C54E2C'],
    summary: 'A redesign of Taiwan\u2019s official metro app. The original carried information but not confidence \u2014 we rebuilt wayfinding, accessibility and a conversational AI \u201CMetro Genie\u201D to turn the app into a companion, not a directory.',
    tags: ['UI/UX', 'Mobile app', 'Service design', 'AI assistant'],
    sections: [
      {
        eyebrow: 'BACKGROUND',
        heading: 'An official app that people still ignore.',
        body: 'The Taipei Metro app provides extensive information but suffers from poor usability \u2014 cluttered navigation, inconsistent patterns and scattered entry points for accessibility. We joined a hackathon with two designers to redesign it around how people actually move through the system.'
      },
      {
        eyebrow: 'RESEARCH',
        heading: 'User Interviews \u2192 Affinity \u2192 Wireframes.',
        body: 'We ran in-depth interviews to understand how riders currently check routes, elevators and crowd levels, then mapped the findings with an affinity diagram. The insight: most riders juggle 2\u20133 apps for one trip.',
        list: [
          'How users currently check metro information across apps.',
          'What core functions they expect from a metro app.',
          'Where accessibility information breaks down for elevator-dependent riders.'
        ]
      },
      {
        eyebrow: 'DESIGN',
        heading: 'Three main flows, one Genie.',
        body: 'Map navigation, station navigation with real-time elevator status, and an AI \u201CMetro Genie\u201D chatbot that turns customer-service into trip-planning.',
        list: [
          'Map navigation \u2014 transit, tourist and accessible modes on a single map.',
          'Station navigation \u2014 platform-level elevator and exit routing.',
          'Metro Genie \u2014 AI assistant for customized trip planning and rewards.',
          'Metro Point Task \u2014 social invitation cards to grow daily engagement.'
        ]
      },
      {
        eyebrow: 'OUTCOME',
        stats: [
          { num: '3', lbl: 'Main flows redesigned' },
          { num: '1', lbl: 'AI assistant prototype shipped' },
          { num: '48h', lbl: 'Hackathon sprint' }
        ]
      }
    ]
  },
  {
    id: 'moca',
    num: '02',
    title: 'MoCA',
    subtitle: 'Post-epidemic museum experience design',
    year: '2023',
    duration: '2022.09 — 2023.01 · 16 weeks',
    kind: 'Service design',
    team: 'Team of 6, School project',
    role: 'Background research · User interview · Service design · Prototyping · User testing',
    instructor: 'Shih-Ju, Wang',
    cover: 'assets/covers/moca.jpg',
    coverPreview: 'assets/covers/moca-hero.jpg',
    palette: ['#EBE7D6', '#EEB94D', '#364F92', '#FFFFFF', '#000000'],
    summary: 'Reframing MoCA Taipei for a post-pandemic audience — increasing return visits and building emotional connection between parents, children, and contemporary art.',
    tags: ['Service design', 'Research', 'Family', 'Museum'],
    sections: [
      {
        eyebrow: 'CONTEXT',
        heading: 'Behavioral shifts after the pandemic.',
        body: 'COVID-19 changed how people visit museums. Digital exhibitions rose, foot traffic fell, and loyal visitors began to drift. We studied MoCA Taipei\u2019s typical and potential visitors to find behavioral shifts we could design around \u2014 with a focus on U12 Kid\u2019s Space.'
      },
      {
        eyebrow: 'APPROACH',
        heading: 'A Double Diamond with family at the center.',
        body: 'Desk + field research, in-depth interviews, empathy mapping and Moments of Truth led to a clear insight: parent-child visitors are the seed of loyal customers. We redesigned the kid\u2019s experience end-to-end.',
        list: [
          'Children\u2019s curation course \u2014 parent-child interaction and space-planning skills.',
          'Children\u2019s artworks exhibition \u2014 giving kids a real reason to come back.',
          'Certificate of participation \u2014 an emotional memory point, also a souvenir.',
          'LINE tag-based promotion \u2014 reaching the right parents with the right activity.'
        ]
      },
      {
        eyebrow: 'OUTCOME',
        stats: [
          { num: 'Bronze', lbl: 'Award · Innovation Design Competition' },
          { num: '6', lbl: 'Customer-journey opportunities addressed' },
          { num: '4', lbl: 'Design features shipped as prototypes' }
        ]
      }
    ]
  },
  {
    id: 'shareit',
    num: '03',
    title: 'Share it \u6559\u6D41\u8DA3',
    subtitle: 'Lesson plan sharing app design',
    year: '2022',
    duration: '2022.02 — 2023.06 · 16 weeks',
    kind: 'UI/UX design',
    team: 'Team of 6, School project',
    role: 'User research · Wireframe · Conceptualization · UI design · User testing',
    instructor: 'Hsin-Hui, Liao',
    cover: 'assets/covers/shareit-cover.png',
    palette: ['#3331B7', '#EEB94D', '#D0D5ED', '#E3BAB6'],
    summary: 'A lesson-plan sharing platform that lets teachers prepare by standing on the shoulders of other teachers \u2014 especially supporting part-time and trainee teachers.',
    tags: ['UI/UX', 'Mobile app', 'Education', 'Community'],
    sections: [
      {
        eyebrow: 'CONTEXT',
        heading: 'Teachers are preparing lessons alone.',
        body: 'Inconsistent student progress forces teachers to keep adjusting their plans. Part-time teachers \u2014 with day jobs and no staff room \u2014 have almost no peer exchange. Resources live in scattered Facebook groups, LINE chats, and personal drives.'
      },
      {
        eyebrow: 'APPROACH',
        heading: 'Four stages, three design features.',
        body: 'We interviewed experienced teachers, intern teachers, teacher trainees and cram-school TAs. Card sorting and laddering analysis mapped four stages: pre-class preparation, in-class execution, post-class discussion, and outside-class sharing.',
        list: [
          'Integrated lesson-plan library \u2014 filtered by subject, grade level, class size.',
          'Experience sharing feed \u2014 open dialogue outside of structured plans.',
          'Personal profile \u2014 save, categorize and organize your own teaching resources.'
        ]
      },
      {
        eyebrow: 'DESIGN SYSTEM',
        heading: 'A dialogue-box as the visual anchor.',
        body: 'Dialogue shapes carry the concept of exchange throughout the UI. Primary indigo #3331B7 carries actions; yellow #EEB94D marks key content. Lato handles Latin script and pairs with a Traditional Chinese sans for bilingual layouts.'
      }
    ]
  },
  {
    id: 'wagyu',
    num: '04',
    title: 'Wagyu Rush',
    subtitle: 'Puzzle game design',
    year: '2022',
    duration: '2021.09 — 2022.01 · 16 weeks',
    kind: 'Game design',
    team: 'Team of 4, ToBeDiff',
    role: 'Conceptualization · Gameplay design · UI design · UI construction',
    instructor: 'Wen-Kai, Tai',
    cover: 'assets/covers/wagyu-cover.jpg',
    coverPreview: 'assets/covers/wagyu-preview.png',
    palette: ['#83511E', '#E4E1DC', '#D0D5ED', '#FFFFFF', '#000000'],
    summary: 'Players manage a wagyu farm, guiding cows onto the truck for a bodybuilding contest. A sliding-tile puzzle with pixel-art charm and a nurturing backbone.',
    tags: ['Game design', 'Puzzle', 'Pixel art', 'Unity'],
    sections: [
      {
        eyebrow: 'CONCEPT',
        heading: 'Innovation matrix \u2192 4\u20113\u20115 brainwriting.',
        body: 'We ran an Innovation Matrix workshop across puzzle-solving, real-time strategy, adventure, survival, collaboration and management. A modified 6\u20113\u20115 method generated 48 gameplay ideas in one session \u2014 enough breadth and depth to combine three proven puzzle mechanics into something new.'
      },
      {
        eyebrow: 'MECHANICS',
        heading: 'Three puzzle mechanics, one cow.',
        body: 'Inspired by 2048 (sliding), SolveThis (fixed-tile shifting) and Plumber (path rotation). Blocks move first, wagyu moves next; the cow travels to the furthest reachable tile in the direction it faces.',
        list: [
          'Move tracking \u2014 the ideal step count is shown after each level.',
          'Random dance \u2014 the wagyu stands up and dances, delightful but disruptive.',
          'Night levels \u2014 only streetlight circles are visible, raising difficulty.',
          'Daily wagyu puzzle \u2014 a new daily challenge.'
        ]
      },
      {
        eyebrow: 'OUTCOME',
        stats: [
          { num: '2', lbl: 'Awards at Innovation Design Competition' },
          { num: '48', lbl: 'Gameplay ideas generated in one workshop' },
          { num: '1', lbl: 'Playable map editor for rapid iteration' }
        ]
      }
    ]
  },
  {
    id: 'other',
    num: '05',
    title: 'Other Works',
    subtitle: 'Six explorations in accessibility, code & brand',
    year: '2022—2023',
    duration: 'Ongoing',
    kind: 'Mixed media',
    team: 'Solo & small teams',
    role: 'Design, code, branding',
    instructor: '\u2014',
    cover: 'assets/covers/other.png?v=2',
    coverPreview: 'assets/covers/other.png?v=2',
    palette: ['#FFC341', '#161616', '#f4f4f4'],
    summary: 'A collection of smaller works across UI/UX, creative coding, branding and accessibility design \u2014 different problems, one design practice.',
    tags: ['Creative coding', 'Brand', 'Accessibility', 'UI'],
    sections: [
      {
        eyebrow: 'SELECTED',
        heading: 'Six short-form works.',
        list: [
          'Electric wheelchair controller \u2014 accessibility design, human factors study.',
          '\u7761\u7720\u6559\u7DF4 Sleep Coach \u2014 UI/UX for a habit-forming sleep companion.',
          'Schr\u00F6dinger\u2019s Clock \u2014 creative coding, a clock that is and is not the time.',
          'Rhythm of the Wind \u2014 creative coding, wind-driven generative composition.',
          'WARMUP \u6696\u751F \u2014 brand and website design for a wellness studio.',
          'New Balance iOS App \u2014 UI design & construction exercise.'
        ]
      },
      {
        eyebrow: 'PRACTICE',
        heading: 'Why keep the side projects?',
        body: 'Design insight rarely arrives on schedule. Small projects \u2014 a clock, a controller, a brand \u2014 let me practice the part of the craft that doesn\u2019t show up on a roadmap: human factors, visualisation, tone of voice. Each one expands the shelf I can reach for in the next client brief.'
      }
    ]
  }
];
