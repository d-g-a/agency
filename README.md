# aa-cr — An act of collective recklessness

Website for the aa-cr music agency. Next.js (App Router) + TypeScript, plain CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Structure

- `app/page.tsx` — home (wordmark hero, roster marquee, manifesto, roster preview)
- `app/roster/page.tsx` — full roster list with filters and cursor-follow previews
- `app/roster/[slug]/page.tsx` — artist page (statically generated)
- `app/about/page.tsx` — about / principles / contact
- `lib/artists.ts` — roster data; this is the content shape the CMS will replace
- `app/globals.css` — design tokens (`--bg`, `--fg`, `--dim`, `--line`) and all styles

Artists without an `image` get a plain placeholder in their `palette` tones; add a press photo URL and it is shown in greyscale.
