# AstroCET — Official Website

> The astronomy club website of the **College of Engineering Trivandrum (CET)**.  
> Built with React + Vite. Single-page, fully responsive, no external component libraries.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [File Reference](#file-reference)
  - [src/main.jsx](#srcmainjsx)
  - [src/index.css](#srcindexcss)
  - [src/App.jsx](#srcappjsx)
  - [src/App.css](#srcappcss)
  - [src/assets/](#srcassets)
- [Design System](#design-system)
  - [Typography](#typography)
  - [Colour Palette](#colour-palette)
  - [CSS Variables](#css-variables)
- [Components](#components)
  - [StarField](#starfield)
  - [Cursor](#cursor)
  - [MagBtn](#magbtn)
  - [MemberCard](#membercard)
- [Page Sections](#page-sections)
  - [Navbar](#navbar)
  - [Hero](#hero)
  - [Stats Bar](#stats-bar)
  - [About](#about)
  - [Events](#events)
  - [Announcements](#announcements)
  - [Team](#team)
  - [Gallery](#gallery)
  - [Contact](#contact)
  - [Footer](#footer)
- [Data / Content](#data--content)
  - [EVENTS](#events-array)
  - [CURRENT\_ECOMM](#current_ecomm)
  - [CURRENT\_DEPTS](#current_depts)
  - [PREV\_ECOMM](#prev_ecomm)
- [Animations & Interactions](#animations--interactions)
- [Responsive Behaviour](#responsive-behaviour)
- [How to Run](#how-to-run)
- [How to Update Content](#how-to-update-content)
- [Social Links](#social-links)
- [Credits](#credits)

---

## Overview

AstroCET's website is a single-page React application that serves as the central online presence for the astronomy club of the College of Engineering Trivandrum. It covers the club's story, past events, the current and previous executive committees and department teams, a photo gallery, and contact information — all wrapped in a space-themed, highly animated dark UI.

Key design decisions:

- **No UI component libraries** — every element is hand-crafted with plain CSS.
- **No external icon packages** — every icon is an inline SVG component defined directly in `App.jsx`.
- **Scroll-driven reveals** — all major content blocks fade and slide in as the user scrolls, using `IntersectionObserver`.
- **Canvas-based star field** — the animated background is a `<canvas>` element rendered with the Web Canvas API, reacting to mouse position in real time.
- **Custom cursor** — the browser's default cursor is replaced with a glowing dot + trailing ring built from `div` elements animated with `requestAnimationFrame`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Styling | Plain CSS (no Tailwind, no CSS-in-JS) |
| Icons | Inline SVG components |
| Fonts | Google Fonts (loaded via `@import` in `index.css`) |
| State | React `useState` (local, no external store) |
| Animation | CSS transitions, `@keyframes`, Canvas API, `requestAnimationFrame` |

---

## Project Structure

```
src/
├── assets/
│   ├── astrocet-logo.jpg       # Club logo (used in navbar)
│   └── gallery/
│       ├── 1.JPG
│       ├── 2.JPG
│       ├── 3.JPG
│       ├── 4.JPG
│       ├── 5.JPG
│       ├── 6.JPG
│       ├── 7.JPG
│       └── 8.JPG               # Gallery photos (8 total)
├── App.css                     # All component and section styles
├── App.jsx                     # Entire application — components, data, layout
├── index.css                   # Global reset, CSS variables, fonts
└── main.jsx                    # React entry point
```

---

## File Reference

### `src/main.jsx`

The entry point. Mounts the `<App />` component into `#root` inside `index.html` using React 18's `createRoot`. Wrapped in `<StrictMode>`.

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
)
```

---

### `src/index.css`

Global stylesheet. Loaded first by `main.jsx`. Responsibilities:

- **Font imports** — loads four font families from Google Fonts via `@import`:
  - `Bebas Neue` — used for all large display headings
  - `Outfit` — used for subheadings and card titles
  - `Space Grotesk` — primary body font
  - `Space Mono` — monospace font for labels, eyebrows, nav items, and tags
- **Global reset** — `box-sizing: border-box`, `margin: 0`, `padding: 0` on all elements.
- **`body`** — sets `cursor: none` (replaced by the custom cursor component), `overflow-x: hidden`, and font smoothing.
- **CSS Custom Properties (`:root`)** — the entire design token system lives here (see [CSS Variables](#css-variables)).
- **Scrollbar styling** — 4px wide, violet thumb, matching the dark background.
- **Text selection** — `::selection` uses violet background with white text.

---

### `src/App.jsx`

The heart of the application. Contains everything: icon components, canvas animation, cursor logic, data arrays, helper functions, and the full page layout. It is intentionally kept as a single file to make the project easy to edit without navigating multiple modules.

**Structure inside `App.jsx`:**

1. Imports (React hooks, assets, CSS)
2. SVG Icon components (14 icons)
3. `StarField` component
4. `Cursor` component
5. `MagBtn` component
6. Data constants (`EVENTS`, `CURRENT_ECOMM`, `CURRENT_DEPTS`, `PREV_ECOMM`)
7. `initials()` helper function
8. `MemberCard` component
9. Default export `App()` — the main component with all sections

---

### `src/App.css`

All component-level and section-level styles. Organised in this order:

| Block | What it covers |
|---|---|
| Cursor | `.cursor-dot`, `.cursor-ring`, `.cursor-ring.hover-state`, `@keyframes trail-fade` |
| Canvas | `.star-canvas` |
| Noise overlay | `.noise-overlay` |
| App shell | `.app` |
| Navbar | `.navbar`, `.nav-logo-wrap`, `.nav-logo-img`, `.nav-logo-text`, `.nav-logo-sub`, `.nav-links`, `.nav-link`, `.menu-btn` — includes mobile media query |
| Magnetic button | `.mag-btn` |
| Section common | `.section`, `.sec-eyebrow`, `.sec-title`, `.reveal` / `.reveal.vis` |
| Hero | `.hero`, `.hero-left`, `.hero-badge`, `.hero-h1`, `.hero-p`, `.hero-btns`, `.btn-primary`, `.btn-ghost`, `.hero-right`, `.orb-wrap`, `.orb-body`, `.orb-ring`, `.orb-ring2`, `.orb-dot`, `.hero-stat`, `.scroll-hint` — includes mobile media query |
| About | `.about-section`, `.about-inner`, `.about-left`, `.about-right`, `.about-card` |
| Events | `.events-section`, `.events-head`, `.events-grid`, `.ev-card`, `.ev-tag` colour variants, `.ev-card-num` |
| Team | `.team-section`, `.team-tabs`, `.team-tab`, `.team-ecomm`, `.ecomm-grid`, `.ecomm-card`, `.tm-avatar`, `.tm-name`, `.tm-role`, `.tm-links`, `.tm-link`, `.dept-block`, `.dept-title`, `.dept-members`, `.member-card`, `.member-avatar-sm`, `.prev-team-grid` |
| Gallery | `.gallery-section`, `.gallery-masonry`, `.gallery-item` |
| Contact | `.contact-section`, `.contact-inner`, `.contact-left`, `.social-links`, `.soc-btn`, `.contact-right`, `.sub-label`, `.sub-form`, `.sub-input`, `.sub-btn`, `.sub-done`, `.contact-info`, `.contact-info-item` — includes mobile media query |
| Footer | `.footer`, `.footer-logo`, `.footer-text`, `.footer-right`, `.footer-link` |
| Divider | `.section-divider` |
| Glow blobs | `.glow-blob`, `.blob-cyan`, `.blob-violet` |
| Announcements | `.ann-section`, `.ann-grid`, `.ann-card`, `.ann-icon-wrap`, `.ann-body` |
| Stats bar | `.stats-bar`, `.stat-item`, `.stat-big`, `.stat-desc` |

---

### `src/assets/`

**`astrocet-logo.jpg`** — The official AstroCET logo. Used in the navbar. Rendered in greyscale (`filter: brightness(1) saturate(0) invert(1)`) by default; on hover the filter is removed and a cyan drop-shadow is added.

**`gallery/1.JPG` – `gallery/8.JPG`** — Eight event/activity photographs imported directly into `App.jsx` and rendered in the Gallery section's masonry grid. Add or remove images by adjusting the imports at the top of `App.jsx` and the array inside the Gallery section's `.map()`.

---

## Design System

### Typography

| Variable | Font | Usage |
|---|---|---|
| `--font-display` | Bebas Neue | Hero headings (`h1`), section titles (`.sec-title`), department titles, stat numbers |
| `--font-heading` | Outfit | Card titles (`.about-card h3`, `.ev-title`, `.ann-body h4`), member names |
| `--font-body` | Space Grotesk | Body copy, paragraph text, buttons |
| `--font-mono` | Space Mono | Nav links, eyebrow labels, event tags, badge text, footer text |

### Colour Palette

| Name | Hex | Role |
|---|---|---|
| Background | `#03010a` | Page background |
| Background 2 | `#080414` | Secondary dark surface |
| Cyan (accent) | `#3df5ff` | Primary accent — active states, headings, cursor, tags |
| Violet | `#9b5de5` | Secondary accent — hover states, section title highlights, gradient partner |
| Orange | `#ff6b35` | Tertiary accent — outreach/festival event tags |
| Text | `#eef2ff` | Primary readable text |
| Text muted | `#6875a0` | Secondary / supporting text |
| Text dim | `#3d4568` | Tertiary / placeholder text |

### CSS Variables

All design tokens are defined in `:root` inside `index.css`:

```css
:root {
  --font-display: 'Bebas Neue', sans-serif;
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
  --font-mono: 'Space Mono', monospace;

  --bg:          #03010a;
  --bg2:         #080414;
  --nav-bg:      rgba(3, 1, 10, 0.85);
  --card-bg:     rgba(255,255,255,0.035);
  --card-hover:  rgba(255,255,255,0.06);
  --border:      rgba(255,255,255,0.07);
  --border-glow: rgba(99,200,255,0.25);

  --text:        #eef2ff;
  --text-muted:  #6875a0;
  --text-dim:    #3d4568;

  --cyan:        #3df5ff;
  --cyan-dim:    rgba(61,245,255,0.12);
  --cyan-glow:   rgba(61,245,255,0.3);
  --violet:      #9b5de5;
  --violet-dim:  rgba(155,93,229,0.15);
  --orange:      #ff6b35;
  --orange-dim:  rgba(255,107,53,0.12);

  --accent:      var(--cyan);
  --accent-glow: var(--cyan-glow);
  --accent-soft: var(--cyan-dim);

  --card-shadow: rgba(61,245,255,0.08);
  --orb1:        #1a0a4a;
  --orb2:        #0a2a4a;
}
```

---

## Components

### `StarField`

**Type:** Functional component (no props)  
**Location:** `App.jsx`

Renders a full-screen `<canvas>` element fixed behind all content (`z-index: 0`). On mount, it generates 280 star objects and runs a `requestAnimationFrame` draw loop.

**Behaviour:**
- Each star has its own radius, speed, twinkle phase, twinkle speed, and colour (`cyan` or `violet`, with 80/20 weighting).
- Stars drift slowly across the screen and wrap around the edges.
- Mouse position is tracked via `mousemove`. Each star shifts very slightly toward or away from the cursor centre (parallax).
- Stars within 180px of the cursor grow larger, become brighter, and receive a coloured `shadowBlur` glow.
- Stars within 140px of the cursor that are also close to each other (under 90px apart) are connected by faint cyan lines — creating a constellation-like effect around the cursor.
- Window resize is handled by updating `canvas.width` and `canvas.height`.
- All listeners and the animation frame are cleaned up on unmount.

---

### `Cursor`

**Type:** Functional component (no props)  
**Location:** `App.jsx`

Replaces the native cursor with two `div` elements:

- **`.cursor-dot`** — a small 6px glowing cyan circle that snaps exactly to the pointer using `transform: translate()` updated every frame.
- **`.cursor-ring`** — a 38px circle outline that lags behind the dot with easing (lerp factor `0.12`), creating a smooth trailing effect.

When the cursor moves over any interactive element (`a`, `button`, `.ev-card`, `.about-card`, `.member-card`, `.ecomm-card`, `.ann-card`, `.soc-btn`, `.team-tab`), the ring gains the `hover-state` class: it expands to 56px, becomes more opaque, and switches from cyan to violet.

A `MutationObserver` re-attaches `mouseenter`/`mouseleave` listeners whenever new DOM nodes are added (e.g. when the team tab switches), ensuring newly rendered cards are always covered.

Hidden on touch devices via `@media (hover: none)`.

---

### `MagBtn`

**Type:** Functional component  
**Props:** `children`, `className`, `onClick`, `href`, `target`  
**Location:** `App.jsx`

A magnetic button wrapper. Renders as an `<a>` if `href` is provided, otherwise a `<button>`.

On `mousemove`, it calculates the cursor's offset from the button's centre and applies a `translate()` transform at 30% of that offset — making the button appear to be pulled toward the cursor. On `mouseleave`, it resets to `translate(0, 0)`. The transition is `cubic-bezier(0.23, 1, 0.32, 1)` for a natural snap-back feel.

Used for: hero CTA buttons, social link buttons in the Contact section.

---

### `MemberCard`

**Type:** Functional component  
**Props:** `name` (string), `role` (string, optional), `lead` (boolean, default `false`), `small` (boolean, default `false`)  
**Location:** `App.jsx`

Renders a single team member card. When `lead` is `true`, the card receives the `.lead` class — the border glows cyan, the avatar gets a cyan-to-violet gradient, and the name/role text is highlighted.

Each card always includes two icon links (LinkedIn and Instagram) at the bottom. These currently point to `#` as placeholder — replace with real profile URLs in the `CURRENT_DEPTS` and `PREV_ECOMM` data arrays or directly in the JSX.

The `initials()` helper function (defined just before `MemberCard`) extracts the first letter of each of the first two words in the name and displays it as the avatar letter.

---

## Page Sections

### Navbar

**Selector:** `.navbar`  
**Behaviour:** Fixed at the top. Uses `backdrop-filter: blur(24px)` for a frosted-glass look over the star canvas. Contains:

- **Logo area** (left): The club logo image + "ASTROCET" text in Bebas Neue + "Astronomy Club · CET" subtext in Space Mono. Clicking scrolls to `#home`. On hover, the logo image gets a cyan drop-shadow glow.
- **Nav links** (centre): Five links — `00 Home`, `01 About`, `02 Events`, `03 Team`, `04 Contact`. Each uses a scroll-spy effect: the active section's link gets the `.active` class, showing the underline gradient. A slide-in underline gradient (cyan → violet) animates on hover.
- **Hamburger** (right, mobile only): Toggles the mobile menu open/closed. Uses `CloseIcon` when open, `MenuIcon` when closed.

Scroll spy is driven by a `scroll` event listener in the main `App` component that compares `window.scrollY` against each section's `offsetTop`.

---

### Hero

**Selector:** `.hero`  
**Section ID:** `#home`

Two-column grid. Left side contains the content; right side contains the animated orb.

**Left side:**
- Animated badge pill ("Astronomy Club · Est. 2019 · CET Trivandrum") with a blinking dot.
- `h1` in Bebas Neue: "REACH FOR / THE STARS" + a smaller subtitle line in Outfit ("College of Engineering Trivandrum").
- Body paragraph introducing the club.
- Two CTA buttons: "Our Events" (`.btn-primary`, cyan fill) and "Who We Are" (`.btn-ghost`, outlined).

All left-side elements animate in on mount via the `heroIn` state flag — each has a different `transition-delay` for a staggered entrance.

**Right side:**
- `.orb-wrap` containing:
  - `.orb-body` — the planet sphere, with a radial-gradient fill and a breathing `box-shadow` animation (`orb-breathe`).
  - `.orb-ring` — a flattened ellipse rotating continuously in 14 seconds.
  - `.orb-ring2` — a second ring rotating in reverse in 22 seconds, offset by 40 degrees.
  - Three `.orb-dot` elements (cyan, violet, orange) orbiting the planet along their own timings.
- Three floating stat chips (`.hero-stat`) positioned absolutely: "5+ Years Active", "50+ Members", "20+ Events". Each floats up and down with a different `animation-delay`.

The entire left side moves upward slightly on scroll via a `scroll` event listener applying `translateY()` (parallax at 22% of scroll offset) to `heroRef`.

---

### Stats Bar

**Selector:** `.stats-bar`

A horizontal strip of five metrics between the Hero and About sections. Each `.stat-item` is bordered on the right. Stats: Founded (2019), Years of Exploration (5+), Events Conducted (20+), Active Members (50+), Core Teams (6). All items use the `.reveal` class for scroll-triggered entrance.

---

### About

**Section ID:** `#about`  
**Selector:** `.about-section`

Two-column layout. Left has a large display quote ("From a small hobby group…") and a paragraph of club history. Right has three `.about-card` elements for Story, Vision, and Mission — each with an SVG icon, a heading, and a description paragraph. Cards have a top-edge glowing line that fades in on hover.

A `.glow-blob.blob-violet` positioned absolutely creates a soft ambient light behind the section.

---

### Events

**Section ID:** `#events`  
**Selector:** `.events-section`

Auto-fill CSS grid of `.ev-card` elements, one per event in the `EVENTS` array. Each card shows:

- A large number (`01`–`06`) in the top-right corner as a decorative element.
- A colour-coded tag pill: cyan for Workshop, violet for Lecture, orange for Festival/Milestone.
- Event title, date, and description.

Cards lift 4px on hover with a glowing border transition.

---

### Announcements

**Selector:** `.ann-section`

A grid of two `.ann-card` elements, each with an icon, title, and description. Current announcements: the website launch and the Technical Team formation. Cards sit side-by-side on desktop and stack on mobile.

---

### Team

**Section ID:** `#team`  
**Selector:** `.team-section`

Has a tab switcher (`.team-tabs`) with two states driven by the `teamTab` React state:

**Current (2024–25):**
- Executive Committee (`.ecomm-grid`) — five larger cards for the five ECOMM members, each with avatar initials, name, role, and LinkedIn/Instagram links.
- Five department blocks (`.dept-block`), each with a department heading and a grid of `.member-card` elements. Lead members are visually distinguished with cyan accents.

**Previous (2023–24):**
- Executive Committee only — eleven members in `.ecomm-card` cards using the same format as the current ECOMM.

Every member card includes LinkedIn and Instagram icon links. These currently use `href="#"` as placeholders.

---

### Gallery

**Selector:** `.gallery-section`

A CSS multi-column masonry grid (`.gallery-masonry`) with `columns: 4 240px` that automatically reflows as the viewport narrows. Each of the 8 gallery images is imported as a module at the top of `App.jsx` and rendered as a full-width `<img>` inside a `.gallery-item` wrapper. Images get a subtle hover scale and border-glow effect.

---

### Contact

**Section ID:** `#contact`  
**Selector:** `.contact-section`

Two-column layout:

**Left:**
- Section eyebrow + `h2` heading ("REACH MISSION CONTROL").
- Body text inviting collaboration.
- Two `.soc-btn` magnetic buttons: Instagram (`https://www.instagram.com/astro.cet/`) and LinkedIn (`https://www.linkedin.com/company/astrocet`). Both open in a new tab.
- Contact info items: physical address and email.

**Right:**
- Email subscription form (`.sub-form`) — a text input and an arrow submit button. On valid submission (checks for `@` in the string), the `subscribed` state flips to `true` and the form is replaced with a `.sub-done` success message. No actual backend — this is a UI-only interaction.

---

### Footer

**Selector:** `.footer`

Three-column flex row:
- Left: Club name + institution text.
- Centre: "Made with curiosity and caffeine by Jairaj R"
- Right: Instagram and LinkedIn text links.

---

## Data / Content

All content is defined as plain JavaScript constants near the top of `App.jsx`, above the main `App` function. To update content, edit these arrays.

### `EVENTS` array

Six objects, each with:

| Key | Type | Description |
|---|---|---|
| `title` | string | Event name |
| `date` | string | Month + year (e.g. `'Nov 2023'`) |
| `desc` | string | One to two sentence description |
| `tag` | string | One of: `'Workshop'`, `'Lecture'`, `'Festival'`, `'Milestone'` |

Tag values control the colour of the tag pill: `Workshop` → cyan, `Lecture` → violet, `Festival` / `Milestone` → orange.

---

### `CURRENT_ECOMM`

Array of five objects for the 2024–25 Executive Committee:

| Name | Role |
|---|---|
| NAVEEN VARMA | Chairperson |
| SAURAV | Vice Chairperson / Tech Lead |
| FIDHA V | Vice Chairperson |
| ABHIRAMI PS | Finance Officer |
| DURGA M | Secretary |

Each object: `{ name: string, role: string }`

---

### `CURRENT_DEPTS`

Array of five department objects, each with:

| Key | Type | Description |
|---|---|---|
| `name` | string | Department display name |
| `members` | array | Array of member objects |

Each member object: `{ name: string, lead?: boolean, subrole?: string }`

| Department | Lead | Members |
|---|---|---|
| Web Design Team | ABHINAV M V | SUHAIL, SRAVAN, JAYALAKSHMI, ALTHAF, ASWIN KRISHNA |
| Media Team | ANEENA | SUVEDHA, RIZANA, VISMAYA, NIHA, AJINA, HIBA, ELENA, JITHIN, VIGNESH, HARISHANKAR |
| Content Team | NEELASHRI | ABHINANDHA, ANAMIKA, ANURAGH, ASHFAAQ, RENJITH, LINTO, NEHA, SREEHARI, ADITHYAN, SREEVARDHAN |
| Events & Outreach Team | SARAH ABRAHAM (Event Lead), AJITH JEEJO (Outreach Lead) | MALAVIKA, ASWIN, ARAVIND, AKSHAY, AKHILJITH |
| Marketing Team | KENZ ES | ABHIJITH S, ASLAM, ARJUN, NAYANA, NIHALA, JIGMATH, NITHU |

---

### `PREV_ECOMM`

Array of eleven objects for the 2023–24 Executive Committee:

| Name | Role |
|---|---|
| CAREN LAURETTE | CEO |
| HARIKRISHNAN S | COO |
| AKSHAY SANTHOSH | CMO |
| AHSAN JAVAD | CFO |
| SAURAV S | Content Head |
| LAKSHMI R | Media Lead |
| RANJANA C J | Web Lead |
| FATHIMA NIZAR | Program Officer |
| NAVEEN VARMA | Program Officer |
| FIDHA V | Program Officer |
| ABHIRAMI | Program Officer |

---

## Animations & Interactions

| Animation | Mechanism | Where |
|---|---|---|
| Star field | Canvas + `requestAnimationFrame` | Full-page background, `StarField` component |
| Star cursor parallax | Mouse offset applied per-frame | `StarField` — stars shift toward cursor |
| Star glow near cursor | Proximity calculation per star per frame | `StarField` — stars within 180px brighten |
| Constellation lines | Pair-wise proximity check | `StarField` — lines appear between stars near cursor |
| Custom cursor | `requestAnimationFrame` + lerp | `Cursor` component |
| Cursor hover expand | `classList.add('hover-state')` | `Cursor` component — triggers on interactive elements |
| Magnetic buttons | `mousemove` offset + `transform` | `MagBtn` component |
| Hero entrance | CSS `transition` + `heroIn` state flag | Hero section — staggered delays per element |
| Hero parallax | `scroll` event + `translateY()` | `heroRef` — left column moves at 22% scroll speed |
| Orb breathing | `@keyframes orb-breathe` | Hero right — box-shadow pulses over 5s |
| Ring rotation | `@keyframes ring-rotate` | Hero right — two rings rotate at different speeds/directions |
| Dot orbiting | `@keyframes dot-orbit` | Hero right — three dots orbit the planet |
| Floating stats | `@keyframes float-chip` | Hero right — stat chips bob vertically |
| Scroll-reveal | `IntersectionObserver` + `.reveal` / `.reveal.vis` | All major content blocks site-wide |
| Scroll indicator bar | `@keyframes scroll-fade` | Hero bottom — pulse opacity animation |
| Card hover lift | CSS `transform: translateY(-4px)` + `transition` | Event cards, team cards |
| Card top glow line | CSS `opacity` transition on `::before` pseudo-element | About cards |
| Nav underline | CSS `transform: scaleX()` transition on `::after` | Nav links |
| Nav active state | `activeNav` state + `.active` class | Scroll spy drives which link is highlighted |

---

## Responsive Behaviour

| Breakpoint | Changes |
|---|---|
| `> 900px` | Full desktop layout — all grids, two-column hero and about/contact |
| `≤ 900px` | Hero goes to single column (text then orb). About and contact go single column. Hero parallax ref still active. |
| `≤ 768px` | Hamburger menu replaces horizontal nav links. Nav links slide down as a full-width overlay panel. `.nav-logo-sub` is hidden. |
| Gallery | `columns: 4 240px` auto-reflows — no explicit breakpoints needed. Collapses from 4 columns down to 1 as viewport narrows. |
| Team grids | `repeat(auto-fill, minmax(180px, 1fr))` — auto-reflows for member cards. ECOMM uses `flex-wrap`. |
| Stats bar | `flex-wrap: wrap` with `min-width: 160px` per item — stacks gracefully. |
| Event grid | `repeat(auto-fill, minmax(320px, 1fr))` — collapses from 3 to 1 column. |

---

## How to Run

**Prerequisites:** Node.js 18+ and npm (or pnpm / yarn).

```bash
# 1. Clone the repository or copy the project folder
# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview the production build locally
npm run preview
```

The site will be available at `http://localhost:5173` in development mode.

---

## How to Update Content

### Add or edit an event
Open `App.jsx` and find the `EVENTS` array. Add a new object:
```js
{ title: 'Event Name', date: 'MMM YYYY', desc: 'Description.', tag: 'Workshop' }
```
Valid tags: `Workshop`, `Lecture`, `Festival`, `Milestone` (anything else defaults to the cyan style).

### Add a gallery image
1. Add the image file to `src/assets/gallery/`.
2. Import it at the top of `App.jsx`: `import gal9 from './assets/gallery/9.JPG'`
3. Add `gal9` to the array inside the Gallery section's `.map()`.

### Update team member LinkedIn / Instagram links
In `App.jsx`, find `MemberCard` usage and the `CURRENT_ECOMM` / `CURRENT_DEPTS` sections. Replace `href="#"` on the `.tm-link` anchors with the actual profile URLs, or add `linkedin` and `instagram` fields to the data objects and pass them as props to `MemberCard`.

### Change the club email address
Search for `astrocet@cet.ac.in` in `App.jsx` and replace with the current address.

### Change the contact social links
Search for the Instagram and LinkedIn URLs in `App.jsx`:
- Instagram: `https://www.instagram.com/astro.cet/`
- LinkedIn: `https://www.linkedin.com/company/astrocet`

These appear in two places: the Contact section's `.soc-btn` buttons, and the Footer links.

---

## Social Links

| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/astro.cet/ |
| LinkedIn | https://www.linkedin.com/company/astrocet |

---

## Credits

**Website design and development:** Jairaj R  
**Club:** AstroCET — Astronomy Club, College of Engineering Trivandrum  
**Established:** 2019
