export const sizeSnippet = `import { Checkbox } from "@brifui/components";

export const Example = () => (
  <>
    <Checkbox id="checkbox-small" size="sm">
      <Checkbox.Indicator />
      <Checkbox.Label>Small</Checkbox.Label>
    </Checkbox>

    <Checkbox id="checkbox-medium" size="md">
      <Checkbox.Indicator />
      <Checkbox.Label>Medium</Checkbox.Label>
    </Checkbox>

    <Checkbox id="checkbox-large" size="lg">
      <Checkbox.Indicator />
      <Checkbox.Label>Large</Checkbox.Label>
    </Checkbox>
  </>
)
`

export const indeterminateSnippet = `import { Checkbox } from "@brifui/components";

export const Example = () => (
  <>
    <Checkbox checked="indeterminate" size="sm">
      <Checkbox.Indicator />
      <Checkbox.Label>Small</Checkbox.Label>
    </Checkbox>

    <Checkbox checked="indeterminate" size="md">
      <Checkbox.Indicator />
      <Checkbox.Label>Medium</Checkbox.Label>
    </Checkbox>

    <Checkbox checked="indeterminate" size="lg">
      <Checkbox.Indicator />
      <Checkbox.Label>Large</Checkbox.Label>
    </Checkbox>
  </>
)
`

export const disabledSnippet = `import { Checkbox } from "@brifui/components";

export const Example = () => (
  <>
    <Checkbox disabled error>
      <Checkbox.Indicator />
      <Checkbox.Label>Error</Checkbox.Label>
    </Checkbox>

    <Checkbox disabled>
      <Checkbox.Indicator />
      <Checkbox.Label>Unchecked</Checkbox.Label>
    </Checkbox>

    <Checkbox disabled>
      <Checkbox.Indicator />
      <Checkbox.Label>Checked</Checkbox.Label>
    </Checkbox>

    <Checkbox disabled checked="indeterminate">
      <Checkbox.Indicator />
      <Checkbox.Label>Indeterminate</Checkbox.Label>
    </Checkbox>
  </>
)
`

export const errorSnippet = `import { Checkbox } from "@brifui/components";

export const Example = () => (
  <>
    <Checkbox disabled error>
      <Checkbox.Indicator />
      <Checkbox.Label>Error</Checkbox.Label>
    </Checkbox>

    <Checkbox disabled>
      <Checkbox.Indicator />
      <Checkbox.Label>Unchecked</Checkbox.Label>
    </Checkbox>

    <Checkbox disabled>
      <Checkbox.Indicator />
      <Checkbox.Label>Checked</Checkbox.Label>
    </Checkbox>

    <Checkbox disabled checked="indeterminate">
      <Checkbox.Indicator />
      <Checkbox.Label>Indeterminate</Checkbox.Label>
    </Checkbox>
  </>
)
`