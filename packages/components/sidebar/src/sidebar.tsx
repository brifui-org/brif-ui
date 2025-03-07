"use client";

import React, { CSSProperties } from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { SideBarProvider, useSidebar } from "./context";
import { cssVars, SidebarVariantProps, sidebarVariants } from "./variants";

export type SidebarMenuItemIconProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const MenuItemIcon: React.FC<SidebarMenuItemIconProps> = ({
  css,
  className,
  ...props
}) => {
  const {} = useSidebar();
  const raw = sidebarVariants.raw();

  return (
    <div className={cx(_css(raw.menuItemIcon, css), className)} {...props} />
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
  const {} = useSidebar();
  const raw = sidebarVariants.raw();

  return (
    <div className={cx(_css(raw.menuItemLabel, css), className)} {...props} />
  );
};

export type SidebarMenuItemProps<T extends React.ElementType> = WithCssProps<
  React.ComponentPropsWithRef<"div"> &
    React.ComponentProps<T> & {
      as?: T;
      disabled?: boolean;
      isSelected?: boolean;
    }
>;
function MenuItem<T extends React.ElementType>({
  as: As = "div",
  css,
  className,
  children,
  disabled = false,
  isSelected = false,
  ...props
}: SidebarMenuItemProps<T>) {
  const {} = useSidebar();
  const raw = sidebarVariants.raw();
  const [icons, labels] = findChildrenByType(
    children,
    MenuItemIcon,
    MenuItemLabel
  );

  return (
    <As
      className={cx(_css(raw.menuItem, css), className)}
      {...props}
      role="menuitem"
      aria-disabled={disabled}
      aria-selected={isSelected}
    >
      {icons}
      {labels}
    </As>
  );
}

export type SidebarMenuProps = WithCssProps<React.ComponentPropsWithRef<"div">>;
const Menu: React.FC<SidebarMenuProps> = ({ css, className, ...props }) => {
  const {} = useSidebar();
  const raw = sidebarVariants.raw();

  return (
    <div
      role="menu"
      className={cx(_css(raw.menu, css), className)}
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
  const {} = useSidebar();
  const raw = sidebarVariants.raw();
  const [labels, menus] = findChildrenByType(children, GroupLabel, Menu);

  return (
    <div
      role="group"
      className={cx(_css(raw.group, css), className)}
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
  const {} = useSidebar();
  const raw = sidebarVariants.raw();

  return (
    <div className={cx(_css(raw.groupLabel, css), className)} {...props} />
  );
};

export type SidebarHeaderProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Header: React.FC<SidebarHeaderProps> = ({ css, className, ...props }) => {
  const {} = useSidebar();
  const raw = sidebarVariants.raw();

  return <div className={cx(_css(raw.header, css), className)} {...props} />;
};

export type SidebarBodyProps = WithCssProps<React.ComponentPropsWithRef<"div">>;
const Body: React.FC<SidebarBodyProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const {} = useSidebar();
  const raw = sidebarVariants.raw();

  const [groups] = findChildrenByType(children, Group);

  return (
    <div className={cx(_css(raw.body, css), className)} {...props}>
      {groups}
    </div>
  );
};

export type SidebarFooterProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Footer: React.FC<SidebarFooterProps> = ({ css, className, ...props }) => {
  const {} = useSidebar();
  const raw = sidebarVariants.raw();

  return <div className={cx(_css(raw.footer, css), className)} {...props} />;
};

export type SidebarProps = WithCssProps<
  SidebarVariantProps & React.ComponentPropsWithRef<"aside">
>;
const Root: React.FC<SidebarProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const raw = sidebarVariants.raw({});
  const [headers, bodies, footers] = findChildrenByType(
    children,
    Header,
    Body,
    Footer
  );

  return (
    <SideBarProvider>
      <aside
        style={
          {
            [cssVars.width.DEFAULT]: `var(${cssVars.width.expand})`,
            [cssVars.width.expand]: "300px"
          } as CSSProperties
        }
        className={cx(_css(raw.root, css), className)}
        {...props}
      >
        <div className={_css(raw.sidebar)}>
          {headers}
          {bodies}
          {footers}
        </div>
      </aside>
    </SideBarProvider>
  );
};

export const Sidebar = {
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
