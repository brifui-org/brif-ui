import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Input } from "./input";

describe("Input", () => {
  it("should render correctly", async () => {
    render(<Input placeholder="Default" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
    expect(input.getAttribute("placeholder")).toBe("Default");
  });

  describe("when focus", () => {
    it("should be focusable", async () => {
      const user = userEvent.setup();
      render(<Input placeholder="Default" />);
      const input = screen.getByRole("textbox");
      expect(input).toBeVisible();

      await user.click(input);
      expect(input).toHaveFocus();
    });
  });

  describe("when prefix or suffix exists", () => {
    it("should render with correctly order", async () => {
      const result = render(
        <Input placeholder="Default">
          <Input.Suffix id="suffix">Suffix</Input.Suffix>
          <Input.Prefix id="prefix">Prefix</Input.Prefix>
        </Input>
      );

      const prefix = result.container.querySelector("#prefix")!;
      const suffix = result.container.querySelector("#suffix")!;
      expect(prefix.compareDocumentPosition(suffix)).toBe(
        Node.DOCUMENT_POSITION_FOLLOWING
      );
    });
  });
});
