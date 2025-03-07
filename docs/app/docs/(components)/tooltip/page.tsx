"use client";

import { Page } from "@/components/page";
import { Button, Tooltip } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { defaultSnippet, noDelaySnippet, variantnippet } from "./snippet";

export default function InputDocs() {
  return (
    <Page>
      <Page.Title
        title="Tooltip"
        description="A set of headings, vertically stacked, that each reveal an related section of content. Commonly referred to as an accordion."
      />

      <Page.Section title="Default">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: "center",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr 1fr"
            }
          })}
        >
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>Top</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>Right</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="right">
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>Bottom</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="bottom">
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>Left</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="left">
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>
        </Page.Preview>
        <Page.CodePreview>{defaultSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Variant">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: "center",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr"
            }
          })}
        >
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>Default</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>Warning</Button>
            </Tooltip.Trigger>
            <Tooltip.Content type="warning" side="right">
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>Error</Button>
            </Tooltip.Trigger>
            <Tooltip.Content type="error" side="bottom">
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>
        </Page.Preview>
        <Page.CodePreview>{variantnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="No delay">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: "center",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr"
            }
          })}
        >
          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger>
              <Button>Default</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger>
              <Button>Warning</Button>
            </Tooltip.Trigger>
            <Tooltip.Content type="warning">
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger>
              <Button>Error</Button>
            </Tooltip.Trigger>
            <Tooltip.Content type="error">
              The Evil Rabbit Jumped over the Fence
            </Tooltip.Content>
          </Tooltip.Root>
        </Page.Preview>
        <Page.CodePreview>{noDelaySnippet}</Page.CodePreview>
      </Page.Section>
    </Page>
  );
}
