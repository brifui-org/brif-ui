import { ComponentAPI } from "@/components/page";

export const buttonAPIs: ComponentAPI[] = [
  {
    name: "variant",
    type: ["solid", "outline", "error", "warning"],
    default: "solid"
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
  }
];
