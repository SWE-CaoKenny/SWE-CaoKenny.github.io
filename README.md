# Portfolio Site

Plain HTML/CSS/JS personal portfolio.

## Structure

```
index.html            Page markup (hero, about, skills, projects, contact)
assets/css/style.css  Styling, incl. light/dark theme
assets/js/main.js     Nav toggle, theme toggle, and the SKILLS / PROJECTS data
assets/img/           Put profile photo / project screenshots here
assets/resume.pdf     Add your resume PDF here (linked from the nav bar)
```

## What to fill in

- **`index.html`** — every `<!-- PLACEHOLDER -->` comment marks text to replace:
  name, title, bio, email, GitHub/LinkedIn URLs.
- **`assets/js/main.js`** — edit the `SKILLS` and `PROJECTS` arrays at the top
  of the file. Add/remove project objects as needed; each renders as a card
  automatically.
- **`assets/resume.pdf`** — drop your resume PDF here (file doesn't exist yet,
  so the "Resume" nav link will 404 until you add it).

## Running locally

Just open `index.html` in a browser, or serve it locally:

```
npx serve .
```

## Deploying

Any static host works — no build step required:

- **GitHub Pages**: push this repo, enable Pages on the `main` branch.
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo.
