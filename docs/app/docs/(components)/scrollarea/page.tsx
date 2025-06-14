"use client";

import { Page } from "@/components/page";
import { ScrollArea, Text } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { defaultSnippet } from "./snippet";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollAreaDocs() {
  return (
    <Page>
      <Page.Title
        title="Scrollarea"
        description="Augments native scroll functionality for custom, cross-browser styling."
      />

      <Page.Section title="Default">
        <Page.Preview
          css={css.raw({
            p: 0,
            py: 0
          })}
        >
          <ScrollArea.Root>
            <div className={css({ p: 4, maxH: 72 })}>
              <Text
                type="heading.lg"
                fontWeight="medium"
                css={css.raw({ mb: 4, lineHeight: "none" })}
              >
                Tags
              </Text>
              {tags.map((tag) => (
                <Text
                  suppressHydrationWarning
                  key={tag}
                  as="div"
                  type="text.sm"
                  css={css.raw({
                    py: 4,
                    "&:not(:last-child)": {
                      borderBottom: "1px solid",
                      borderColor: "border.muted"
                    }
                  })}
                >
                  {tag}
                </Text>
              ))}
            </div>
          </ScrollArea.Root>
        </Page.Preview>
        <Page.CodePreview>{defaultSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="API Reference">
        <Page.APIReference title="Root" />
        <Page.APIReference title="Scrollbar" />
      </Page.Section>
    </Page>
  );
}
