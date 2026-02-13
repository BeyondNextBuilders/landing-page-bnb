# Solidon: Shipped a smarter storefront homepage (Smart Deals + infinite carousel, 2/3/5 products per view)

## A modular Next.js + Medusa build that turns promotions into a plug-and-play homepage section—without empty carousels or broken navigation.

---

## TL;DR

- **Challenge**: The homepage couldn’t reliably surface deals or categories, and the carousel UX broke down when there were only a few products.
- **Solution**: We rebuilt the homepage as composable sections and added a responsive, accessible, infinite carousel plus auto-detected “Smart Deals” powered by Medusa sale pricing.
- **Results**:
  - **Responsive merchandising**: **2 / 3 / 5** items per view (mobile/tablet/desktop) with consistent layout.
  - **No “empty slots”**: **1–4 products** now fill the full carousel width via smart duplication logic.
  - **Deals auto-populate**: Smart Deals appear automatically when Medusa pricing is set to **`price_type: "sale"`** (with `percentage_diff`).
- **Timeline**: 1 sprint (implemented as modular, incremental components)

---

## The Client

- **Industry**: E-commerce / Retail
- **Company size**: Lean team (storefront-focused)
- **Location**: Online / multi-region capable (pricing by Medusa region)

Solidon is an e-commerce storefront built on Medusa, where the homepage needs to do real work: highlight promotions, make categories easy to browse, and keep the UX polished across devices. The goal was a homepage that can adapt to changing inventory and campaigns without redesigning the entire page.

---

## The Challenge

### What They Were Facing

The homepage had to support fast-changing merchandising (deals, category pushes, seasonal promos) while staying performant and consistent across screen sizes. But traditional “static” homepage layouts are brittle: once inventory gets thin or category assortment is uneven, UI components like carousels start to look broken.

At the same time, promotions needed to be connected to real pricing logic (Medusa sale prices), not manual hand-curation—so the homepage could reflect what’s actually on sale, automatically.

- **Business impact**: Weak merchandising = lower CTR to PDPs, fewer promo clicks, and a homepage that feels “stale.”
- **What they tried**: Manual section editing and ad-hoc product lists (hard to keep current).
- **Why now**: Promotions and category campaigns needed a reliable, repeatable homepage pattern.
- **Cost of inaction**: More time spent “fixing the homepage,” less time running campaigns—and UI regressions whenever product counts change.

### Key Pain Points

- **Carousel breaks with few items**: Empty slots and awkward navigation when categories only had 1–4 products.
- **Deals weren’t system-driven**: Promotions weren’t reliably tied to Medusa’s sale pricing configuration.
- **Hard to scale homepage sections**: Adding new sections risked duplication and inconsistent UX.

> **"We needed the homepage to sell what’s available today—without redesigning it every time inventory changes."**
>
> — Solidon team

---

## The Solution

### Our Approach

We treated the homepage as a set of reusable “merch blocks”: each section is responsible for one job (deals, a category rail, navigation, etc.). That kept the code modular and made it easy to add/remove sections without rewriting the page.

For the carousel, we engineered for real-world catalog edge cases first (1–4 items), then layered in infinite looping, responsive breakpoints, and accessibility so the UX stays consistent on every device.

### What We Built

#### 1) Smart Deals section (auto-detected promotions)
`SmartDealsSection` fetches products with Medusa pricing fields and filters to only discounted items (sale price type + percentage diff). If no deals exist, the section disappears automatically—no dead UI.

#### 2) Responsive, infinite carousel that never looks empty
`ResponsiveCarousel` supports 2/3/5 items per view and uses smart duplication when there are fewer products than visible slots—so the layout stays full. It loops infinitely and includes ARIA labels + semantic roles for accessibility.

#### 3) Modular category sections for scalable merchandising
`CategorySection` renders category rails consistently (including skeleton loading), while `HomepageTemplate` orchestrates hero/sidebar, category cards, Smart Deals, and the first four category sections.

