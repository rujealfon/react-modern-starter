# [React Stack] - Modern React Application

A scalable React application built with a feature-based architecture, leveraging Vite, TypeScript, Tailwind CSS v4, shadcn/ui, TanStack Router, Zustand, and Zod for a robust, type-safe, and efficient development experience.

## Core Technologies

*   **React 18+**: For building the user interface.
*   **Vite**: As the build tool, providing fast development and optimized builds.
*   **TypeScript**: For strong typing and improved code quality.
*   **Tailwind CSS v4**: A utility-first CSS framework with its new high-performance engine and Vite plugin.
*   **shadcn/ui**: Beautifully designed, accessible, and customizable UI components built with Radix UI and Tailwind CSS. Components are added directly to your codebase.
*   **TanStack Router (React Router v7)**: A fully type-safe router with first-class support for search params, efficient data loading, and nested routing.
*   **Zustand**: A small, fast, and scalable bearbones state management solution.
*   **Zod**: A TypeScript-first schema declaration and validation library.
*   **Feature-Based Architecture**: For organizing code by domain/feature, promoting scalability and maintainability.

## Folder Structure Overview

The project follows a feature-based architecture to promote separation of concerns and make it easier to navigate and scale the codebase.

```
.
├── public/
│   └── index.html              # Main HTML template for Vite
│   └── vite.svg                # Example public asset
├── src/
│   ├── App.tsx                 # Root React component, often renders <RouterProvider />
│   ├── main.tsx                # Application entry point (ReactDOM.render, imports global.css)
│   ├── router.ts               # TanStack Router: Root route configuration and router instance
│   │
│   ├── assets/                 # Global static assets (images, fonts)
│   │   └── logo.png            # Example application logo
│   │
│   ├── components/             # Shared components across features
│   │   ├── layout/             # Custom layout components
│   │   │   ├── RootLayout.tsx    # Basic layout for public pages (e.g., header, footer, Outlet)
│   │   │   ├── DashboardLayout.tsx # Layout for authenticated areas (e.g., Sidebar, Main Content Area with Outlet)
│   │   │   └── index.ts          # Barrel file for exporting layout components
│   │   ├── shared/             # Other complex shared components you build
│   │   │   ├── Sidebar.tsx       # Reusable sidebar component for DashboardLayout
│   │   │   ├── SidebarLink.tsx   # Component for individual links in the Sidebar
│   │   │   └── index.ts          # Barrel file for shared components
│   │   └── ui/                   # SHADCN/UI COMPONENTS (populated by `npx shadcn-ui@latest add ...`)
│   │       ├── button.tsx        # Example: shadcn/ui Button component source
│   │       ├── card.tsx          # Example: shadcn/ui Card component source
│   │       └── ...               # Other shadcn/ui components you add
│   │
│   ├── config/                 # Application-wide configuration
│   │   └── index.ts            # e.g., export const API_BASE_URL = "..."
│   │
│   ├── features/               # === FEATURE MODULES ===
│   │   ├── auth/               # Example: Authentication Feature
│   │   │   ├── api/
│   │   │   │   └── authApi.ts    # Functions for auth API calls (login, register, logout)
│   │   │   ├── components/
│   │   │   │   └── LoginForm.tsx # UI component for the login form (uses shadcn/ui & Tailwind)
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts    # Custom hook for accessing auth state/actions
│   │   │   ├── routes/
│   │   │   │   ├── LoginPage.tsx # Page component for the /login route
│   │   │   │   └── index.ts      # Exports TanStack Route objects for this feature's pages
│   │   │   ├── schemas/
│   │   │   │   └── loginSchema.ts # Zod schema for login form validation
│   │   │   ├── store/
│   │   │   │   └── authStore.ts  # Zustand store slice for authentication state (user, token)
│   │   │   ├── types/
│   │   │   │   └── index.ts      # TypeScript types specific to the auth feature (e.g., UserProfile)
│   │   │   └── index.ts          # Barrel file exporting public parts of the auth feature
│   │   │
│   │   ├── users/              # Example: Users Management Feature
│   │   │   ├── api/
│   │   │   │   └── usersApi.ts   # Functions for fetching/managing user data
│   │   │   ├── components/
│   │   │   │   └── UserTable.tsx # Component to display users in a table (uses shadcn/ui <Table>)
│   │   │   ├── routes/
│   │   │   │   └── UsersPage.tsx # Page component for displaying the list of users
│   │   │   │   └── index.ts      # Exports TanStack Route objects for /users
│   │   │   ├── schemas/
│   │   │   │   └── userSchema.ts # Zod schema for user data validation
│   │   │   ├── store/
│   │   │   │   └── userStore.ts  # Zustand store for users list, filters, etc.
│   │   │   └── index.ts          # Barrel file for users feature
│   │   │
│   │   └── ...                 # Other features (e.g., products, cart)
│   │
│   ├── hooks/                  # Globally shared custom React hooks
│   │   └── useDebounce.ts      # Example: custom hook for debouncing input
│   │
│   ├── lib/                    # Shared utility functions, helpers, class instances
│   │   ├── apiClient.ts        # Configured API client (e.g., Axios/fetch wrapper with base URL, interceptors)
│   │   ├── utils.ts            # General utility functions, and importantly, the `cn` function for shadcn/ui
│   │   └── zodUtils.ts         # (Optional) Zod helper functions if common patterns emerge
│   │
│   ├── services/               # (Optional) For more complex, shared business logic not tied to a feature
│   │   └── notificationService.ts # Example: service for managing toast notifications
│   │
│   ├── store/                  # Global Zustand store setup or stores not tied to a specific feature
│   │   ├── index.ts            # (Optional) Root store if combining slices or exporting all store hooks
│   │   └── uiStore.ts          # Example: Zustand store for global UI state (theme, modals)
│   │
│   ├── styles/                 # Global styles
│   │   └── global.css          # Contains @tailwind base, components, utilities; and shadcn/ui CSS variables
│   │
│   └── types/                  # Global TypeScript types/interfaces
│       ├── index.ts            # General global types
│       └── api.ts              # Common API response types (e.g., PaginatedResponse, ApiError)
│
├── .env.example                # Template for environment variables
├── .eslintrc.cjs               # ESLint configuration file
├── .gitignore                  # Specifies intentionally untracked files that Git should ignore
├── .prettierrc.json            # Prettier configuration for code formatting
├── components.json             # SHADCN/UI configuration file (style, paths, etc.)
├── index.html                  # Main HTML file (often in public/ with Vite, but can be at root)
├── package.json                # Project metadata, dependencies, and scripts
├── tsconfig.json               # TypeScript compiler options for the project (includes "paths" for aliases like "@/*")
├── tsconfig.node.json          # TypeScript compiler options for Node.js specific files (e.g., vite.config.ts)
└── vite.config.ts              # VITE build tool configuration (plugins, server options, Tailwind CSS v4 plugin)
```

