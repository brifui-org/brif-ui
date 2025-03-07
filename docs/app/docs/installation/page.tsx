"use client";

import { InlineLink } from "@/components/inline-link";
import { Page } from "@/components/page";
import Link from "next/link";
import { Card, Text } from "@brifui/components";
import { css } from "@brifui/styled/css";

export default function InstallationPage() {
  return (
    <Page>
      <Page.Title
        title="Installation"
        description="Welcome to the BrifUI documentation 👋"
      />

      <Page.Section title="Requirement">
        <ul className={css({ listStyle: "inside" })}>
          <Text as="li">
            <InlineLink target="_blank" href="https://react.dev">
              React 19
            </InlineLink>{" "}
            or later.
          </Text>
          <Text as="li">
            <InlineLink
              target="_blank"
              href="https://github.com/chakra-ui/panda/releases/tag/%40pandacss%2Ftypes%400.53.1"
            >
              Panda CSS 0.53.1
            </InlineLink>{" "}
            or later.
          </Text>
        </ul>
      </Page.Section>

      <Page.Section title="Installation"></Page.Section>
    </Page>
  );
}
