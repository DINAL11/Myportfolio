(function () {
  const GROUPS = ["Software & systems", "Data & ML", "Product & web", "Healthcare"];

  const PROJECTS = [
    { id: "river", group: "Software & systems", title: "River forecasting", summary: "LSTM models for 48-hour river stage on the Genesee, with the basin map and flood stages beside the model.", tags: ["Python", "LSTM"], links: [
      ["Case study", "project1.html"],
      ["Presentation", "https://docs.google.com/presentation/d/1JNQ4Mwzxzgd_2xqIiGuecXyoxy4_GTv3VXEc3gOxG8k/edit?usp=sharing"]
    ]},
    { id: "osdi-sys", group: "Software & systems", title: "OSDI 2025 systems", summary: "Evaluation-as-a-Service for distributed storage. I produced the results: automated collection, benchmarks, and the charts.", tags: ["C++", "Python"], links: [
      ["Case study", "project2.html"],
      ["Charts", "https://drive.google.com/file/d/1-8VG2pwz7xQCYLGCLjF2DD1eXLSN1szb/view?usp=sharing"]
    ]},
    { id: "ddb", group: "Software & systems", title: "Distributed database", summary: "Consistency tradeoffs on a research database, evaluated on CloudLab with the CPI-NS lab.", tags: ["C++17", "CloudLab"], links: [
      ["Case study", "project17.html"],
      ["GitHub", "https://github.com/CPI-NS/EaaS-spanner-rss"]
    ]},
    { id: "dfs", group: "Software & systems", title: "Distributed file storage", summary: "Fault-tolerant storage with consistent hashing, replication, and a REST API.", tags: ["Java", "Spring"], links: [
      ["Case study", "Project4.html"],
      ["GitHub", "https://github.com/DINAL11/Distributed-File-Storage-System/tree/main"]
    ]},
    { id: "firewall", group: "Software & systems", title: "Enclave firewall", summary: "A Go manager that syncs nftables rules and checks network policy inside containers.", tags: ["Go", "Docker"], links: [
      ["Case study", "project16.html"],
      ["GitHub", "https://github.com/DINAL11/dinal-efw-challenge"]
    ]},
    { id: "bella", group: "Data & ML", title: "Bellabeat case study", summary: "Fitbit data turned into a growth story for a health-tech product.", tags: ["R", "Analytics"], links: [
      ["Kaggle", "https://www.kaggle.com/code/dinaldholiya/bellabeat-case-study"],
      ["Colab", "https://colab.research.google.com/drive/1owJc89J_8Ve90XXZ9AJiTUovjqpyj7ua?usp=sharing"]
    ]},
    { id: "spark", group: "Data & ML", title: "Spark ML", summary: "Classification and clustering on large sets with Spark ML pipelines.", tags: ["Spark", "PySpark"], links: [
      ["Case study", "project7.html"],
      ["GitHub", "https://github.com/DINAL11/spark-data-processing"]
    ]},
    { id: "dataproduct", group: "Data & ML", title: "Interactive data product", summary: "Ingestion, a model, and a deployed UI for one dataset, end to end.", tags: ["Python", "Docker"], links: [
      ["Case study", "project8.html"],
      ["Slides", "https://docs.google.com/presentation/d/126CUWuE9s5fPZ8VQ5XzsR0hZb7TEwAYKvkqWCkJc0vc/edit?usp=sharing"]
    ]},
    { id: "pipeline", group: "Data & ML", title: "Business data pipeline", summary: "ETL plus a creator analytics dashboard for live business numbers.", tags: ["Python", "React"], links: [
      ["Case study", "project9.html"],
      ["Pipeline", "https://github.com/DINAL11/business-data-pipeline"],
      ["Dashboard", "https://github.com/DINAL11/creator-dashboard"]
    ]},
    { id: "cloud", group: "Data & ML", title: "3D word cloud", summary: "Article topics drawn as a word cloud you can orbit.", tags: ["Three.js", "NLP"], links: [
      ["Case study", "project14.html"],
      ["Live", "https://3-d-word-cloud-dinal.vercel.app"],
      ["GitHub", "https://github.com/DINAL11/3D-Word-Cloud-Dinal"]
    ]},
    { id: "healthrec", group: "Data & ML", title: "Health record insights", summary: "A four-phase capstone: clean the records, model them, scale with Spark, ship a Streamlit app.", tags: ["PySpark", "ML"], links: [
      ["Case study", "project24.html"],
      ["GitHub", "https://github.com/DINAL11/scalable-health-predictor"]
    ]},
    { id: "metacore", group: "Product & web", title: "MetaCoreLife", summary: "A social product for challenges and community, with Stripe commerce. Live, not a class demo.", tags: ["React", "Supabase"], links: [
      ["Case study", "project12.html"],
      ["Live", "https://metacorelife.com"],
      ["GitHub", "https://github.com/DINAL11/metacorelife"]
    ]},
    { id: "focus", group: "Product & web", title: "Focus dashboard", summary: "Pomodoro, habits, goals, analytics, and a journal. Nothing leaves the browser.", tags: ["Next.js", "TypeScript"], links: [
      ["Case study", "project18.html"],
      ["GitHub", "https://github.com/DINAL11/focus-dashboard"]
    ]},
    { id: "lost", group: "Product & web", title: "Lost and found", summary: "A portal with live notifications and a layout that works on a phone.", tags: ["React", "Node"], links: [
      ["Case study", "project3.html"],
      ["Live", "https://lost-and-found-portal-nine.vercel.app"],
      ["GitHub", "https://github.com/DINAL11/lost-and-found-portal"]
    ]},
    { id: "ecom", group: "Product & web", title: "Food storefront", summary: "Catalog, cart, checkout, and PayPal for a food client.", tags: ["Node", "PayPal"], links: [
      ["Case study", "project10.html"],
      ["Demo", "https://drive.google.com/file/d/1gZiZxcI2IAK7-DUKwMEB2bCifj0y1nnk/view?usp=sharing"]
    ]},
    { id: "ops", group: "Product & web", title: "OpsPulse", summary: "An internal desk for positions, trades, and exposure.", tags: ["React", "Flask"], links: [
      ["Case study", "project15.html"],
      ["GitHub", "https://github.com/DINAL11/Opspulse"]
    ]},
    { id: "ksense", group: "Healthcare", title: "Ksense risk API", summary: "Patient risk scores with pagination, retries, and checks for bad data.", tags: ["Python", "API"], links: [
      ["Case study", "project22.html"],
      ["GitHub", "https://github.com/DINAL11/ksense-healthcare-assessment"]
    ]},
    { id: "sofia", group: "Healthcare", title: "Sofia Health", summary: "Appointment booking in Django, paid through Stripe PaymentIntents.", tags: ["Django", "Stripe"], links: [
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
    { app: "mail", item: "", kicker: "Now", title: "Open to roles", text: "Chicago. Full-time and collaborations.", when: "Now", icon: "mail" },
    { app: "research", item: "osdi", kicker: "Research", title: "OSDI 2025", text: "Storage evaluation, submitted.", when: "Paper", icon: "research" },
    { app: "life", item: "", kicker: "Life", title: "Off the screen", text: "Hikes, food, and sport.", when: "Today", icon: "life" }
  ];

  const PHONE_APPS = [
    ["projects", "Projects", "#2f6fe0"],
    ["research", "Research", "#8eb6ea"],
    ["extras", "Extras", "#5a4ed0"],
    ["focus", "Focus", "#3d9ad4"]
  ];

  const DESK_APPS = PHONE_APPS.concat([["life", "Life", "#1f6f9a"]]);

  const ICONS = {
    projects: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    research: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
    extras: '<path d="M12 3l2.1 4.6L19 8.2l-3.5 3.3.9 5L12 14.8 7.6 16.5l.9-5L5 8.2l4.9-.6z"/>',
    focus: '<circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/>',
    life: '<path d="M4 16l5-6 3 3 2-2 6 5"/><circle cx="8" cy="7" r="1.4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/>'
  };

  const state = {
    device: "phone",
    app: null,
    item: null,
    group: "All"
  };

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
      <span><small>${n.kicker}</small><strong>${n.title}</strong></span>
      <span class="when">${n.when}</span>
      <em>${n.text}</em>
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
    const conf = CONFERENCES.map((c) => blank(c.href, c.title, "item")).join("");
    const certs = CERTS.map(([label, href]) => blank(href, label, "item")).join("");
    return `<div class="label">Leadership and sport</div>${people}
      <div class="label">Conferences</div>${conf}
      <div class="label">Credentials</div>${certs}`;
  }

  function homeSide() {
    return `<h1>Dinal Dholiya</h1>
      <div class="side-scroll">
        <p>I’m a software engineer in Chicago. I build full-stack products, data systems, and research tooling.</p>
        <p>I’m open to full-time roles and collaborations. Selected work is under Projects, and the OSDI write-up is under Research.</p>
        <p>Thanks for stopping by. Feel free to <a data-blank href="mailto:dinaldholiya@gmail.com">get in touch</a>.</p>
      </div>
      <div class="social">
        <a data-blank href="https://www.linkedin.com/in/dinal-dholiya/" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 9H4V20h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20z"/></svg></a>
        <a data-blank href="https://github.com/DINAL11" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/></svg></a>
        <a data-blank href="mailto:dinaldholiya@gmail.com" aria-label="Email">${svg("mail")}</a>
      </div>`;
  }

  function sideHTML() {
    if (!state.app) return homeSide();
    const titles = { projects: "Projects", research: "Research", extras: "Extras", focus: "Focus", life: "Life", mail: "Contact" };
    if (state.app === "projects") {
      const project = projectById(state.item);
      return `<h1>${project ? project.title : "Projects"}</h1><div class="side-scroll list">${project ? projectDetail(project) : projectList(null)}</div>`;
    }
    if (state.app === "research") {
      const paper = PAPERS.find((p) => p.id === state.item);
      const body = paper
        ? `<p>${paper.note}</p>${blank(paper.href, paper.action)}<div class="stack" style="padding:14px 0 0">${papersHTML()}</div>`
        : `<p>A systems paper submitted to OSDI 2025, two earlier papers, and a poster. Each link opens in a new tab.</p><div class="stack" style="padding:0">${papersHTML()}</div>`;
      return `<h1>Research</h1><div class="side-scroll">${body}</div>`;
    }
    if (state.app === "extras") {
      const extra = EXTRAS.find((item) => item.id === state.item);
      const intro = extra ? `<p><strong style="color:#fff">${extra.title}</strong> — ${extra.place}. ${extra.text}</p>` : `<p>Mentorship, hackathon publicity, outreach, national sport, teaching, conferences, and credentials.</p>`;
      return `<h1>${titles.extras}</h1><div class="side-scroll list">${intro}${extrasHTML()}</div>`;
    }
    if (state.app === "focus") {
      return `<h1>Focus</h1><div class="side-scroll"><p>A private workspace. Pomodoro, habits, goals, and a journal. No account, on purpose.</p>${chips([["Case study", "project18.html"], ["GitHub", "https://github.com/DINAL11/focus-dashboard"]])}</div>`;
    }
    if (state.app === "life") {
      return `<h1>Life</h1><div class="side-scroll"><p>Long trails, new cities, and sport. I competed nationally in roll ball and rugby in India, and I captained teams.</p><p>Photos from the trails are still on their way.</p></div>`;
    }
    return `<h1>Contact</h1><div class="side-scroll"><p>I’m open to roles and to collaborations.</p>${chips([
      ["Email", "mailto:dinaldholiya@gmail.com"],
      ["LinkedIn", "https://www.linkedin.com/in/dinal-dholiya/"],
      ["GitHub", "https://github.com/DINAL11"],
      ["Letters", "LORs.pdf"]
    ])}</div>`;
  }

  function sheetHTML() {
    const back = `<button class="back" type="button" data-back aria-label="Back"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 3L5 8l5 5"/></svg></button>`;
    if (state.app === "projects") {
      const project = projectById(state.item);
      const groups = ["All"].concat(GROUPS).map((group) => {
        const count = group === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.group === group).length;
        return `<button class="group${state.group === group ? " is-on" : ""}" type="button" data-group="${group}">${group}<small>${count} ${count === 1 ? "project" : "projects"}</small></button>`;
      }).join("");
      const detail = project ? `<div class="kicker">${project.summary}</div><div class="groups">${chips(project.links)}</div>` : "";
      return `${back}<div class="sheet-head"><h2>${project ? project.title : "Projects"}</h2></div>
        <p class="kicker">${project ? "Links open in a new tab." : "Choose a group. The projects are listed beside the phone."}</p>
        <div class="groups">${project ? detail : groups}</div>`;
    }
    if (state.app === "research") {
      return `${back}<div class="sheet-head"><h2>Research</h2></div>
        <p class="kicker">Tap a paper. It opens on its own.</p>
        <div class="stack">${papersHTML()}</div>`;
    }
    if (state.app === "extras") {
      return `${back}<div class="sheet-head"><h2>Extras</h2></div>
        <p class="kicker">Leadership, conferences, credentials. Conference and certificate links open in a new tab.</p>
        <div class="stack list">${extrasHTML()}</div>`;
    }
    if (state.app === "focus") {
      return `${back}<div class="sheet-head"><h2>Focus</h2></div>
        <p class="kicker">A clock, habits, and a journal that stay on this machine.</p>
        <div class="groups">${chips([["Case study", "project18.html"], ["GitHub", "https://github.com/DINAL11/focus-dashboard"]])}</div>`;
    }
    if (state.app === "life") {
      return `${back}<div class="sheet-head"><h2>Off the clock</h2></div>
        <p class="kicker">Hiking, food, cities, roll ball, and rugby.</p>`;
    }
    return `${back}<div class="sheet-head"><h2>Say hello</h2></div>
      <p class="kicker">Each of these opens in a new tab.</p>
      <div class="groups">${chips([
        ["Email", "mailto:dinaldholiya@gmail.com"],
        ["LinkedIn", "https://www.linkedin.com/in/dinal-dholiya/"],
        ["GitHub", "https://github.com/DINAL11"],
        ["Letters", "LORs.pdf"]
      ])}</div>`;
  }

  function windowHTML() {
    if (!state.app) return "";
    if (state.app === "projects") {
      const project = projectById(state.item);
      if (project) {
        return `<button class="back dark" type="button" data-clear-item>All projects</button>${projectDetail(project)}`;
      }
      const filters = ["All"].concat(GROUPS).map((group) => `<button class="filter${state.group === group ? " is-on" : ""}" type="button" data-group="${group}">${group}</button>`).join("");
      return `<div class="chips">${filters}</div><div class="list">${projectList(null)}</div>`;
    }
    if (state.app === "research") {
      return `<p>Open a paper in a new tab. This page stays where it is.</p><div class="stack" style="padding:0">${papersHTML()}</div>`;
    }
    if (state.app === "extras") return `<div class="list">${extrasHTML()}</div>`;
    if (state.app === "focus") return `<p>Pomodoro, habits, goals, and a journal. No account.</p>${chips([["Case study", "project18.html"], ["GitHub", "https://github.com/DINAL11/focus-dashboard"]])}`;
    if (state.app === "life") return `<p>Long trails, new cities, and sport. I competed nationally in roll ball and rugby in India, and I captained teams.</p><p>Photos from the trails are still on their way.</p>`;
    return `<p>Open any of these in a new tab.</p>${chips([
      ["Email", "mailto:dinaldholiya@gmail.com"],
      ["LinkedIn", "https://www.linkedin.com/in/dinal-dholiya/"],
      ["GitHub", "https://github.com/DINAL11"],
      ["Letters", "LORs.pdf"]
    ])}`;
  }

  function titles() {
    if (state.app === "projects" && state.item) return projectById(state.item).title;
    return { projects: "Projects", research: "Research", extras: "Extras", focus: "Focus", life: "Life", mail: "Contact" }[state.app] || "Dinal";
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
    document.querySelectorAll("[data-device-set]").forEach((btn) => {
      const on = btn.dataset.deviceSet === state.device;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const hash = ["#" + state.device, state.app, state.item].filter(Boolean).join("/");
    if (location.hash !== hash) history.replaceState(null, "", hash);
  }

  function openApp(app, item) {
    state.app = app;
    state.item = item || null;
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
    state.device = device;
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
      event.preventDefault();
      window.open(blankLink.getAttribute("href"), "_blank", "noopener,noreferrer");
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
      $("win").classList.add("is-min");
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
    const opener = event.target.closest("[data-open]");
    if (opener) openApp(opener.dataset.open, opener.dataset.item);
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
  const saved = (() => { try { return localStorage.getItem("dinal-device"); } catch (err) { return null; } })();
  const named = { phone: "phone", laptop: "laptop", desktop: "desktop", imac: "laptop" };
  if (named[parts[0]]) state.device = named[parts[0]];
  else if (named[saved]) state.device = named[saved];
  else if (window.matchMedia("(max-width: 760px)").matches) state.device = "phone";
  else if (window.matchMedia("(max-width: 1180px)").matches) state.device = "laptop";
  else state.device = "desktop";
  if (parts[1]) state.app = parts[1];
  if (parts[2]) state.item = parts[2];

  mount();
  tick();
  setInterval(tick, 1000);
  render();
})();
