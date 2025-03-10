"use client";

import { Page } from "@/components/page";
import { Textarea } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { disabledSnippet, errorSnippet, sizeSnippet } from "./snippet";

export default function TextareDocs() {
  return (
    <Page>
      <Page.Title
        title="Textarea"
        description="Displays a form textarea or a component that looks like a textarea."
      />

      <Page.Section title="Size" description="Default size is medium">
        <Page.Preview
          className={css({
            gap: 4
          })}
        >
          <Textarea size="sm" placeholder="Type your message here." />
          <Textarea size="md" placeholder="Type your message here." />
          <Textarea size="lg" placeholder="Type your message here." />
        </Page.Preview>
        <Page.CodePreview>{sizeSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Disabled">
        <Page.Preview
          className={css({
            gap: 4
          })}
        >
          <Textarea disabled size="sm" placeholder="Type your message here." />
          <Textarea disabled size="md" placeholder="Type your message here." />
          <Textarea disabled size="lg" placeholder="Type your message here." />
        </Page.Preview>
        <Page.CodePreview>{disabledSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Error">
        <Page.Preview
          className={css({
            gap: 4
          })}
        >
          <Textarea error size="sm" placeholder="Type your message here." />
          <Textarea error size="md" placeholder="Type your message here." />
          <Textarea error size="lg" placeholder="Type your message here." />
        </Page.Preview>
        <Page.CodePreview>{errorSnippet}</Page.CodePreview>
      </Page.Section>
    </Page>
  );
}