### Key Directory Explanations:

*   **`src/features/`**: Each sub-directory represents a distinct feature of the application (e.g., authentication, user management, product listings). This co-locates all code related to a specific domain.
    *   **`api/`**: API request functions, often using the `apiClient` and Zod for response validation.
    *   **`components/`**: React components exclusively used within this feature. Styled with Tailwind CSS and compose `shadcn/ui` components from `src/components/ui/`.
    *   **`hooks/`**: Feature-specific React hooks.
    *   **`routes/`**: Page-level components and TanStack Router `Route` definitions for the feature. These are typically imported and used in `src/router.ts`.
    *   **`schemas/`**: Zod schemas for validating data within the feature (API payloads, form data, etc.).
    *   **`store/`**: Zustand store slices relevant to the feature's state.
    *   **`types/`**: TypeScript interfaces and types specific to this feature.
*   **`src/components/ui/`**: This directory is managed by `shadcn/ui`. When you run `npx shadcn-ui@latest add <component-name>`, the component's source code is added here. These are then imported and used throughout the application.
*   **`src/components/layout/`**: Contains custom layout components like `RootLayout.tsx` (for public pages) and `DashboardLayout.tsx` (for authenticated areas, possibly including a `Sidebar`). These layouts use Tailwind for styling and an `<Outlet />` from TanStack Router to render child routes.
*   **`src/components/shared/`**: Other shared components you build yourself that are not part of `shadcn/ui` but are used across multiple features or layouts (e.g., a custom `Sidebar.tsx`).
*   **`src/lib/utils.ts`**: Contains utility functions, most notably the `cn` function provided by `shadcn/ui` for merging Tailwind classes.
*   **`src/router.ts`**: Configures TanStack Router. It defines the root route and assembles the complete route tree by importing route configurations from various features.
*   **`src/styles/global.css`**: Imports Tailwind's base, components, and utilities. It also contains the CSS variables necessary for `shadcn/ui` theming.
*   **`tailwind.config.ts`**: Configures Tailwind CSS v4, including content paths, theme customizations (colors, fonts, etc.), and any Tailwind plugins.
*   **`vite.config.ts`**: Vite configuration file. This is where the Tailwind CSS v4 Vite plugin is integrated, enabling Tailwind processing without a separate PostCSS setup for Tailwind itself.
*   **`components.json`**: Configuration file for `shadcn/ui`, defining preferences like style, paths, and TypeScript usage.

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended - check `.nvmrc` if present)
*   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    cd [project-name]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Set up environment variables:**
    Copy the `.env.example` file to a new file named `.env` and fill in the necessary environment variables.
    ```bash
    cp .env.example .env
    ```

