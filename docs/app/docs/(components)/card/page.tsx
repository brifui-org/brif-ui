"use client";

import { Page } from "@/components/page";
import { Card } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { borderredSnippet, sizeSnippet } from "./snippet";

export default function CardDocs() {
  return (
    <Page>
      <Page.Title
        title="Card"
        description="Displays a card with header, content, and footer."
      />

      <Page.Section
        shadow={false}
        title="Default"
        description="Default shadow is large"
      >
        <Page.Preview>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: 4
            })}
          >
            <Card shadow="sm">
              <Card.Header>Header</Card.Header>
              <Card.Body>Body</Card.Body>
              <Card.Footer>Footer</Card.Footer>
            </Card>
            <Card shadow="md">
              <Card.Header>Header</Card.Header>
              <Card.Body>Body</Card.Body>
              <Card.Footer>Footer</Card.Footer>
            </Card>
            <Card shadow="lg">
              <Card.Header>Header</Card.Header>
              <Card.Body>Body</Card.Body>
              <Card.Footer>Footer</Card.Footer>
            </Card>
          </div>
        </Page.Preview>
        <Page.CodePreview>{sizeSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="Bordered">
        <Page.Preview>
          <Card bordered>
            <Card.Header>Header</Card.Header>
            <Card.Body className={css({ py: 6 })}>Body</Card.Body>
            <Card.Footer>Footer</Card.Footer>
          </Card>
        </Page.Preview>
        <Page.CodePreview>{borderredSnippet}</Page.CodePreview>
      </Page.Section>
    </Page>
  );
}
