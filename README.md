# Portfolio

A dark, minimal portfolio site with a numbered project showcase. Built with Next.js (App Router), Tailwind CSS v4, and Motion.

## Run it

```bash
npm run dev
```

Then open http://localhost:3000.

## Make it yours

**Everything on the site is driven by one file: [`lib/data.ts`](lib/data.ts).**

- `site` — your name, role, tagline, location, email, and social links
- `about` — bio paragraphs and skill tags
- `projects` — the project showcase. Each entry has a title, tags, description,
  year, tech list, and optional `live` / `source` links. Set `featured: true`
  to show it on the home page; every entry appears on `/projects`.
- `experience` — work history for the timeline section

### Project preview images

Each project card shows a generated gradient panel by default (colors come from
the `gradient` field). To use a real screenshot instead, drop an image into
`public/` and set `image: "/my-screenshot.png"` on the project.

## Structure

- `app/page.tsx` — home: hero, about, selected projects, experience, contact
- `app/projects/page.tsx` — full numbered project archive (01–NN)
- `components/ProjectCard.tsx` — the numbered project card
- `app/globals.css` — theme tokens (change `--accent` to re-color the site)

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config needed.
