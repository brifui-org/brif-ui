"use client";

import { Page } from "@/components/page";
import { Accordion } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { size } from "./snippet";

export default function AccordionDocs() {
  return (
    <Page>
      <Page.Title
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal an associated section of content."
      />

      <Page.Section title="Sizes" description="The default size is medium">
        <Page.Preview
          className={css({
            gap: 4,
            alignItems: "start",
            justifyItems: "center",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr"
            }
          })}
        >
          <Accordion.Root size="sm" type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger>Question A?</Accordion.Trigger>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Trigger>Question B?</Accordion.Trigger>
              <Accordion.Content>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <Accordion.Root size="md" type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger>Question A?</Accordion.Trigger>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Trigger>Question B?</Accordion.Trigger>
              <Accordion.Content>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <Accordion.Root size="lg" type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger>Question A?</Accordion.Trigger>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Trigger>Question B?</Accordion.Trigger>
              <Accordion.Content>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </Page.Preview>
        <Page.CodePreview>{size}</Page.CodePreview>
      </Page.Section>
    </Page>
  );
}
