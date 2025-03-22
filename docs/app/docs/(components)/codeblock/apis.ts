import { ComponentAPI } from "@/components/page";

export const codeblockContentAPIs: ComponentAPI[] = [
  {
    name: "language",
    type: "string",
    default: "typescript"
  },
  {
    name: "hightlightLines",
    type: "number[]",
    default: "[]"
  }
];

export const codeblockHeaderAPIs: ComponentAPI[] = [
  {
    name: "filename",
    type: "string"
  },
  {
    name: "icon",
    type: "ReactNode"
  }
];
