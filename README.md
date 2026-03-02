# Beyond Next Builders Landing Page

## AI Styling Contract (v0 Friendly)

Use this contract when generating or editing UI with AI tools (including v0).

- Use `app/globals.css` as the design source of truth.
- Reuse existing tokens/classes before introducing new styling primitives.
- Prefer tokenized colors (`hsl(var(--token))`) over hardcoded hex in components.
- Follow an Apple-inspired minimal baseline: clean spacing, clear hierarchy, restrained typography.
- Keep an essentialist composition: fewer elements, purposeful layouts, low visual noise.
- Apply neo-brutalist accents intentionally: crisp borders, sharp edges, offset shadows, high contrast.
- Keep neo-brutalist treatment focused on emphasis elements (CTA, badges, tags), not every surface.
- Prefer Tailwind utilities and shared classes from `globals.css` over inline style objects.
- Keep interactions tactile and subtle (small transform + shadow deltas).
- Preserve current typographic intent (`font-heading` for headings; Inter + Sora pairing).
- Do not introduce a second visual system that conflicts with existing token/radius/shadow language.

### Suggested Prompt Snippet For v0

```text
Use app/globals.css as source of truth. Reuse existing tokens and classes. Keep an Apple-minimal, essentialist baseline, with selective neo-brutalist accents (sharp borders, offset shadows, high contrast) only on emphasis elements like CTA/tags. Prefer Tailwind + shared classes, tokenized colors via hsl(var(--token)), and subtle tactile hover motion.
```
