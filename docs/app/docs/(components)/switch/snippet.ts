export const size = `import { Switch, Text } from "@brifui/components"
import { css } from "@brifui/styled/css"

const Example = () => {
  return (
    <>
      <div
        className={css({ display: "flex", alignItems: "center", gap: 2 })}
      >
        <Switch.Root id="small" size="sm">
          <Switch.Thumb />
        </Switch.Root>
        <Text as="label" htmlFor="small" type="text.md">
          Small
        </Text>
      </div>

      <div
        className={css({ display: "flex", alignItems: "center", gap: 2 })}
      >
        <Switch.Root id="medium" size="md">
          <Switch.Thumb />
        </Switch.Root>
        <Text as="label" htmlFor="medium" type="text.md">
          Medium
        </Text>
      </div>

      <div
        className={css({ display: "flex", alignItems: "center", gap: 2 })}
      >
        <Switch.Root id="large" size="lg">
          <Switch.Thumb />
        </Switch.Root>
        <Text as="label" htmlFor="large" type="text.lg">
          Small
        </Text>
      </div>
    </>
  )
}`;
