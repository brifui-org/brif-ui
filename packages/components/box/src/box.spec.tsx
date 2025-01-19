import { screen } from "@testing-library/react";
import { renderView } from "@brifui/mocks";

import { Box } from "./box";

describe("Box", () => {
  it("should render as `div` by default", async () => {
    renderView(<Box>Hello world</Box>);

    const element = await screen.findByText("Hello world");

    expect(element).toBeVisible();
    expect(element.tagName.toLowerCase()).toBe("div");
  });

  describe("when change `as` to span", () => {
    it("should render as `span`", async () => {
      renderView(<Box as="span">Hello world</Box>);

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
    });
  });

  describe("when set className", () => {
    it("should render element with corresponding className", async () => {
      renderView(
        <Box as="span" className="text-red">
          Hello world
        </Box>
      );

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
      expect(element.classList).toContain("text-red");
    });
  });
});
