import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "@brifui/provider";

import { theme } from "./theme";

export const TestRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider themeConfig={theme} defaultTheme="light">
      {(currentTheme) => (
        <html className={currentTheme}>
          <body>{children}</body>
        </html>
      )}
    </Provider>
  );
};

export const renderView = (component: React.ReactNode) => {
  render(<TestRoot>{component}</TestRoot>);
};

export * from "@testing-library/react";
export { theme };
