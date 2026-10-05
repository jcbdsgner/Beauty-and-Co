This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`, sharing its brand (Beauty and Co) with the [RDV](../rdv) showcase site.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (or `http://localhost:3001` if the RDV site's dev server is already running on 3000).

## Structure

- `app/` — routes (App Router)
- `components/ui/` — shared design-system primitives on a shadcn/ui base (Radix + Tailwind v4), repainted to the b&co brand; atoms / molecules / organisms. See `DESIGN.md` § Component base.
- `lib/store/` — Zustand session store (`app-store.ts`); `useAppData()` in `components/providers/` is a compat facade over it
- `components/layout/` — page chrome (header, footer, nav) — to be built for this app
- `lib/` — utilities and domain logic
- `public/images/brand/` — Beauty and Co logo assets
- `docs/adr/` — architecture decision records
