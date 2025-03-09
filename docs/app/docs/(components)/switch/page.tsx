"use client";

import { Page } from "@/components/page";
import { Switch, Text } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { size } from "./snippet";

export default function SwitchDocs() {
  return (
    <Page>
      <Page.Title
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
      />

      <Page.Section title="Size" description="Default size is medium">
        <Page.Preview
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 2
          })}
        >
          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root id="small" size="sm">
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="small" type="text.md">
              Small
            </Text>
          </div>

          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root id="medium" size="md">
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="medium" type="text.md">
              Medium
            </Text>
          </div>

          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root id="large" size="lg">
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="large" type="text.lg">
              Large
            </Text>
          </div>
        </Page.Preview>
        <Page.CodePreview>{size}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Disabled">
        <Page.Preview
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 2
          })}
        >
          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root disabled id="small-d" size="sm">
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="small-d" type="text.md">
              Small
            </Text>
          </div>

          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root disabled id="medium-d" size="md">
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="medium-d" type="text.md">
              Medium
            </Text>
          </div>

          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root disabled id="large-d" size="lg" checked>
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="large-d" type="text.lg">
              Large
            </Text>
          </div>
        </Page.Preview>
        <Page.CodePreview>{size}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Error">
        <Page.Preview
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 2
          })}
        >
          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root error id="small-de" size="sm">
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="small-de" type="text.md">
              Small
            </Text>
          </div>

          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root error id="medium-de" size="md">
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="medium-de" type="text.md">
              Medium
            </Text>
          </div>

          <div
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <Switch.Root error id="large-de" size="lg">
              <Switch.Thumb />
            </Switch.Root>
            <Text as="label" htmlFor="large-de" type="text.lg">
              Large
            </Text>
          </div>
        </Page.Preview>
        <Page.CodePreview>{size}</Page.CodePreview>
      </Page.Section>
    </Page>
  );
}
