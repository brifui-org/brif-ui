"use client";

import React, { ComponentPropsWithRef } from "react";
import { useMenu } from "@/app/providers/menu-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge, ScrollArea } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { dependencies } from "../package.json";

const CURRENT_VERSION = dependencies["@brifui/components"].slice(1);

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
        key: "configuration",
        title: "Configuration",
        href: "/docs/configuration"
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
        key: "alert",
        title: "Alert",
        href: "/docs/alert"
      },
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
      },
      {
        key: "switch",
        title: "Switch",
        href: "/docs/switch"
      },
      {
        key: "textarea",
        title: "Textarea",
        href: "/docs/textarea"
      },
      {
        key: "radio-group",
        title: "RadioGroup",
        href: "/docs/radio-group"
      },
      {
        key: "dialog",
        title: "Dialog",
        href: "/docs/dialog"
      },
      {
        key: "scrollarea",
        title: "Scrollarea",
        href: "/docs/scrollarea"
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

const MobileMenu = () => {
  const { isOpen } = useMenu();

  return (
    <aside
      role="menu"
      className={css({
        top: "60px",
        left: "0",
        display: {
          base: "block",
          lg: "none"
        },
        zIndex: "50",
        width: "250px",
        w: "fit-content",
        bg: "background",
        position: "fixed",
        borderRight: "2px solid {colors.border}",
        transition: "transform .3s ease",
        transform: {
          base: isOpen ? "translateX(0)" : "translateX(-100%)",
          lg: "unset"
        }
      })}
    >
      <ScrollArea.Root
        css={css.raw({
          h: "calc(100lvh - 60px)"
        })}
      >
        <div
          className={css({
            px: 6,
            pt: 6,
            pb: 12,
            display: "block",
            bg: "background",
            w: "fit-content"
          })}
        >
          {MENU.map((section) => (
            <Section key={section.key} title={section.title}>
              {section.children.map((item) => (
                <Item key={item.key} title={item.title} href={item.href} />
              ))}
            </Section>
          ))}
        </div>
      </ScrollArea.Root>
    </aside>
  );
};

const DesktopMenu = () => {
  return (
    <aside
      role="menu"
      className={css({
        display: {
          base: "none",
          lg: "block"
        },
        zIndex: "50",
        width: "250px",
        w: "fit-content",
        bg: "background",
        position: "fixed",
        borderRight: "2px solid {colors.border}"
      })}
    >
      <div
        className={css({
          px: 6,
          top: 0,
          left: 0,
          h: "60px",
          bg: "background",
          display: "flex",
          position: "sticky",
          alignItems: "center",
          borderBottom: "2px solid {colors.border}"
        })}
      >
        <Link href="/">
          <img
            className={css({ w: "42px", h: "42px" })}
            alt="Brif UI logo"
            src="/logo-with-bg.png"
            width={42}
            height={42}
          />
        </Link>
        <Badge css={css.raw({ ml: 2 })} suppressHydrationWarning size="sm">
          {CURRENT_VERSION}
        </Badge>
      </div>
      <ScrollArea.Root
        css={css.raw({
          h: "calc(100lvh - 60px)"
        })}
      >
        <div
          className={css({
            px: 6,
            pt: 6,
            pb: 12,
            display: "block",
            bg: "background",
            w: "fit-content"
          })}
        >
          {MENU.map((section) => (
            <Section key={section.key} title={section.title}>
              {section.children.map((item) => (
                <Item key={item.key} title={item.title} href={item.href} />
              ))}
            </Section>
          ))}
        </div>
      </ScrollArea.Root>
    </aside>
  );
};

export const Menu: React.FC<ComponentPropsWithRef<"aside">> = () => {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
};
