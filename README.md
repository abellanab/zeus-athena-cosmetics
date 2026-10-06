# Zeus & Athena House of Cosmetics

Zeus & Athena is a skincare storefront with a built-in back office. Shoppers browse the soap catalog, build a cart, and place an order in a few taps. The shop owner manages products, reviews orders, and tracks revenue from the same app.

## What is Zeus & Athena?

Zeus & Athena House of Cosmetics Corp. sells skincare — currently the Athena Gluta-Arbutin Whitening Soap, the Zeus Charcoal Soap with Niacinamide and Salicylic Acid, and a value bundle of both. This repo is the brand's website and lightweight shop: an editorial, botanical-feeling storefront on the front, and an admin dashboard behind `/admin` for running the catalog and orders.

There is no backend. Catalog, cart, and orders live in the browser and persist across visits, which keeps the project simple to run, demo, and hand off.

## Core Principles

**Brand first.** "Zeus & Athena" is the mark. Cinzel (display) and DM Sans (body), generous whitespace, and scroll-triggered motion set the tone. Copy is warm, ingredient-transparent, and specific — no filler.

**Zero friction for shoppers.** No account, no sign-in. Add to cart, enter name, email, and phone, and the order is placed.

**One state, one store.** Cart, catalog, and orders each have a single Zustand store persisted to `localStorage`. Components read from stores; they never keep their own copy of that data.

**Prices are display strings, math is explicit.** Prices are stored as formatted strings (e.g. `₱65.00`) and parsed with `parsePrice()` for every subtotal and revenue calculation.

**Admin changes show up immediately.** Edit a product or an order and the storefront and analytics update with it — they read the same stores.

## Who Should Use It

**Shoppers.** People who want to browse the range, read what's in each product, and order without creating an account.

**The shop owner.** Someone running a small skincare line who needs to add products, correct order details, and see revenue without a separate back-office tool.

