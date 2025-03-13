# Contributing to BrifUI

Thank you for your interest in contributing to BrifUI! This document provides guidelines and instructions to help you contribute effectively.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
  - [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
  - [Creating a New Component](#creating-a-new-component)
  - [Testing Guidelines](#testing-guidelines)
  - [Documentation Guidelines](#documentation-guidelines)
- [Submitting Contributions](#submitting-contributions)
  - [Pull Request Process](#pull-request-process)
  - [Commit Message Guidelines](#commit-message-guidelines)
- [Package Versioning](#package-versioning)
- [Troubleshooting](#troubleshooting)

## Code of Conduct

We expect all contributors to adhere to a respectful and inclusive environment. Please be kind and considerate to others, and focus on constructive feedback and collaboration.

## Getting Started

### Setting Up the Development Environment

1. **Fork and Clone the Repository**

   ```bash
   git clone https://github.com/your-username/brif-ui.git
   cd brif-ui
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Start Development Environment**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Project Structure

The BrifUI library is structured as follows:

```
docs/                  # Documentation website
packages/
  ├── cli/             # @brifui/cli package
  ├── components/      # Component monorepo
  │    ├── accordion/  # Individual component packages
  │    ├── button/
  │    └── ...
  ├── entry/           # Entrypoint of the library
  ├── postcss/         # @brifui/postcss package
  ├── styled/          # @brifui/styled package
  ├── theme/           # @brifui/theme package
  ├── types/           # @brifui/types package
  └── utils/           # @brifui/utils package
plop/                  # Templates for code generation
scripts/               # Build and maintenance scripts
```

## Development Workflow

### Creating a New Component

1. **Use the Component Generator**

   ```bash
   npm run create:comp
   # or
   yarn create:comp
   ```

   This will scaffold a new component with all necessary files.

2. **Component Structure**

   Each component should have the following structure:

   ```
   packages/components/[component-name]/
   ├── package.json
   ├── README.md
   ├── src/
   │   ├── index.ts             # Exports the component
   │   ├── [component].tsx      # Main component code
   │   └── [component].spec.tsx # Unit tests
   └── stories/
       └── [component].stories.tsx # Storybook stories
   ```

### Testing Guidelines

1. **Unit Testing**

   - Write tests in `.spec.tsx` files next to the component file.
   - Do not import React directly.
   - Do not import anything from `vitest` as it is injected globally.
   - Always provide all required props to components in tests.
   - Use `*ByRole` rather than `testId` for element queries.
   - Use `userEvent` for simulating user interactions.

2. **Writing Test Cases**

   ```tsx
   describe("ComponentName", () => {
     it("should render correctly", () => {
       // test code
     });

     describe("Specific scenario", () => {
       it("should handle specific case", () => {
         // test code
       });
     });
   });
   ```

3. **Running Tests**

   ```bash
   npm test
   # or
   yarn test
   ```

### Documentation Guidelines

1. **Component Documentation**

   - Each component should have a README.md file explaining its usage.
   - Include code examples for common use cases.
   - Document props, accessibility features, and any important notes.

2. **Storybook Stories**

   - Create stories that demonstrate various component states and configurations.
   - Include documentation in stories using the Storybook Docs addon.

## Submitting Contributions

### Pull Request Process

1. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**

   Implement your changes, following the code style and testing guidelines.

3. **Run Tests and Linting**

   ```bash
   npm run test
   npm run lint
   # or
   yarn test
   yarn lint
   ```

4. **Update Documentation**

   Make sure to update relevant documentation for your changes.

5. **Submit a Pull Request**

   - Fill in the PR template with details about your changes.
   - Link any related issues.
   - Request a review from maintainers.

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types include:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that don't affect code meaning (formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools

## Package Versioning

BrifUI uses semantic versioning. To ensure consistent versioning across packages:

1. **Check Current Versions**

   ```bash
   npm run version-check
   # or
   yarn version-check
   ```

   This script displays the current versions of all @brifui packages and ensures dependencies are kept in sync.

## Troubleshooting

If you encounter any issues during development:

1. Make sure your development environment is properly set up.
2. Check the GitHub Issues page to see if the problem has already been reported.
3. Ask for help in the project's communication channels.

---

Thank you for contributing to BrifUI! Your efforts help make this project better for everyone.
