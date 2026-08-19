# Portfolio site — Unified edition (EN/ES + Console/Corporate)

A single static site (plain HTML/CSS/JS, no framework, no build step) that lets visitors
switch between **two languages** (English / Spanish) and **two visual styles** (Developer
Console / Corporate) using the toggle bar at the top of the page. The choice is remembered
between visits (saved in the browser).

- **Console style** — a "developer console" aesthetic: editor tabs, terminal hero, work
  history as a git log, skills as JSON.
- **Corporate style** — a formal "professional dossier" look: a cover-sheet profile card,
  and work history as a clean "Engagement Record" ledger.

All page content (both languages, all sections) is re-rendered client-side from a single
data source, so there is only one copy of the résumé data to keep in sync.

## Structure

```
site-unified/
├── index.html                 ← shell: toggle bar + empty #app container
├── README.md
└── assets/
    ├── content.js              ← ALL page copy, in English and Spanish
    ├── render.js                ← builds the HTML for each style from content.js
    ├── style.css                 ← shared reset + both themes (scoped by [data-theme])
    ├── CV_Jose_Alexander_Salamanca_Lozano.pdf   ← downloadable résumé
    └── CV_Jose_Alexander_Salamanca_Lozano.docx  ← editable résumé
```

## 1. Before you publish

**Contact links** — open `assets/render.js` and edit the `CONTACT` object near the top:

```js
const CONTACT = {
  linkedin: "https://www.linkedin.com/in/your-username",
  linkedinDisplay: "/in/your-username",
  github: "https://github.com/your-username",
  githubDisplay: "@your-username",
};
```

**Text content** — all copy (English and Spanish) lives in `assets/content.js`, organized
by section (`hero`, `about`, `skills`, `experience`, `certifications`, `education`,
`contact`). Edit the `en` and `es` objects there; both themes pull from the same data, so
you only need to update text once for it to appear correctly in both styles.

For privacy, the site does not publish an email address or phone number, and company names
are intentionally omitted from the experience section (each engagement is described by
industry/country instead).

## 2. Publish on GitHub Pages (free)

1. Create a new GitHub repository, e.g. `your-username.github.io` or `portfolio`.
2. Push the **contents of this folder** to the root of the repository:
   ```bash
   git init
   git add .
   git commit -m "Unified portfolio (EN/ES, Console/Corporate)"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings → Pages** → Source: **Deploy from a branch**, branch `main`,
   folder `/ (root)`. Save.
4. Your site will be live in 1–2 minutes at `https://your-username.github.io/your-repo/`.

## 3. Alternative hosting (also free)

- **Netlify / Vercel**: drag the folder to [app.netlify.com/drop](https://app.netlify.com/drop)
  or connect the GitHub repo for automatic deploys.
- **Cloudflare Pages**: connect the repo — no build configuration needed.

## How the toggle system works

- `index.html` only contains the toggle bar and an empty `<div id="app">`.
- `assets/render.js` reads the current language/style from `localStorage` (defaulting to
  English + Console on first visit), builds the matching HTML from `assets/content.js`,
  and injects it into `#app`.
- Clicking a toggle button updates the saved preference and re-renders `#app` — no page
  reload needed.
- `assets/style.css` contains both themes' styles, each scoped under
  `body[data-theme="console"]` / `body[data-theme="corporate"]`, plus one shared reset.
  Since only one theme's markup exists in `#app` at a time, there's no visual conflict.

## Notes

- No `npm install` or build step required.
- Fonts: JetBrains Mono + IBM Plex Sans (console) and Source Serif 4 + Inter (corporate),
  all loaded via Google Fonts in `index.html`.
- Accessibility: keyboard navigation, visible focus states, `prefers-reduced-motion`
  respected in both themes.
- Uses `localStorage` to remember the visitor's language/style choice — this is a real
  published site (not a sandboxed preview), so this works normally in any browser.
