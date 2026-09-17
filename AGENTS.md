# AST Car Rental Agent Guide

## Working Directory

- The application package is `ast/`; run npm commands from that directory.
- Use `npm install` to install dependencies, then `npm run dev` for local development.
- Validate changes with `npm run lint` and `npm run build`. There is currently no test script or test suite.
- Keep changes focused and do not commit or create branches unless explicitly requested.

## Application Shape

- `src/main.jsx` bootstraps React, imports `src/index.css`, and wraps `App` in `BrowserRouter`.
- `src/App.jsx` is the application shell. Shared UI belongs in `src/components/`; customer and owner screens belong in `src/pages/`.
- `src/assets/assets.js` is the central asset registry and contains static demo fixtures for cars, bookings, users, navigation, and dashboard data.
- Use `react-router-dom` routes and `Link`/`useNavigate` for navigation. Navigation metadata includes customer paths (`/`, `/cars`, `/my-bookings`) and owner paths (`/owner`, `/owner/add-car`, `/owner/manage-cars`, `/owner/manage-bookings`).

## Project Conventions

- Styling is Tailwind utility-first. Preserve the existing Tailwind v4 setup in `src/index.css` and reuse its theme tokens: `primary`, `primary-dull`, `light`, and `borderColor`.
- Import local media through the `assets` object instead of duplicating asset paths. Public assets are referenced from root URLs.
- Preserve existing fixture compatibility, including `isAvaliable` where required; avoid propagating that typo into new APIs or components.
- Treat fixture data as demo-only. Backend integration, authentication, persistence, payments, and authoritative availability checks are not implemented.
- Keep planned behavior clearly separate from implemented behavior, and account for loading, empty, validation, error, responsive, and accessible states in new user flows.

## Related Customizations

- [Webapp Documentation Maintainer](ast/.github/agents/webapp-documentation.agent.md) keeps README and meaningful code documentation synchronized.
- [AST Code And Client Review](ast/.github/skills/ast-code-and-client-review/SKILL.md) defines the engineering and customer review workflow.
- [Project README](ast/README.md) contains setup details, product status, roadmap, and current limitations.