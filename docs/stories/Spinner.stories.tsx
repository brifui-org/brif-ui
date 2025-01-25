import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@brifui/components";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  argTypes: {
    size: {
      type: "string",
      control: {
        type: "select"
      },
      description: "Spinner's size",
      options: ["xs", "sm", "md", "lg"],
      table: {
        defaultValue: {
          summary: "md"
        }
      }
    },
    color: {
      type: "string",
      control: "select",
      description: "Button's color",
      options: ["default", "primary", "secondary", "success", "destructive"],
      table: {
        defaultValue: {
          summary: "primary"
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: Spinner,
  args: {
    size: "md",
    color: "default"
  }
};
