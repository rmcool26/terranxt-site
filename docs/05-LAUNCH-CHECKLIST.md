# Launch checklist

## Connect
- [ ] js/analytics.js: GA4 ID and Clarity ID (loads after cookie consent)
- [ ] js/forms.js: Odoo endpoints for demo, careers, artha, investor
- [ ] Demo booking: Odoo Appointments module or Cal.com (needs server-side slot lock)
- [ ] js/layout.js and js/portals.js: exact login and sign-up URLs for each portal
- [ ] Store links: apps.html, footer, product pages (currently #)
- [ ] Footer LinkedIn and YouTube links (currently #)

## Supply
- [ ] Real photos: proof-wide.jpg (2400x1030), team photos (Manish Singhal, Deepansh Sharma), og.jpg (1200x630)
- [ ] Studio screenshot, Artha mock (door and Artha page), phone screens for Apps
- [ ] Demo videos (YouTube unlisted embeds; set URLs)
- [ ] Logos as SVG: Terranxt, FITT, Astongreens
- [ ] Sample BOQ and proposal PDFs
- [ ] Written approval and roles for the two quotes
- [ ] Legal text: Privacy, Terms, Cookies; Artha risk disclosure and eligibility, fees, exit (after legal review)
- [ ] Confirm: Atlas 24-hour turnaround, data security line, supported inverters, support response time

## Fix before launch
- [ ] Convert PNG images to WebP, under 200 KB each
- [ ] Self-host fonts; replace the Lucide CDN with inline SVGs
- [ ] Header, footer and closer are injected by JS; prerender them into the HTML for SEO and no-JS users
- [ ] Verify domain in canonical tags and sitemap.xml (terranxt.com)
- [ ] Run Lighthouse and axe; test on real phones
- [ ] Polish remaining pages with the same system as the home page

## After launch
- [ ] Read heatmaps and the demo funnel after 30 days; fix the top 3 drop-offs
- [ ] Add measured numbers once they exist
- [ ] Savings calculator, glossary, release notes page
- [ ] Revamp astongreens.com (stays on Odoo)

## Added in the last round
- [ ] Save the Astongreens logo to assets/logos/astongreens.png
- [ ] Replace placeholders: Atlas compare images (satellite and 3D of the same roof, 1920x960), product screenshots (1440x960), overview and product demo videos, team portraits (800x1000), project photo on Artha sample card
- [ ] Add endpoint `atlas` in js/forms.js (Odoo form)
- [ ] Confirm the FITT link (fitt-iitd.in) and the FITT logo usage
- [ ] Founder notes: each founder to approve their line
- [ ] Wording check with legal: Artha heading "Invest in solar projects"
