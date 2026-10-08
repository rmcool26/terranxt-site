# Final audit and testing

Date of this audit: after the About page and footer fixes. Method: static scan of all 20 pages (links, local files, ids, alt text, headings, titles, meta), plus review of each page against the approved designs. Browser, Lighthouse and real-device tests are still to run (see below).

## Automated scan result (20 pages)
- Duplicate ids: none. Images without alt text: none. Pages with exactly one h1: all.
- Titles and meta descriptions: present on all pages.
- Anchors (#portals, #video, #interest, #roadmap, #why, #people, #partners, #request): all resolve.
- Missing local files: 2, both expected placeholders.
  - assets/images/proof-wide.jpg (home proof photo; a stand-in shows with a label until it exists)
  - assets/logos/astongreens.png (About; falls back to the live astongreens.com logo, then text)

## Score (our estimate, images and copy assumed in place)
| Lens | Score | Note |
|---|---|---|
| 3-second pitch | 8.6 | Hero, one action |
| IA and flow | 8.6 | Each page follows what / why / how / proof / act |
| Copy | 8.4 | Short, no unmeasured numbers |
| Visual design and brand | 8.7 | Consistent dark-light rhythm, flashlight, whispers |
| UX and navigation | 8.3 | Simple header, Previous/Next, per-page CTA |
| Conversion design | 8.2 | One primary action per page; forms on Atlas, Artha, Demo, Careers |
| Trust and proof | 7.0 | Draft quotes, no logos or case studies yet |
| Product showcase | 7.4 | Depends on real screenshots and videos |
| SEO | 7.0 | Meta, schema, sitemap; header/footer still JS-injected |
| Accessibility | 7.8 | Skip link, focus rings, aria, reduced motion; needs axe |
| Performance | 6.6 | PNGs, CDN fonts and icons; needs WebP and self-hosting |
| Measurement | 6.0 | Hooks in, IDs empty |
| Overall | about 8.0 | About 8.6 once the open items below are done |

Competitors (our estimate): SurgePV about 8.5, HelioScope about 8.0. We lead on clarity, routing by role, brand feel and lifecycle breadth. We trail on testimonials and logos, product screenshots, SEO content and tracking history.

## Manual test list before launch
1. Open every page at 1440, 1024, 768 and 390 px. Check header menus, dropdowns, burger.
2. Hover states: closing CTA link, footer social icons, store pills, wordmark band, doors on home, tabs.
3. Forms: Demo booking (date, slot, details), Careers (5 MB limit), Artha, Atlas. Each must show the thank-you state and post to Odoo.
4. Keyboard: Tab through header, doors, tabs, FAQ, compare slider (arrow keys), Esc closes menus.
5. Reduced motion: hero sun path and whispers stay still.
6. Lighthouse (mobile) and axe on home, a product page, demo.
7. Cookie consent: analytics loads only after consent.
8. 404 page and all legal links.

## CRO tracker (impact and effort 1-5)
| # | Change | Imp | Eff |
|---|---|---|---|
| 1 | Real product visuals in hero and product pages | 5 | 2 |
| 2 | Named quotes with roles and photos | 5 | 2 |
| 3 | Forms connected to Odoo | 5 | 2 |
| 4 | Analytics live (GA4, Clarity) | 5 | 1 |
| 5 | Demo videos | 4 | 3 |
| 6 | Home FAQ and per-page CTA tests | 3 | 1 |
| 7 | Artha wording after legal review | 4 | 1 |
| 8 | WebP images, self-hosted fonts and icons | 3 | 2 |
| 9 | Prerender header, footer and closer | 4 | 2 |
| 10 | Savings calculator and glossary (SEO) | 3 | 3 |

## Tracking plan (events)
cta_signup_click (portal, section), portal_login_click, demo_date_selected, demo_slot_selected, demo_booked, video_play and completion, sample_download, artha_interest_submit, atlas_request_submit, resume_submit, app_badge_click, scroll_75 on home. Store the UTM source with every lead in Odoo.
