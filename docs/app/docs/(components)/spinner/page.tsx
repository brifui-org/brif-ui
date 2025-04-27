"use client";

import { Page } from "@/components/page";
import { Spinner } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { spinnerAPIs } from "./apis";
import { size } from "./snippet";

export default function SpinnerDocs() {
  return (
    <Page>
      <Page.Title
        title="Spinner"
        description="A succinct message that is displayed temporarily."
      />

      <Page.Section title="Size" description="Default size is medium">
        <Page.Preview
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 2
          })}
        >
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </Page.Preview>
        <Page.CodePreview>{size}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="API Reference">
        <Page.APIReference title="Spinner" apis={spinnerAPIs} />
      </Page.Section>
    </Page>
  );
}
