"use client";

import { Page } from "@/components/page";
import { Table, Text } from "@brifui/components";

export default function TypographyDocs() {
  return (
    <Page>
      <Page.Title
        title="Typography"
        description="Rules of typesetting throughout the system."
      />
      <Page.Section
        title="Heading"
        description="Used to introduce pages or sections."
      >
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HCell>Example</Table.HCell>
              <Table.HCell>Token</Table.HCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.7xl">Heading 7XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.7xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.6xl">Heading 6XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.6xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.5xl">Heading 5XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.5xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.4xl">Heading 4XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.4xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.3xl">Heading 3XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.3xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.2xl">Heading 2XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.2xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.xl">Heading XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.lg">Heading lg</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.lg
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.md">Heading md</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.md
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="heading.sm">Heading sm</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  heading.sm
                </Text>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Page.Section>

      <Page.Section
        title="Text"
        description="Designed for multiple lines of text, having a higher line height than Label."
      >
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HCell>Example</Table.HCell>
              <Table.HCell>Token</Table.HCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Text type="text.3xl">Text 3XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  text.3xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="text.2xl">Text 2XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  text.2xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="text.xl">Text XL</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  text.xl
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="text.lg">Text lg</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  text.lg
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="text.md">Text md</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  text.md
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="text.sm">Text sm</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  text.sm
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="text.xs">Text xs</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  text.xs
                </Text>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Page.Section>

      <Page.Section
        title="Button"
        description="Only to be used within components that render buttons."
      >
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HCell>Example</Table.HCell>
              <Table.HCell>Token</Table.HCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Text type="button.md">Button md</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  button.md
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="button.sm">Button sm</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.sm" color="muted" mono>
                  button.sm
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text type="button.xs">Button xs</Text>
              </Table.Cell>
              <Table.Cell>
                <Text type="text.xs" color="muted" mono>
                  button.xs
                </Text>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Page.Section>
    </Page>
  );
}
