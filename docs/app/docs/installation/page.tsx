"use client";

import { InlineLink } from "@/components/inline-link";
import { Page } from "@/components/page";
import { CodeSquare } from "lucide-react";
import { Card, Codeblock, Text } from "@brifui/components";
import { css } from "@brifui/styled/css";

const step1 = `npm install @brifui/components @brifui/styled --save
npm install @brifui/theme @brifui/cli --save-dev`;

const step2 = `import { defineConfig } from "@brifui/theme"

export default defineConfig({
  include: [
    "<path_to_your_app_folder>/**/*.{ts,tsx,js,jsx}",
    "<path_to_your_node_modules>/@brifui/**/*.{ts,tsx,js,jsx}"
  ],
})`;

const step3 = `{
  ...
  "scripts": {
    "prepare": "brif codegen"
  },
  ...
}`;

const step4 = `module.exports = {
  plugins: {
    "@brifui/theme/postcss": {}
  }
}`;

const step5 = `@layer reset, base, tokens, recipes, utilities;`;

const step6 = `import { Button } from "@brifui/components"
import { css } from "@brifui/styled"

export const Example = () => (
  <Button css={css.raw({
    width: '100%'
  })}>
    Solid
  </Button>
)`;

export default function InstallationPage() {
  return (
    <Page>
      <Page.Title
        title="Installation"
        description="Welcome to the BrifUI documentation 👋"
      />

      <Page.Section shadow={false} title="Requirement">
        <ul className={css({ listStyle: "inside" })}>
          <Text as="li">
            <InlineLink target="_blank" href="https://react.dev">
              React 19
            </InlineLink>{" "}
            or later.
          </Text>
          <Text as="li">
            <InlineLink
              target="_blank"
              href="https://github.com/chakra-ui/panda/releases/tag/%40pandacss%2Ftypes%400.53.4"
            >
              Panda CSS 0.53.4
            </InlineLink>{" "}
            or later.
          </Text>
        </ul>
      </Page.Section>

      <Page.Section shadow={false} title="Installation">
        <Card css={css.raw({ mb: 6 })}>
          <Card.Body>
            <Codeblock.Root>
              <Codeblock.Header
                icon={<CodeSquare />}
                filename="1. Install BrifUI dependencies"
              />
              <Codeblock.Content language="bash">{step1}</Codeblock.Content>
            </Codeblock.Root>
          </Card.Body>
        </Card>

        <Card bordered css={css.raw({ mb: 6 })}>
          <Card.Body>
            <Codeblock.Root>
              <Codeblock.Header
                icon={<CodeSquare />}
                filename="2. Create brifui.config.js or brifui.config.ts if you use typescript"
              />
              <Codeblock.Content language="tsx">{step2}</Codeblock.Content>
            </Codeblock.Root>
          </Card.Body>
          <Card.Footer>
            Include all of the paths of your React components in the{" "}
            <Text
              css={css.raw({
                py: "0.5",
                px: 2,
                bg: "default",
                textStyle: "text.sm",
                color: "default.foreground",
                borderRadius: "component.md"
              })}
              fontWeight="semibold"
            >
              include
            </Text>{" "}
            section of the brifui.config.ts file. So the CLI could generate the
            minimal styles needed for your application.
          </Card.Footer>
        </Card>

        <Card bordered css={css.raw({ mb: 6 })}>
          <Card.Body>
            <Codeblock.Root>
              <Codeblock.Header
                icon={<CodeSquare />}
                filename="3. Added `codegen` command to your package.json"
              />
              <Codeblock.Content language="json" hightlightLines={[4]}>
                {step3}
              </Codeblock.Content>
            </Codeblock.Root>
          </Card.Body>
          <Card.Footer>
            The{" "}
            <Text
              css={css.raw({
                py: "0.5",
                px: 2,
                bg: "default",
                textStyle: "text.sm",
                color: "default.foreground",
                borderRadius: "component.md"
              })}
              fontWeight="semibold"
            >
              prepare
            </Text>{" "}
            script that will run codegen after dependency installation which
            will read your <Text fontWeight="semibold">Brif UI</Text>{" "}
            configuration and generate the styled system of your project at{" "}
            <Text fontWeight="semibold">@brifui/styled</Text> package.
          </Card.Footer>
        </Card>

        <Card bordered css={css.raw({ mb: 6 })}>
          <Card.Body>
            <Codeblock.Root>
              <Codeblock.Header
                icon={<CodeSquare />}
                filename="4. Create postcss.config.cjs file at the root of your project."
              />
              <Codeblock.Content language="javascript">
                {step4}
              </Codeblock.Content>
            </Codeblock.Root>
          </Card.Body>
        </Card>

        <Card bordered css={css.raw({ mb: 6 })}>
          <Card.Body>
            <Codeblock.Root>
              <Codeblock.Header
                icon={<CodeSquare />}
                filename="5. Added this line to the global css file of your project."
              />
              <Codeblock.Content language="css">{step5}</Codeblock.Content>
            </Codeblock.Root>
          </Card.Body>
          <Card.Footer>
            Make sure to import your global css file in your application root.
            <Codeblock.Root>
              <Codeblock.Content language="tsx">{`import "./global.css"

export const RootComponent = () => {
...`}</Codeblock.Content>
            </Codeblock.Root>
          </Card.Footer>
        </Card>

        <Card bordered>
          <Card.Body>
            <Codeblock.Root>
              <Codeblock.Header
                icon={<CodeSquare />}
                filename="6. You can now start to use BrifUI component and styled system 🥳"
              />
              <Codeblock.Content language="tsx">{step6}</Codeblock.Content>
            </Codeblock.Root>
          </Card.Body>
        </Card>
      </Page.Section>
      <Page.Section shadow={false} title="FAQ" />
    </Page>
  );
}
