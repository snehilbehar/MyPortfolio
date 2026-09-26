# Google-like Portfolio

A React + TypeScript + Vite portfolio site with a clean Google-inspired visual language.

## Content

Update `public/profile.json` with your own details. The app reads that file at runtime, so the whole page can be driven by JSON input.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Project links

Each project can include `link` for its GitHub repository and `liveUrl` for its deployed demo or demo video. Set `demoLabel` to customize the action text (for example, `Watch demo`); it defaults to `Live demo`. Both are optional; omit unverified or unavailable URLs to hide the corresponding action.

## Deployment

The active portfolio is the Vite application at the repository root. Vercel runs `npm run build` and serves `dist`. The `frontend/` and `backend/` directories preserve the previous portfolio and are excluded from CLI deployment uploads.
