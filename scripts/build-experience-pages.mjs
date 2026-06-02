import fs from 'fs';

const head = (title, desc, pageId) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${desc}">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="page-inner page-experience-sub" data-page="experience">
    <div class="spatial-bg calm-bg" aria-hidden="true">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
    </div>
    <div id="site-header"></div>
    <main class="page-main">
        <nav class="exp-breadcrumb reveal" aria-label="Breadcrumb">
            <a href="experience.html">Experience</a>
            <span aria-hidden="true">/</span>
            <span>{{CRUMB}}</span>
        </nav>
`;

const foot = `
    </main>
    <div id="site-footer"></div>
    <script src="js/site.js" defer></script>
</body>
</html>`;

function readSection(name) {
  return fs.readFileSync(`_sections/${name}.html`, 'utf8');
}

const hub = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Experience — Dinal Dholiya</title>
    <meta name="description" content="Leadership, certifications, research, and conferences">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="page-inner" data-page="experience">
    <div class="spatial-bg calm-bg" aria-hidden="true">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
    </div>
    <div id="site-header"></div>
    <main class="page-main">
        <header class="page-hero reveal">
            <p class="page-eyebrow">Experience</p>
            <h1 class="page-title">Beyond the codebase</h1>
            <p class="page-lead">Leadership, certifications, research, and conferences — pick a section to explore.</p>
        </header>
        <section class="exp-hub page-section reveal">
            <div class="container">
                <div class="exp-hub-grid">
                    <a href="leadership.html" class="exp-hub-card">
                        <span class="exp-hub-icon"><i class="fas fa-users"></i></span>
                        <h2>Leadership</h2>
                        <p>Mentorship, outreach, athletics, and community roles.</p>
                        <span class="exp-hub-cta">View <i class="fas fa-arrow-right"></i></span>
                    </a>
                    <a href="certifications.html" class="exp-hub-card">
                        <span class="exp-hub-icon"><i class="fas fa-certificate"></i></span>
                        <h2>Certifications</h2>
                        <p>Professional credentials in data, cloud, and analytics.</p>
                        <span class="exp-hub-cta">View <i class="fas fa-arrow-right"></i></span>
                    </a>
                    <a href="research.html" class="exp-hub-card">
                        <span class="exp-hub-icon"><i class="fas fa-flask"></i></span>
                        <h2>Research & writing</h2>
                        <p>Publications, technical papers, and posters.</p>
                        <span class="exp-hub-cta">View <i class="fas fa-arrow-right"></i></span>
                    </a>
                    <a href="conferences.html" class="exp-hub-card">
                        <span class="exp-hub-icon"><i class="fas fa-microphone"></i></span>
                        <h2>Conferences</h2>
                        <p>Events in tech, research, and women in computing.</p>
                        <span class="exp-hub-cta">View <i class="fas fa-arrow-right"></i></span>
                    </a>
                </div>
            </div>
        </section>
    </main>
    <div id="site-footer"></div>
    <script src="js/site.js" defer></script>
</body>
</html>`;

const pages = [
  { file: 'leadership.html', section: 'leadership', crumb: 'Leadership', title: 'Leadership — Dinal Dholiya' },
  { file: 'certifications.html', section: 'certifications', crumb: 'Certifications', title: 'Certifications — Dinal Dholiya' },
  { file: 'research.html', section: 'research', crumb: 'Research & writing', title: 'Research — Dinal Dholiya' },
  { file: 'conferences.html', section: 'conferences', crumb: 'Conferences', title: 'Conferences — Dinal Dholiya' },
];

fs.writeFileSync('experience.html', hub);
for (const p of pages) {
  const inner = readSection(p.section).replace(
    /class="([^"]+)-section"/,
    'class="$1-section page-section"'
  );
  fs.writeFileSync(
    p.file,
    head(p.title, p.crumb, 'experience')
      .replace('{{CRUMB}}', p.crumb)
      + `\n        ${inner}\n`
      + foot
  );
}
console.log('Built experience hub +', pages.map((p) => p.file).join(', '));
