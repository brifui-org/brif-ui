import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@brifui/components";

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    variant: {
      type: "string",
      control: {
        type: "select",
        disable: true
      },
      description: "Input's variant",
      options: ["solid", "outlined", "ghost", "link"],
      table: {
        defaultValue: {
          summary: "solid"
        }
      }
    },
    color: {
      type: "string",
      control: "select",
      description: "Input's color",
      options: ["default", "primary", "secondary", "success", "destructive"],
      table: {
        defaultValue: {
          summary: "primary"
        }
      }
    },
    size: {
      type: "string",
      control: "select",
      description: "Input's size",
      options: ["sm", "md", "lg"],
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
      description: "Input's loading state",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Outlined: Story = {
  render: (props) => (
    <div className="w-[300px]">
      <Input placeholder="Enter your email..." {...props} />
    </div>
  ),
  args: {
    color: "default",
    size: "md"
  }
};
