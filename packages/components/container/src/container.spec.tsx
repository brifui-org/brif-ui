import { render, screen } from "@testing-library/react";

import { Container } from "./container";

describe("Container", () => {
  it("should render as `div` by default", async () => {
    render(<Container>Hello world</Container>);

    const element = await screen.findByText("Hello world");

    expect(element).toBeVisible();
    expect(element.tagName.toLowerCase()).toBe("div");
  });
});
