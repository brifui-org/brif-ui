import { ComponentAPI } from "@/components/page";

export const avatarAPIs: ComponentAPI[] = [
  {
    name: "size",
    type: "number"
  },
  {
    required: true,
    name: "src",
    type: "string"
  },
  {
    name: "isLoading",
    type: "boolean",
    default: "false"
  }
];
