const cssVars = {
  width: {
    DEFAULT: "--brifui-sidebar-width",
    expand: "--brifui-sidebar-expand-width",
    collapsed: "--brifui-sidebar-collapsed-width"
  }
};

export const sidebarSlotRecipes = {
  className: "sidebar",
  description: "The styles of the `Sidebar` component",
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
      overflowX: "hidden",
      overflowY: "auto",
      scrollbar: "hidden",
      borderRight: "2px solid {colors.border}",
      willChange: "width",
      transition: "width .3s ease"
    },
    sidebar: {
      flex: 1,
      w: "100%",
      h: "100%",
      display: "flex",
      flexDirection: "column"
    },
    header: {
      p: 2,
      gap: 2,
      w: `var(${cssVars.width.expand})`,
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      top: 0,
      left: 0
    },
    body: {
      p: 2,
      gap: 2,
      w: `var(${cssVars.width.expand})`,
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    footer: {
      p: 2,
      gap: 2,
      w: `var(${cssVars.width.expand})`,
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      bottom: 0,
      left: 0
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
      w: "100%",
      display: "flex",
      alignItems: "center",
      borderRadius: "component.md",
      '&:not([aria-selected="true"]):not([aria-disabled="true"])': {
        _hover: {
          background: "background.hover"
        },
        _focusVisible: {
          outline: "none",
          background: "background.hover"
        }
      },
      '&:not([aria-disabled="true"])': {
        _focusVisible: {
          outline: "4px solid {colors.primary}"
        }
      },
      '&[aria-disabled="true"]': {
        opacity: 0.32,
        cursor: "not-allowed",
        outline: "none"
      },
      '&[data-state="collapsed"]': {
        maxW: `calc(var(${cssVars.width.collapsed}) - 4 * {spacing.2})`
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
} satisfies BrifUISlotRecipeConfig;
