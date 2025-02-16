import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
  it("should render correctly", async () => {
    render(<Button>Solid</Button>);
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Solid");
  });

  describe("when prefix or suffix exists", () => {
    it("should render correctly", async () => {
      render(
        <Button>
          <Button.Suffix id="suffix">Prefix</Button.Suffix>
          Solid
          <Button.Prefix id="prefix">Prefix</Button.Prefix>
        </Button>
      );
      const btn = screen.getByRole("button");
      const suffix = btn.querySelector("#suffix")!;
      const prefix = btn.querySelector("#prefix")!;

      expect(btn).toBeVisible();
      expect(prefix).toBeVisible();
      expect(suffix).toBeVisible();
      expect(prefix?.compareDocumentPosition(suffix)).toBe(
        Node.DOCUMENT_POSITION_FOLLOWING
      );
      expect(suffix?.compareDocumentPosition(prefix)).toBe(
        Node.DOCUMENT_POSITION_PRECEDING
      );
    });
  });
});
