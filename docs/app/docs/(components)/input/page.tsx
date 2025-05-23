"use client";

import { Page } from "@/components/page";
import { ArrowUpCircleIcon } from "lucide-react";
import { Input } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { inputAPIs } from "./apis";
import {
  disabledSnippet,
  errorSnippet,
  prefixAndSuffixSnippet,
  sizeSnippet
} from "./snippet";

export default function InputDocs() {
  return (
    <Page>
      <Page.Title
        title="Input"
        description="Retrieve text input from a user."
      />

      <Page.Section title="Size" description="Default size is medium">
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
          <Input size="sm" placeholder="Default" />
          <Input size="md" placeholder="Default" />
          <Input size="lg" placeholder="Default" />
        </Page.Preview>
        <Page.CodePreview>{sizeSnippet}</Page.CodePreview>
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
        <Page.CodePreview>{prefixAndSuffixSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Disabled">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: "center",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr"
            }
          })}
        >
          <Input size="sm" placeholder="Default" disabled />
          <Input size="md" placeholder="Default" disabled />
          <Input size="lg" placeholder="Default" disabled />
          <Input placeholder="Default" value="Default input" disabled>
            <Input.Prefix>
              <ArrowUpCircleIcon color="currentColor" size={16} />
            </Input.Prefix>
            <Input.Suffix>
              <ArrowUpCircleIcon color="currentColor" size={16} />
            </Input.Suffix>
          </Input>
        </Page.Preview>
        <Page.CodePreview>{disabledSnippet}</Page.CodePreview>
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
          <Input error size="sm" placeholder="Error" />
          <Input error size="md" placeholder="Error" />
          <Input error size="lg" placeholder="Error" />
        </Page.Preview>
        <Page.CodePreview>{errorSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="API Reference">
        <Page.APIReference title="Input" tag="input" apis={inputAPIs} />
        <Page.APIReference title="Prefix" />
        <Page.APIReference title="Suffix" />
      </Page.Section>
    </Page>
  );
}
