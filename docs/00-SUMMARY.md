# Project summary

## Goal
Revamp terranxt.com so that a first-time visitor understands, within 3 seconds, what Terranxt and pvNXT are, which portal is theirs, and how to start. Audiences: EPC companies, installers, anyone going solar, plant/O&M teams, investors (Artha). Stage: no funding, no external users yet; pvNXT is in beta and used internally by the parent company Astongreens (a solar EPC).

## Facts we agreed on
- Terranxt builds **pvNXT**: Atlas (satellite to 3D roof model, in-house imagery team, no login, ~24 h) plus five portals: Studio (epc.pvnxt.com), Go (installer.pvnxt.com), Connect (consumer.pvnxt.com), SCADA (scada.pvnxt.com), Artha (artha.pvnxt.com).
- All portals are self-serve sign-up. Beta, free. Android and iOS app for each portal (store links are # for now). Artha is early access; legal papers are in process, so no "invest" or returns language yet.
- EPC and installation services are done by **Astongreens** (parent company). Link out to astongreens.com. Astongreens' own site stays on Odoo; its revamp has not started.
- IIT Delhi–FITT incubated since 2023. Use the FITT logo only. The IIT Delhi emblem needs written permission, so it is not used.
- Address: 12A, M3M Urbana Premium, Sector 67, Gurugram 122101. Email support@terranxt.com. WhatsApp +91 84474 44157.
- Team: Manish Singhal (CEO), Deepansh Sharma (Co-founder). Quotes (draft, need approval): Prabhat Lakhera, Dheeraj Malani.
- No unmeasured numbers anywhere (the old 90%, 3x, 40%, CO2 and "15-20 min" claims were dropped).

## How the work went
1. Analysed terranxt.com, pvnxt.com and the pvNXT GitHub repo; decided: pvNXT is the product story, Terranxt is the company wrapper.
2. Competitor analysis (SurgePV, HelioScope read directly; Aurora, OpenSolar, Scanifly, Arka360 from search).
3. Sitemap v1, then v2 after feedback (Atlas added, About+Roadmap merged, Careers page, slot-booking demo, Gurugram address, simple header).
4. Final copy, then greyscale wireframes, then the design build.
5. First audit scored the build 6.0/10 (placeholders, no proof, no tracking, forms not wired). Week-1 blockers fixed: analytics (GA4 + Clarity, after consent), OG/canonical/sitemap/robots, /investors page, team, quotes, Odoo form hooks.
6. Header and footer reworked (dropdown bug, Help moved under Contact, login dropdown with per-portal Log in and Sign up, closing CTA block).
7. Homepage built section by section, each with options and a pick (below).

## Homepage: options explored and what we chose
| Section | Chosen | Notes |
|---|---|---|
| Pattern / background | Flashlight (1c) | Dots by default; content revealed under the cursor |
| Hero | 4a: sun path on a solar array | Mouse moves the sun from night through day and back; day-on-platform card; one button |
| Problem | 5c: Today vs pvNXT table (no time column) | Dark, flashlight with whispers |
| How it works | 6a: three scenes (Scan, Design, Deliver) | "See the full flow" moved to the header; images from Gemini |
| Find your portal | 8a: five doors, polished | Buttons say "Open Studio" etc.; roles: run a solar business, install, go solar, run/monitor a plant, invest |
| Proof | 9b: cinematic full-bleed + two quotes | Quotes merged into the section; photo is a placeholder |
| Flashlight reveal | 10c: whispers | Pain messages in the Problem section, success messages in the closer |
| Closing CTA | "Start with one project." | Button goes to the portal chooser; demo is a text link |
Removed as redundant: "One platform", "On your phone too" strip, "Try it free during beta" section.

## Status
Built: 20+ pages (home, products, Atlas, Studio, Go, Connect, SCADA, Artha, apps, how it works, about+roadmap, careers, investors, demo with slot booking, contact+help, legal, 404), analytics hooks, SEO basics, accessibility basics.
Homepage polished through all sections. Other pages still use the earlier design and should get the same polish next.
Still needed: see 05-LAUNCH-CHECKLIST.md.

---
## Update: pages built and approved after the homepage

| Page | Chosen design | Notes |
|---|---|---|
| Header / footer | Light footer (14a) + hero-sky wordmark band | Closing CTA is per page (data-cta-* on <body>). Wordmark band is light, same tint as the footer, flashlight on hover. |
| Products | 13d, project stages (Plan, Build, Run, Invest) | Two equal buttons per row: Open X (new tab) and Learn more. |
| Page hero (all inner pages) | 11d, page-aware whispers | data-reveal and data-whispers on each hero. |
| Studio, Go, Connect, SCADA | 17a template | Text-first hero, Replaces, inline demo video, 3 role cards, zigzag How it works with outputs band, FAQ section, Previous/Next. |
| Atlas | 20a | Request form in hero, drag-to-compare viewer, layer chips, 3 steps, Used in, FAQ. |
| Artha | 20b | Early-access form in hero, full-width centered risk band, 4 steps, sample project card, FAQ. |
| How it works | 22a | Zigzag spine that is the "one project record", progress rail, inline video, FAQ. |
| About | 24a | Why we exist (dark, whispers) > The people > Who we work with (FITT, Astongreens logos) > Roadmap board > Careers. |
Previous / Next order on product pages: Atlas, Studio, Go, Connect, SCADA, Artha.

## Final fixes in the last round
- Closing CTA text link now visible on hover (footer link colours were overriding it).
- Footer social icons are visible on hover.
- Footer address reads: 12A, M3M Urbana Premium / Sector 67, Gurugram 122101.
- Wordmark band is light and matches the footer.
- Product-page copy cleaned: no unverified claims (removed "takes 2 minutes", "data is encrypted", weak-network sync).

## Still open (see 05-LAUNCH-CHECKLIST.md)
Real images and videos, Astongreens logo file, analytics IDs, Odoo form endpoints and booking backend, store and social links, legal text, quote approvals, Artha wording ("Invest") after legal review.
