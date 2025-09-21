# Dashboard App (React + TypeScript + Vite)

A clean, modern dashboard built with React, TypeScript, Tailwind CSS, and Vite. The code is written with readable names and minimal abstractions, so anyone can understand it quickly. Dark mode is first-class, and loading feels realistic.

## Quick Start
- Prerequisites: Node.js 18+ and npm
- Install dependencies:
```bash
npm install
```
- Run locally (dev):
```bash
npm run dev
```

## What’s inside
- React 18, TypeScript, Vite
- Tailwind CSS with dark mode support
- Route layout with `Header`, `Sidebar`, `Aside`
- Pages: `Dashboard`, `Orders`
- Charts are lazy-loaded with graceful skeletons
- Mock data with sensible randomisation (status, ISO dates)

## Project Structure
```text
src/
  components/
    layout/         # Header, Sidebar, Aside, Layout
    charts/         # KPICards, SalesChart, RevenueChart, etc. (lazy loaded)
    icons/          # Small React SVG components, theme-aware via currentColor
    OrderLoading.tsx
  contexts/
    ThemeContext.tsx
  data/
    mockOrders.ts   # Generates orders with random statuses and ISO dates
  pages/
    Dashboard.tsx   # Suspense + fixed delay to mimic real-world loading
    Orders.tsx      # Filtering, sorting, selection, delete with debounced search
  utils/
    wait.ts         # Tiny utility to await a fixed delay
  main.tsx, index.css
```

## Key UX decisions
- Loading that feels real: Each chart is under a `Suspense` boundary, and we also use a tiny fixed delay (via `wait(500)`) to show a skeleton for ~500ms on first paint. This feels closer to production behaviour.
- One consistent skeleton: The same `PanelSkeleton` is used for both `Suspense` fallback and conditional loading, so there is no visual jump.
- Dependable search: Orders page offers debounced search across id, text, digits, user, project, address, ISO date, and status.
- Theming: Icons and text use `currentColor`,So light/dark mode will work great.

## Orders page features
- Debounced search implemented in both quick search and user filter in orders page
- Filter by status, date (YYYY-MM-DD), and user name
- Sort toggle for customer name (asc/desc/none) - These 3 will get in loop one by one when user clicks
- Pagination with multi-select and delete supported across in pagination

## Developing locally
- Start the dev server: `npm run dev` (will run on `http://localhost:5173`)


## Architecture notes for the interviewer
- Icons: Inline SVG React components using `currentColor` for easy theming and a small bundle. Easy to add/modify.
- Loading strategy: `Suspense` reflects real code-splitting delays; `wait.ts` provides a short fixed delay for noticeable performance and consistent skeletons.
- Search logic: Simple, readable, and fast. Converts combined fields to lowercase and perform a search.

## Changes from the provided Figma design
- In the bar chart (Projections vs Actuals), we show two bars side by side so each is clearly visible, even when the lighter-colour bar has a smaller value.

## For Mobile response
- This project was not supported for mobile and tablet views completely till now, working in progress.
