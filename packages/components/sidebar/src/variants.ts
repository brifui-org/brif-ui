import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const cssVars = {
  width: {
    DEFAULT: "--brifui-sidebar-width",
    expand: "--brifui-sidebar-expand-width",
    collapsed: "--brifui-sidebar-collapsed-width"
  }
};

export const sidebarVariants = sva({
  slots: [
    "root",
    "sidebar",
    "header",
    "body",
    "footer",
    "menu",
    "menuItem",
    "menuItemIcon",
    "menuItemLabel",
    "group",
    "groupLabel"
  ],
  base: {
    root: {
      w: `var(${cssVars.width.DEFAULT})`,
      h: "100%",
      bg: "background",
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      borderRight: "2px solid {colors.border}"
    },
    sidebar: {
      w: "100%",
      h: "100%",
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    header: {
      p: 2,
      gap: 2,
      w: "100%",
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      top: 0,
      left: 0,
      bg: "background"
    },
    body: {
      p: 2,
      gap: 2,
      w: "100%",
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    footer: {
      p: 2,
      gap: 2,
      w: "100%",
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      bottom: 0,
      left: 0,
      bg: "background"
    },
    menu: {
      gap: 1,
      w: "100%",
      display: "flex",
      flexDirection: "column"
    },
    menuItem: {
      p: 2,
      gap: 2,
      display: "flex",
      alignItems: "center",
      borderRadius: "component.md",
      '&:not([aria-selected="true"]):not([aria-disabled="true"])': {
        _hover: {
          background: "background.hover"
        }
      },
      '&[aria-disabled="true"]': {
        opacity: 0.32,
        cursor: "not-allowed"
      },
      _selected: {
        color: "primary.foreground",
        background: "primary",
        fontWeight: "semibold"
      }
    },
    menuItemIcon: {
      w: 5,
      h: 5,
      p: "px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    },
    menuItemLabel: {
      color: "inherit",
      fontWeight: "inherit",
      textStyle: "text.sm"
    },
    group: {
      p: 2,
      gap: 2,
      w: "100%",
      display: "flex",
      flexDirection: "column"
    },
    groupLabel: {
      px: 2,
      textStyle: "text.xs",
      fontWeight: "semibold",
      color: "text.muted"
    }
  }
});

export type SidebarVariantProps = RecipeVariantProps<typeof sidebarVariants>;
