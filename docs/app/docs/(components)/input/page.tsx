import { Page } from "@/components/page";
import { ArrowUpCircleIcon } from "lucide-react";
import { Input } from "@brifui/components";

export default function InputDocs() {
  return (
    <Page>
      <Page.Title
        title="Input"
        description="Retrieve text input from a user."
      />

      <Page.Section title="Default" description="Default shadow is large">
        <Page.Preview>
          <Input size="sm" placeholder="Default" />
          <Input size="md" placeholder="Default" />
          <Input size="lg" placeholder="Default" />
        </Page.Preview>
      </Page.Section>

      <Page.Section title="Prefix and suffix">
        <Page.Preview>
          <Input placeholder="Default">
            <Input.Prefix>
              <ArrowUpCircleIcon color="currentColor" size={16} />
            </Input.Prefix>
          </Input>

          <Input placeholder="Default">
            <Input.Suffix>
              <ArrowUpCircleIcon color="currentColor" size={16} />
            </Input.Suffix>
          </Input>

          <Input placeholder="Default">
            <Input.Prefix>
              <ArrowUpCircleIcon color="currentColor" size={16} />
            </Input.Prefix>
            <Input.Suffix>
              <ArrowUpCircleIcon color="currentColor" size={16} />
            </Input.Suffix>
          </Input>
        </Page.Preview>
      </Page.Section>

      <Page.Section title="Disabled">
        <Page.Preview>
          <Input size="sm" placeholder="Default" disabled />
          <Input size="md" placeholder="Default" disabled />
          <Input size="lg" placeholder="Default" disabled />
          <Input placeholder="Default" disabled>
            <Input.Prefix>
              <ArrowUpCircleIcon color="currentColor" size={16} />
            </Input.Prefix>
            <Input.Suffix>
              <ArrowUpCircleIcon color="currentColor" size={16} />
            </Input.Suffix>
          </Input>
        </Page.Preview>
      </Page.Section>

      <Page.Section title="Error">
        <Page.Preview>
          <Input error size="sm" placeholder="Error" />
          <Input error size="md" placeholder="Error" />
          <Input error size="lg" placeholder="Error" />
        </Page.Preview>
      </Page.Section>
    </Page>
  );
}
