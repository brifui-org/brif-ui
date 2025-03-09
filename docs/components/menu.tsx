"use client";

import React, { ComponentPropsWithRef } from "react";
import { useMenu } from "@/app/providers/menu-context";
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
        href: "/docs"
      },
      {
        key: "installation",
        title: "Installation",
        href: "/docs/installation"
      }
    ]
  },
  {
    key: "tokens",
    title: "Tokens",
    children: [
      {
        key: "colors",
        title: "Colors",
        href: "/docs/colors"
      },
      {
        key: "typography",
        title: "Typography",
        href: "/docs/typography"
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
      },
      {
        key: "select",
        title: "Select",
        href: "/docs/select"
      },
      {
        key: "checkbox",
        title: "Checkbox",
        href: "/docs/checkbox"
      },
      {
        key: "accordion",
        title: "Accordion",
        href: "/docs/accordion"
      },
      {
        key: "form",
        title: "Form",
        href: "/docs/form"
      },
      {
        key: "table",
        title: "Table",
        href: "/docs/table"
      },
      {
        key: "toast",
        title: "Toast",
        href: "/docs/toast"
      },
      {
        key: "tooltip",
        title: "Tooltip",
        href: "/docs/tooltip"
      },
      {
        key: "spinner",
        title: "Spinner",
        href: "/docs/spinner"
      },
      {
        key: "sidebar",
        title: "Sidebar",
        href: "/docs/sidebar"
      },
      {
        key: "codeblock",
        title: "Codeblock",
        href: "/docs/codeblock"
      }
    ].sort((a, b) => (a.title > b.title ? 1 : -1))
  }
];

const Item: React.FC<
  ComponentPropsWithRef<"li"> & { title: string; href: string }
> = ({ title, href, ...props }) => {
  const pathname = usePathname();
  const { setOpen } = useMenu();

  return (
    <li
      role="menuitem"
      data-active={pathname === href}
      className={css({
        w: 200,
        textStyle: "md",
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
          mb: 1
        }
      })}
      onClick={() => setOpen(false)}
      {...props}
    >
      <Link
        className={css({
          px: 3,
          py: 1,
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
          textStyle: "md",
          fontWeight: "semibold",
          mb: 2
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
  const { isOpen } = useMenu();

  return (
    <aside
      role="menu"
      className={cx(
        css({
          px: 6,
          py: 12,
          scrollbar: "hidden",
          w: "fit-content",
          bg: "background",
          height: "calc(100vh - 59px)",
          overflowY: "auto",
          borderRight: "2px solid {colors.border}",
          display: "block",
          position: {
            base: "fixed",
            lg: "sticky"
          },
          top: 59,
          left: 0,
          zIndex: "10",
          transition: "transform .3s ease",
          transform: {
            base: isOpen ? "translateX(0)" : "translateX(-100%)",
            lg: "unset"
          }
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
