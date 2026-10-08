# Design system

## Colour
Ink #0b2a30 (text, dark sections). Teal #069fb1 (brand), teal dark #047f8e (buttons), teal deep #065f6b (links on light). Tint #eaf3f4, paper #f6f9f9, lines #d6e3e5 and #a9c3c8. Light cyan #7fd8e4 (accents on dark). Amber #e8a13a (problems, warm light). Dark sections: #0a1d2b, #0f2a39. Edit in css/styles.css :root.

## Type
Manrope (headings, 700-800), Public Sans (body), IBM Plex Mono (labels). Icons: Lucide.

## Page rhythm (home)
Hero dark, Problem dark, How it works white, Find your portal tint, Proof dark photo, Closing CTA dark, Footer dark.

## Interactions
- Hero sun path (js/hero.js): mouse x moves time of day, night to night. Idle auto-drift. Reduced-motion respected.
- Flashlight (css + js/layout.js): dots with a reveal under the cursor. Dark sections reveal whispers (js/whispers.js); light page heroes still reveal the logo arrows.
- Five doors (js/portals.js): hover, focus, click, arrow keys; vertical accordion on mobile.
- Demo booking (js/forms.js): date, time, details always visible; slot required to submit.
- Header dropdowns (js/layout.js): hover, click, Esc, outside click.

## Accessibility
Skip link, visible focus rings, aria-expanded on doors and menus, links in closed doors not tabbable, reduced-motion, alt text.

## Files
index.html and the other pages. css/styles.css (all styles). js/layout.js (header, footer, closer), hero.js, portals.js, whispers.js, forms.js, analytics.js. assets/images, assets/logos (terranxt.png, fitt.png, mark.png, pattern.png), assets/videos. sitemap.xml, robots.txt.

## Global page hero
Every inner page uses <section class="page-hero"> with eyebrow, h1 and lead. Reveal under the cursor is set by data-reveal (whispers is the chosen default; panels, mesh and icons also exist) and js/page-hero.js; edit only the content and the data attributes.
