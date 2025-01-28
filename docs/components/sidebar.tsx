"use client";

import React from "react";
import { Menu } from "@brifui/components";

const menuConfig = [
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
          <React.Fragment key={menu.name}>
            {menu.items.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                {item.label}
              </Menu.Item>
            ))}
          </React.Fragment>
        ))}
        <Menu.Track triggerType="hover" />
        <Menu.Track triggerType="active" />
      </Menu.Root>
    </aside>
  );
};
