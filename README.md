# Next.js Quick Template (Bun Only)

This repository provides a streamlined Next.js project template that is optimized for use with Bun as the package manager and runtime. It offers a solid foundation for developing efficient and scalable Next.js applications with modern tooling.

## Features

- **Next.js Integration**: Server-side rendering (SSR) and static site generation (SSG) support.
- **Bun Package Manager**: Uses Bun for fast package management and execution.
- **TypeScript Support**: Ensures static typing for improved code quality.
- **ESLint & Prettier**: Pre-configured for consistent code formatting and linting.
- **Jest Testing**: Integrated for unit and integration testing.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.

## Prerequisites

- [Bun](https://bun.sh/) must be installed on your system.

## Getting Started

1. **Using `create-next-app` with this template:**

   ```sh
   npx create-next-app my-new-project --example https://github.com/fishefam/next-q-template
   cd my-new-project
   ```

2. **Or Clone the Repository Manually:**

   ```sh
   git clone https://github.com/fishefam/next-q-template.git my-new-project
   cd my-new-project
   ```

3. **Install Dependencies (Bun Only):**

   ```sh
   bun install
   ```

4. **Start the Development Server:**
   ```sh
   bun run dev
   ```

This will start the application at `http://localhost:3000`.

## Notes

- This template is **Bun-only** and does not support `npm` or `yarn` or `pnpm`. Please ensure you have Bun installed before using this template.
- You can modify the configuration files such as `next.config.js`, `tailwind.config.js`, and `tsconfig.json` to fit your project needs.

For more details, refer to the official Bun documentation: [https://bun.sh/](https://bun.sh/).
