"use client";

import { Page } from "@/components/page";
import { Text } from "@brifui/components";

export default function TypographyDocs() {
  return (
    <Page>
      <Page.Title
        title="Typography"
        description="Rules of typesetting throughout the system."
      />
      <Page.Section
        title="Heading"
        description="Used to introduce pages or sections."
      >
        <Text type="heading.7xl">Heading 7XL</Text>
        <Text type="heading.6xl">Heading 6XL</Text>
        <Text type="heading.5xl">Heading 5XL</Text>
        <Text type="heading.4xl">Heading 4XL</Text>
        <Text type="heading.3xl">Heading 3XL</Text>
        <Text type="heading.2xl">Heading 2XL</Text>
        <Text type="heading.xl">Heading XL</Text>
        <Text type="heading.lg">Heading lg</Text>
        <Text type="heading.md">Heading md</Text>
        <Text type="heading.sm">Heading sm</Text>
      </Page.Section>

      <Page.Section
        title="Text"
        description="Designed for multiple lines of text, having a higher line height than Label."
      >
        <Text type="text.3xl">Text 3XL</Text>
        <Text type="text.2xl">Text 2XL</Text>
        <Text type="text.xl">Text XL</Text>
        <Text type="text.lg">Text lg</Text>
        <Text type="text.md">Text md</Text>
        <Text type="text.sm">Text sm</Text>
        <Text type="text.xs">Text xs</Text>
      </Page.Section>

      <Page.Section
        title="Button"
        description="Only to be used within components that render buttons."
      >
        <Text type="button.md">Button md</Text>
        <Text type="button.sm">Button sm</Text>
        <Text type="button.xs">Button xs</Text>
      </Page.Section>
    </Page>
  );
}
