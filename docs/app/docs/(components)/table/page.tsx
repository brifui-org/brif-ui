"use client";

import { Page } from "@/components/page";
import { ArrowUpCircleIcon } from "lucide-react";
import { Input, Table } from "@brifui/components";
import { css } from "@brifui/styled/css";

export default function InputDocs() {
  return (
    <Page>
      <Page.Title title="Table" description="A semantic HTML table component" />

      <Page.Section title="Size" description="Default is medium">
        <Page.Preview className={css({ gap: 4 })}>
          <Table.Root size="sm">
            <Table.Head>
              <Table.Row>
                <Table.HCell>Col 1</Table.HCell>
                <Table.HCell>Col 2</Table.HCell>
                <Table.HCell>Col 3</Table.HCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>

          <Table.Root size="md">
            <Table.Head>
              <Table.Row>
                <Table.HCell>Col 1</Table.HCell>
                <Table.HCell>Col 2</Table.HCell>
                <Table.HCell>Col 3</Table.HCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>

          <Table.Root size="lg">
            <Table.Head>
              <Table.Row>
                <Table.HCell>Col 1</Table.HCell>
                <Table.HCell>Col 2</Table.HCell>
                <Table.HCell>Col 3</Table.HCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>

      <Page.Section title="Striped">
        <Page.Preview className={css({ gap: 4 })}>
          <Table.Root size="md" striped>
            <Table.Head>
              <Table.Row>
                <Table.HCell>Col 1</Table.HCell>
                <Table.HCell>Col 2</Table.HCell>
                <Table.HCell>Col 3</Table.HCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>

      <Page.Section title="Interactive">
        <Page.Preview className={css({ gap: 4 })}>
          <Table.Root interactive striped>
            <Table.Head>
              <Table.Row>
                <Table.HCell>Col 1</Table.HCell>
                <Table.HCell>Col 2</Table.HCell>
                <Table.HCell>Col 3</Table.HCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
                <Table.Cell>Row 1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
                <Table.Cell>Row 2</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
                <Table.Cell>Row 3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Page.Preview>
        <Page.CodePreview />
      </Page.Section>
    </Page>
  );
}
