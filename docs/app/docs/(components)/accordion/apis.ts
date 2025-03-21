import { ComponentAPI } from "@/components/page";

export const accordionRootAPIs: ComponentAPI[] = [
  {
    required: true,
    name: "type",
    type: ["single", "multiple"]
  },
  {
    name: "value",
    type: "string | string[]"
  },
  {
    name: "defaultValue",
    type: "string | string[]"
  },
  {
    name: "onValueChange",
    type: "(value: string) => void | (value: string[]) => void"
  },
  {
    name: "collapsible",
    type: "boolean",
    default: "false"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false"
  }
];

export const accordionItemAPIs: ComponentAPI[] = [
  {
    required: true,
    name: "value",
    type: "string"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false"
  }
];
