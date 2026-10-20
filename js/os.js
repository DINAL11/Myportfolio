(function () {
  const GROUPS = ["Software & systems", "Data & ML", "Product & web", "Healthcare"];

  const PROJECTS = [
    { id: "river", group: "Software & systems", title: "River forecasting", summary: "LSTM models for 48-hour river stage on the Genesee, with the basin map and flood stages beside the model.", tags: ["Python", "TensorFlow", "Keras", "LSTM", "Pandas", "NumPy", "Matplotlib"], links: [
      ["Case study", "project1.html"],
      ["Presentation", "https://docs.google.com/presentation/d/1JNQ4Mwzxzgd_2xqIiGuecXyoxy4_GTv3VXEc3gOxG8k/edit?usp=sharing"]
    ]},
    { id: "osdi-sys", group: "Software & systems", title: "OSDI 2025 systems", summary: "Evaluation-as-a-Service for distributed storage. I produced the results: automated collection, benchmarks, and the charts.", tags: ["C++", "Python", "CloudLab", "Bash", "Benchmarking", "Data viz"], links: [
      ["Case study", "project2.html"],
      ["Charts", "https://drive.google.com/file/d/1-8VG2pwz7xQCYLGCLjF2DD1eXLSN1szb/view?usp=sharing"]
    ]},
    { id: "ddb", group: "Software & systems", title: "Distributed database", summary: "Consistency tradeoffs on a research database, evaluated on CloudLab with the CPI-NS lab.", tags: ["C++17", "CloudLab", "Distributed systems", "Replication", "Python"], links: [
      ["Case study", "project17.html"],
      ["GitHub", "https://github.com/CPI-NS/EaaS-spanner-rss"]
    ]},
    { id: "dfs", group: "Software & systems", title: "Distributed file storage", summary: "Fault-tolerant storage with consistent hashing, replication, and a REST API.", tags: ["Java", "Spring Boot", "REST", "Consistent hashing", "Replication"], links: [
      ["Case study", "Project4.html"],
      ["GitHub", "https://github.com/DINAL11/Distributed-File-Storage-System/tree/main"]
    ]},
    { id: "firewall", group: "Software & systems", title: "Enclave firewall", summary: "A Go manager that syncs nftables rules and checks network policy inside containers.", tags: ["Go", "Docker", "nftables", "Linux networking", "Containers"], links: [
      ["Case study", "project16.html"],
      ["GitHub", "https://github.com/DINAL11/dinal-efw-challenge"]
    ]},
    { id: "bella", group: "Data & ML", title: "Bellabeat case study", summary: "Fitbit data turned into a growth story for a health-tech product.", tags: ["R", "tidyverse", "ggplot2", "SQL", "Analytics", "Tableau"], links: [
      ["Kaggle", "https://www.kaggle.com/code/dinaldholiya/bellabeat-case-study"],
      ["Colab", "https://colab.research.google.com/drive/1owJc89J_8Ve90XXZ9AJiTUovjqpyj7ua?usp=sharing"]
    ]},
    { id: "spark", group: "Data & ML", title: "Spark ML", summary: "Classification and clustering on large sets with Spark ML pipelines.", tags: ["Apache Spark", "PySpark", "Spark ML", "Python", "MLlib", "DataFrames", "ETL"], links: [
      ["Case study", "project7.html"],
      ["GitHub", "https://github.com/DINAL11/spark-data-processing"]
    ]},
    { id: "dataproduct", group: "Data & ML", title: "Interactive data product", summary: "Ingestion, a model, and a deployed UI for one dataset, end to end.", tags: ["Python", "Docker", "scikit-learn", "Flask", "Pandas", "REST"], links: [
      ["Case study", "project8.html"],
      ["Slides", "https://docs.google.com/presentation/d/126CUWuE9s5fPZ8VQ5XzsR0hZb7TEwAYKvkqWCkJc0vc/edit?usp=sharing"]
    ]},
    { id: "pipeline", group: "Data & ML", title: "Business data pipeline", summary: "ETL plus a creator analytics dashboard for live business numbers.", tags: ["Python", "React", "ETL", "SQL", "APIs", "Dashboard"], links: [
      ["Case study", "project9.html"],
      ["Pipeline", "https://github.com/DINAL11/business-data-pipeline"],
      ["Dashboard", "https://github.com/DINAL11/creator-dashboard"]
    ]},
    { id: "cloud", group: "Data & ML", title: "3D word cloud", summary: "Article topics drawn as a word cloud you can orbit.", tags: ["Three.js", "JavaScript", "NLP", "React", "Vercel"], links: [
      ["Case study", "project14.html"],
      ["Live", "https://3-d-word-cloud-dinal.vercel.app"],
      ["GitHub", "https://github.com/DINAL11/3D-Word-Cloud-Dinal"]
    ]},
    { id: "healthrec", group: "Data & ML", title: "Health record insights", summary: "A four-phase capstone: clean the records, model them, scale with Spark, ship a Streamlit app.", tags: ["PySpark", "Python", "Spark ML", "Streamlit", "Pandas", "ML"], links: [
      ["Case study", "project24.html"],
      ["GitHub", "https://github.com/DINAL11/scalable-health-predictor"]
    ]},
    { id: "metacore", group: "Product & web", title: "MetaCoreLife", summary: "A social product for challenges and community, with Stripe commerce. Live, not a class demo.", tags: ["React", "Supabase", "Stripe", "JavaScript", "Auth", "PostgreSQL"], links: [
      ["Case study", "project12.html"],
      ["Live", "https://metacorelife.com"],
      ["GitHub", "https://github.com/DINAL11/metacorelife"]
    ]},
    { id: "focus", group: "Product & web", title: "Focus dashboard", summary: "Pomodoro, habits, goals, analytics, and a journal. Nothing leaves the browser.", tags: ["Next.js", "TypeScript", "React", "Recharts", "LocalStorage"], links: [
      ["Case study", "project18.html"],
      ["GitHub", "https://github.com/DINAL11/focus-dashboard"]
    ]},
    { id: "lost", group: "Product & web", title: "Lost and found", summary: "A portal with live notifications and a layout that works on a phone.", tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"], links: [
      ["Case study", "project3.html"],
      ["Live", "https://lost-and-found-portal-nine.vercel.app"],
      ["GitHub", "https://github.com/DINAL11/lost-and-found-portal"]
    ]},
    { id: "ecom", group: "Product & web", title: "Food storefront", summary: "Catalog, cart, checkout, and PayPal for a food client.", tags: ["Node.js", "Express", "PayPal", "JavaScript", "HTML/CSS"], links: [
      ["Case study", "project10.html"],
      ["Demo", "https://drive.google.com/file/d/1gZiZxcI2IAK7-DUKwMEB2bCifj0y1nnk/view?usp=sharing"]
    ]},
    { id: "ops", group: "Product & web", title: "OpsPulse", summary: "An internal desk for positions, trades, and exposure.", tags: ["React", "Flask", "Python", "REST", "Charts"], links: [
      ["Case study", "project15.html"],
      ["GitHub", "https://github.com/DINAL11/Opspulse"]
    ]},
    { id: "ksense", group: "Healthcare", title: "Ksense risk API", summary: "Patient risk scores with pagination, retries, and checks for bad data.", tags: ["Python", "REST API", "Pagination", "Error handling", "Data validation"], links: [
      ["Case study", "project22.html"],
      ["GitHub", "https://github.com/DINAL11/ksense-healthcare-assessment"]
    ]},
    { id: "sofia", group: "Healthcare", title: "Sofia Health", summary: "Appointment booking in Django, paid through Stripe PaymentIntents.", tags: ["Django", "Python", "Stripe", "PostgreSQL", "HTML/CSS"], links: [
      ["Case study", "project23.html"],
      ["GitHub", "https://github.com/DINAL11/Sofia-Health"]
    ]}
  ];

  const PAPERS = [
    { id: "osdi", venue: "OSDI 2025 · Submitted", title: "Enabling easy, correct, and reproducible evaluation of distributed storage systems", note: "Role: result producer. Automated collection and performance analysis. The PDF is not public yet; the write-up and charts are.", href: "project2.html", action: "Read the write-up" },
    { id: "crime", venue: "Technical paper", title: "Increasing violent crime rates in the U.S. and India", note: "A comparison of the trends in both countries.", href: "https://docs.google.com/document/d/1xpMvZXTJUJYT4ZzXp7xuduG8eJOMQbSY/edit", action: "Read paper" },
    { id: "cyber", venue: "Technical paper", title: "Cyber security threats on campus", note: "A recommendation report for campus security.", href: "https://drive.google.com/file/d/1grgy6tWApfU4DDsGl7enZoCpXud7Is_W/view", action: "Read paper" },
    { id: "poster", venue: "Poster", title: "Addressing cyber security threats on campus", note: "The same recommendations, as a poster.", href: "EAS360 Poster.pdf", action: "View poster" }
  ];

  const EXTRAS = [
    { id: "mentor", title: "SEAS Peer Mentor", place: "University at Buffalo", text: "Workshops, academic guidance, and career mentorship for other engineers." },
    { id: "hacking", title: "Publicity team", place: "UB Hacking", text: "Led content and outreach for the hackathon." },
    { id: "stem", title: "STEM outreach", place: "Community", text: "Organized programs with schools and partner organizations." },
    { id: "athlete", title: "National athlete", place: "Roll ball and rugby, India", text: "Competed nationally and captained teams." },
    { id: "hindi", title: "Hindi instructor", place: "World Hindi Foundation", text: "Scholarship awardee. Taught language and culture." }
  ];

  const CONFERENCES = [
    { title: "CIT 2024", text: "SUNY conference on educational technology and AI in learning.", href: "https://cit.suny.edu/cit-2024/" },
    { title: "ICWSM 2024", text: "Web and social media, misinformation, and moderation.", href: "https://www.icwsm.org/2024/index.html/" },
    { title: "Grace Hopper 2023", text: "Women in computing. Career growth, AI, and security.", href: "https://ghc.anitab.org/" }
  ];

  const CERTS = [
    ["Google · Data Analytics", "https://drive.google.com/file/d/18_LXFNI1rSCTEdCU40n6a70NGipXY2cj/view?usp=sharing"],
    ["Google · Business Intelligence", "https://drive.google.com/file/d/1q_xcODSaHcPsoNt8K2GCaBEV5mQ-tfuw/view?usp=sharing"],
    ["IBM · Data Analytics", "https://drive.google.com/file/d/1RWYKNBr9r7EE5WxSTNhauYFGpS7rYNfl/view?usp=sharing"],
    ["Amazon · Cloud Computing", "https://drive.google.com/file/d/1hMGMT3rUv3_d0ZEYPM_dzYqE9DyI6gzW/view"],
    ["Walmart · Global Tech", "https://drive.google.com/file/d/1ofwQvNEcPH3C5vunZv3KO6Kmto4sPm03/view"],
    ["JP Morgan · Finance & Data", "https://drive.google.com/file/d/1W8WNIcCH3n0wCxjMN4_EazPlHdKiApF-/view"]
  ];

  const NOTIFS = [
    { app: "mail", item: "", kicker: "Now", title: "Open to roles", text: "Indiana. Full-time and collaborations.", when: "Now", icon: "mail" },
    { app: "projects", item: "", kicker: "Build", title: "Personal projects", text: "Shipping apps, agents, and research tools on the side.", when: "Now", icon: "projects" }
  ];

  const PHONE_APPS = [
    ["projects", "Projects", "#2f6fe0"],
    ["research", "Research", "#8eb6ea"],
    ["extras", "Extras", "#5a4ed0"],
    ["credentials", "Credentials", "#c4a15a"],
    ["skills", "Skills", "#2f8a6e"],
    ["focus", "Focus", "#3d9ad4"],
    ["ai", "AI", "#6d5efc"],
    ["gallery", "Gallery", "#2f8f7b"]
  ];

  const DESK_APPS = PHONE_APPS.concat([["life", "Life", "#1f6f9a"]]);

  const ICONS = {
    projects: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    research: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
    extras: '<path d="M12 3l2.1 4.6L19 8.2l-3.5 3.3.9 5L12 14.8 7.6 16.5l.9-5L5 8.2l4.9-.6z"/>',
    focus: '<circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/>',
    credentials: '<circle cx="12" cy="8" r="3.2"/><path d="M8.2 12.2L7 20l5-2.4L17 20l-1.2-7.8"/>',
    skills: '<path d="M12 3l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 15.8 7.2 17.6l.9-5.3L4.3 8.6l5.3-.8z"/>',
    gallery: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.4"/><path d="M3 16l5-4 4 3 3-2 6 5"/>',
    ai: '<path d="M12 3l1.3 4L17.5 8.5 13.3 9.8 12 14l-1.3-4.2L6.5 8.5 10.7 7z"/><path d="M18 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    letters: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/>',
    life: '<path d="M4 16l5-6 3 3 2-2 6 5"/><circle cx="8" cy="7" r="1.4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/>'
  };

  const SKILL_GROUPS = [
    { title: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "Go", "R", "SQL", "HTML/CSS"] },
    { title: "Web & product", items: ["React", "Next.js", "Node.js", "Express", "Django", "Flask", "PHP", "REST APIs"] },
    { title: "Data & ML", items: ["Pandas", "NumPy", "scikit-learn", "PySpark", "Apache Spark", "Spark ML", "TensorFlow", "Keras", "Streamlit"] },
    { title: "Cloud & DevOps", items: ["Docker", "Git", "Linux", "AWS basics", "CI-minded workflows", "Vercel"] },
    { title: "AI tooling", items: ["Cursor", "Claude", "ChatGPT", "Gemini", "Copilot", "Prompting", "AI agents", "Output verification"] }
  ];

  const SOFT_SKILLS = [
    "Approachable and easy to reach",
    "Kind and generous with help",
    "Quick learner when the stack is new",
    "Open-minded in review and debate",
    "Can lead a project or a small team",
    "Organized under shifting priorities"
  ];

  const WALLS = [
    { id: "waves", name: "Signature", note: "Waves + AI", kind: "canvas", colors: ["#0a5cab", "#0b3a7a", "#06172f"] },
    { id: "ocean", name: "Ocean", note: "Aerial coast", kind: "video", src: "wallpapers/ocean.mp4", tint: "rgba(6, 20, 36, 0.42)", colors: ["#0e3a52", "#0a2438", "#061420"] },
    { id: "tropical", name: "Tropical", note: "Island shore", kind: "video", src: "wallpapers/tropical.mp4", tint: "rgba(8, 28, 36, 0.4)", colors: ["#0f4a4a", "#0a2e38", "#061820"] },
    { id: "summer", name: "Summer", note: "Sunlit forest", kind: "video", src: "wallpapers/summer.mp4", tint: "rgba(10, 24, 16, 0.4)", colors: ["#1a4030", "#102818", "#0a1810"] },
    { id: "fall", name: "Fall", note: "Golden dusk", kind: "video", src: "wallpapers/fall.mp4", tint: "rgba(28, 14, 8, 0.42)", colors: ["#4a2814", "#2a160c", "#140a08"] },
    { id: "modern", name: "Modern", note: "Cinematic coast", kind: "video", src: "wallpapers/modern.mp4", tint: "rgba(18, 12, 10, 0.4)", colors: ["#2a2018", "#18120e", "#0c0806"] },
    { id: "tech", name: "Tech", note: "Data globe", kind: "video", src: "wallpapers/tech.mp4", tint: "rgba(4, 18, 24, 0.48)", colors: ["#062428", "#041418", "#020c10"] }
  ];
  const WALL_LEGACY = {
    halloween: "fall", christmas: "modern", potter: "tech", vibe: "tropical", neon: "tech",
    night: "modern", aurora: "summer", jan: "tech", feb: "modern", mar: "ocean",
    apr: "summer", may: "summer", jun: "tropical", jul: "tropical", aug: "fall",
    sep: "fall", oct: "fall", nov: "fall", dec: "modern", grid: "waves", ink: "waves"
  };

  const VALID_APPS = ["projects", "research", "extras", "credentials", "skills", "focus", "ai", "gallery", "life", "letters", "mail"];
  const isNarrowMobile = () => window.matchMedia("(max-width: 760px)").matches;
  const state = {
    device: "phone",
    app: null,
    item: null,
    group: "All",
    photos: []
  };
  let wallMode = { id: "waves", kind: "canvas" };

  const $ = (id) => document.getElementById(id);

  function svg(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
  }

  function blank(href, label, className) {
    return `<a class="${className || "chip"}" data-blank href="${href}">${label}</a>`;
  }

  function projectById(id) {
    return PROJECTS.find((p) => p.id === id);
  }

  function notifHTML(n) {
    return `<button class="notif" type="button" data-open="${n.app}" data-item="${n.item}">
      <span class="mark">${svg(n.icon)}</span>
      <span class="notif-main">
        <span class="notif-row"><small>${n.kicker}</small><span class="when">${n.when}</span></span>
        <strong>${n.title}</strong>
        <em>${n.text}</em>
      </span>
    </button>`;
  }

  function appHTML(entry, className) {
    const [id, label, color] = entry;
    return `<button class="${className}" type="button" data-open="${id}">
      <span class="ico" style="background:${color}">${svg(id === "life" ? "life" : id)}</span>
      <span>${label}</span>
    </button>`;
  }

  function chips(links) {
    return `<div class="chips">${links.map(([label, href]) => blank(href, label)).join("")}</div>`;
  }

  function projectList(activeId) {
    const groups = state.group === "All" ? GROUPS : GROUPS.filter((g) => g === state.group);
    return groups.map((group) => {
      const items = PROJECTS.filter((p) => p.group === group).map((p) => {
        return `<button class="item${p.id === activeId ? " is-on" : ""}" type="button" data-open="projects" data-item="${p.id}">
          <strong>${p.title}</strong><small>${p.summary}</small>
          <span class="tags">${p.tags.map((t) => `<i>${t}</i>`).join("")}</span>
        </button>`;
      }).join("");
      return `<div class="label">${group}</div>${items}`;
    }).join("");
  }

  function projectDetail(p) {
    return `<p>${p.summary}</p><div class="tags">${p.tags.map((t) => `<i>${t}</i>`).join("")}</div>${chips(p.links)}`;
  }

  function papersHTML() {
    return PAPERS.map((paper) => `
      <a class="paper" data-blank href="${paper.href}">
        <span class="venue">${paper.venue}</span>
        <strong>${paper.title}</strong>
        <span class="go">${paper.action}</span>
      </a>`).join("");
  }

  function extrasHTML() {
    const people = EXTRAS.map((item) => `
      <button class="item${state.item === item.id ? " is-on" : ""}" type="button" data-open="extras" data-item="${item.id}">
        <strong>${item.title}</strong><small>${item.place}. ${item.text}</small>
      </button>`).join("");
    return `<div class="label">Leadership and sport</div>${people}`;
  }

  function homeSide() {
    return `<h1>Hi, I'm Dinal</h1>
      <div class="side-scroll">
        <p>I am a software developer, currently in Indiana, United States. I have built full-stack applications, data systems, AI agents, and research tools.</p>
        <p>I’m open to full-time roles and collaborations. Please check out my projects.</p>
        <p>Thanks for stopping by. Feel free to <a data-blank href="mailto:dinaldholiya@gmail.com">get in touch</a>.</p>
        <p class="credit">This personal website was made with AI agents.</p>
      </div>
      <div class="social">
        <a data-blank href="https://www.linkedin.com/in/dinal-dholiya/" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 9H4V20h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20z"/></svg></a>
        <a data-blank href="https://github.com/DINAL11" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/></svg></a>
        <a data-blank href="mailto:dinaldholiya@gmail.com" aria-label="Email">${svg("mail")}</a>
      </div>`;
  }

  function sideHTML() {
    if (!state.app) return homeSide();
    const titles = { projects: "Projects", research: "Research", extras: "Extras", credentials: "Credentials", skills: "Skills", gallery: "Gallery", focus: "Focus", life: "Life", ai: "AI", letters: "Letters", mail: "Contact" };
    if (state.app === "projects") {
      const project = projectById(state.item);
      return `<h1>${project ? project.title : "Projects"}</h1><div class="side-scroll list">${project ? projectDetail(project) : projectList(null)}</div>`;
    }
    if (state.app === "research") {
      const paper = PAPERS.find((p) => p.id === state.item);
      const body = paper
        ? `<p>${paper.note}</p>${blank(paper.href, paper.action)}<div class="stack" style="padding:14px 0 0">${papersHTML()}</div>`
        : `<div class="stack" style="padding:0">${papersHTML()}</div>`;
      return `<h1>Research</h1><div class="side-scroll">${body}</div>`;
    }
    if (state.app === "extras") {
      const extra = EXTRAS.find((item) => item.id === state.item);
      const intro = extra ? `<p><strong style="color:#fff">${extra.title}</strong> — ${extra.place}. ${extra.text}</p>` : `<p>Mentorship, outreach, teaching, and sport.</p>`;
      return `<h1>${titles.extras}</h1><div class="side-scroll list">${intro}${extrasHTML()}</div>`;
    }
    if (state.app === "credentials") return `<h1>Credentials</h1><div class="side-scroll">${credentialsInner()}</div>`;
    if (state.app === "gallery") return `<h1>Gallery</h1><div class="side-scroll">${galleryInner()}</div>`;
    if (state.app === "focus") return `<h1>Focus</h1><div class="side-scroll">${focusInner()}</div>`;
    if (state.app === "life") return `<h1>Life</h1><div class="side-scroll">${lifeInner()}</div>`;
    if (state.app === "skills") return `<h1>Skills</h1><div class="side-scroll">${skillsInner()}</div>`;
    if (state.app === "ai") return `<h1>AI</h1><div class="side-scroll">${aiInner()}</div>`;
    if (state.app === "letters") return `<h1>Letters</h1><div class="side-scroll">${lettersInner()}</div>`;
    return `<h1>Contact</h1><div class="side-scroll"><p>I’m open to roles and to collaborations.</p>${chips([
      ["Email", "mailto:dinaldholiya@gmail.com"],
      ["LinkedIn", "https://www.linkedin.com/in/dinal-dholiya/"],
      ["GitHub", "https://github.com/DINAL11"],
      ["Letters of recommendation", "LORs.pdf"]
    ])}</div>`;
  }

  function sheetHTML() {
    const back = `<button class="back" type="button" data-back aria-label="Back"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 3L5 8l5 5"/></svg></button>`;
    if (state.app === "projects") {
      const project = projectById(state.item);
      const filters = ["All"].concat(GROUPS).map((group) => `<button class="filter${state.group === group ? " is-on" : ""}" type="button" data-group="${group}">${group}</button>`).join("");
      if (project) {
        return `${back}<div class="sheet-head"><h2>${project.title}</h2></div><div class="groups">${projectHero(project)}</div>`;
      }
      return `${back}<div class="sheet-head"><h2>Projects</h2></div><div class="groups"><div class="chips">${filters}</div><div class="project-grid">${projectCards()}</div></div>`;
    }
    if (state.app === "research") {
      return `${back}<div class="sheet-head"><h2>Research</h2></div>
        <div class="stack">${papersHTML()}</div>`;
    }
    if (state.app === "extras") {
      return `${back}<div class="sheet-head"><h2>Extras</h2></div>
        <div class="stack list">${extrasHTML()}</div>`;
    }
    if (state.app === "credentials") {
      return `${back}<div class="sheet-head"><h2>Credentials</h2></div><div class="groups">${credentialsInner()}</div>`;
    }
    if (state.app === "gallery") {
      return `${back}<div class="sheet-head"><h2>Gallery</h2></div><div class="groups">${galleryInner()}</div>`;
    }
    if (state.app === "focus") {
      return `${back}<div class="sheet-head"><h2>Focus</h2></div><div class="groups">${focusInner()}</div>`;
    }
    if (state.app === "life") {
      return `${back}<div class="sheet-head"><h2>Life</h2></div><div class="groups">${lifeInner()}</div>`;
    }
    if (state.app === "skills") {
      return `${back}<div class="sheet-head"><h2>Skills</h2></div><div class="groups">${skillsInner()}</div>`;
    }
    if (state.app === "ai") {
      return `${back}<div class="sheet-head"><h2>AI</h2></div><div class="groups">${aiInner()}</div>`;
    }
    if (state.app === "letters") {
      return `${back}<div class="sheet-head"><h2>Letters</h2></div><div class="groups">${lettersInner()}</div>`;
    }
    return `${back}<div class="sheet-head"><h2>Say hello</h2></div>
      <div class="groups">${chips([
        ["Email", "mailto:dinaldholiya@gmail.com"],
        ["LinkedIn", "https://www.linkedin.com/in/dinal-dholiya/"],
        ["GitHub", "https://github.com/DINAL11"],
        ["Letters of recommendation", "LORs.pdf"]
      ])}</div>`;
  }

  function windowHTML() {
    if (!state.app) return "";
    if (state.app === "projects") {
      const project = projectById(state.item);
      if (project) return projectHero(project);
      const filters = ["All"].concat(GROUPS).map((group) => `<button class="filter${state.group === group ? " is-on" : ""}" type="button" data-group="${group}">${group}</button>`).join("");
      return `<div class="chips">${filters}</div><div class="project-grid">${projectCards()}</div>`;
    }
    if (state.app === "research") {
      return `<div class="stack" style="padding:0">${papersHTML()}</div>`;
    }
    if (state.app === "extras") return `<div class="list">${extrasHTML()}</div>`;
    if (state.app === "credentials") return credentialsInner();
    if (state.app === "gallery") return galleryInner();
    if (state.app === "focus") return focusInner();
    if (state.app === "life") return lifeInner();
    if (state.app === "skills") return skillsInner();
    if (state.app === "ai") return aiInner();
    if (state.app === "letters") return lettersInner();
    return chips([
      ["Email", "mailto:dinaldholiya@gmail.com"],
      ["LinkedIn", "https://www.linkedin.com/in/dinal-dholiya/"],
      ["GitHub", "https://github.com/DINAL11"],
      ["Letters of recommendation", "LORs.pdf"]
    ]);
  }

  function focusInner() {
    return `<p class="focus-lead">What I am pointed at right now.</p>
      <div class="focus-grid">
        <article><small>01</small><strong>Roles</strong><p>Full-time software work, and collaborations worth doing.</p></article>
        <article><small>02</small><strong>Systems</strong><p>Distributed storage, and the OSDI 2025 write-up.</p></article>
        <article><small>03</small><strong>Craft</strong><p>Products and data tools I can open and show.</p></article>
      </div>
      <p class="focus-note">The Focus dashboard under Projects is a separate tool I built: a pomodoro, habits, and a journal that stay in the browser.</p>
      ${chips([["Case study", "project18.html"], ["GitHub", "https://github.com/DINAL11/focus-dashboard"]])}`;
  }

  function lifeInner() {
    return `<div class="life-stage">
      <div class="life-traits">
        <article><strong>Competitive</strong><p>I treat the work like a sport. I want the top of the board.</p></article>
        <article><strong>Organized</strong><p>A plan, a system, and a place for every project.</p></article>
        <article><strong>Planned</strong><p>I stay ready in a field that does not slow down.</p></article>
      </div>
      <p class="life-line">I am competitive, very organized, and planned. I keep myself at the top of this fast-moving tech industry.</p>
    </div>`;
  }

  function credentialsInner() {
    const conf = CONFERENCES.map((item) => `<a class="cred" data-blank href="${item.href}"><small>Conference</small><strong>${item.title}</strong><span>${item.text}</span></a>`).join("");
    const certs = CERTS.map(([label, href]) => `<a class="cred" data-blank href="${href}"><small>Certificate</small><strong>${label}</strong></a>`).join("");
    return `<div class="cred-grid">${conf}${certs}</div>`;
  }

  function galleryInner() {
    if (!state.photos.length) {
      return `<p class="focus-lead">No photos yet. Add image files to the gallery folder, then list the file names in gallery/manifest.json.</p>`;
    }
    return `<div class="photo-grid">${state.photos.map((name) => `<figure>
      <img src="gallery/${name}" alt="${name.replace(/[-_]/g, " ").replace(/\.[^.]+$/, "")}" loading="lazy">
      <button type="button" data-wall="photo:${name}">Use as wallpaper</button>
    </figure>`).join("")}</div>`;
  }

  function projectCards() {
    const list = state.group === "All" ? PROJECTS : PROJECTS.filter((p) => p.group === state.group);
    return list.map((p) => `<button class="project-card" type="button" data-open="projects" data-item="${p.id}">
      <small>${p.group}</small>
      <strong>${p.title}</strong>
      <span>${p.summary}</span>
      <em>${p.tags.join(" · ")}</em>
    </button>`).join("");
  }

  function projectHero(project) {
    return `<div class="project-hero">
      <button class="back dark" type="button" data-clear-item>All projects</button>
      <div class="group-name">${project.group}</div>
      <p class="lead">${project.summary}</p>
      <div class="tags">${project.tags.map((tag) => `<i>${tag}</i>`).join("")}</div>
      ${chips(project.links)}
    </div>`;
  }

  function skillsInner() {
    const tech = SKILL_GROUPS.map((group) => `<section class="skill-block">
      <h3>${group.title}</h3>
      <div class="skill-chips">${group.items.map((item) => `<span>${item}</span>`).join("")}</div>
    </section>`).join("");
    const soft = SOFT_SKILLS.map((item) => `<li>${item}</li>`).join("");
    return `<p class="focus-lead">What I actually use, and how I show up with people.</p>
      <h3 class="skill-heading">Technical skills</h3>
      <div class="skill-tech">${tech}</div>
      <h3 class="skill-heading">Soft skills</h3>
      <ul class="skill-soft">${soft}</ul>`;
  }

  function aiInner() {
    const tools = [
      ["Cursor", "icons/cursor.svg", "#111111"],
      ["Claude", "icons/claude.svg", "#f5ebe0"],
      ["ChatGPT", "icons/openai.svg", "#10a37f"],
      ["Gemini", "icons/gemini.svg", "#ffffff"],
      ["Copilot", "icons/copilot.svg", "#1b1f24"]
    ];
    return `<div class="ai-panel">
      <p class="ai-lead">I am skilled with AI agents. I use them in my daily flow, and I still decide what ships.</p>
      <div class="ai-tools" aria-label="AI tools I use">${tools.map(([name, src, tone]) => `<span class="ai-tool" style="--tone:${tone}"><img src="${src}" alt="" width="22" height="22">${name}</span>`).join("")}</div>
      <p class="ai-copy">I have practiced prompting, watched tutorials on what good prompts look like, and built AI agents of my own. Before I trust an output, I check the references and verify the result.</p>
      <div class="ai-grid">
        <article><small>Prompting</small><strong>Clear goals, tight constraints</strong><p>I write the task, the edge cases, and what good looks like. Then I revise until the answer is something I can stand behind.</p></article>
        <article><small>Agents</small><strong>Let them do the legwork</strong><p>Agents explore a codebase, draft a change, and take the repetitive steps. I review the diff.</p></article>
        <article><small>Judgment</small><strong>Verify, then ship</strong><p>I check sources, catch hallucinations, and only keep what I understand. Speed is not the same as shipping.</p></article>
      </div>
      <p class="ai-copy">Personally, I enjoy using AI agents every day. They have raised my productivity without replacing the craft.</p>
      <p class="ai-credit">This personal website was made with AI agents.</p>
    </div>`;
  }

  function lettersInner() {
    return `<div class="letter-stack">
        <div class="letter back-left" aria-hidden="true"></div>
        <div class="letter back-right" aria-hidden="true"></div>
        <div class="letter front">
          <small>Recommendation</small>
          <strong>For Dinal Dholiya</strong>
          <p>Written by people I have studied and worked with.</p>
        </div>
      </div>
      <p>Letters of recommendation, gathered in one PDF.</p>
      ${chips([["Open the letters", "LORs.pdf"]])}`;
  }

  function titles() {
    if (state.app === "projects" && state.item) { const p = projectById(state.item); if (p) return p.title; }
    return { projects: "Projects", research: "Research", extras: "Extras", credentials: "Credentials", skills: "Skills", gallery: "Gallery", focus: "Focus", life: "Life", ai: "AI", letters: "Letters", mail: "Contact" }[state.app] || "Dinal";
  }

  function render() {
    const home = !state.app;
    $("home-ui").hidden = !home;
    $("sheet").hidden = home;
    if (!home) $("sheet").innerHTML = sheetHTML();
    $("side").innerHTML = sideHTML();
    const win = $("win");
    win.hidden = home || state.device === "phone";
    if (!win.hidden) {
      win.classList.remove("is-min");
      $("win-title").textContent = titles();
      $("win-body").innerHTML = windowHTML();
    }
    document.body.dataset.device = state.device;
    document.body.dataset.open = state.app ? "1" : "0";
    win.classList.toggle("is-fit", state.app === "life" || state.app === "letters" || state.app === "mail" || (state.app === "projects" && !!state.item));
    document.querySelectorAll("[data-device-set]").forEach((btn) => {
      const on = btn.dataset.deviceSet === state.device;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    // Highlight the currently-open app in menus / docks / icon rails (not project list items).
    document.querySelectorAll(".menu [data-open], .desk-icons [data-open], .desk-dock [data-open], .apps [data-open], .dock [data-open]").forEach((btn) => {
      const on = btn.dataset.open === state.app;
      btn.classList.toggle("is-on", on);
      if (on) btn.setAttribute("aria-current", "true"); else btn.removeAttribute("aria-current");
    });
    const hash = ["#" + state.device, state.app, state.item].filter(Boolean).join("/");
    if (location.hash !== hash) history.replaceState(null, "", hash);
  }

  function openApp(app, item) {
    if (!VALID_APPS.includes(app)) return;
    state.app = app;
    state.item = item || null;
    const win = $("win");
    win.classList.remove("is-min", "is-max");
    win.style.left = ""; win.style.top = "";
    if (app === "projects" && item) {
      const project = projectById(item);
      if (project) state.group = project.group;
    }
    render();
  }

  function goHome() {
    state.app = null;
    state.item = null;
    state.group = "All";
    $("win").classList.remove("is-max");
    render();
  }

  function setDevice(device) {
    // Real phones/tablets in portrait get the phone experience only — no fake frame, no laptop/desktop switcher.
    if (isNarrowMobile()) device = "phone";
    if (!["phone", "laptop", "desktop"].includes(device)) device = "phone";
    state.device = device;
    const win = $("win");
    win.classList.remove("is-max", "is-min"); win.style.left = ""; win.style.top = "";
    render();
    try { localStorage.setItem("dinal-device", device); } catch (err) { /* private mode */ }
  }

  function tick() {
    const now = new Date();
    const time = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
    const date = now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
    const zone = new Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName");
    const zoneName = zone ? zone.value : "";
    document.querySelectorAll("[data-clock]").forEach((el) => {
      el.textContent = time;
      el.setAttribute("title", `Your local time${zoneName ? ", " + zoneName : ""}`);
    });
    document.querySelectorAll("[data-date]").forEach((el) => { el.textContent = date; });
    document.querySelectorAll("[data-zone]").forEach((el) => { el.textContent = zoneName; });
  }

  function mount() {
    $("phone-notifs").innerHTML = NOTIFS.map(notifHTML).join("");
    $("desk-notifs").innerHTML = NOTIFS.map(notifHTML).join("");
    $("phone-apps").innerHTML = PHONE_APPS.map((app) => appHTML(app, "app")).join("");
    $("desk-icons").innerHTML = DESK_APPS.map((app) => appHTML(app, "desk-app")).join("");
  }

  document.body.addEventListener("click", (event) => {
    const blankLink = event.target.closest("[data-blank]");
    if (blankLink) {
      const href = blankLink.getAttribute("href") || "";
      if (/^(mailto:|tel:)/i.test(href)) return; // let the OS handle mail/phone normally
      event.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    if (event.target.closest("#wall-open")) {
      const picker = $("wall-picker");
      const open = $("wall-open");
      const next = picker.hidden;
      picker.hidden = !next;
      if (open) open.setAttribute("aria-expanded", next ? "true" : "false");
      return;
    }
    const wallBtn = event.target.closest("button[data-wall]");
    if (wallBtn) {
      setWall(wallBtn.dataset.wall);
      const picker = $("wall-picker");
      const open = $("wall-open");
      if (picker) picker.hidden = true;
      if (open) open.setAttribute("aria-expanded", "false");
      return;
    }
    if ($("wall-picker") && !$("wall-picker").hidden && !event.target.closest(".wall-wrap")) {
      $("wall-picker").hidden = true;
      const open = $("wall-open");
      if (open) open.setAttribute("aria-expanded", "false");
      return;
    }
    const deviceBtn = event.target.closest("[data-device-set]");
    if (deviceBtn) {
      setDevice(deviceBtn.dataset.deviceSet);
      return;
    }
    if (event.target.closest("[data-home]")) {
      goHome();
      return;
    }
    if (event.target.closest("[data-close]")) {
      goHome();
      return;
    }
    if (event.target.closest("[data-max]")) {
      const win = $("win");
      win.classList.remove("is-min");
      win.classList.toggle("is-max");
      return;
    }
    if (event.target.closest("[data-min]")) {
      // Minimize returns to the desktop (window can be reopened from any icon/menu/dock).
      goHome();
      return;
    }
    if (event.target.closest("[data-clear-item]")) {
      state.item = null;
      render();
      return;
    }
    if (event.target.closest("[data-back]")) {
      if (state.item) state.item = null;
      else state.app = null;
      render();
      return;
    }
    const groupBtn = event.target.closest("[data-group]");
    if (groupBtn) {
      state.group = groupBtn.dataset.group;
      state.item = null;
      render();
      return;
    }
    // Ignore clicks on non-interactive content inside an open app window/sheet.
    if (state.app && event.target.closest("#win-body, .sheet, .ai-panel, .ai-tools, .ai-grid, .skill-tech, .skill-soft")) {
      const intentional = event.target.closest("a, button, [data-open], [data-blank], [data-back], [data-clear-item], [data-group]");
      if (!intentional) return;
    }
    const opener = event.target.closest("button[data-open], a[data-open]");
    if (!opener) return;
    // Any real app launcher (menu, desk icons, dock, notifications, phone apps) switches
    // straight to that app — no need to close the current window first.
    openApp(opener.dataset.open, opener.dataset.item || null);
  });

  const bar = $("win-bar");
  let drag = null;
  bar.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    const win = $("win");
    if (win.classList.contains("is-max")) return;
    drag = { x: event.clientX - win.offsetLeft, y: event.clientY - win.offsetTop };
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", (event) => {
    if (!drag) return;
    const desk = $("desktop");
    const win = $("win");
    const maxL = desk.clientWidth - win.offsetWidth;
    const maxT = desk.clientHeight - 48;
    win.style.left = Math.max(0, Math.min(maxL, event.clientX - drag.x)) + "px";
    win.style.top = Math.max(0, Math.min(maxT, event.clientY - drag.y)) + "px";
  });
  bar.addEventListener("pointerup", () => { drag = null; });

  const parts = location.hash.replace("#", "").split("/").filter(Boolean);
  // On a real phone always start in the phone view; on larger screens respect the saved/last view.
  if (isNarrowMobile()) state.device = "phone";
  else if (["phone", "laptop", "desktop"].includes(parts[0])) state.device = parts[0];
  else { try { const saved = localStorage.getItem("dinal-device"); if (["phone", "laptop", "desktop"].includes(saved)) state.device = saved; } catch (err) { /* private mode */ } }
  if (parts[1] && VALID_APPS.includes(parts[1])) state.app = parts[1];
  if (parts[2]) state.item = parts[2];
  // Validate deep links so a bad/stale hash cannot crash or open a phantom app.
  if (state.app === "projects" && state.item && !projectById(state.item)) state.item = null;
  if (state.app === "research" && state.item && !PAPERS.find((p) => p.id === state.item)) state.item = null;
  if (state.app === "extras" && state.item && !EXTRAS.find((p) => p.id === state.item)) state.item = null;
  window.addEventListener("resize", () => {
    if (isNarrowMobile() && state.device !== "phone") setDevice("phone");
    const win = $("win"); win.style.left = ""; win.style.top = "";
  });

  function startField() {
    const canvas = document.getElementById("field");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const nodes = Array.from({ length: 36 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.72,
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035
    }));
    let width = 0;
    let height = 0;
    let time = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function robot(x, y, scale, bob) {
      ctx.save();
      ctx.translate(x, y + bob);
      ctx.scale(scale, scale);
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = "rgba(186, 230, 255, 0.55)";
      ctx.fillStyle = "rgba(90, 170, 255, 0.12)";
      ctx.beginPath();
      ctx.rect(-18, -46, 36, 28);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(-7, -34, 3, 0, Math.PI * 2);
      ctx.arc(7, -34, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(220, 248, 255, 0.9)";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(0, -46);
      ctx.lineTo(0, -58);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, -60, 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeRect(-22, -14, 44, 36);
      ctx.beginPath();
      ctx.moveTo(-22, 2);
      ctx.lineTo(-36, 16);
      ctx.moveTo(22, 2);
      ctx.lineTo(36, 16);
      ctx.moveTo(-10, 22);
      ctx.lineTo(-12, 42);
      ctx.moveTo(10, 22);
      ctx.lineTo(12, 42);
      ctx.stroke();
      ctx.restore();
    }

    function orb(cx, cy, radius) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.strokeStyle = "rgba(170, 220, 255, 0.38)";
      ctx.lineWidth = 1;
      const spin = time * 0.45;
      for (let lat = -4; lat <= 4; lat += 1) {
        ctx.beginPath();
        const tilt = lat / 5;
        for (let i = 0; i <= 56; i += 1) {
          const angle = (i / 56) * Math.PI * 2 + spin;
          const ring = Math.cos(tilt) * radius;
          const z = Math.sin(angle);
          const x = Math.cos(angle) * ring;
          const y = Math.sin(tilt) * radius * 0.72 + z * 10;
          const depth = 0.55 + z * 0.45;
          if (i === 0) ctx.moveTo(x * depth, y);
          else ctx.lineTo(x * depth, y);
        }
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawWavesScene() {
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0.02 || node.x > 0.98) node.vx *= -1;
        if (node.y < 0.04 || node.y > 0.7) node.vy *= -1;
      });
      reveal.waves += (reveal.wavesTo - reveal.waves) * 0.04;
      reveal.net += ((reveal.waves > 0.4 ? 0.85 : 0) - reveal.net) * 0.03;
      reveal.robotV += (reveal.robotTo - reveal.robot) * 0.14;
      reveal.robotV *= 0.76;
      reveal.robot += reveal.robotV;

      if (reveal.net > 0.02) {
        ctx.save();
        ctx.globalAlpha = reveal.net;
        for (let i = 0; i < nodes.length; i += 1) {
          for (let j = i + 1; j < nodes.length; j += 1) {
            const dx = (nodes[i].x - nodes[j].x) * width;
            const dy = (nodes[i].y - nodes[j].y) * height;
            const dist = Math.hypot(dx, dy);
            if (dist < 150) {
              ctx.strokeStyle = "rgba(170, 220, 255, " + (0.2 * (1 - dist / 150)).toFixed(3) + ")";
              ctx.beginPath();
              ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
              ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
              ctx.stroke();
            }
          }
        }
        nodes.forEach((node) => {
          ctx.fillStyle = "rgba(230, 247, 255, 0.9)";
          ctx.beginPath();
          ctx.arc(node.x * width, node.y * height, 2.1, 0, Math.PI * 2);
          ctx.fill();
        });
        orb(width * 0.72, height * 0.34, Math.min(width, height) * 0.16);
        ctx.restore();
      }

      if (reveal.robot > 0.04) {
        robot(width * 0.18, height * 0.58, 1.35 * reveal.robot, Math.sin(time * 1.4) * 8);
      }

      if (reveal.waves > 0.02) {
        ctx.save();
        ctx.globalAlpha = Math.min(1, reveal.waves);
        ctx.translate(0, (1 - reveal.waves) * 90);
        for (let layer = 0; layer < 5; layer += 1) {
          ctx.beginPath();
          const base = height * (0.58 + layer * 0.075);
          for (let x = 0; x <= width; x += 8) {
            const y = base
              + Math.sin(x * 0.006 + time * (1.05 + layer * 0.22) + layer) * (18 + layer * 8)
              + Math.sin(x * 0.016 - time * 0.75 + layer * 1.5) * 9;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.lineTo(width, height);
          ctx.lineTo(0, height);
          ctx.closePath();
          ctx.fillStyle = "rgba(70, 170, 255, " + (0.08 + layer * 0.05) + ")";
          ctx.fill();
        }
        ctx.restore();
      }
    }

    function draw() {
      const booting = document.body.dataset.boot !== "ready";
      if (!booting && (wallMode.kind === "video" || wallMode.photo || document.body.dataset.wallKind === "video" || document.body.dataset.wallKind === "photo")) {
        canvas.style.opacity = "0";
        return;
      }
      const preset = WALLS.find((item) => item.id === (booting ? "waves" : wallMode.id)) || WALLS[0];
      canvas.style.opacity = "1";
      const wash = ctx.createLinearGradient(0, 0, 0, height);
      wash.addColorStop(0, preset.colors[0]);
      wash.addColorStop(0.5, preset.colors[1]);
      wash.addColorStop(1, preset.colors[2]);
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, width, height);
      if (!booting && wallMode.id === "grid") {
        ctx.strokeStyle = "rgba(170, 205, 245, 0.14)";
        ctx.lineWidth = 1;
        for (let x = 0; x <= width; x += 56) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y <= height; y += 56) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
        return;
      }
      if (!booting && wallMode.id === "ink") return;
      drawWavesScene();
    }

    function frame() {
      if (!document.hidden) { time += 0.012; draw(); }
      if (!reduced) requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    frame();
  }

  const reveal = { waves: 0, wavesTo: 0, robot: 0, robotTo: 0, robotV: 0, net: 0 };

  function startBoot() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Repeat visits in the same tab skip the long intro — and any tap/click skips it too.
    let seen = false;
    try { seen = sessionStorage.getItem("dinal-boot") === "1"; sessionStorage.setItem("dinal-boot", "1"); } catch (err) { /* private mode */ }
    if (seen || reduced) {
      reveal.waves = reveal.wavesTo = 1; reveal.robot = reveal.robotTo = 1; reveal.net = 1;
      document.body.dataset.boot = "ready";
      applyWallMedia();
      return;
    }
    const skip = () => { if (document.body.dataset.boot !== "ready") { document.body.dataset.boot = "ready"; applyWallMedia(); } };
    document.addEventListener("pointerdown", skip, { once: false });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" || e.key === "Enter") skip(); });
    const finish = () => {
      document.body.dataset.boot = "ready";
      applyWallMedia();
    };
    // Opening sequence always uses the signature waves canvas.
    document.body.dataset.wallKind = "canvas";
    const video = $("wall-video");
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    if (reduced) {
      reveal.waves = reveal.wavesTo = 1;
      reveal.robot = reveal.robotTo = 1;
      reveal.net = 1;
      finish();
      return;
    }
    const lock = $("lock");
    let step = "blue";
    let startY = null;
    const go = (name) => {
      step = name;
      document.body.dataset.boot = name;
      if (name === "ready") applyWallMedia();
    };
    const later = (ms, fn) => setTimeout(fn, ms);
    later(500, () => { reveal.wavesTo = 1; });
    later(1700, () => { reveal.robotTo = 1; });
    later(2700, () => go("phone"));
    later(3500, () => go("hi"));
    later(4400, () => go("name"));
    later(5800, () => { if (step === "name" || step === "hi") go("swipe"); });
    later(6600, () => { if (step === "swipe") go("ready"); });

    lock.addEventListener("pointerdown", (event) => {
      if (step !== "hi" && step !== "name") return;
      startY = event.clientY;
      lock.classList.add("is-drag");
      lock.setPointerCapture(event.pointerId);
    });
    lock.addEventListener("pointermove", (event) => {
      if (startY == null) return;
      const dy = Math.min(0, event.clientY - startY);
      lock.style.transform = "translateY(" + dy + "px)";
      if (dy < -80) {
        startY = null;
        lock.classList.remove("is-drag");
        go("swipe");
        lock.offsetHeight;
        lock.style.transform = "";
        later(720, () => go("ready"));
      }
    });
    lock.addEventListener("pointerup", () => {
      if (startY == null) return;
      startY = null;
      lock.style.transform = "";
      lock.classList.remove("is-drag");
    });
  }

  function wallById(id) {
    return WALLS.find((item) => item.id === id) || WALLS[0];
  }

  function applyWallMedia() {
    const video = $("wall-video");
    if (!video) return;
    // On phones / data-saver / reduced-motion, never stream the ~11MB video wallpapers.
    const saveData = (navigator.connection && navigator.connection.saveData) || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if ((isNarrowMobile() || saveData) && !wallMode.photo) {
      document.body.dataset.wallKind = "canvas";
      document.body.style.setProperty("--wall-tint", "transparent");
      video.pause(); video.removeAttribute("src"); video.load();
      return;
    }
    if (wallMode.photo) {
      document.body.dataset.wallKind = "photo";
      document.body.style.setProperty("--wall-tint", "rgba(6, 14, 32, 0.28)");
      video.removeAttribute("src");
      video.load();
      document.body.style.backgroundImage = "url(\"gallery/" + wallMode.photo + "\")";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      return;
    }
    document.body.style.backgroundImage = "";
    const preset = wallById(wallMode.id);
    if (preset.kind === "video" && preset.src) {
      document.body.dataset.wallKind = "video";
      document.body.style.setProperty("--wall-tint", preset.tint || "rgba(6, 14, 32, 0.4)");
      if (video.getAttribute("src") !== preset.src) {
        video.src = preset.src;
        video.load();
      }
      const play = video.play();
      if (play && play.catch) play.catch(() => { /* autoplay blocked */ });
      return;
    }
    document.body.dataset.wallKind = "canvas";
    document.body.style.setProperty("--wall-tint", "transparent");
    video.removeAttribute("src");
    video.load();
  }

  function setWall(id) {
    if (WALL_LEGACY[id]) id = WALL_LEGACY[id];
    if (String(id).indexOf("photo:") === 0) wallMode = { id: id, photo: id.slice(6), kind: "photo" };
    else {
      const preset = wallById(id);
      wallMode = { id: preset.id, kind: preset.kind || "canvas" };
    }
    delete document.body.dataset.wall;
    document.body.dataset.wallMode = wallMode.photo ? "photo" : wallMode.id;
    try { localStorage.setItem("dinal-wall", wallMode.id); } catch (err) { /* private mode */ }
    applyWallMedia();
    document.querySelectorAll("button[data-wall]").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.wall === wallMode.id);
    });
  }

  function paintWalls() {
    const picker = $("wall-picker");
    if (!picker) return;
    const presets = WALLS.map((item) => {
      const on = wallMode.id === item.id ? " is-on" : "";
      const bg = item.kind === "video"
        ? "linear-gradient(165deg, " + item.colors[0] + "cc, " + item.colors[2] + "), radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 55%)"
        : "linear-gradient(165deg, " + item.colors[0] + ", " + item.colors[2] + ")";
      const note = item.note ? "<small>" + item.note + "</small>" : "";
      return "<button type=\"button\" class=\"wall-swatch" + on + "\" data-wall=\"" + item.id + "\" style=\"background-image:" + bg + "\">" + item.name + note + "</button>";
    }).join("");
    const shots = state.photos.map((name) => {
      const id = "photo:" + name;
      return "<button type=\"button\" class=\"wall-swatch" + (wallMode.id === id ? " is-on" : "") + "\" data-wall=\"" + id + "\" style=\"background-image:url('gallery/" + name + "')\" aria-label=\"" + name + "\"></button>";
    }).join("");
    picker.innerHTML = presets + shots;
  }

  mount();
  paintWalls();
  try {
    const savedWall = localStorage.getItem("dinal-wall");
    if (savedWall) setWall(savedWall);
    else setWall("waves");
  } catch (err) {
    setWall("waves");
  }
  fetch("gallery/manifest.json").then((res) => res.json()).then((data) => {
    state.photos = Array.isArray(data.images) ? data.images : [];
    paintWalls();
    if (state.app === "gallery") render();
  }).catch(() => { /* gallery folder can stay empty */ });
  tick();
  setInterval(tick, 1000);
  render();
  startBoot();
  startField();
})();
