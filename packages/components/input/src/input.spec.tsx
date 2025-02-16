import { render, screen } from "@testing-library/react";

import { Input } from "./input";

describe("Input", () => {
  it("should render correctly", async () => {
    render(<Input placeholder="Default" />);
    expect(screen.getByRole("textbox")).toBeVisible();
  });
});
