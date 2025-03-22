"use client";

import { Page } from "@/components/page";
import { Codeblock } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { codeblockContentAPIs, codeblockHeaderAPIs } from "./apis";
import {
  defaultSnippet,
  fileNameSnippet,
  hightlightLinesSnippet
} from "./snippet";

const exampleSnippet = `function MyComponent(props) {
  const num = 100;
  
  // This is the comment
  return (
    <div> 
      <h1 className="bold">Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

export default function CodeBlockDocs() {
  return (
    <Page>
      <Page.Title
        title="Codeblock"
        description="Used to highlight code syntax."
      />

      <Page.Section title="Default">
        <Page.Preview css={css.raw({ backgroundImage: "none" })}>
          <Codeblock.Root>
            <Codeblock.Content language="tsx">
              {exampleSnippet}
            </Codeblock.Content>
          </Codeblock.Root>
        </Page.Preview>
        <Page.CodePreview>{defaultSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="Highlighted lines">
        <Page.Preview css={css.raw({ backgroundImage: "none" })}>
          <Codeblock.Root>
            <Codeblock.Content language="tsx" hightlightLines={[5, 8]}>
              {exampleSnippet}
            </Codeblock.Content>
          </Codeblock.Root>
        </Page.Preview>
        <Page.CodePreview>{hightlightLinesSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section title="With filename">
        <Page.Preview css={css.raw({ backgroundImage: "none" })}>
          <Codeblock.Root>
            <Codeblock.Header
              icon={
                <svg
                  height="16"
                  viewBox="-11.5 -10.23174 23 20.46348"
                  width="16"
                  style={{
                    shapeRendering: "auto"
                  }}
                >
                  <circle cx="0" cy="0" fill="currentColor" r="2.05" />
                  <g fill="none" stroke="currentColor" strokeWidth="1">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              }
              filename="hello-world.tsx"
            />
            <Codeblock.Content language="tsx" hightlightLines={[5, 8]}>
              {exampleSnippet}
            </Codeblock.Content>
          </Codeblock.Root>
        </Page.Preview>
        <Page.CodePreview>{fileNameSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="API Reference">
        <Page.APIReference title="Root" />
        <Page.APIReference title="Header" apis={codeblockHeaderAPIs} />
        <Page.APIReference title="Content" apis={codeblockContentAPIs} />
      </Page.Section>
    </Page>
  );
}
