import "@testing-library/jest-dom/vitest";

import { configure } from "@testing-library/react";

export default function setup() {
  configure({
    reactStrictMode: true
  });
}
