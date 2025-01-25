import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "@brifui/components";

const meta: Meta<typeof Menu.Root> = {
  component: Menu.Root
};

export default meta;
type Story = StoryObj<typeof Menu.Root>;

export const Default: Story = {
  render: () => (
    <Menu.Root className="min-w-[300px]">
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
      <Menu.Track triggerType="hover" />
    </Menu.Root>
  )
};
