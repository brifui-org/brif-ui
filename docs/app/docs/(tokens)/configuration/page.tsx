"use client";

import { InlineLink } from "@/components/inline-link";
import { Page } from "@/components/page";
import { CodeSquareIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, Card, Codeblock, Text } from "@brifui/components";
import { css, Styles } from "@brifui/styled/css";

export default function ColorsDocs() {
  const { setTheme } = useTheme();

  return (
    <Page>
      <Page.Title
        title="Configuration"
        description={
          <Text>
            BrifUI provides{" "}
            <Text color="muted" fontWeight="semibold">
              light
            </Text>{" "}
            and{" "}
            <Text color="muted" fontWeight="semibold">
              dark
            </Text>{" "}
            themes by default, but you can also create a custom themes to match
            your needs.
          </Text>
        }
      />
      <Page.Section
        title="Custom themes"
        description="Here are some custom themes that you can try"
      >
        <Page.Preview
          className={css({
            gap: 4,
            justifyContent: "center",
            display: "grid",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr"
            }
          })}
        >
          <Button
            css={css.raw({ w: "200px", justifySelf: "center" })}
            onClick={() => setTheme("light")}
          >
            Light theme
          </Button>
          <Button
            css={css.raw({ w: "200px", justifySelf: "center" })}
            onClick={() => setTheme("dark")}
          >
            Dark theme
          </Button>
          <Button
            css={css.raw({ w: "200px", justifySelf: "center" })}
            onClick={() => setTheme("purple")}
          >
            Purple theme
          </Button>
          <Button
            css={css.raw({ w: "200px", justifySelf: "center" })}
            onClick={() => setTheme("amber")}
          >
            Amber theme
          </Button>
        </Page.Preview>
        <Page.CodePreview>Try it out</Page.CodePreview>
      </Page.Section>

      <Page.Section
        shadow={false}
        title="Override component styles"
        description="BrifUI helps you override the default component styles easily via configurations."
      >
        <p>
          Let&apos;s override the default styles of the{" "}
          <InlineLink href="/docs/button">Button</InlineLink> component, which
          has 2 <strong>slots</strong>:
        </p>
        <p>
          <ul className={css({ listStyle: "inside" })}>
            <Text as="li" fontWeight="semibold">
              root
            </Text>
            <Text as="li" fontWeight="semibold">
              container
            </Text>
          </ul>
        </p>
        <p>
          And we want to change the default text color of the{" "}
          <InlineLink href="/docs/button">Button</InlineLink> to <b>blue</b>.
        </p>
        <p>
          Each component can configure individually by overriding 2{" "}
          <b>properties</b>:
        </p>
        <p>
          <ul className={css({ listStyle: "inside" })}>
            <Text as="li" fontWeight="semibold">
              base
            </Text>
            <Text as="li" fontWeight="semibold">
              variants
            </Text>
          </ul>
        </p>

        <Card bordered css={css.raw({ mb: 6 })}>
          <Card.Body>
            <Codeblock.Root>
              <Codeblock.Header
                icon={<CodeSquareIcon />}
                filename="brifui.config.ts"
              />
              <Codeblock.Content language="bash">{`import { defineConfig } from "@brifui/theme";
              
export default defineConfig({
  ...,
  recipes: {
    button: {
      variants: {
        size: {
          md: {
            container: {
              borderRadius: "none"
            }
          }
        }
      }
    }
  }
});`}</Codeblock.Content>
            </Codeblock.Root>
          </Card.Body>
          <Card.Footer>
            This configuration will make{" "}
            <InlineLink href="/docs/button">Button</InlineLink> of size{" "}
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
              md
            </Text>{" "}
            has no{" "}
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
              border-radius
            </Text>
            .
          </Card.Footer>
        </Card>
      </Page.Section>
    </Page>
  );
}
