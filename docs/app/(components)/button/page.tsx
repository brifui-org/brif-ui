import { Page } from "@/components/page";
import { Button } from "@brifui/components";

export default function ButtonDocs() {
  return (
    <Page>
      <Page.Title
        title="Button"
        description="Trigger an action or event, such as submitting a form or displaying a dialog."
      />
      <Page.Section title="Sizes" description="The default size is medium">
        <Page.Preview>
          <Button size="sm">Solid</Button>
          <Button size="md">Solid</Button>
          <Button size="lg">Solid</Button>
        </Page.Preview>
      </Page.Section>
      <Page.Section title="Variants" description="The default variant is solid">
        <Page.Preview>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="error">Error</Button>
          <Button variant="warning">Warning</Button>
        </Page.Preview>
      </Page.Section>

      <Page.Section title="Disabled" description="The default variant is solid">
        <Page.Preview>
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
      </Page.Section>
    </Page>
  );
}
