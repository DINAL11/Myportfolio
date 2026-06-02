import fs from 'fs';
import path from 'path';

const head = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}}</title>
    <meta name="description" content="{{DESC}}">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="{{BODY_CLASS}}" data-page="{{PAGE_ID}}">
    <div class="animated-bg calm-bg" aria-hidden="true">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
    </div>
    <div id="site-header"></div>
    <main class="page-main">
`;

const foot = `
    </main>
    <div id="site-footer"></div>
    <script src="js/site.js" defer></script>
</body>
</html>`;

function readSection(name, stripHeader = false) {
  let html = fs.readFileSync(path.join('_sections', `${name}.html`), 'utf8');
  if (stripHeader) {
    html = html.replace(/<div class="section-header">[\s\S]*?<\/div>\s*/m, '');
  }
  return html;
}

function page(title, desc, pageId, bodyClass, inner) {
  return head
    .replace('{{TITLE}}', title)
    .replace('{{DESC}}', desc)
    .replace('{{BODY_CLASS}}', bodyClass)
    .replace('{{PAGE_ID}}', pageId)
    + inner
    + foot;
}

const aboutInner = `
        <header class="page-hero reveal">
            <p class="page-eyebrow">About</p>
            <h1 class="page-title">A bit about me</h1>
            <p class="page-lead">Engineer, teammate, and someone who likes a good trail as much as a good problem to solve.</p>
        </header>
        ${readSection('about', true).replace('about-section', 'about-section page-section')}
`;

const skillsInner = `
        <header class="page-hero reveal">
            <p class="page-eyebrow">Skills</p>
            <h1 class="page-title">What I work with</h1>
            <p class="page-lead">Web development, Shopify & e-commerce, data, and systems — grouped by what I reach for on real projects.</p>
        </header>
        ${readSection('skills', true).replace('skills-section', 'skills-section page-section')}
`;

const workInner = `
        <header class="page-hero reveal">
            <p class="page-eyebrow">Work</p>
            <h1 class="page-title">Projects & case studies</h1>
            <p class="page-lead">Things I've built and explored in depth.</p>
        </header>
        ${readSection('projects').replace('projects-section', 'projects-section page-section')}
        ${readSection('caseStudies')}
`;

const contactInner = `
        <header class="page-hero reveal">
            <p class="page-eyebrow">Contact</p>
            <h1 class="page-title">Say hello</h1>
            <p class="page-lead">Open to conversations about work, collaboration, or just connecting.</p>
        </header>
        ${readSection('contact', true).replace('contact-section', 'contact-section page-section')}
`;

fs.writeFileSync(
  'about.html',
  page("About — Dinal Dholiya", "About Dinal Dholiya", 'about', 'page-inner', aboutInner)
);
fs.writeFileSync(
  'skills.html',
  page("Skills — Dinal Dholiya", "Technical skills", 'skills', 'page-inner', skillsInner)
);
fs.writeFileSync(
  'work.html',
  page("Work — Dinal Dholiya", "Projects and case studies", 'work', 'page-inner', workInner)
);
fs.writeFileSync(
  'contact.html',
  page("Contact — Dinal Dholiya", "Get in touch", 'contact', 'page-inner', contactInner)
);

console.log('Built about, skills, work, experience, contact');
