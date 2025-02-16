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
          <Card shadow="sm" />
          <Card shadow="md" />
          <Card shadow="lg" />
        </div>
      </Page.Section>
    </Page>
  );
}
