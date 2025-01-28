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
      <Menu.Item value="1">Item 1</Menu.Item>
      <Menu.Item value='2'>Item 2</Menu.Item>
      <Menu.Item value="3">Item 3</Menu.Item>
      <Menu.Item value="disabled" disabled>Disabled item</Menu.Item>
      <Menu.Track triggerType="hover" />
      <Menu.Track triggerType="active" />
    </Menu.Root>
  )
};
