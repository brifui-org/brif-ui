export const defaultSnippet = `import { Button, Tooltip } from "@brifui/components"

const Example = () => (
  <>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Top</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>

    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Right</Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>

    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Bottom</Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="bottom">
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>

    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Left</Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="left">
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>
  </>
)
`;

export const variantnippet = `import { Button, Tooltip } from "@brifui/components"

const Example = () => (
  <>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Default</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>

    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Warning</Button>
      </Tooltip.Trigger>
      <Tooltip.Content type="warning" side="right">
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>

    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Error</Button>
      </Tooltip.Trigger>
      <Tooltip.Content type="error" side="bottom">
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>
  </>
)
`;

export const noDelaySnippet = `import { Button, Tooltip } from "@brifui/components"

const Example = () => (
  <>
    <Tooltip.Root delayDuration={0}>
      <Tooltip.Trigger>
        <Button>Default</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>

    <Tooltip.Root delayDuration={0}>
      <Tooltip.Trigger>
        <Button>Warning</Button>
      </Tooltip.Trigger>
      <Tooltip.Content type="warning">
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>

    <Tooltip.Root delayDuration={0}>
      <Tooltip.Trigger>
        <Button>Error</Button>
      </Tooltip.Trigger>
      <Tooltip.Content type="error">
        The Evil Rabbit Jumped over the Fence
      </Tooltip.Content>
    </Tooltip.Root>
  </>
)
`;
