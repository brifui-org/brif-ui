// import { Button } from "@brifui/components";
import { Button } from "@/components/_button";
import { Page } from "@/components/page";
import { css } from "@brifui/styled/css";

export default function ButtonDocs() {
  return (
    <Page>
      <Page.Title
        title="Button"
        description="Trigger an action or event, such as submitting a form or displaying a dialog."
      />
      <Page.Section title="Sizes" description="The default size is medium">
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "md",
            border: "1px solid {colors.border}",
            p: "6",
            borderRadius: "16px"
          })}
        >
          <Button size="sm">Solid</Button>
          <Button size="md">Solid</Button>
          <Button size="lg">Solid</Button>
        </div>
      </Page.Section>
      <Page.Section title="Variants" description="The default variant is solid">
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "md",
            border: "1px solid {colors.border}",
            p: "6",
            borderRadius: "16px"
          })}
        >
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="error">Error</Button>
          <Button variant="warning">Warning</Button>
        </div>
      </Page.Section>

      <Page.Section title="Disabled" description="The default variant is solid">
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "md",
            border: "1px solid {colors.border}",
            p: "6",
            borderRadius: "16px"
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
        </div>
      </Page.Section>
    </Page>
  );
}
