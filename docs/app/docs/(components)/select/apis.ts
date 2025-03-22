import { ComponentAPI } from "@/components/page";

export const selectAPIs: ComponentAPI[] = [
  {
    name: "open",
    type: "boolean"
  },
  {
    name: "defaultOpen",
    type: "boolean"
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void"
  },
  {
    name: "name",
    type: "string"
  },
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
    name: "error",
    type: "boolean",
    default: "false"
  },
  {
    name: "value",
    type: "string"
  },
  {
    name: "defaultValue",
    type: "string"
  },
  {
    name: "onValueChange",
    type: "(value: string) => void"
  },
  {
    name: "container",
    type: "HTMLElement",
    default: "window.document.body"
  },
  {
    name: "position",
    type: ["item-aligned", "popper"],
    default: "popper"
  },
  {
    name: "side",
    type: ["top", "right", "bottom", "left"],
    default: "bottom"
  },
  {
    name: "alignOffset",
    type: "number",
    default: "0"
  },
  {
    name: "avoidCollisions",
    type: "boolean",
    default: "true"
  }
];

export const selectValueAPIs: ComponentAPI[] = [
  {
    name: "placeholder",
    type: "string"
  }
];

export const selectItemAPIs: ComponentAPI[] = [
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
