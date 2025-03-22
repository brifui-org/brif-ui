"use client";

import { Page } from "@/components/page";
import { TerminalIcon } from "lucide-react";
import { Alert } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { defaultSnippet, errorSnippet } from "./snippet";

export default function AlertDocs() {
  return (
    <Page>
      <Page.Title
        title="Alert"
        description="Displays a callout for user attention."
      />

      <Page.Section title="Default">
        <Page.Preview>
          <div className={css({ maxW: "450px" })}>
            <Alert.Root>
              <TerminalIcon className={css({ w: 4, h: 4 })} />
              <Alert.Title>Heads up!</Alert.Title>
              <Alert.Description>
                You can add components to your app using the cli.
              </Alert.Description>
            </Alert.Root>
          </div>
        </Page.Preview>
        <Page.CodePreview>{defaultSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Error">
        <Page.Preview>
          <div className={css({ maxW: "450px" })}>
            <Alert.Root error>
              <TerminalIcon className={css({ w: 4, h: 4 })} />
              <Alert.Title>Heads up!</Alert.Title>
              <Alert.Description>
                You can add components to your app using the cli.
              </Alert.Description>
            </Alert.Root>
          </div>
        </Page.Preview>
        <Page.CodePreview>{errorSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="API Reference">
        <Page.APIReference title="Root" />
        <Page.APIReference title="Title" />
        <Page.APIReference title="Description" />
      </Page.Section>
    </Page>
  );
}
