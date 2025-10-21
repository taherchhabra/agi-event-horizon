# AGI Event Horizon

This repository contains a client-only [Next.js](https://nextjs.org/) application bootstrapped manually. It uses the classic Pages Router so that every component executes entirely on the client without any server-side rendering or API routes.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available scripts

- `npm run dev` – Starts the development server with hot reloading.
- `npm run build` – Builds the production bundle.
- `npm run start` – Runs the production build locally.
- `npm run lint` – Lints the project with ESLint and Next.js defaults.

## Project structure

- `pages/` – Client-side routed pages powered by the Pages Router.
- `styles/` – Global and component-level styles.
- `public/` – Static assets served at the root path.
- `next.config.mjs` – Next.js configuration with React strict mode enabled.

Because this project is fully client-side, there are no server-rendered pages, API routes, or server actions.
