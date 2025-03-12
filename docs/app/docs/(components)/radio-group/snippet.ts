export const defaultSnippet = `import { RadioGroup } from "@brifui/components";"

const Example = () => (
  <>
    <RadioGroup.Root size="sm">
      <RadioGroup.Item id="radio-sm-1" value="radio-sm-1">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-sm-1">Radio 1</RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-sm-2" value="radio-sm-2">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-sm-2">Radio 2</RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>

    <RadioGroup.Root size="md">
      <RadioGroup.Item id="radio-md-1" value="radio-md-1">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-md-1">Radio 1</RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-md-2" value="radio-md-2">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-md-2">Radio 2</RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>

    <RadioGroup.Root size="lg">
      <RadioGroup.Item id="radio-lg-1" value="radio-lg-1">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-lg-1">Radio 1</RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-lg-2" value="radio-lg-2">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-lg-2">Radio 2</RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>
  </>
)
`;

export const disabledSnippet = `import { RadioGroup } from "@brifui/components";"

const Example = () => (
  <>
    <RadioGroup.Root error disabled size="sm">
      <RadioGroup.Item
        id="radio-sm-1-d-e-d"
        value="radio-sm-1-d-e-d"
        checked
      >
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-sm-1-d-e-d">
          Radio 1
        </RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-sm-2-d-e-d" value="radio-sm-2-d-e-d">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-sm-2-d-e-d">
          Radio 2
        </RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>

    <RadioGroup.Root disabled size="sm">
      <RadioGroup.Item id="radio-sm-1-d" value="radio-sm-1-d" checked>
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-sm-1-d">
          Radio 1
        </RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-sm-2-d" value="radio-sm-2-d">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-sm-2-d">
          Radio 2
        </RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>

    <RadioGroup.Root disabled size="md">
      <RadioGroup.Item id="radio-md-1-d" value="radio-md-1-d" checked>
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-md-1-d">
          Radio 1
        </RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-md-2-d" value="radio-md-2-d">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-md-2-d">
          Radio 2
        </RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>

    <RadioGroup.Root disabled size="lg">
      <RadioGroup.Item id="radio-lg-1-d" value="radio-lg-1-d" checked>
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-lg-1-d">
          Radio 1
        </RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-lg-2-d" value="radio-lg-2-d">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-lg-2-d">
          Radio 2
        </RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>
  </>
)
`;

export const errorSnippet = `import { RadioGroup } from "@brifui/components";"

const Example = () => (
  <>
    <RadioGroup.Root error size="sm">
      <RadioGroup.Item id="radio-sm-1" value="radio-sm-1">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-sm-1">Radio 1</RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-sm-2" value="radio-sm-2">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-sm-2">Radio 2</RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>

    <RadioGroup.Root error size="md">
      <RadioGroup.Item id="radio-md-1" value="radio-md-1">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-md-1">Radio 1</RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-md-2" value="radio-md-2">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-md-2">Radio 2</RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>

    <RadioGroup.Root error size="lg">
      <RadioGroup.Item id="radio-lg-1" value="radio-lg-1">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-lg-1">Radio 1</RadioGroup.Label>
      </RadioGroup.Item>
      <RadioGroup.Item id="radio-lg-2" value="radio-lg-2">
        <RadioGroup.Indicator />
        <RadioGroup.Label htmlFor="radio-lg-2">Radio 2</RadioGroup.Label>
      </RadioGroup.Item>
    </RadioGroup.Root>
  </>
)
`;
