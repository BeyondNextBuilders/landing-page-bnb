# Claude Project Instructions

Follow the same design system and visual language used by this repository.

## Design Source

- Treat `app/globals.css` as the authoritative source for styling tokens and shared classes.
- Reuse existing classes (`btn-neo-brutalist`, `btn-neo-brutalist-cta`, `romanian-neo-brut`, etc.) before adding new ones.
- Prefer `hsl(var(--token))` values from project tokens instead of hardcoded colors in components.

## Visual Style

- Apple-inspired minimal baseline: simple structure, disciplined spacing, clean typography.
- Essentialist composition: fewer UI elements, stronger clarity, no decorative noise.
- Neo-brutalist accents where appropriate: hard edges, strong borders, offset shadows, high-contrast emphasis.
- Keep neo-brutal treatment intentional and focused on high-impact UI elements.

## Coding Style For UI

- Use Tailwind utilities plus shared classes from `globals.css`.
- Keep interactions subtle and tactile (small transform and shadow deltas).
- Preserve current font intent and typographic hierarchy.
- Avoid introducing a second visual style system that conflicts with current tokens and component language.
