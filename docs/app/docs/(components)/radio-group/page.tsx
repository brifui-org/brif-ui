"use client";

import { Page } from "@/components/page";
import { RadioGroup } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { radioGroupItemAPIs, radioGroupRootAPIs } from "./apis";
import { defaultSnippet, disabledSnippet, errorSnippet } from "./snippet";

export default function InputDocs() {
  return (
    <Page>
      <Page.Title
        title="RadioGroup"
        description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      />

      <Page.Section title="Size" description="Default size is medium">
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
          <RadioGroup.Root size="sm">
            <RadioGroup.Item id="radio-sm-1" value="radio-sm-1">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-sm-1">Radio 1</RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-sm-2" value="radio-sm-2">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-sm-2">Radio 2</RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <RadioGroup.Root size="md">
            <RadioGroup.Item id="radio-md-1" value="radio-md-1">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-md-1">Radio 1</RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-md-2" value="radio-md-2">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-md-2">Radio 2</RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <RadioGroup.Root size="lg">
            <RadioGroup.Item id="radio-lg-1" value="radio-lg-1">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-lg-1">Radio 1</RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-lg-2" value="radio-lg-2">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-lg-2">Radio 2</RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>
        </Page.Preview>
        <Page.CodePreview>{defaultSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Disabled">
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
          <RadioGroup.Root error disabled size="sm">
            <RadioGroup.Item
              id="radio-sm-1-d-e-d"
              value="radio-sm-1-d-e-d"
              checked
            >
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-sm-1-d-e-d">
                Radio 1
              </RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-sm-2-d-e-d" value="radio-sm-2-d-e-d">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-sm-2-d-e-d">
                Radio 2
              </RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <RadioGroup.Root disabled size="sm">
            <RadioGroup.Item id="radio-sm-1-d" value="radio-sm-1-d" checked>
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-sm-1-d">
                Radio 1
              </RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-sm-2-d" value="radio-sm-2-d">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-sm-2-d">
                Radio 2
              </RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <RadioGroup.Root disabled size="md">
            <RadioGroup.Item id="radio-md-1-d" value="radio-md-1-d" checked>
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-md-1-d">
                Radio 1
              </RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-md-2-d" value="radio-md-2-d">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-md-2-d">
                Radio 2
              </RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <RadioGroup.Root disabled size="lg">
            <RadioGroup.Item id="radio-lg-1-d" value="radio-lg-1-d" checked>
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-lg-1-d">
                Radio 1
              </RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-lg-2-d" value="radio-lg-2-d">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-lg-2-d">
                Radio 2
              </RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>
        </Page.Preview>
        <Page.CodePreview>{disabledSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Error">
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
          <RadioGroup.Root error size="sm">
            <RadioGroup.Item id="radio-sm-1-d-e" value="radio-sm-1-d-e">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-sm-1-d-e">
                Radio 1
              </RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-sm-2-d-e" value="radio-sm-2-d-e">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-sm-2-d-e">
                Radio 2
              </RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <RadioGroup.Root error size="md">
            <RadioGroup.Item id="radio-md-1-d-e" value="radio-md-1-d-e">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-md-1-d-e">
                Radio 1
              </RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-md-2-d-e" value="radio-md-2-d-e">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-md-2-d-e">
                Radio 2
              </RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <RadioGroup.Root error size="lg">
            <RadioGroup.Item id="radio-lg-1-d-e" value="radio-lg-1-d-e">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-lg-1-d-e">
                Radio 1
              </RadioGroup.Label>
            </RadioGroup.Item>
            <RadioGroup.Item id="radio-lg-2-d-e" value="radio-lg-2-d-e">
              <RadioGroup.Indicator />
              <RadioGroup.Label htmlFor="radio-lg-2-d-e">
                Radio 2
              </RadioGroup.Label>
            </RadioGroup.Item>
          </RadioGroup.Root>
        </Page.Preview>
        <Page.CodePreview>{errorSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="API Reference">
        <Page.APIReference title="Root" apis={radioGroupRootAPIs} />
        <Page.APIReference title="Item" apis={radioGroupItemAPIs} />
        <Page.APIReference title="Indicator" />
        <Page.APIReference title="Label" tag="label" />
      </Page.Section>
    </Page>
  );
}
