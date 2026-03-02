# Copilot Instructions

When generating or editing UI in this repository:

- Use `app/globals.css` as the design source of truth.
- Prefer existing tokens and shared classes over one-off styles.
- Keep styling token-based (`hsl(var(--token))`) rather than hardcoded values in components.
- Follow an Apple-like minimal, essentialist baseline.
- Apply neo-brutalist accents intentionally: crisp borders, offset shadows, high contrast, limited scope.
- Prefer Tailwind utilities and shared classes from `globals.css`.
- Keep motion subtle and tactile (small transform/shadow transitions).
- Avoid introducing a competing visual system.
