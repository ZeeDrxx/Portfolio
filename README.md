# Zayd Bentalha — Portfolio

A pure static, framework-free portfolio. Drop the folder into a GitHub Pages repo, push, done.

## Run locally

Any static server works:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Add a new certification

1. Drop the PNG into `certifications/`.
2. Add one line to `certifications/certs.json`:

```json
{ "file": "your-cert.png", "title": "Course Title", "issuer": "Provider" }
```

3. Commit & push.

## Replace an education logo

Logos live in `assets/edu/`:

- `emsi.png` — EMSI
- `uh2c.png` — Université Hassan II de Casablanca
- `charles-peguy.png` — Groupe Scolaire Charles Péguy

Replace the file with the same name and shape (square works best, transparent background ideal).

## Theme & language

- Theme: dark by default, follows `prefers-color-scheme` on first visit, then `localStorage`.
- Language: EN / FR toggle in the nav, persisted in `localStorage`.

## Deploy to GitHub Pages

1. Push the contents of this folder to your `portfolio` repo (root, not a subfolder).
2. Repo Settings → Pages → Deploy from branch `main` / root.
3. Site lives at `https://<your-username>.github.io/portfolio/`.

## Stack

HTML, CSS, vanilla JavaScript. No build step, no dependencies. Fonts from Google Fonts (Fraunces, Inter Tight, JetBrains Mono).
