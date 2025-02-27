"use client";

import React from "react";
import { Accordion, Card } from "@brifui/components";
import { css, cx } from "@brifui/styled/css";
import { cq } from "@brifui/styled/patterns";

const Title: React.FC<{
  title: string;
  description: string;
  bordered?: boolean;
  children?: React.ReactNode;
}> = ({ title, bordered = true, description, children }) => {
  return (
    <div
      className={css({
        p: "12",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: !bordered ? "transparent" : "border.subtle"
      })}
    >
      <h1
        className={css({
          fontFamily: "heading",
          fontWeight: "bold",
          fontSize: "xxx-large"
        })}
      >
        {title}
      </h1>
      <p
        className={css({
          fontWeight: "medium",
          fontSize: "larger",
          color: "text.subtle"
        })}
      >
        {description}
      </p>
      {children}
    </div>
  );
};

const Section: React.FC<{
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ title, description, children, className }) => {
  return (
    <div
      className={cx(
        css({
          p: 12,
          gap: 6,
          display: "flex",
          flexDirection: "column",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "border.subtle"
        }),
        className
      )}
    >
      <div>
        {title && (
          <h3
            className={css({
              fontFamily: "heading",
              fontWeight: "bold",
              fontSize: "x-large"
            })}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            className={css({
              fontFamily: "body",
              fontWeight: "medium",
              fontSize: "medium",
              color: "text.subtle"
            })}
          >
            {description}
          </p>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

const Preview: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <Card className={css({ borderBottomRadius: 0, borderBottomWidth: 0 })}>
      <Card.Body
        className={cx(
          css({
            py: 6,
            display: "grid",
            alignItems: "center"
          }),
          cq({ name: "page-preview" }),
          className
        )}
      >
        {children}
      </Card.Body>
    </Card>
  );
};

const CodePreview: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Accordion.Root
      className={css({ boxShadow: "component.lg", borderTopRadius: 0 })}
      type="single"
      collapsible
    >
      <Accordion.Item value="codepreview">
        <Accordion.Trigger>Show code</Accordion.Trigger>
        <Accordion.Content>{children}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export const Page = ({ children }: { children?: React.ReactNode }) => {
  return <div className={css({ pb: "24" })}>{children}</div>;
};
Page.Title = Title;
Page.Section = Section;
Page.Preview = Preview;
Page.CodePreview = CodePreview;
