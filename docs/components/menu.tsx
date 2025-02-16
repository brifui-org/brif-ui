"use client";

import React, { ComponentPropsWithRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, cx } from "@brifui/styled/css";

const MENU = [
  {
    key: "getting-started",
    title: "Getting Started",
    children: [
      {
        key: "introduction",
        title: "Introduction",
        href: "/docs/introduction"
      },
      {
        key: "installation",
        title: "Installation",
        href: "/docs/installation"
      }
    ]
  },
  {
    key: "components",
    title: "Components",
    children: [
      {
        key: "Button",
        title: "Button",
        href: "/docs/button"
      },
      {
        key: "card",
        title: "Card",
        href: "/docs/card"
      },
      {
        key: "input",
        title: "Input",
        href: "/docs/input"
      },
      {
        key: "avatar",
        title: "Avatar",
        href: "/docs/avatar"
      }
    ].sort((a, b) => (a.title > b.title ? 1 : -1))
  }
];

const Item: React.FC<
  ComponentPropsWithRef<"li"> & { title: string; href: string }
> = ({ title, href, ...props }) => {
  const pathname = usePathname();

  return (
    <li
      role="menuitem"
      data-active={pathname.startsWith(href)}
      className={css({
        w: 200,
        transition: "all .1s ease-in-out",
        borderRadius: "component.md",
        '&:not([data-active="true"])': {
          _hover: {
            bg: "background.hover"
          }
        },
        '&[data-active="true"]': {
          bg: "primary",
          color: "primary.foreground",
          fontWeight: 600
        },
        "&:not(:last-child)": {
          mb: "px"
        }
      })}
      {...props}
    >
      <Link
        className={css({
          px: 3,
          py: 2,
          w: "100%",
          display: "inline-block"
        })}
        href={href}
      >
        <span>{title}</span>
      </Link>
    </li>
  );
};

const Section: React.FC<ComponentPropsWithRef<"div"> & { title: string }> = ({
  title,
  children,
  ...props
}) => {
  return (
    <div
      className={css({
        "&:not(:last-child)": {
          mb: 4
        }
      })}
      {...props}
    >
      <p
        className={css({
          fontFamily: "body",
          fontWeight: "600",
          fontSize: "small",
          mb: 1
        })}
      >
        {title}
      </p>
      <ul>{children}</ul>
    </div>
  );
};

export const Menu: React.FC<ComponentPropsWithRef<"aside">> = ({
  className
}) => {
  return (
    <aside
      role="menu"
      className={cx(
        css({
          px: 6,
          py: 12
        }),
        className
      )}
    >
      {MENU.map((section) => (
        <Section key={section.key} title={section.title}>
          {section.children.map((item) => (
            <Item key={item.key} title={item.title} href={item.href} />
          ))}
        </Section>
      ))}
    </aside>
  );
};
