import React from "react";
import { Card } from "@brifui/components";
import { css } from "@brifui/styled/css";

const Title: React.FC<{ title: string; description: string }> = ({
  title,
  description
}) => {
  return (
    <div
      className={css({
        p: "12",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "border.subtle"
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
          fontFamily: "body",
          fontWeight: "medium",
          fontSize: "larger",
          color: "text.subtle"
        })}
      >
        {description}
      </p>
    </div>
  );
};

const Section: React.FC<{
  title: string;
  description?: string;
  children?: React.ReactNode;
}> = ({ title, description, children }) => {
  return (
    <div
      className={css({
        p: "12",
        display: "flex",
        flexDirection: "column",
        gap: "6",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "border.subtle"
      })}
    >
      <div>
        <h3
          className={css({
            fontFamily: "heading",
            fontWeight: "bold",
            fontSize: "x-large"
          })}
        >
          {title}
        </h3>
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

const Preview: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Card
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      })}
    >
      {children}
    </Card>
  );
};

export const Page = ({ children }: { children?: React.ReactNode }) => {
  return <div className={css({ pb: "24" })}>{children}</div>;
};
Page.Title = Title;
Page.Section = Section;
Page.Preview = Preview;