**Developers.** Anyone extending the project toward a real backend (see [Roadmap](#roadmap)).

## Key Features

**Editorial storefront.** Hero, features, featured products, testimonial, and FAQ sections on the home page, plus dedicated Products, About, FAQ, and Contact pages.

**Product catalog.** Browse all products with pill-shaped category tabs (brightening, cleansing, bundle), search, and product tags like "Save".

**Cart.** Slide-out cart panel with add, remove, and quantity controls. The cart persists between visits under `zeus-athena-cart`.

**Checkout.** A modal collects name, email, and phone, records the order, clears the cart, and confirms with a toast.

**Admin dashboard.** Three tools under `/admin`:

- **Analytics** — total revenue, total orders, and a monthly revenue bar chart (Recharts).
- **Order History** — every order, newest first, with an edit dialog for customer name, email, and phone.
- **Manage Products** — add, edit, and delete products through a form dialog.

**Animation.** Scroll-triggered fade and slide transitions via Framer Motion (`AnimateOnScroll`).

**Mobile-first.** Layouts start at mobile and enhance at `sm` / `md` / `lg` / `xl` breakpoints.

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 4 + `tw-animate-css` |
| UI primitives | Radix UI + shadcn/ui (`components.json`) |
| Client state | Zustand with `persist` middleware |
| Forms & validation | React Hook Form + Zod |
| Charts | Recharts |
| Animation | Framer Motion |
| Notifications | Sonner |
| Icons | Lucide React |
| Fonts | Cinzel + DM Sans via `next/font` |
| Package manager | pnpm |

## Project Structure

```
zeus-athena-cosmetics/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  Root layout — fonts, Navbar, Footer, providers
│   │   ├── providers.tsx               Theme, TanStack Query, Tooltip, Toaster
│   │   ├── page.tsx                    Home — Hero, Features, Products, Testimonial, FAQ
│   │   ├── products/                   Catalog with category tabs and search
│   │   ├── about/
│   │   ├── faq/
│   │   ├── contact/
│   │   ├── not-found.tsx
│   │   ├── globals.css                 Tailwind + theme tokens
│   │   └── admin/
│   │       ├── layout.tsx              Sidebar navigation for admin tools
│   │       ├── page.tsx                Admin landing
│   │       ├── analytics/              Revenue + order totals, monthly chart
│   │       ├── orders/                 Order history + edit
│   │       └── products/               Catalog management
│   ├── components/
│   │   ├── layout/                     Navbar, Footer
│   │   ├── home/                       Hero, Features, Products, Testimonial, FAQ sections
│   │   ├── cart/                       AddToCartButton, CartPanel, CheckoutModal
│   │   ├── admin/                      ProductFormDialog, EditOrderDialog
│   │   ├── ui/                         shadcn/ui primitives
│   │   ├── AnimateOnScroll.tsx
│   │   ├── EyebrowPill.tsx
│   │   └── ErrorBoundary.tsx
│   ├── store/                          Zustand stores (persisted)
│   │   ├── useCartStore.ts             Cart items, open/close, subtotal helpers
│   │   ├── useProductStore.ts          Catalog + seed products
│   │   └── useOrderStore.ts            Placed orders
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/                          useMobile, useScrollAnimation, usePersistFn, useComposition
│   └── lib/
│       └── utils.ts                    cn() and small helpers
├── shared/
│   └── const.ts                        Shared constants
├── public/
│   └── Product photos/                 Product, brand, and section imagery
├── reference/                          Brand reference assets
├── ideas.md                            Design reference and direction
├── style-review-notes.md               Style review action items
├── components.json                     shadcn/ui config
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Data Flow

One direction only: **stores → components**.

```
admin dialogs / checkout modal / add-to-cart
  │  call store actions
  ▼
Zustand stores (src/store)          ← single source of truth, persisted to localStorage
  │  selectors
  ▼
storefront pages + admin pages      ← read-only consumers
```

**Rules:**

- Components read data through store selectors and write through store actions. No component keeps its own copy of cart, catalog, or order data.
- Checkout builds an `Order` from the current cart and calls `addOrder()`, then `clearCart()`.
- Derived values (item count, subtotal, monthly revenue) are computed from store state, never stored.
- Stores use `skipHydration: true`, so persisted state is rehydrated on the client to avoid server/client mismatches.

## Store Reference

| Store | Persist key | Holds |
|---|---|---|
| `useCartStore` | `zeus-athena-cart` | `items` (the open/closed state of the panel is not persisted) |
| `useProductStore` | `zeus-athena-products` | `products`, seeded with the three default soaps |
| `useOrderStore` | `zeus-athena-orders` | `orders`, newest first |

An order stores a snapshot of the cart `items` and `subtotal` at the time of purchase, so later catalog edits don't rewrite order history.

## Setup

1. Install dependencies
   ```bash
   pnpm install
   ```

2. Start the dev server
   ```bash
   pnpm dev
   ```

App runs at [localhost:3000](http://localhost:3000). No environment variables are required.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the Next.js dev server |
| `pnpm build` | Production build |
| `pnpm start` | Start the production server |
| `pnpm check` | Type-check with `tsc --noEmit` |
| `pnpm format` | Format the codebase with Prettier |

## Design System

- **Display font:** Cinzel — uppercase, letter-spaced headings and the brand mark.
- **Body font:** DM Sans.
- **Palette:** Deep purple (`#4A2D6B`) with soft lavender accents (`#9B85C4`, `#EFE9F5`) on white.
- **Layout:** Editorial and asymmetric, with a large outlined brand watermark and pill-shaped eyebrow labels (`EyebrowPill`).
- **Motion:** Scroll-triggered fade/slide, kept subtle.

See [`ideas.md`](./ideas.md) for the original design reference and [`style-review-notes.md`](./style-review-notes.md) for open style items.

## Known Limitations

- **No backend or database.** All data lives in the visitor's own browser. Orders placed on one device are not visible on another, including to the shop owner.
- **No admin authentication.** `/admin` is reachable by anyone who knows the URL. Do not treat it as protected.
- **No payment processing.** Checkout records an order; it does not take payment.
- **Clearing browser storage resets everything** — the catalog returns to its seeded defaults and orders are lost.

## Roadmap

To run this as a real shop, the next steps are:

1. Add a database and API routes for products and orders, replacing the persisted stores as the source of truth.
2. Protect `/admin` with authentication.
3. Add payment and order-notification email.
4. Move product images to managed storage.

## References

- Design reference: [`ideas.md`](./ideas.md)
- Style review notes: [`style-review-notes.md`](./style-review-notes.md)
