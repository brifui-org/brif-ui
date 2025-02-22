"use client";

import { Page } from "@/components/page";
import { ChevronsUpDownIcon } from "lucide-react";
import { Select } from "@brifui/components";
import { css } from "@brifui/styled/css";

export default function SelectDocs() {
  return (
    <Page>
      <Page.Title
        title="Select"
        description="Display a dropdown list of items."
      />

      <Page.Section title="Sizes" description="The default size is medium">
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
          <Select size="sm">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>

          <Select size="md">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>

          <Select size="lg">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </Page.Preview>
      </Page.Section>

      <Page.Section title="Custom icon">
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
          <Select size="sm">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
              <Select.Icon>
                <ChevronsUpDownIcon size={16} />
              </Select.Icon>
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>

          <Select size="md">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
              <Select.Icon>
                <ChevronsUpDownIcon size={16} />
              </Select.Icon>
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>

          <Select size="lg">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
              <Select.Icon>
                <ChevronsUpDownIcon size={18} />
              </Select.Icon>
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </Page.Preview>
      </Page.Section>

      <Page.Section title="Disabled">
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
          <Select disabled size="sm">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>

          <Select disabled size="md">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>

          <Select disabled size="lg">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </Page.Preview>
      </Page.Section>

      <Page.Section title="Error">
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
          <Select error size="sm">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>

          <Select error size="md">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>

          <Select error size="lg">
            <Select.Trigger className={css({ w: "100%" })}>
              <Select.Value placeholder="Choose option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </Page.Preview>
      </Page.Section>
    </Page>
  );
}
