"use client";

import { Page } from "@/components/page";
import { Card } from "@brifui/components";
import { css } from "@brifui/styled/css";

export default function CardDocs() {
  return (
    <Page>
      <Page.Title
        title="Card"
        description="Displays a card with header, content, and footer."
      />

      <Page.Section title="Default" description="Default shadow is large">
        <div
          className={css({ display: "flex", flexDirection: "column", gap: 4 })}
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
      </Page.Section>

      <Page.Section title="Bordered">
        <Card bordered>
          <Card.Header>Header</Card.Header>
          <Card.Body className={css({ py: 6 })}>Body</Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      </Page.Section>
    </Page>
  );
}
