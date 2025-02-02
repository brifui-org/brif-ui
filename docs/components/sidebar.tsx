"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "@brifui/components";

const menuConfig = [
  {
    name: "overview",
    label: "Overview",
    items: [
      {
        label: "Introduction",
        value: "intro",
        href: "/"
      },
      {
        label: "Getting started",
        value: "getting-started",
        href: "/getting-started"
      },
      {
        label: "Releases",
        value: "releases",
        href: "/releases"
      }
    ]
  },
  {
    name: "layouts",
    label: "Layouts",
    items: [
      {
        label: "Box",
        value: "box",
        href: "/box"
      },
      {
        label: "Grid",
        value: "grid",
        href: "/grid"
      },
      {
        label: "Flex",
        value: "flex",
        href: "/flex"
      },
      {
        label: "Space",
        value: "space",
        href: "/space"
      }
    ]
  },
  {
    name: "components",
    label: "Components",
    items: [
      {
        label: "Alert",
        value: "alert",
        href: "/alert"
      },
      {
        label: "Accordion",
        value: "accordion",
        href: "/accordion"
      },
      {
        label: "Avatar",
        value: "avatar",
        href: "/avatar"
      },
      {
        label: "Badge",
        value: "badge",
        href: "/badge"
      },
      {
        label: "Button",
        value: "button",
        href: "/button"
      },
      {
        label: "Calendar",
        value: "calendar",
        href: "/calendar"
      },
      {
        label: "Card",
        value: "card",
        href: "/card"
      },
      {
        label: "Input",
        value: "input",
        href: "/input"
      }
    ]
  }
];

export const Sidebar = () => {
  const pathname = usePathname();

  const currentValue =
    pathname.replaceAll("/", "") === ""
      ? "intro"
      : pathname.replaceAll("/", "");

  return (
    <aside>
      <Menu.Root defaultValue={currentValue} value={currentValue}>
        {menuConfig.map((menu) => (
          <Menu.Section key={menu.name} label={menu.label}>
            {menu.items.map((item) => (
              <Menu.Item
                as={Link}
                href={item.href}
                key={item.value}
                value={item.value}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Section>
        ))}
        <Menu.Track triggerType="hover" />
        <Menu.Track triggerType="active" />
      </Menu.Root>
    </aside>
  );
};
