import { ComponentAPI } from "@/components/page";

export const formFieldAPIs: ComponentAPI[] = [
  {
    required: true,
    name: "name",
    type: "string"
  },
  {
    name: "invalid",
    type: "boolean",
    default: "false"
  }
];
