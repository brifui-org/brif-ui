import { ComponentAPI } from "@/components/page";

export const checkboxAPIs: ComponentAPI[] = [
  {
    name: "size",
    type: ["sm", "md", "lg"],
    default: "md"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false"
  },
  {
    name: "checked",
    type: ["boolean", "indeterminate"],
    default: "false"
  },
  {
    name: "error",
    type: "boolean",
    default: "false"
  }
];
