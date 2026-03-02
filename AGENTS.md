# Agent Design Instructions

This project uses a unified visual direction. When generating or editing UI code, follow these rules.

## Source Of Truth

- Use `app/globals.css` as the design system source of truth.
- Reuse existing tokens and classes before creating new styling primitives.
- Prefer tokenized colors (`hsl(var(--token))`) over raw hex in components.

## Visual Direction

- Apple-inspired baseline: clean spacing, clear hierarchy, restrained typography.
- Essentialist approach: keep layouts simple and purposeful.
- Neo-brutalist accents: sharp edges, visible borders, bold offset shadows, high contrast.
- Apply neo-brutalist accents selectively (CTA, badges, tags, key emphasis), not on every surface.

## Implementation Rules

- Prefer Tailwind utilities and shared classes defined in `globals.css`.
- Keep motion tactile and minimal (small translate and shadow shifts).
- Preserve heading/body font intent (`font-heading` for headings, current Inter + Sora pairing).
- Do not introduce a conflicting visual system (different token scale, radius language, or shadow style).