### Technology Stack

- **Storefront**: Next.js 15, TypeScript, Tailwind CSS
- **Commerce backend**: Medusa.js v2 (pricing, categories, regions), Node.js 20+
- **Payments & platform**: Stripe (storefront integration), PostgreSQL (configurable backend DB)

### Implementation Timeline

| Phase | Duration | Key Activities |
|------|----------|----------------|
| Discovery & Planning | 1–2 days | Homepage requirements, catalog edge cases, section plan |
| Development | 3–7 days | Smart Deals + carousel + modular homepage sections |
| Testing & Refinement | 1–2 days | 1–4 item scenarios, keyboard nav, responsive checks |
| Launch & Optimization | 1 day | Rollout, merch tweaks (limits/filters), polish |

---

## The Results

### By The Numbers

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin:16px 0;">

**Responsive slots**  
## 2 / 3 / 5  
Items per view (mobile/tablet/desktop)

**Edge cases handled**  
## 1–4 items  
Still fills the carousel; no empty gaps

**Infinite loop**  
## Both directions  
Wrap-around UX (no “end of carousel”)

**Deals logic**  
## Automatic  
Driven by Medusa sale pricing (`price_type: "sale"`)

</div>

### Business Impact

- **Merchandising that keeps up**: Smart Deals populate from pricing rules, so promotions stay accurate without manual curation.
- **A homepage that doesn’t “break”**: Categories with thin inventory still look intentional and full-width.
- **A scalable pattern library**: Homepage sections are composable, making future additions faster and more consistent.

### Long-Term Value

This implementation is built to scale with the catalog and campaign calendar. As categories grow (or shrink), the carousel logic keeps presentation consistent; as pricing promos change, Smart Deals updates automatically. The result is a homepage that remains maintainable, predictable, and easy to extend—without introducing new dependencies or brittle one-off UI.

> **"We can run promotions and category pushes without worrying whether the homepage will look broken."**
>
> — Solidon team

---

## Key Takeaways

### What Made This Project Successful

1. **System-driven promotions**: Deals are tied to Medusa pricing, not manual lists.
2. **Edge-case-first UX**: 1–4 product categories are handled gracefully by design.
3. **Modular architecture**: Small, focused components make changes safer and faster.

### Lessons Learned

Merch UI should assume uneven inventory—because it’s the norm, not the exception. Building for the “few items” scenario upfront prevents a long tail of UI bugs and makes every future campaign less stressful.

---

## Could This Work For You?

### This Is a Fit If You:

- ✓ Your homepage needs to stay polished even when categories have very few products
- ✓ You want promotions to be driven by real pricing logic (not manual lists)
- ✓ You need a modular storefront that can evolve section-by-section
- ✓ You care about accessibility and responsive UX out of the box

### Similar Challenges We’ve Solved

- Storefront revamps that prioritize merchandising + conversion
- Pricing-driven promo sections (sale/discount detection)
- UI components designed for real inventory edge cases

---

## Ready to Transform Your Business?

If your storefront looks great on a “perfect catalog” but falls apart in the real world, the fix isn’t more design—it’s better product-aware UI. We’ll help you ship a homepage that stays fast, consistent, and campaign-ready as your inventory and promotions change.

### Next Steps

1. **Free consultation** — Quick audit of your homepage UX + merchandising constraints
2. **Custom strategy** — Section plan, data requirements, timeline, and success metrics
3. **Implementation** — Build, ship, and iterate with measurable checkpoints



---

## About Beyond Next Builders

We build production-grade e-commerce experiences and custom software with a strong focus on measurable outcomes: conversion-ready UX, clean architecture, and automations that reduce manual work. We’re especially strong at connecting business rules (pricing, promos, inventory) to UI that stays reliable at scale.

**Our specialties:**
- AI Automations & Machine Learning Solutions
- SEO/GEO Optimization & Strategy
- Custom Software Development

