import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "@brifui/components";

const meta: Meta<typeof Menu.Root> = {
  component: Menu.Root,
  argTypes: {
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
    }
  }
};

export default meta;
type Story = StoryObj<typeof Menu.Root>;

export const Default: Story = {
  render: (props) => (
    <Menu.Root className="min-w-[300px]" {...props}>
      <Menu.Item value="1">Item 1</Menu.Item>
      <Menu.Item value="2">Item 2</Menu.Item>
      <Menu.Item value="3">Item 3</Menu.Item>
      <Menu.Item disabled value="disabled">
        Disabled item
      </Menu.Item>
      <Menu.Section id="section" label="Section">
        <Menu.Item value="section-1">Section - Item 1</Menu.Item>
        <Menu.Item value="section-2">Section - Item 2</Menu.Item>
        <Menu.Item value="section-3">Section - Item 3</Menu.Item>
      </Menu.Section>
      <Menu.Track triggerType="hover" />
      <Menu.Track triggerType="active" />
    </Menu.Root>
  ),
  args: {
    color: "default"
  }
};
