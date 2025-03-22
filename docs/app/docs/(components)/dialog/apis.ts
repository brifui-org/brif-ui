import { ComponentAPI } from "@/components/page";

export const dialogRootAPIs: ComponentAPI[] = [
  {
    name: "size",
    type: ["sm", "md", "lg", "screen"],
    default: "md"
  }
];

export const dialogPortalAPIs: ComponentAPI[] = [
  {
    name: "container",
    type: "HTMLElement",
    default: "window.document.body"
  }
];
