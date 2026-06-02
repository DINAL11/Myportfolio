import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('.').filter(
  (f) => /^project\d+\.html$/i.test(f) || /^Project\d+\.html$/.test(f)
);

const fontLink =
  '<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">';

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');

  if (!html.includes('project.js')) {
    html = html.replace('</body>', '    <script src="js/project.js" defer></script>\n</body>');
  }

  html = html.replace(
    /family=Poppins[^"']+Orbitron[^"']+"/,
    "family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Space+Grotesk:wght@500;600;700&display=swap\""
  );

  if (!html.includes('DM+Sans') && html.includes('Poppins')) {
    html = html.replace('</head>', `    ${fontLink}\n</head>`);
  }

  html = html.replace(/<body>/, '<body class="project-page">');
  html = html.replace(/href="index\.html"/g, 'href="work.html"');
  html = html.replace(/Back to Portfolio/g, 'Back to work');
  html = html.replace(/← Back to Portfolio/g, '← Back to work');

  fs.writeFileSync(file, html);
  console.log('Patched', file);
}
