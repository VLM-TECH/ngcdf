# Sabatia NG-CDF Project Showcase — Implementation Plan

## Source scope and content guardrails

The authoritative source set currently includes:

- `fineprint.pdf`: The Sabatian / NG-CDF Sabatia 2022–2026 newsletter.
- `photobook.pdf`: The Sabatian 2022–2026 photobook.

The site will preserve source wording, names, locations, dates, figures, and captions where available. It will not invent missing facts. Where a project is named but details are incomplete, the site will show only the verified name and available context. Decorative filler text visible in the PDF will be excluded. The project directory will consolidate repeated mentions of the same institution/project into one record, with aliases or related work noted only when the source makes that relationship clear.

## Product approach

Build a fast, static-first React/Vite website with a single source-of-truth content model:

- `src/data/projects.ts`: master project inventory and verified facts.
- `src/data/newsletter.ts`: newsletter sections, leadership messages, statistics, and achievements.
- `src/data/photos.ts`: photo metadata, source page/section, caption, and project/category associations.
- `src/components/`: navigation, project cards, filters, gallery/lightbox, story sections, newsletter blocks, and reusable layout primitives.
- `src/pages/`: Home, Projects directory, Project detail, Photo Book, Newsletter, About, and Contact.
- `public/manus-routes.json`: complete route manifest for the SPA and dynamic project route.
- `public/assets/`: supplied photo assets uploaded from the provided photobook/newsletter PDFs.

The site will run on the managed Webdev preview port 3000, with no server/database because the supplied source material is a static archive. Vite will produce a publishable static `dist/` directory.

## Information architecture

- `/` — editorial home with hero, constituency snapshot, featured projects, highlights, newsletter teaser, and photo strip.
- `/projects` — searchable/filterable master directory for every distinct project or named project cluster in the sources.
- `/projects/:slug` — story-like detail pages with need / action / place / beneficiaries / result framing, only when the source supports it.
- `/photobook` — visual archive organized by education, infrastructure/security, roads/bridges, electrification, water, sports, leadership, and other source sections; click-to-open lightbox.
- `/newsletter` — readable digital edition of The Sabatian, 2022–2026, including foreword, messages, statistics, achievements, and project updates.
- `/about` — concise source-based overview of Sabatia and NG-CDF priorities.
- `/contact` — only contact information explicitly found in the supplied materials; if none is present, show a transparent “Contact details were not included in the supplied source materials” note rather than inventing details.

## Initial project inventory to represent

The content model will include, at minimum, the named projects and project clusters visible in the sources: Ondeyo Primary School storey block; Bugina Primary School storey building; Chandumba Secondary School tuition/classroom block; Kivagala Secondary School classrooms; Mwilitsa Primary School modern classroom construction; Walodeya Assistant Chief’s Office; other Assistant Chiefs’ offices named in the newsletter (Gaigedi, Kedoli, Budaywa, Itegero, Chamakanga, Kisatiru, Hamuyundi, Mbale, Demesi, Mulundu); Maganyi Bridge; Busamu Crossing Point; Loveyi Bridge; Chavakali–Eregi Road (10.9 km, in-progress/once completed language preserved); Mago–Mululu–Lusui Road works; Munoywa Technical Lab; Lusengeli Secondary School solar-powered laboratory; Givudiani Secondary School modern JSS classrooms; Mukingi Secondary School raised solar-powered water tank; Sabatia KMTC at Kegondi (construction began 2022, KSh 75.7 million, expected first admission March 2027); education renovations and JSS/classroom works named in the photobook (Givudiani Primary, Ikuvu Primary, Chamasilihi Primary, Wndega/Wandega Primary as printed, Wamage Primary, Hamadira Primary, Itegero Primary, Mambai Primary, Viyalo Primary, Jemovo Secondary, Mudngu Primary, Lyaduywa Primary, Isitsi Primary, Wangulu Secondary ICT Labs, Bugina Secondary ICT Labs, Kapsambo Primary, Hamuyundi Primary, Davanga Primary, Vihindi Primary, Mbale Primary, Kigama Primary tile flooring); sanitation/ablution blocks as a source section where institution-level names are not supplied; rural electrification works at Mbesu Village/North Maragoli, Evojo, Igunga–Lusala, Hekerongo, Demesi, and Nadanya; sports as a source section when no specific project name is printed; land acquisition for future expansion; bursary support; and the Sabatia NG-CDF Board Members section.

If the source contains a spelling discrepancy such as `Wndega/Wandega`, the displayed source spelling will be preserved and a note will flag the discrepancy rather than silently normalizing it.

## Design direction

- **Design movement:** Editorial civic archive / documentary modernism — a public-interest publication translated into a calm, image-led web experience.
- **Core principles:** evidence before ornament; people and places first; generous readability; clear wayfinding.
- **Color philosophy:** warm paper and limestone neutrals create trust and let documentary photography lead; a deep indigo/ink tone gives institutional credibility; a living green accent reflects Sabatia’s agriculture, growth, and renewal; a restrained warm gold marks milestones and calls to action.
- **Layout paradigm:** asymmetric editorial rhythm with wide image bands, offset text columns, and horizontal “field notes” rather than generic centered card grids.
- **Signature elements:** an ink-blue vertical rail for section labels; numbered project markers; subtle paper-grain/contour-line motifs behind metadata panels.
- **Interaction philosophy:** filters and navigation should feel like browsing a curated archive, with immediate feedback, visible active states, keyboard-accessible controls, and no hidden facts behind novelty interactions.
- **Animation:** short, low-motion fades and image reveals; hover lift limited to cards; respect `prefers-reduced-motion`.
- **Typography:** `DM Sans` for UI/body clarity paired with `Fraunces` for editorial headlines and pull quotes; strong contrast and fluid type scale.
- **Brand essence:** “A living record of how Sabatia’s shared investments are changing everyday life.” Personality: grounded, hopeful, accountable.
- **Brand voice:** precise, human, and civic. Example lines: “Development is measured in the journeys people can now make.” / “Browse the projects, places, and people behind Sabatia’s 2022–2026 story.”
- **Wordmark/mark:** a compact `S` monogram built from two offset path lines (river/road + page fold), paired with the wordmark “THE SABATIAN / NG-CDF”.
- **Signature brand color:** Sabatia ink `#173B4D`, used as the ownable anchor across navigation, labels, and editorial bands.

## Build workflow

1. Create the project content model and route manifest.
2. Extract and optimize supplied PDF photographs, upload them into project storage, and associate them only with source-supported projects/sections.
3. Implement the responsive React/Vite interface and interactions.
4. Register TypeScript diagnostics before the first code batch and resolve actionable issues.
5. Run the app on port 3000, verify routes and the route manifest, then inspect desktop and mobile previews for concrete issues.
6. Build the static output and checkpoint the completed site to the canonical repository.

## Material constraints

- Do not use stock or invented project imagery.
- Do not generate lookalike people or places.
- Do not invent contact details, dates, costs, beneficiaries, completion status, or project outcomes.
- Do not omit a named project from the master directory.
- Keep the photo book as a visual-first experience while preserving source captions and acknowledging when a caption is unavailable.
