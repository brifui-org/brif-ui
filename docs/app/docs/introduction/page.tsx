"use client";

import { InlineLink } from "@/components/inline-link";
import { Page } from "@/components/page";
import { Card, Text } from "@brifui/components";
import { css } from "@brifui/styled/css";

const bgGradient = css({
  position: "absolute",
  top: 0,
  left: 0,
  w: "100%",
  h: "100%",
  backgroundColor: "#0068d6",
  _before: {
    top: 0,
    left: 0,
    w: "100%",
    h: "100%",
    content: "''",
    pointerEvents: "none",
    position: "absolute",
    backgroundImage:
      "radial-gradient(88% 100% at top,hsla(0,0%,100%,.5),hsla(0,0%,100%,0))"
  },
  _after: {
    top: 0,
    left: 0,
    w: "100%",
    h: "100%",
    content: "''",
    pointerEvents: "none",
    position: "absolute",
    backgroundImage: "url(/noise.webp)",
    backgroundSize: "30%",
    opacity: 0.2
  }
});

export default function IntroductionPage() {
  return (
    <Page>
      <Page.Title
        title="Introduction"
        description="Welcome to the BrifUI documentation 👋"
      >
        <Card
          className={css({
            mt: "12"
          })}
        >
          <Card.Body
            className={css({
              p: 6,
              h: 150,
              display: "flex",
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden"
            })}
          >
            <div className={bgGradient} />
            <Text
              type="heading.3xl"
              fontWeight="bold"
              css={css.raw({
                mb: 2,
                zIndex: 1,
                color: {
                  base: "background",
                  _dark: "text"
                }
              })}
            >
              🌈 Brif UI
            </Text>
            <p
              className={css({
                fontSize: "large",
                color: {
                  base: "background",
                  _dark: "text"
                },
                zIndex: 1
              })}
            >
              A Neobrutalism styled React UI library
            </p>
          </Card.Body>
        </Card>
      </Page.Title>

      <Page.Section shadow={false} title="What is BrifUI?">
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

      <Page.Section shadow={false} title="Contributing">
        <Text>
          We are very welcome any contributon to{" "}
          <InlineLink href="/" target="_blank">
            BrifUI
          </InlineLink>
          . Please take a look at our{" "}
          <InlineLink href="/" target="_blank">
            contribution guideline
          </InlineLink>{" "}
          before you contribute to this project.
        </Text>
      </Page.Section>
    </Page>
  );
}
