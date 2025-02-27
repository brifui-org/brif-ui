"use client";

import { Page } from "@/components/page";
import { Metadata } from "next";
import { Card } from "@brifui/components";
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
            <h1
              className={css({
                fontSize: "xx-large",
                fontWeight: "bold",
                mb: 2
              })}
            >
              🌈 Brif UI
            </h1>
            <p className={css({ fontSize: "large", color: "text.subtle" })}>
              A high contrast, bright colors, and bold shapes UI library.
            </p>
          </Card.Body>
        </Card>
      </Page.Title>
    </Page>
  );
}
