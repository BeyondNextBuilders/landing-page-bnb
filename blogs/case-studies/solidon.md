# Solidon: A custom-built commerce system that keeps prices, products, and orders in sync — automatically

## A PostgreSQL-backed Next.js + Medusa implementation with multi-channel price tracking, unified product management, Netopia payments, DPD shipping, a custom website chatbot, and order-to-printer automation.

---

## TL;DR

- **Challenge**: Solidon didn’t just need a storefront — they needed a system to run a multi-channel e-commerce operation without daily manual work (price updates, catalog edits, fulfillment steps).
- **Solution**: We implemented and customized the full framework end-to-end on **PostgreSQL**, then added **PriceTracker** (local DB → all channels), **centralized product management synced across channels**, a **custom website chatbot**, and **operational automations** (including AWS-triggered printing when an order lands). We also integrated **Netopia** for payments and **DPD Courier** for shipping.
- **Results**:
  - **One source of truth** for pricing and products across sales channels
  - **Always-updated pricing** pushed automatically everywhere
  - **Faster fulfillment** with less manual work (including instant printing)
  - **More reliable operations** with fewer mismatches and missed steps
- **Timeline**: Delivered iteratively as modular services and integrations

---

## The Client

- **Industry**: E-commerce / Retail  
- **Company size**: Lean team (operator-led)  
- **Location**: Online / multi-region capable (pricing by Medusa region)

Solidon runs a multi-channel storefront where accuracy matters: pricing must match everywhere, product data can’t drift between platforms, and order handling needs to be quick and consistent.

---

## The Challenge

### What They Were Facing

Solidon’s day-to-day operations were being slowed down by manual work:

- Updating **prices** across multiple sales channels  
- Managing **products** in more than one place  
- Handling **orders** with repetitive steps (including printing for fulfillment)  

And the bigger the catalog and channel footprint became, the more the risk grew:

- mismatched prices between channels  
- duplicated catalog work  
- slower order processing during busy periods  

**Cost of inaction**: more time spent maintaining the system, less time spent selling—and more operational errors as volume increases.

---

## The Solution

### Our Approach

We treated Solidon’s storefront as part of a larger commerce engine: a stable core (framework + PostgreSQL), then modular services layered on top to automate the work that normally happens across multiple dashboards.

The goal was simple: **one place to manage truth**, and automation to push that truth everywhere.

---

## What We Delivered

### 1) Full framework implementation (PostgreSQL-based)

We didn’t plug in a template and call it done — we implemented and customized the framework to match how Solidon actually sells.

- **PostgreSQL** as the core database layer  
- Clean structure for **catalog, pricing, integrations, and operations**  
- Built to support **multi-region / multi-channel logic** reliably  

---

### 2) PriceTracker that updates prices everywhere

Prices change constantly — and doing it manually across channels is painful and risky.

We delivered a **PriceTracker** service that:

- Tracks price changes and stores them in a **local database**  
- Pushes updates automatically to **all sales channels**  
- Prevents mismatched pricing between the website, marketplaces, and other platforms  
- Keeps pricing rules consistent and traceable  

**In short:** one source of truth for pricing, synced everywhere.

---

### 3) Custom website chatbot integration

We integrated a custom chatbot directly into the website, aligned to their customer journey and product discovery flow.

- Embedded cleanly in the storefront  
- Built to handle real customer questions and guide users faster  
- Integrated in a way that doesn’t compromise performance or UX  

---

### 4) Local product management, synced across all channels

Instead of managing products separately on each platform, we built a local product management layer that stays synced everywhere.

That means:

- Products are created/edited **once**  
- Changes propagate across **all sales channels**  
- Inventory and catalog data stays consistent  
- The team avoids repetitive updates in multiple dashboards  

---

### 5) Custom flows & automations (real operations)

Beyond the core platform, we built practical automations that save time every day.

Example workflow:

- Order comes in → triggers an automated flow  
- Order data is sent to **AWS**  
- AWS forwards it directly to the **printer**  
- Orders get printed immediately, without manual handling  

These are the kinds of “small” workflows that remove friction, reduce missed steps, and save hours over time.

---

### 6) Payments and shipping integrations

To complete the operational flow, we implemented the key commerce integrations:

- **Netopia** payment gateway integration  
- **DPD Courier** shipping integration (labels / shipment flow, depending on the channel setup)

---

## The Outcome

What Solidon got isn’t “a website.”  
They got an integrated e-commerce engine where:

- Prices stay correct across all channels  
- Products stay synced automatically  
- Customers get help instantly via chatbot  
- Orders trigger real-world actions immediately (like printing)  
- The team spends less time on admin work and more time selling  

---

## One-liner version (for website / portfolio)

We built Solidon’s PostgreSQL-based commerce framework and customized it end-to-end, then layered in multi-channel PriceTracker syncing, unified product management, a custom website chatbot, Netopia payments, DPD shipping integration, and AWS-powered order automations like instant printing—turning their storefront into a system that runs itself.