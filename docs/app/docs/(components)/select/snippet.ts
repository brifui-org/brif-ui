export const sizeSnippet = `import { Select } from "@brifui/components"

const Example = () => (
  <>
    <Select size="sm">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>

    <Select size="md">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>

    <Select size="lg">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>
  </>
)
`;

export const customIconSnippet = `import { Select } from "@brifui/components"
import { ChevronsUpDownIcon } from "lucide-react"

const Example = () => (
  <>
    <Select size="sm">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
        <Select.Icon>
          <ChevronsUpDownIcon size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>

    <Select size="md">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
        <Select.Icon>
          <ChevronsUpDownIcon size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>

    <Select size="lg">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
        <Select.Icon>
          <ChevronsUpDownIcon size={18} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>
  </>
)`;

export const disabledSnippet = `import { Select } from "@brifui/components"

const Example = () => (
  <>
    <Select disabled size="sm">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
      <Page.CodePreview>HIHI</Page.CodePreview>
    </Select>

    <Select disabled size="md">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
      <Page.CodePreview>HIHI</Page.CodePreview>
    </Select>

    <Select disabled size="lg">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>
  </>
)`;

export const errorSnippet = `import { Select } from "@brifui/components"

const Example = () => (
  <>
    <Select error size="sm">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>

    <Select error size="md">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>

    <Select error size="lg">
      <Select.Trigger className={css({ w: "100%" })}>
        <Select.Value placeholder="Choose option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="2">
          <Select.ItemText>Option 2</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>
  </>
)`;
