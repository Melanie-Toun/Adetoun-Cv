# Copilot Instructions for AI Agents

## Project Overview
- This is a React single-page application bootstrapped with Create React App.
- The codebase is organized by feature: each major section (About, Contact, Services, Portfolio, etc.) has its own folder under `src/`.
- Media assets (images, videos, PDFs) are stored in `public/` and `src/images/`.

## Key Files & Structure
- `src/App.js`: Main app entry point, sets up routing and layout.
- `src/Context/PortfolioContext.jsx`: Provides React context for global state management.
- `src/Header/Header.jsx`: Main navigation/header component.
- `src/MyPortfolio/`, `src/MyServices/`, `src/Pages/`: Feature-specific components, each with their own CSS and JSX files.
- `public/`: Static assets, including images and videos used throughout the app.

## Developer Workflows
- **Start development server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (Jest, default Create React App setup)
- **Build for production:** `npm run build`
- **No custom build/test scripts** beyond Create React App defaults.

## Project-Specific Patterns
- **Component organization:** Each feature/component has its own folder with `.jsx` and `.css` files.
- **Media usage:** Images/videos are imported from `public/` or `src/images/` using relative paths.
- **Context usage:** Shared state is managed via React Context in `src/Context/PortfolioContext.jsx`.
- **No Redux, MobX, or other state libraries**—only React Context.
- **No backend/server code**—this is a frontend-only project.

## Conventions & Tips
- Use functional React components and hooks (no class components).
- CSS is modular per component (no CSS-in-JS or global styles except `src/index.css`).
- When adding new features, follow the pattern: create a folder in `src/`, add `.jsx` and `.css` files, and import in `App.js`.
- For new global state, extend `PortfolioContext.jsx`.
- Use relative imports for assets and components.

## External Integrations
- No API calls or external data sources are present.
- No authentication or routing libraries beyond React Router (if present; check `App.js`).

## Examples
- To add a new "Team" section: create `src/Team/Team.jsx` and `src/Team/Team.css`, then import and render in `App.js`.
- To add a new image: place it in `public/images/` or `src/images/` and import using `import img from '../images/myimg.png'`.

---

For more, see `README.md` or the Create React App docs. If any conventions are unclear, ask for clarification or check similar patterns in the codebase.
