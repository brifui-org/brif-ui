# BrifUI

<p align="center">
  <img width="10%" src="https://github.com/brifui-org/brif-ui/blob/main/docs/public/logo-with-bg.png" alt="brifui" />
</p>

<p align="center">
  A modern, accessible React UI component library built with Panda CSS and Radix UI.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@brifui/components"><img src="https://img.shields.io/npm/v/@brifui/components?style=flat-square" alt="npm version"></a>
  <a href="https://github.com/yourorg/brif-ui/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@brifui/components?style=flat-square" alt="license"></a>
  <a href="https://www.npmjs.com/package/@brifui/components"><img src="https://img.shields.io/npm/dm/@brifui/components?style=flat-square" alt="npm downloads"></a>
</p>

## Features

- 🧱 **Brutalist Design**: Honest, raw aesthetic with functional simplicity
- 🌈 **Modern Design System**: Beautiful, consistent UI components - powered by [PandaCSS](https://panda-css.com/)
- ♿ **Accessibility**: WCAG 2.1 compliant components - powered by [RadixUI](https://www.radix-ui.com/)
- 🎨 **Customizable**: Fully customizable with Panda CSS
- 🔍 **TypeScript**: Full type support
- 📦 **Modular**: Import only what you need
- 🌐 **SSR Compatible**: Works with Next.js and other SSR frameworks
- 🌙 **Dark Mode**: Built-in support for light and dark themes

## Installation

For complete installation guide, visit our [documentation website](https://brifui.com/docs/installation).

## Quick Start

```jsx
import { Button } from "@brifui/components";

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

## Documentation

For complete documentation, visit our [documentation website](https://brifui.com/docs/introduction).

## Components

BrifUI includes a wide range of components:

- **Inputs**: Button, Checkbox, Radio, Select, Slider, Switch, TextField
- **Navigation**: Breadcrumb, Link, Menu, Pagination, Tabs
- **Data Display**: Accordion, Avatar, Badge, Card, Table, Tag
- **Feedback**: Alert, Dialog, Progress, Spinner, Toast
- **Layout**: Box, Flex, Grid, Stack
- **Overlay**: Drawer, Modal, Popover, Tooltip

... And many more.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## Project Structure

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
```

## Development

To set up the development environment:

```bash
# Clone the repository
git clone https://github.com/yourorg/brif-ui.git
cd brif-ui

# Install dependencies
yarn

# Start development environment
yarn dev
```

Run the test suite with:

```bash
yarn test
```

## License

[MIT](LICENSE)
