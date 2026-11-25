# yurizanoni.com — redesign preview (branch `redesign-classy-2026`)

Personal site for Yuri Zanoni. Static HTML/CSS + small JS, no build step, no tracking, no external requests.

**Preview only. Do not merge into `main` until Yuri approves and ib.yurizanoni.com is live.** `main` is the live apex (GitHub Pages).

- Direction: cold, contained, Bauhaus grid (Prada / Yohji): near-black and ivory, YZ-seal crimson `#A3161C` as the only accent.
- Typefaces (2): Host Grotesk + JetBrains Mono, latin subset, embedded in `fonts.css` (SIL OFL 1.1).
- Bilingual EN / PT-BR (toggle top-right; `?lang=pt` also works). Strings in `site.js`.
- International Business is section 01, right after the hero, so prospects sent to yurizanoni.com land on the services. No prices.
- Portrait: drop a photo at `assets/portrait.jpg` (4:5, ideally 1200×1500). It shows in grayscale over the seal panel; until then the seal panel shows.
- Live Hong Kong clock in the hero status line; reveal-on-scroll; all motion off under prefers-reduced-motion.
