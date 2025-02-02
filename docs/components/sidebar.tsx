"use client";

import React from "react";
import { Menu } from "@brifui/components";

const menuConfig = [
  {
    name: "overview",
    label: "Overview",
    items: [
      {
        label: "Introduction",
        value: "introduction"
      },
      {
        label: "Getting started",
        value: "getting-started"
      },
      {
        label: "Releases",
        value: "releases"
      }
    ]
  },
  {
    name: "layouts",
    label: "Layouts",
    items: [
      {
        label: "Box",
        value: "box"
      },
      {
        label: "Grid",
        value: "grid"
      },
      {
        label: "Flex",
        value: "flex"
      },
      {
        label: "Space",
        value: "space"
      }
    ]
  },
  {
    name: "components",
    label: "Components",
    items: [
      {
        label: "Alert",
        value: "alert"
      },
      {
        label: "Accordion",
        value: "accordion"
      },
      {
        label: "Avatar",
        value: "avatar"
      },
      {
        label: "Badge",
        value: "badge"
      },
      {
        label: "Button",
        value: "button"
      },
      {
        label: "Calendar",
        value: "calendar"
      },
      {
        label: "Card",
        value: "card"
      },
      {
        label: "Input",
        value: "input"
      }
    ]
  }
];

export const Sidebar = () => {
  return (
    <aside>
      <Menu.Root>
        {menuConfig.map((menu) => (
          <Menu.Section key={menu.name} label={menu.label}>
            {menu.items.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
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
