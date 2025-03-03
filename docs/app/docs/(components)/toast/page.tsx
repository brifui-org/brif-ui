"use client";

import { Page } from "@/components/page";
import { Button, toast } from "@brifui/components";

const promise = () =>
  new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: "Sonner" }), 2000)
  );

export default function InputDocs() {
  return (
    <Page>
      <Page.Title
        title="Toast"
        description="A succinct message that is displayed temporarily."
      />

      <Page.Section title="Default">
        <Page.Preview>
          <Button onClick={() => toast("This is the default toast")}>
            Show toast
          </Button>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>

      <Page.Section title="Description">
        <Page.Preview>
          <Button
            onClick={() =>
              toast("This is the default toast", {
                description: "This is the description"
              })
            }
          >
            Show toast
          </Button>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>

      <Page.Section title="Long content">
        <Page.Preview>
          <Button
            onClick={() =>
              toast(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tortor vel libero facilisis vestibulum eu in lectus. Nam lobortis efficitur blandit. In lobortis, enim quis rhoncus porttitor, metus felis cursus urna, non mollis odio risus quis ex."
              )
            }
          >
            Show toast
          </Button>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>

      <Page.Section title="Warning">
        <Page.Preview>
          <Button
            onClick={() =>
              toast.warning(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              )
            }
          >
            Show toast
          </Button>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>

      <Page.Section title="Error">
        <Page.Preview>
          <Button
            onClick={() =>
              toast.error(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              )
            }
          >
            Show toast
          </Button>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>

      <Page.Section title="Success">
        <Page.Preview>
          <Button
            onClick={() =>
              toast.success(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              )
            }
          >
            Show toast
          </Button>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>

      <Page.Section title="Promise">
        <Page.Preview>
          <Button
            onClick={() =>
              toast.promise(promise, {
                loading: "Loading...",
                success: (data: { name: string }) => {
                  return `${data.name} toast has been added`;
                },
                error: "Error"
              })
            }
          >
            Show toast
          </Button>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>
    </Page>
  );
}
