# GitHub Copilot Instructions

These instructions define how GitHub Copilot should assist with this TypeScript project. The goal is to ensure consistent, high-quality code generation aligned with TypeScript conventions, modern tooling, and our architecture standards.

## 🧠 Context

- **Project Type**: Frontend UI
- **Language**: TypeScript
- **Framework / Libraries**: Angular /  Jasmine / Karma
- **Architecture**: Modular Monolith / Clean Architecture / Domain-Driven Design

## 🔧 General Guidelines

- Use idiomatic TypeScript—always prefer type safety and inference.
- Use `interface` or `type` aliases to define data structures.
- Always enable `strict` mode and follow the project's `tsconfig.json`.
- Prefer named functions, especially for reuse and testability.
- Use `async/await` over raw Promises and avoid `.then().catch()` chains.
- Keep files small, focused, and well-organized.
- use scss for styles, and avoid inline styles.
- Use `import` statements for modules, avoid `require`.

## 🛑 No Zone.js

- `zone.js` is **not used** — it is **removed** from `polyfills.ts`
- No automatic change detection via async tasks (e.g., setTimeout, XHR)
- Updates are triggered manually via:
  - `ChangeDetectorRef.detectChanges()`
  - `computed`, `effect`, `signal`
  - RxJS and `async` pipe with `pushPipe()` (if used)
  
## 📁 File Structure

Use this structure as a guide when creating or updating files:

```text
client/
  src/
│
├── app/
│   ├── core/                   # Singleton services, interceptors, guards, config
│   │   ├── services/           # Shared services (auth, logger, etc.)
│   │   ├── guards/             # Route guards
│   │   ├── interceptors/       # HTTP interceptors
│   │   └── core.module.ts      # Singleton module (import only in AppModule)
│
│   ├── shared/                 # Reusable components, directives, pipes
│   │   ├── components/         # Shared UI components (buttons, loaders, etc.)
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── shared.module.ts    # Shared module (import in feature modules)
│
│   ├── features/               # App-specific feature modules
│   │   ├── dashboard/          # Feature module example
│   │   │   ├── components/     # Components specific to dashboard
│   │   │   ├── pages/          # Smart containers/pages
│   │   │   ├── services/       # Feature-scoped services
│   │   │   ├── dashboard-routing.module.ts
│   │   │   └── dashboard.module.ts
│   │   └── ...
│
│   ├── layout/                 # App shell layout (header, sidebar, etc.)
│   │   ├── header/
│   │   ├── footer/
│   │   └── layout.component.ts
│
│   ├── assets/                 # Static assets (images, icons)
│   ├── environments/           # environment.ts, environment.prod.ts
│   ├── app-routing.module.ts   # Global app routes
│   └── app.module.ts           # Root module
│
├── assets/                     # Public assets folder (for angular.json)
│
├── styles/                     # Global SCSS/CSS styles
│   └── themes/                 # Theme files if theming is used
│
├── index.html
├── main.ts
├── styles.scss
└── tsconfig.app.json

```

## 🧶 Patterns

### ✅ Patterns to Follow
- Use **Dependency Injection** and **Separation of Concerns**.
- Handle errors with centralized middleware.
- Use `dotenv` or similar for config management.
- Prefer `fetch` with interceptors for API calls.
- Structure logic around clear modules and components.
- Keep feature modules isolated — they should import from shared, not from each other.
- Use standalone components when appropriate.
- Keep smart (page) and dumb (UI) components separate:
  - `pages/` → smart components (handle services, logic)
  - `components/` → presentational components

### 🚫 Patterns to Avoid
- Avoid using `any` unless explicitly needed.
- No jQuery or direct DOM access via `document`.
- No external state management libraries (NgRx, Akita, etc.).
- Don’t duplicate logic across components and services.
- Avoid deeply nested callbacks or overly clever code.
- Do not commit hardcoded secrets or tokens.
- Avoid global state unless using scoped context providers (in React).

## 📌 Key Principles

- **Use Standalone APIs** when possible (components, routes, bootstrap)
- Structure **by feature**, not by type
- Focus on **accessibility**, **performance**, and **modularity**
- Use `signals` and `effects` where appropriate

## 🧪 Testing Guidelines

- Use Jasmine & Karma for unit tests.
- Prefer `TestBed` for component/service testing.
- Test business logic in services; mock dependencies using `ts-mockito` or `jest.mock` for unit tests.
- Follow TDD when feasible for critical features.
- Include coverage reports and snapshot testing for UI.

## 🧩 Example Prompts
- `Copilot, write a Jest test for the calculateDiscount function with mock inputs.`
- `Copilot, write a Jasmine test for an Angular component that checks if a button is disabled when a form is invalid.`


## 🔁 Iteration & Review

- Always review and refine Copilot output.
- If output doesn’t follow these conventions, rewrite the prompt or break the task into smaller pieces.
- Add a comment above your cursor with intent if Copilot is giving poor suggestions.
- Avoid merging Copilot-generated code without a review.

## 📚 References

- [Angular Style Guide](https://angular.io/guide/styleguide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Zod Docs](https://zod.dev/)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [Project Style Guide](https://ts.dev/style/)
- [Angular Documentation](https://angular.io/docs)
- [Jasmine Documentation](https://jasmine.github.io/pages/docs_home.html)
