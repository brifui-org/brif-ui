import { Box } from "./box";
import { screen, render } from "@testing-library/react";

describe("Box", () => {
  it("should render as `div` by default", async () => {
    render(<Box>Hello world</Box>);

    const element = await screen.findByText("Hello world");

    expect(element).toBeVisible();
    expect(element.tagName.toLowerCase()).toBe("div");
  });

  describe("when change `as` to span", () => {
    it("should render as `span`", async () => {
      render(<Box as="span">Hello world</Box>);

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
    });
  });

  describe("when set className", () => {
    it("should render element with corresponding className", async () => {
      render(
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