### Running the Development Server

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
```
This will start the Vite development server, typically available at `http://localhost:5173`.

## Key Architectural Decisions

*   **Feature-Based Architecture**: Organizes code by business domain, improving scalability and maintainability. Reduces cognitive load by co-locating related logic.
*   **Type-Safe Routing (TanStack Router)**: Provides end-to-end type safety for routes, search parameters, and route loaders. `src/router.ts` is the central hub for route definitions.
*   **Simplified State Management (Zustand)**: Uses a minimalistic API for managing global and feature-specific state. Feature stores are located in `src/features/[featureName]/store/`.
*   **Schema Validation (Zod)**: Ensures data integrity by validating API responses, form inputs, and potentially state structures. Schemas are defined in `src/features/[featureName]/schemas/`.
*   **Styling with Tailwind CSS v4 & shadcn/ui**:
    *   **Tailwind CSS v4**: Leverages its new engine via the Vite plugin for high performance and a utility-first approach to styling.
    *   **shadcn/ui**: Provides unstyled, accessible, and composable UI components that you own and customize. Components are added to `src/components/ui/` via the CLI (`npx shadcn-ui@latest add ...`). The `cn` utility in `src/lib/utils.ts` is used for class name composition.
    *   Global styles and CSS variables for shadcn/ui are in `src/styles/global.css`.

## Available Scripts

In the project directory, you can run:

*   **`npm run dev`**: Starts the development server with Vite.
*   **`npm run build`**: Builds the app for production to the `dist` folder.
*   **`npm run lint`**: Lints the codebase using ESLint.
*   **`npm run preview`**: Serves the production build locally for previewing.
*   **`npm run typecheck`**: Runs the TypeScript compiler to check for type errors.

## Adding shadcn/ui Components

To add new components from shadcn/ui:
```bash
npx shadcn-ui@latest add [component-name]
# Example: npx shadcn-ui@latest add button card dialog
```
The component files will be added to `src/components/ui/`.

## Further Considerations / Next Steps

*   **Testing**: Implement unit, integration, and end-to-end tests (e.g., using Vitest, React Testing Library, Playwright/Cypress).
*   **Internationalization (i18n)**: Add support for multiple languages if needed.
*   **Error Handling & Reporting**: Implement robust global error handling and integrate an error reporting service (e.g., Sentry).
*   **CI/CD**: Set up Continuous Integration and Continuous Deployment pipelines.

---

This README provides a starting point. Feel free to expand it with more project-specific details as your application grows!
