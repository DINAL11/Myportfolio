import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');

function extract(startMarker, endMarker) {
  const s = html.indexOf(startMarker);
  const e = html.indexOf(endMarker, s);
  if (s === -1 || e === -1) throw new Error(`Missing: ${startMarker}`);
  return html.slice(s, e).trim();
}

const sections = {
  about: extract('<!-- About Section -->', '<!-- Skills Section -->'),
  skills: extract('<!-- Skills Section -->', '<!-- Projects Section -->'),
  projects: extract('<!-- Projects Section -->', '<!-- Case Studies Section -->'),
  caseStudies: extract('<!-- Case Studies Section -->', '<!-- Leadership Section -->'),
  leadership: extract('<!-- Leadership Section -->', '<!-- Certifications Section -->'),
  certifications: extract('<!-- Certifications Section -->', '<!-- Research Section -->'),
  research: extract('<!-- Research Section -->', '<!-- Conferences Section -->'),
  conferences: extract('<!-- Conferences Section -->', '<!-- Contact Section -->'),
  contact: extract('<!-- Contact Section -->', '<!-- Footer -->'),
};

fs.mkdirSync('_sections', { recursive: true });
for (const [k, v] of Object.entries(sections)) {
  fs.writeFileSync(`_sections/${k}.html`, v);
}
console.log('Extracted', Object.keys(sections).join(', '));
