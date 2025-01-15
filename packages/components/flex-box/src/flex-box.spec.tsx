import { FlexBox } from "./flex-box";
import { screen, render } from "@testing-library/react";

describe("Box", () => {
  it("should render as `div` by default", async () => {
    render(<FlexBox>Hello world</FlexBox>);

    const element = await screen.findByText("Hello world");

    expect(element).toBeVisible();
    expect(element.tagName.toLowerCase()).toBe("div");
  });

  describe("when change `as` to span", () => {
    it("should render as `span`", async () => {
      render(<FlexBox as="span">Hello world</FlexBox>);

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
    });
  });

  describe("when set className", () => {
    it("should render element with corresponding className", async () => {
      render(
        <FlexBox as="span" className="text-red">
          Hello world
        </FlexBox>
      );

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
      expect(element.classList).toContain("text-red");
    });
  });

  describe("when set flexDirection to column", () => {
    it("should have `flex-column` className", async () => {
      render(
        <FlexBox as="span" className="text-red" flexDirection="column">
          Hello world
        </FlexBox>
      );

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
      expect(element.classList).toContain("text-red");
    });
  });
});
