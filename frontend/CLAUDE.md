# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Wilfred Consult" — a single-page marketing site for a study-abroad / education consultancy. Static content only; there is no backend, data fetching, or form submission logic wired up yet.

The repository root only contains the `frontend/` directory. All commands below assume you are inside `frontend/`.

## Commands

```bash
npm run dev      # start Vite dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint over the whole project
```

There is no test framework configured.

## Architecture

Stack: React 19, Vite 8, React Router 7, Tailwind CSS v4, `lucide-react` + `react-icons` for icons.

- **Routing** lives in `src/App.jsx`. `<Navbar />` and `<Footer />` render outside `<Routes>` so they persist across every route. Routes: `/`, `/services`, `/destinations`, `/about-us`, `/testimonials`, `/contact`.
- **Pages** (`src/pages/`) are thin composition layers. A page imports section components and stacks them in a layout wrapper (see `src/pages/home.jsx`). It holds no state or logic.
- **Section components** live in `src/components/<page>/` (e.g. `components/home/`, `components/services/`, `components/about/`, `components/destinations/`, `components/contact/`). Each is a self-contained section of a page.
- **Shared components** at the top of `src/components/`: `navbar.jsx`, `footer.jsx`, `title.jsx` (section heading with a two-tone `text1`/`text2` + `subtext` prop shape), and `headComponent.jsx` (reusable hero header with icon/title/CTA props).

## Conventions

- Section data (destination cards, services, FAQs, etc.) is defined as a local `const data = [...]` array at the top of each component file and mapped over in JSX — there is no shared data layer or API. When adding/editing content, edit these inline arrays.
- Styling is Tailwind utility classes inline. Brand color is `#e9a227` (amber/gold), with `#F5B23C` and `#faae3d` as related accents; dark surfaces use `neutral-900` and muted text uses `neutral-500`. Reuse these exact hex values rather than introducing new ones.
- Layouts commonly use fixed widths like `w-300` / `w-175` centered with `mx-auto` rather than max-width containers. Match the surrounding component's approach.
- Component files are `.jsx`, one default-exported component per file. Cross-page section folders mirror the page name.

## Known rough edges

- `navData` in `navbar.jsx` reuses `id: 1` across most entries, which produces duplicate React keys. Fix keys when touching that list.
- Mobile nav is stubbed: the `Menu` button toggles `show`, which only renders a placeholder `<div>hola</div>`.
