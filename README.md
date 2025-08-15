# Framingham.biz — Community Site (Vite + React + Tailwind)

## Local dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
# output in dist/
```

## Deploy options

### Vercel (recommended)
1) Push this folder to a GitHub repo.
2) In Vercel → **New Project** → Import your repo.
3) Framework Preset: **Vite** (auto-detected)
4) Build Command: `npm run build` • Output: `dist`
5) Click **Deploy**.

Add your domain in Vercel → **Settings → Domains** and follow DNS prompts.

### Netlify
1) Netlify → **Add new site → Import from Git**.
2) Build Command: `npm run build` • Publish directory: `dist`.
3) Connect your repo and deploy.

### GitHub Pages (static)
Use `actions/setup-node` + `peaceiris/actions-gh-pages` to publish the `dist` folder to `gh-pages`.
