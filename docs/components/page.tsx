"use client";

import React from "react";
import { AsteriskIcon, DotIcon } from "lucide-react";
import { Accordion, Card, Codeblock, Table, Text } from "@brifui/components";
import { css, cx, Styles } from "@brifui/styled/css";

const Title: React.FC<{
  title: string;
  description: React.ReactNode;
  bordered?: boolean;
  children?: React.ReactNode;
}> = ({ title, bordered = true, description, children }) => {
  return (
    <div
      className={css({
        p: {
          base: "6",
          lg: "12"
        },
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: !bordered ? "transparent" : "border.muted"
      })}
    >
      <h1
        className={css({
          fontFamily: "heading",
          fontWeight: "bold",
          textStyle: {
            base: "heading.4xl",
            lg: "heading.5xl"
          },
          mb: ".2em"
        })}
      >
        {title}
      </h1>
      <p
        className={css({
          fontWeight: "medium",
          textStyle: {
            base: "text.lg",
            lg: "text.xl"
          },
          color: "text.muted"
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
  shadow?: boolean;
}> = ({ title, description, children, className, shadow = true }) => {
  return (
    <div
      className={cx(
        css({
          p: {
            base: "6",
            lg: "12"
          },
          gap: 6,
          display: "flex",
          flexDirection: "column",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderBottomColor: "border.muted",
          "& p": {
            mb: 2
          }
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
              color: "text.muted"
            })}
          >
            {description}
          </p>
        )}
      </div>
      <div
        className={css({
          boxShadow: shadow ? "component.lg" : "none",
          borderRadius: "component.lg"
        })}
      >
        {children}
      </div>
    </div>
  );
};

const Preview: React.FC<{
  css?: Styles;
  children?: React.ReactNode;
  className?: string;
}> = ({ css: _css, children, className }) => {
  return (
    <Card
      css={css.raw(
        {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomWidth: "0px",
          borderBottom: "none",
          overflow: "auto",
          boxShadow: "none"
        },
        _css
      )}
    >
      <Card.Body
        css={css.raw(
          {
            minH: "36",
            py: 6,
            display: "grid",
            alignItems: "center",
            backgroundImage: {
              base: "radial-gradient(circle,rgba(0,0,0,.1) 3px,transparent 0)",
              _dark:
                "radial-gradient(circle,rgba(265,265,265,.1) 3px,transparent 0)"
            },
            backgroundPosition: "-2px -2px",
            backgroundSize: "30px 30px"
          },
          _css
        )}
        className={className}
      >
        {children}
      </Card.Body>
    </Card>
  );
};

const CodePreview: React.FC<{ children?: string }> = ({
  children = "(num) => num + 1"
}) => {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item
        css={css.raw({
          borderTopRadius: 0
        })}
        value="codepreview"
      >
        <Accordion.Trigger>Show code</Accordion.Trigger>
        <Accordion.Content
          css={css.raw({ maxH: "500px", maxW: "100%", overflow: "auto" })}
        >
          <Codeblock.Root>
            <Codeblock.Content language="tsx">{children}</Codeblock.Content>
          </Codeblock.Root>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export type ComponentAPI = {
  name: string;
  type: string | string[];
  default?: string;
  required?: boolean;
};

const AttributeTag: React.FC<React.PropsWithChildren<{ css?: Styles }>> = ({
  css: _css,
  children
}) => {
  return (
    <Text
      type="text.xs"
      css={css.raw(
        {
          py: 1,
          px: 2,
          bg: "gray.200",
          fontFamily: "mono",
          borderRadius: "component.md"
        },
        _css
      )}
    >
      {children}
    </Text>
  );
};

const APIReference: React.FC<{
  tag?: string;
  title?: string;
  apis?: ComponentAPI[];
  css?: Styles;
}> = ({ title, tag = "div", apis, css: _css }) => {
  return (
    <div
      className={css(
        css.raw({
          mb: 6
        }),
        _css
      )}
    >
      {!!title?.length && (
        <div
          className={css({
            mb: 2,
            display: "flex",
            alignItems: "center"
          })}
        >
          <Text as="h4" type="heading.lg" fontWeight="semibold">
            {title}
          </Text>
          <DotIcon />
          <AttributeTag>
            React.ComponentPropsWithRef&lt;
            <Text
              css={css.raw({
                color: {
                  base: "primary",
                  _dark: "primary"
                },
                textStyle: "text.sm",
                fontWeight: "semibold"
              })}
            >
              {tag}
            </Text>
            &gt;
          </AttributeTag>
        </div>
      )}
      {apis && !!apis.length && (
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HCell>Prop</Table.HCell>
              <Table.HCell>Type</Table.HCell>
              <Table.HCell>Default</Table.HCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {apis.map((api) => (
              <Table.Row key={api.name}>
                <Table.Cell>
                  <div
                    className={css({ display: "flex", alignItems: "start" })}
                  >
                    <AttributeTag
                      css={{
                        bg: "default",
                        color: "default.foreground",
                        fontWeight: "semibold"
                      }}
                    >
                      {api.name}
                    </AttributeTag>
                    {api.required && (
                      <AsteriskIcon
                        size={12}
                        className={css({ color: "error" })}
                      />
                    )}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <AttributeTag>
                    {Array.isArray(api.type) ? api.type.join(" | ") : api.type}
                  </AttributeTag>
                </Table.Cell>
                <Table.Cell>
                  <AttributeTag>{api.default || "_"}</AttributeTag>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </div>
  );
};

export const Page = ({ children }: { children?: React.ReactNode }) => {
  return <div className={css({ pb: "24" })}>{children}</div>;
};
Page.Title = Title;
Page.Section = Section;
Page.Preview = Preview;
Page.CodePreview = CodePreview;
Page.APIReference = APIReference;
