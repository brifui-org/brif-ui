import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@brifui/components";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      type: "string",
      control: {
        type: "select",
        disable: true
      },
      description: "Button's variant",
      options: ["solid", "outlined", "ghost", "link"],
      table: {
        defaultValue: {
          summary: "solid"
        }
      }
    },
    children: {
      name: "label",
      type: "string",
      control: "text",
      description: "Button's children",
      table: {
        defaultValue: {
          summary: "Solid"
        }
      }
    },
    color: {
      type: "string",
      control: "select",
      description: "Button's color",
      options: ["default", "primary", "secondary", "destructive"],
      table: {
        defaultValue: {
          summary: "primary"
        }
      }
    },
    size: {
      type: "string",
      control: "select",
      description: "Button's size",
      options: ["sm", "md", "lg", "icon"],
      table: {
        defaultValue: {
          summary: "md"
        }
      }
    },
    disabled: {
      type: "boolean",
      control: "boolean"
    },
    isLoading: {
      type: "boolean",
      control: "boolean",
      description: "Button's loading state",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  render: Button,
  args: {
    children: "Solid button",
    color: "default",
    size: "md"
  }
};

export const Outline: Story = {
  render: Button,
  args: {
    children: "Outline button",
    color: "default",
    size: "md",
    variant: "outlined"
  }
};

export const Ghost: Story = {
  render: Button,
  args: {
    children: "Ghost button",
    color: "default",
    size: "md",
    variant: "ghost"
  }
};

export const Link: Story = {
  render: Button,
  args: {
    children: "Link button",
    color: "default",
    size: "md",
    variant: "link"
  }
};
