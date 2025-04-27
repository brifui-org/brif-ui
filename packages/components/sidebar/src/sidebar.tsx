"use client";

import React, { CSSProperties } from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { sidebar, SidebarVariantProps } from "@brifui/styled/recipes";
import { Tooltip } from "@brifui/tooltip";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { SideBarProvider, useSidebar } from "./context";

export const cssVars = {
  width: {
    DEFAULT: "--brifui-sidebar-width",
    expand: "--brifui-sidebar-expand-width",
    collapsed: "--brifui-sidebar-collapsed-width"
  }
};

export type SidebarMenuItemIconProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const MenuItemIcon: React.FC<SidebarMenuItemIconProps> = ({
  css,
  className,
  ...props
}) => {
  const raw = sidebar();

  return (
    <div className={cx(raw.menuItemIcon, _css(css), className)} {...props} />
  );
};

export type SidebarMenuItemLabelProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const MenuItemLabel: React.FC<SidebarMenuItemLabelProps> = ({
  css,
  className,
  ...props
}) => {
  const raw = sidebar();

  return (
    <div className={cx(raw.menuItemLabel, _css(css), className)} {...props} />
  );
};

export type SidebarMenuItemProps<T extends React.ElementType> = WithCssProps<
  React.ComponentPropsWithRef<"div"> &
    React.ComponentProps<T> & {
      as?: T;
      disabled?: boolean;
      isSelected?: boolean;
      /**
       * Tooltip's label when the sidebar is collapsed.
       */
      label?: React.ReactNode;
    }
>;
function MenuItem<T extends React.ElementType>({
  as: As = "div",
  css,
  className,
  children,
  disabled = false,
  isSelected = false,
  label,
  ...props
}: SidebarMenuItemProps<T>) {
  const { isOpen } = useSidebar();
  const raw = sidebar();
  const [icons, labels] = findChildrenByType(
    children,
    MenuItemIcon,
    MenuItemLabel
  );

  const shouldShowTooltip = !!label && !isOpen;

  return (
    <Tooltip.Root open={shouldShowTooltip ? undefined : false}>
      <Tooltip.Trigger>
        <As
          className={cx(raw.menuItem, _css(css), className)}
          {...props}
          role="menuitem"
          aria-disabled={disabled}
          aria-selected={isSelected}
          data-state={isOpen ? "expanded" : "collapsed"}
        >
          {icons}
          {isOpen && labels}
        </As>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">{label}</Tooltip.Content>
    </Tooltip.Root>
  );
}

export type SidebarMenuProps = WithCssProps<React.ComponentPropsWithRef<"div">>;
const Menu: React.FC<SidebarMenuProps> = ({ css, className, ...props }) => {
  const raw = sidebar();

  return (
    <div
      role="menu"
      className={cx(raw.menu, _css(css), className)}
      {...props}
    />
  );
};

export type SidebarGroupProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Group: React.FC<SidebarGroupProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const raw = sidebar();
  const [labels, menus] = findChildrenByType(children, GroupLabel, Menu);

  return (
    <div
      data-sidebar-part="group"
      role="group"
      className={cx(raw.group, _css(css), className)}
      {...props}
    >
      {labels}
      {menus}
    </div>
  );
};

export type SidebarGroupLabelProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const GroupLabel: React.FC<SidebarGroupLabelProps> = ({
  css,
  className,
  ...props
}) => {
  const { isOpen } = useSidebar();
  const raw = sidebar();

  if (!isOpen) return null;

  return (
    <div
      data-sidebar-part="group-label"
      className={cx(raw.groupLabel, _css(css), className)}
      {...props}
    />
  );
};

export type SidebarHeaderProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Header: React.FC<SidebarHeaderProps> = ({ css, className, ...props }) => {
  const raw = sidebar();

  return (
    <div
      data-sidebar-part="header"
      className={cx(raw.header, _css(css), className)}
      {...props}
    />
  );
};

export type SidebarBodyProps = WithCssProps<React.ComponentPropsWithRef<"div">>;
const Body: React.FC<SidebarBodyProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const raw = sidebar();

  const [groups] = findChildrenByType(children, Group);

  return (
    <div
      data-sidebar-part="body"
      className={cx(raw.body, _css(css), className)}
      {...props}
    >
      {groups}
    </div>
  );
};

export type SidebarFooterProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Footer: React.FC<SidebarFooterProps> = ({ css, className, ...props }) => {
  const raw = sidebar();

  return (
    <div
      data-sidebar-part="footer"
      className={cx(raw.footer, _css(css), className)}
      {...props}
    />
  );
};

export type SidebarProps = WithCssProps<
  SidebarVariantProps &
    React.ComponentPropsWithRef<"aside"> & {
      isOpen?: boolean;
    }
>;
const Root: React.FC<SidebarProps> = ({
  css,
  className,
  children,
  isOpen,
  style = {},
  ...props
}) => {
  const raw = sidebar();

  return (
    <aside
      style={
        {
          [cssVars.width.DEFAULT]:
            `var(${isOpen ? cssVars.width.expand : cssVars.width.collapsed})`,
          [cssVars.width.expand]: "300px",
          [cssVars.width.collapsed]: "68px",
          ...style
        } as CSSProperties
      }
      className={cx(raw.root, _css(css), className)}
      {...props}
    >
      <div className={raw.sidebar}>{children}</div>
    </aside>
  );
};

export const Sidebar = {
  Provider: SideBarProvider,
  Root,
  Header,
  Body,
  Footer,
  Menu,
  MenuItem,
  MenuItemIcon,
  MenuItemLabel,
  Group,
  GroupLabel
};
