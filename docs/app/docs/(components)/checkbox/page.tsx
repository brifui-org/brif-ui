"use client";

import { Page } from "@/components/page";
import { Checkbox } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { checkboxAPIs } from "./apis";
import {
  disabledSnippet,
  errorSnippet,
  indeterminateSnippet,
  sizeSnippet
} from "./snippet";

export default function CheckboxDocs() {
  return (
    <Page>
      <Page.Title
        title="Checkbox"
        description="A control that toggles between two options, checked or unchecked."
      />

      <Page.Section title="Default" description="Default size is medium">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: {
              base: "start",
              md: "center"
            },
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr"
            }
          })}
        >
          <Checkbox id="checkbox-small" size="sm">
            <Checkbox.Indicator />
            <Checkbox.Label>Small</Checkbox.Label>
          </Checkbox>

          <Checkbox id="checkbox-medium" size="md">
            <Checkbox.Indicator />
            <Checkbox.Label>Medium</Checkbox.Label>
          </Checkbox>

          <Checkbox id="checkbox-large" size="lg">
            <Checkbox.Indicator />
            <Checkbox.Label>Large</Checkbox.Label>
          </Checkbox>
        </Page.Preview>
        <Page.CodePreview>{sizeSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Indeterminate">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: {
              base: "start",
              md: "center"
            },
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr"
            }
          })}
        >
          <Checkbox checked="indeterminate" size="sm">
            <Checkbox.Indicator />
            <Checkbox.Label>Small</Checkbox.Label>
          </Checkbox>

          <Checkbox checked="indeterminate" size="md">
            <Checkbox.Indicator />
            <Checkbox.Label>Medium</Checkbox.Label>
          </Checkbox>

          <Checkbox checked="indeterminate" size="lg">
            <Checkbox.Indicator />
            <Checkbox.Label>Large</Checkbox.Label>
          </Checkbox>
        </Page.Preview>
        <Page.CodePreview>{indeterminateSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Disabled">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: {
              base: "start",
              md: "center"
            },
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr 1fr"
            }
          })}
        >
          <Checkbox disabled error>
            <Checkbox.Indicator />
            <Checkbox.Label>Error</Checkbox.Label>
          </Checkbox>

          <Checkbox disabled>
            <Checkbox.Indicator />
            <Checkbox.Label>Unchecked</Checkbox.Label>
          </Checkbox>

          <Checkbox disabled>
            <Checkbox.Indicator />
            <Checkbox.Label>Checked</Checkbox.Label>
          </Checkbox>

          <Checkbox disabled checked="indeterminate">
            <Checkbox.Indicator />
            <Checkbox.Label>Indeterminate</Checkbox.Label>
          </Checkbox>
        </Page.Preview>
        <Page.CodePreview>{disabledSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Error">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: {
              base: "start",
              md: "center"
            },
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr"
            }
          })}
        >
          <Checkbox id="checkbox-small-error" error size="sm">
            <Checkbox.Indicator />
            <Checkbox.Label>Small</Checkbox.Label>
          </Checkbox>

          <Checkbox id="checkbox-medium-error" error size="md">
            <Checkbox.Indicator />
            <Checkbox.Label>Medium</Checkbox.Label>
          </Checkbox>

          <Checkbox id="checkbox-large-error" error size="lg">
            <Checkbox.Indicator />
            <Checkbox.Label>Large</Checkbox.Label>
          </Checkbox>
        </Page.Preview>
        <Page.CodePreview>{errorSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="API Reference">
        <Page.APIReference title="Checkbox" apis={checkboxAPIs} />
        <Page.APIReference title="Indicator" />
        <Page.APIReference title="Label" tag="label" />
      </Page.Section>
    </Page>
  );
}
