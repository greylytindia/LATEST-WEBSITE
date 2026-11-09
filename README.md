# GREYLYT Website — Editing Guide

A dependency-free, responsive, multi-page website for GREYLYT architectural lighting consultancy. It uses plain HTML, CSS and JavaScript so you can edit it without installing React, npm packages or a build system.

## 1. Folder map

```text
GREYLYT-website/
├── index.html                 # Home page
├── works.html                 # Portfolio and project listing
├── project.html               # Reusable project detail template
├── services.html              # Services page
├── about.html                 # About / philosophy page
├── insights.html              # Article listing
├── article.html               # Reusable article detail template
├── contact.html               # Enquiry form and contact details
├── contact-success.html       # Form confirmation page
├── css/
│   └── styles.css             # All design tokens, layout, components, animation and responsive rules
├── js/
│   ├── data.js                # Editable content: projects, services, articles and site settings
│   └── main.js                # Site behaviour: navigation, rendering, filters, transitions and interactions
├── assets/
│   └── favicon.svg            # Browser tab icon
├── robots.txt                 # Search engine crawler instructions
└── sitemap.xml                # Public page list for search engines
```

**Why are the HTML pages kept in the root?** It keeps page URLs simple and helps static hosting work without extra routing configuration. Shared code is centralized in `js/` and `css/` so you do not need to edit every page for common changes.

## 2. Run the site

You do not need to install dependencies.

1. Extract the ZIP.
2. Open a terminal inside the `GREYLYT-website` folder.
3. Run:

   ```bash
   python -m http.server 8080
   ```

4. Open `http://localhost:8080` in your browser.

Use a local server rather than double-clicking the HTML file. The seamless page transition uses `fetch`, which browsers restrict on `file://` URLs.

## 3. Common edits

| What you want to change | File to edit | Where to look |
|---|---|---|
| Project names, descriptions, categories and images | `js/data.js` | `projects` array |
| Four photos shown inside a project | `js/data.js` | Each project’s `image`, `image2`, `image3`, `image4` fields |
| Services and service descriptions | `js/data.js` | `services` array |
| Insights articles and article content | `js/data.js` | `articles` array |
| Email, Instagram, WhatsApp and location | `js/data.js` | `settings` object |
| Colours, fonts and spacing | `css/styles.css` | `:root` variables near the top |
| Animation, project rail and responsive behaviour | `css/styles.css` | Search for `PROJECT`, `MOTION`, or `RESPONSIVE` section comments |
| How components render and interactive behaviour | `js/main.js` | Search for function names such as `header`, `renderWorks`, `renderProject`, or `softNavigate` |
| Page-specific headline and static copy | The relevant root `.html` file | Find the visible text in that page |
| Browser tab icon | `assets/favicon.svg` | Replace the SVG or update its design |

## 4. Adding a project

1. Open `js/data.js`.
2. Find the `projects` array.
3. Copy an existing project object and paste it inside the array, separating entries with commas.
4. Give it a unique `id` using lowercase letters and hyphens (for example `coastal-villa`).
5. Update its `title`, `category`, `location`, `intro`, and image fields.
6. Add four image URLs: `image`, `image2`, `image3`, and `image4`. Use approved GREYLYT photography when available.
7. Keep `sample: true` for concepts or demonstration content. Change it only when the project is a verified commission and the wording/photos are approved for publication.

The category should match the existing categories used in the portfolio filters (Residential, Hospitality, Retail, Commercial, or Experience Spaces) so filtering works consistently.

## 5. Updating images

Images currently use remote Unsplash URLs. Replace those URLs in `js/data.js` with your approved images. For production, it is better to store optimized images locally under a folder such as `assets/images/` and use relative paths, for example `assets/images/coastal-villa-living-room.webp`. Keep aspect ratios consistent with the image slot and write meaningful `alt` text.

## 6. Changing brand colours

At the top of `css/styles.css`, edit the CSS variables under `:root`. The main tokens include:

- `--obsidian` — darkest background
- `--charcoal` — dark surfaces
- `--graphite` — deeper grey elements
- `--grey` and `--mist` — supporting grey tones
- `--ivory` and `--white` — light backgrounds
- `--gold` — restrained champagne accent

Change the token values rather than searching and replacing every colour in the stylesheet.

## 7. Page transitions and project carousel

- The navigation and transition logic lives in `js/main.js`.
- The appearance and animation timings live in `css/styles.css`.
- The portfolio rail supports automatic motion, buttons, trackpad, mouse wheel, touch and dragging. It respects the operating system’s reduced-motion preference.
- If you change page filenames, update links in the HTML files and `sitemap.xml` too.

## 8. Contact form setup

The form is configured for **Netlify Forms** and redirects to `contact-success.html`. It will receive real submissions only after deploying to Netlify with form detection enabled. Submit a real test after deployment and verify it in the Netlify dashboard. For another host, connect a form backend/API; do not assume a browser-only success message means an enquiry was delivered.

Replace the placeholder contact information and review the privacy wording before publishing.

## 9. Sample content and publishing checklist

- Project entries are sample concepts unless verified by GREYLYT; replace or clearly label them before launch.
- Remote sample images need an internet connection and may change availability. Use approved, optimized local assets for a production site.
- Confirm email, WhatsApp, Instagram and location details.
- Test all links, mobile navigation, project filters, four-image galleries and enquiry submission on the live host.
- Check the site on desktop, tablet and mobile before publishing.

## 10. Technical notes

This is a static HTML/CSS/JavaScript project. No package manager, API key, `.env` file or compilation step is required. `js/data.js` must load before `js/main.js` on pages that render shared content. Keep that order when editing script tags.
