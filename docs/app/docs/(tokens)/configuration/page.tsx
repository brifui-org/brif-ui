"use client";

import { Page } from "@/components/page";
import { useTheme } from "next-themes";
import { Button, Text } from "@brifui/components";
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
    </Page>
  );
}
