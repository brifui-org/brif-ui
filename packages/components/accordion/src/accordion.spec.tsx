import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion, AccordionProps } from "./accordion";

const renderAccordion = ({
  type = "single"
}: {
  type?: AccordionProps["type"];
} = {}) => {
  return render(
    <Accordion.Root type={type}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Title 1</Accordion.Trigger>
        <Accordion.Content>Accordion Content 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Title 2</Accordion.Trigger>
        <Accordion.Content>Accordion Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

describe("Accordion", () => {
  describe("rendering", () => {
    it("should render a basic accordion", () => {
      renderAccordion();

      expect(
        screen.getByRole("button", { name: "Accordion Title 1" })
      ).toBeInTheDocument();
      expect(screen.queryByText("Accordion Content 1")).not.toBeInTheDocument();

      expect(
        screen.getByRole("button", { name: "Accordion Title 2" })
      ).toBeInTheDocument();
      expect(screen.queryByText("Accordion Content 2")).not.toBeInTheDocument();
    });
  });

  describe("with type `single`", () => {
    it("should only show one content at a time", async () => {
      const user = userEvent.setup();
      renderAccordion();

      await user.click(
        screen.getByRole("button", { name: "Accordion Title 1" })
      );
      expect(
        await screen.findByText("Accordion Content 1")
      ).toBeInTheDocument();
      expect(screen.queryByText("Accordion Content 2")).not.toBeInTheDocument();

      await user.click(
        screen.getByRole("button", { name: "Accordion Title 2" })
      );
      expect(
        await screen.findByText("Accordion Content 2")
      ).toBeInTheDocument();
      expect(screen.queryByText("Accordion Content 1")).not.toBeInTheDocument();
    });
  });

  describe("with type `multiple`", () => {
    it("should show multiple content at a time", async () => {
      const user = userEvent.setup();
      renderAccordion({ type: "multiple" });

      await user.click(
        screen.getByRole("button", { name: "Accordion Title 1" })
      );
      expect(
        await screen.findByText("Accordion Content 1")
      ).toBeInTheDocument();
      expect(screen.queryByText("Accordion Content 2")).not.toBeInTheDocument();

      await user.click(
        screen.getByRole("button", { name: "Accordion Title 2" })
      );
      expect(
        await screen.findByText("Accordion Content 2")
      ).toBeInTheDocument();
      expect(screen.getByText("Accordion Content 1")).toBeInTheDocument();
    });
  });
});
