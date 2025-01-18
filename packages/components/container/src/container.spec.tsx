import { Container } from "./container";
import { screen, render } from "@testing-library/react";

describe("Container", () => {
  it("should render as `div` by default", async () => {
    render(<Container>Hello world</Container>);

    const element = await screen.findByText("Hello world");

    expect(element).toBeVisible();
    expect(element.tagName.toLowerCase()).toBe("div");
  });
});
