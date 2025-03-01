"use client";

import { Page } from "@/components/page";
import { ArrowLeft, ArrowRight, Atom } from "lucide-react";
import { Button } from "@brifui/components";
import { css } from "@brifui/styled/css";

export default function ButtonDocs() {
  return (
    <Page>
      <Page.Title
        title="Button"
        description="Trigger an action or event, such as submitting a form or displaying a dialog."
      />

      <Page.Section title="Sizes" description="The default size is medium">
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
          <Button size="icon">
            <Atom />
          </Button>
          <Button size="sm">Solid</Button>
          <Button size="md">Solid</Button>
          <Button size="lg">Solid</Button>
        </Page.Preview>
        <Page.CodePreview>HIHI</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Variants" description="The default variant is solid">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: "center",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr 1fr"
            }
          })}
        >
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="error">Error</Button>
          <Button variant="warning">Warning</Button>
        </Page.Preview>
        <Page.CodePreview>HIHI</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Disabled">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: "center",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr 1fr"
            }
          })}
        >
          <Button variant="solid" disabled>
            Solid
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
          <Button variant="error" disabled>
            Error
          </Button>
          <Button variant="warning" disabled>
            Warning
          </Button>
        </Page.Preview>
        <Page.CodePreview>HIHI</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Prefix and suffix">
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
          <Button>
            <Button.Prefix>
              <ArrowLeft size={20} />
            </Button.Prefix>
            Solid
          </Button>
          <Button>
            Solid
            <Button.Suffix>
              <ArrowRight size={20} />
            </Button.Suffix>
          </Button>
          <Button>
            <Button.Prefix>
              <ArrowLeft size={20} />
            </Button.Prefix>
            Solid
            <Button.Suffix>
              <ArrowRight size={20} />
            </Button.Suffix>
          </Button>
        </Page.Preview>
        <Page.CodePreview>HIHI</Page.CodePreview>
      </Page.Section>
    </Page>
  );
}
