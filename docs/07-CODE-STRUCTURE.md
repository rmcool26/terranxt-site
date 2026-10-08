# Code structure

```
terranxt-site/
  index.html                 Home
  products.html              Products (project stages)
  apps.html  how-it-works.html  about.html  careers.html
  investors.html  contact.html (Help center at #help)  demo.html
  privacy.html terms.html cookies.html artha-risk.html  404.html
  products/                  atlas, studio, go, connect, scada, artha
  css/styles.css             All styles. Colours and fonts in :root
  js/
    layout.js                Header, dropdowns, footer, closing CTA, previous/next
    page-hero.js             Page-aware whispers on every .page-hero
    whispers.js              Whispers in dark sections (problem, closer)
    hero.js                  Home hero sun path
    portals.js               Home "find your portal" doors
    widgets.js               Atlas compare slider and layer chips
    hiw.js                   How it works progress rail and spine
    forms.js                 Forms, demo booking, tabs. Odoo endpoints in TX_CONFIG
    analytics.js             GA4 and Clarity, loaded after consent
  assets/images  logos  videos
  docs/                      Summary, sitemap, content, design, audit, checklist, prompts
  sitemap.xml  robots.txt
```

## How to change things
- **Page content:** edit the HTML in each page. Header, footer and closing CTA come from layout.js.
- **Closing CTA text per page:** data-cta-eyebrow, data-cta-title, data-cta-text, data-cta-btn, data-cta-href, data-cta-link, data-cta-link-href on <body>. data-cta="none" hides it.
- **Hero whispers:** data-whispers="A|B|C" on the .page-hero section.
- **Footer, menus, login links:** js/layout.js.
- **Forms to Odoo:** js/forms.js, TX_CONFIG.endpoints.
- **Analytics IDs:** js/analytics.js.
- **Colours and fonts:** :root in css/styles.css.
