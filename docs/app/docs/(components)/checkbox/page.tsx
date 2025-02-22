"use client";

import { Page } from "@/components/page";
import { Checkbox } from "@brifui/components";
import { css } from "@brifui/styled/css";

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
            justifyItems: "center",
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
      </Page.Section>

      <Page.Section title="Indeterminate">
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
      </Page.Section>

      <Page.Section title="Disabled">
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
      </Page.Section>
    </Page>
  );
}
