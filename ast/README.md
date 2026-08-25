# AST Car Rental

AST Car Rental is a modern car-rental website concept designed to make vehicle discovery, booking, and fleet operations feel clear, dependable, and professional.

The project is being developed as a two-sided rental experience:

- **Customers** can discover vehicles, compare practical details, select a location, and manage their bookings.
- **Vehicle owners** can manage their fleet, review booking activity, monitor availability, and understand rental performance.

> **Project status:** The repository currently contains the React/Vite foundation, reusable visual assets, and realistic static fixture data for cars, bookings, users, and dashboard metrics. The application interface and production services are still being implemented. Features described as planned below are product direction, not completed functionality.

## Product Vision

AST Car Rental is intended to provide a complete rental workflow without unnecessary friction. A customer should be able to move from browsing to a confident booking decision with the information they need, while an owner should have a focused workspace for keeping vehicles, reservations, and business performance under control.

The experience is planned around:

- Clear vehicle profiles with brand, model, category, year, seating capacity, fuel type, transmission, price, location, description, imagery, and availability.
- Location-aware browsing across supported cities such as New York, Los Angeles, Houston, and Chicago.
- A customer booking area with reservation dates, prices, and booking statuses.
- A dedicated owner workspace for fleet administration and booking operations.
- Responsive, accessible interfaces that work well on mobile and desktop screens.

## Professional Feature Set

### Customer Experience

Planned customer-facing capabilities include:

- Search and browse an organized vehicle catalog.
- Filter vehicles by location, category, price, seating, fuel type, transmission, and availability.
- Review detailed vehicle information before booking.
- Select pickup and return dates with clear pricing.
- Receive booking confirmation and track pending, confirmed, completed, or cancelled reservations.
- View and manage personal booking history.
- Use a responsive interface with clear loading, empty, validation, and error states.

### Owner Experience

Planned owner-facing capabilities include:

- A dashboard with total vehicles, bookings, pending reservations, completed rentals, recent activity, and revenue summaries.
- Add, edit, publish, and remove vehicle listings.
- Manage vehicle images, descriptions, specifications, pricing, location, and availability.
- Review incoming reservations and update booking statuses.
- Prevent unavailable vehicles from being offered for conflicting dates.
- Monitor fleet utilization and rental performance through useful operational metrics.

### Production-Ready Quality

The long-term product should also include:

- Secure authentication with separate customer and owner permissions.
- Server-side validation for vehicles, dates, prices, and booking state transitions.
- Reliable availability checks that prevent double-booking under concurrent requests.
- Payment processing, receipts, refunds, and cancellation policies.
- Accessible keyboard navigation, semantic markup, readable contrast, and assistive-technology support.
- Automated tests for booking rules, permissions, pricing, and critical user flows.
- Observability, structured error handling, audit-friendly booking history, and deployment automation.

## Current Foundation

The project currently includes:

- React 19 and React DOM for the application layer.
- Vite for local development and production builds.
- ESLint with React Hooks and React Refresh plugins.
- A central asset module containing logos, icons, vehicle imagery, testimonials, and user imagery.
- Static domain fixtures for vehicles, customer bookings, owner navigation, user identity, and dashboard metrics.
- Navigation metadata for customer routes such as Home, Cars, and My Bookings, plus owner routes for Dashboard, Add Car, Manage Cars, and Manage Bookings.

At this stage, there is no backend API, database, authentication flow, payment integration, persistent booking workflow, or live availability service in the repository. The current `App` component is an application shell, and the fixture data is ready to support the interface as it is built.

## Technology Stack

| Area              | Technology                                                 |
| ----------------- | ---------------------------------------------------------- |
| UI                | React 19                                                   |
| Build tool        | Vite 8                                                     |
| Language          | JavaScript with ES modules                                 |
| Styling direction | Tailwind CSS integration in the Vite and CSS configuration |
| Code quality      | ESLint 10, React Hooks, React Refresh                      |
| Data layer        | Static JavaScript fixture data at present                  |

## Project Structure

```text
ast/
├── public/                  # Public static files
├── src/
│   ├── assets/
│   │   └── assets.js        # Images, icons, navigation, and fixture data
│   ├── App.jsx              # Main application entry component
│   ├── index.css            # Global styles and Tailwind entry point
│   └── main.jsx             # React bootstrap and Strict Mode setup
├── eslint.config.js         # ESLint configuration
├── index.html               # Vite HTML entry point
├── package.json             # Scripts and dependencies
└── vite.config.js           # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

From the `ast` directory:

```bash
npm install
```

### Development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Available scripts

```bash
npm run dev      # Start the Vite development server
npm run lint     # Run ESLint across the project
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Roadmap

1. Build the customer-facing pages and responsive layout system.
2. Add client-side routing for customer and owner workflows.
3. Replace fixture data with a validated backend API and persistent database.
4. Implement authentication, role-based authorization, and protected owner routes.
5. Add date-aware availability rules and transactional booking creation.
6. Add payments, cancellation policies, receipts, and notification workflows.
7. Add automated unit, integration, accessibility, and end-to-end coverage.
8. Prepare production deployment with monitoring, security controls, and operational documentation.

## Contributing

Keep changes focused, preserve the existing React/Vite conventions, and validate updates with:

```bash
npm run lint
npm run build
```

When adding a rental feature, document its user-facing behavior and test the edge cases around availability, dates, permissions, and pricing.

## License

No license has been specified for this project yet.
