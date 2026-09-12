# AngularPomodoroTimer

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project Structure

src/
├── app/
│   ├── core/                  # Singletons, non-UI global logic, and configurations
│   │   ├── config/            # Global app configurations
│   │   ├── guards/            # Route guards (e.g., auth.guard.ts)
│   │   ├── interceptors/      # HTTP Interceptors (e.g., auth.interceptor.ts)
│   │   ├── models/            # Global interfaces and data models
│   │   └── services/          # Singleton services (e.g., auth.service.ts)
│   │
│   ├── shared/                # Purely reusable UI pieces and utilities
│   │   ├── components/        # Reusable UI widgets (buttons, loaders, modals)
│   │   ├── directives/        # Custom attribute/structural directives
│   │   ├── pipes/             # Custom formatting pipes
│   │   └── utils/             # Helper or pure JavaScript/TypeScript functions
│   │
│   ├── features/              # Core business modules (domain-driven/lazy-loaded)
│   │   ├── auth/              # Auth sub-feature
│   │   │   ├── components/    # Feature-specific components (login, signup)
│   │   │   ├── services/      # Feature-specific services
│   │   │   └── auth.routes.ts # Feature-specific routing
│   │   └── dashboard/         # Dashboard sub-feature
│   │
│   ├── layout/                # Global shell components
│   │   ├── footer/
│   │   ├── header/
│   │   └── sidebar/
│   │
│   ├── app.component.ts       # Root layout component
│   ├── app.config.ts          # Main providers and configuration (v15+)
│   └── app.routes.ts          # Main routing file configuration
│
├── assets/                    # Shared static files (icons, localizations)
├── public/                    # Root level static assets (favicons, robots.txt)
├── environments/              # Environment configurations (dev, prod)
├── main.ts                    # App bootstrapping entry point
└── styles.scss                # Global styles and design system variables
