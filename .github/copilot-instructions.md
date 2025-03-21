# Codebase Overview

This codebase appears to be the React UI library built with [Panda CSS](https://panda-css.com/) and [Radix UI](https://www.radix-ui.com/).

# Stack and Key Technologies

- **Frontend framework**:
  - React.
  - NextJS.
- **Language**:
  - Typescript.
  - Javascript.
- **Unit testing framework**:
  - Vitest.
  - React Testing Library.
- **Repository manager**: Turborepo.

# Project Overview

## Folder structure

This project is structured as follow:

```
docs # Documentation website
├── packages
│   ├── components # Component monorepo of the library
│       ├── entry # Entrypoint of the library - re-export monorepo
```

## Packages

- `@brifui/cli`: CLI tooling of the BrifUI library.
- `@brifui/postcss`: PostCSS plugin of the BrifUI library.
- `@brifui/styled`: Styled system package for BrifUI library.
- `@brifui/types`: Typings package for BrifUI library.
- `@brifui/theme`: Themeing library for BrifUI library - This package contains PandaCSS configuration for BrifUI theme.
- `@brifui/utils`: Utils package for BrifUI library.

# Coding guideline

## How to write unit tests

- Take "packages/components/accordion/src/accordion.spec.tsx" as an example.

- Do not make anything up.
- Unit tests should be written in file with the following naming convention `<component_name>.spec.tsx`.
- Unit tests file should be placed next to the component file with the following naming convention `<component_name>.tsx`
- Unit tests file should not import `React` like `import React from 'react'`
- Unit tests file should not import anything from `vitest` as it is injected globally.
- Unit tests for component should provide all its required props, and should not leave any typescript errors.
- When querying element in the `screen`, must not query by `testId`, always prefer `*ByRole`.
- When testing user interactions, `userEvent` should be setup instead of calling directly.

Each unit test should cover:

- Web Accessilibity.
- Component interactions.

Test should be written in this format:

- `describe` contains the title of the scenario.
  - `describe` with title is the component name shouyld be preserved without transform to lowercase.
- `it` contains the expected behaviour of the test => should start with `should` and all lowercase.

```tsx
describe("Scenraio A", () => {
  it("should <the expected behaviour>", () => {
    ...
  })
  ...
})
```

- When testing with multiple scenarios => should use nested `describe` blocks where each `decribe` block is a single scenarios instead of multiple separate `describe` blocks.

```tsx
describe("Scenraio A", () => {
  describe("Scenario B", () => {
    ...
  })
  ...
})
```
