import { ComponentAPI } from "@/components/page";

export const sidebarProviderAPIs: ComponentAPI[] = [];

export const sidebarAPIs: ComponentAPI[] = [
  {
    name: "isOpen",
    type: "boolean",
    default: "false"
  }
];

export const sidebarHeaderAPIs: ComponentAPI[] = [];

export const sidebarBodyAPIs: ComponentAPI[] = [];

export const sidebarFooterAPIs: ComponentAPI[] = [];

export const sidebarMenuAPIs: ComponentAPI[] = [];

export const sidebarGroupAPIs: ComponentAPI[] = [];

export const sidebarGroupLabelAPIs: ComponentAPI[] = [];

export const sidebarMenuItemAPIs: ComponentAPI[] = [
  {
    name: "as",
    type: "React.ElementType",
    default: "div"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false"
  },
  {
    name: "isSelected",
    type: "boolean",
    default: "false"
  },
  {
    name: "label",
    type: "React.ReactNode"
  }
];

export const sidebarMenuItemIconAPIs: ComponentAPI[] = [];

export const sidebarMenuItemLabelAPIs: ComponentAPI[] = [];
