
# 🛍️ Digikala Clone — React, Redux & PWA

A responsive, component-driven clone of **Digikala**'s (Iran's largest e-commerce platform) homepage, built with **React**, **Redux**, and configured as an **installable PWA**.

>  Live Demo: [digikala-react-eight.vercel.app](https://digikala-react-eight.vercel.app/)

---

##  Overview

Digikala's real homepage is a dense, highly-componentized page — banners, multiple carousels, category grids, brand sections, "hot sale" widgets, and more. I rebuilt it section by section in React to practice **breaking a complex, real-world UI into small, isolated, reusable components**, and to build a login flow backed by Redux + async data fetching.

##  Features

-  **~20 independent homepage components** (`Slider`, `Amazing`, `Hotsale`, `Classifyshop`, `Favoritebrand`, `Foursection`, etc.), each responsible for one visual section of the page — mirroring how a real e-commerce homepage is actually built by teams
-  **Login page wired to Redux** — `Login.jsx` dispatches an async `fetchLogin` thunk and renders based on `loading` / `error` state from the store
-  **Progressive Web App** — a full `manifest.json` (name, icons, screenshots, theme color) so the app can be installed on a device home screen like a native app
-  Fully responsive layout with **Tailwind CSS**, RTL Persian content throughout
-  Carousels via **Swiper**
-  Deployable to **GitHub Pages** (`gh-pages` build script included)

##  Key Technical Decisions

- **One component per homepage section** — instead of one large `Home.jsx` file, each visual block (story bar, slider, "amazing offers", four-picture grid, etc.) is its own component in its own folder. This made the page easy to reason about and reorder, even though the homepage itself has dozens of sections.
- **Redux only where it earns its keep** — global state is used for things that are genuinely cross-cutting (auth/login), while most homepage sections are presentational and don't need global state at all. This kept the Redux store small and focused.
- **PWA from day one** — adding the manifest and icons early meant the "installable app" experience was a first-class feature, not an afterthought bolted on at the end.

##  Tech Stack

| Category | Tools |
|---|---|
| Core | React 19 |
| State management | Redux, Redux Thunk, React Redux |
| Routing | React Router DOM |
| Styling | Tailwind CSS |
| Carousel | Swiper |
| Icons | React Icons |
| Build tool | Vite |
| Deployment | GitHub Pages (`gh-pages`) |

##  Project Structure

```
src/
├── components/
│   ├── App/               # Root app component
│   ├── Header/, Centermenu/, Bottommenu/, Story/, Slider/, ...
│   │                       # One folder per homepage section
│   └── Redux/Login/        # Login action + reducer
├── pages/
│   ├── Home.jsx            # Composes all homepage sections
│   └── Login.jsx
├── manifest.json           # PWA manifest
└── vite.config.js
```

## 🚀 Getting Started

```bash
git clone https://github.com/farinush/digikalaReact.git
cd digikalaReact
npm install
npm run dev
```

To run the mock JSON API used by some sections:

```bash
npm run server
```

##  What I'd Improve Next

- Move the ~20 homepage sections to lazy-loaded components with `React.lazy` + `Suspense`, since not all of them need to be in the initial bundle
- Replace `Redux Thunk` with **TanStack Query** for the login/auth request, for consistent caching and retry behavior across my projects
- Add basic accessibility passes (alt text, focus states) across the section components
- Convert remaining `.jsx` files with meaningful logic to TypeScript

## 📄 License

This project was built for learning and portfolio purposes — it is a UI clone built for practice and is not affiliated with or endorsed by Digikala.
