import { ComponentAPI } from "@/components/page";

export const inputAPIs: ComponentAPI[] = [
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
  }
];
