"use client";

import React from "react";
import SyntaxHighlighter, {
  createElement,
  SyntaxHighlighterProps
} from "react-syntax-highlighter";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { CodeblockVariantProps, codeblockVariants } from "./variants";

export type CodeblockHeaderProps = WithCssProps<
  Omit<React.ComponentPropsWithRef<"div">, "children"> & {
    filename?: string;
    icon?: React.ReactNode;
  }
>;
const Header: React.FC<CodeblockHeaderProps> = ({
  css,
  className,
  icon = null,
  filename = "",
  ...props
}) => {
  const raw = codeblockVariants.raw({});

  return (
    <div className={cx(_css(raw.header, css), className)} {...props}>
      <div className={_css(raw.icon)}>{icon}</div>
      <div className={_css(raw.filename)}>{filename}</div>
    </div>
  );
};

export type CodeblockContentProps = WithCssProps<
  Pick<SyntaxHighlighterProps, "language" | "children" | "showLineNumbers"> & {
    hightlightLines?: Array<number>;
    className?: string;
  }
>;
const Content: React.FC<CodeblockContentProps> = ({
  className,
  css,
  children,
  hightlightLines = [],
  ...props
}) => {
  const raw = codeblockVariants.raw({});

  return (
    <SyntaxHighlighter
      className={cx(_css(raw.content, css), className)}
      language="typescript"
      showLineNumbers
      {...props}
      showInlineLineNumbers
      wrapLines
      style={undefined}
      useInlineStyles={false}
      renderer={({ rows, stylesheet, useInlineStyles }) =>
        rows.map((row, idx) =>
          createElement({
            node: {
              ...row,
              properties: {
                ...(row.properties ?? {}),
                className: [_css(raw.line)],
                "data-highlighted": hightlightLines.includes(idx + 1)
                  ? true
                  : undefined
              }
            },
            stylesheet,
            useInlineStyles,
            key: idx
          })
        )
      }
    >
      {children}
    </SyntaxHighlighter>
  );
};

export type CodeblockProps = WithCssProps<
  CodeblockVariantProps & React.ComponentPropsWithRef<"div">
>;
const Root: React.FC<CodeblockProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const raw = codeblockVariants.raw({});

  const [headers, contents] = findChildrenByType(children, Header, Content);

  return (
    <div className={cx(_css(raw.root, css), className)} {...props}>
      {headers}
      {contents}
    </div>
  );
};

export const Codeblock = {
  Root,
  Header,
  Content
};
