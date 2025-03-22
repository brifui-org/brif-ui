import { ComponentAPI } from "@/components/page";

export const radioGroupRootAPIs: ComponentAPI[] = [
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
    name: "onValueChange",
    type: "(value: string) => void"
  },
  {
    name: "orientation",
    type: ["horizontal", "vertical"],
    default: "horizontal"
  }
];

export const radioGroupItemAPIs: ComponentAPI[] = [
  {
    name: "value",
    type: "string"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false"
  }
];
