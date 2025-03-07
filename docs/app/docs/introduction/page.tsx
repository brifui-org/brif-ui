"use client";

import { InlineLink } from "@/components/inline-link";
import { Page } from "@/components/page";
import { Card, Text } from "@brifui/components";
import { css } from "@brifui/styled/css";

export default function IntroductionPage() {
  return (
    <Page>
      <Page.Title
        title="Introduction"
        description="Welcome to the BrifUI documentation 👋"
      >
        <Card
          className={css({
            mt: "12",
            bg: 'linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 48% ), linear-gradient( -90deg, rgba(255, 180, 31, 0.25) 0%, rgba(255, 122, 69, 0.25) 25%, rgba(229, 75, 102, 0.25) 50%, rgba(173, 55, 124, 0.25) 75%, rgba(99, 52, 126, 0.25) 100% ), url("/noise.png")'
          })}
        >
          <Card.Body
            className={css({
              p: 6,
              h: 150,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            })}
          >
            <Text
              type="heading.3xl"
              fontWeight="bold"
              className={css({
                mb: 2
              })}
            >
              🌈 Brif UI
            </Text>
            <p className={css({ fontSize: "large", color: "text.muted" })}>
              A Neobrutalism styled React UI library
            </p>
          </Card.Body>
        </Card>
      </Page.Title>

      <Page.Section title="What is BrifUI?">
        <Text as="p">
          BrifUI is a UI library for React that helps you build beautiful and
          accessible user interfaces. Created on top of{" "}
          <InlineLink target="_blank" href="https://panda-css.com/">
            Panda CSS
          </InlineLink>{" "}
          and{" "}
          <InlineLink href="https://www.radix-ui.com/" target="_blank">
            Radix UI
          </InlineLink>
          .
        </Text>
      </Page.Section>

      <Page.Section title="Contributing">
        <Text>
          We are very welcome any contributon to{" "}
          <InlineLink href="/" target="_blank">
            BrifUI
          </InlineLink>
          . Please take a look at our{" "}
          <InlineLink href="/" target="_blank">
            contribution guideline
          </InlineLink>
          before you contribute to this project.
        </Text>
      </Page.Section>
    </Page>
  );
}
