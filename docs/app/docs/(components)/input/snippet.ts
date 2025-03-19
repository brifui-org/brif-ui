export const sizeSnippet = `import { Input } from "@brifui/components";

export const Example = () => {
  return (
    <>
      <Input size="sm" placeholder="Default" />
      <Input size="md" placeholder="Default" />
      <Input size="lg" placeholder="Default" />
    </>
  )
}
`;

export const prefixAndSuffixSnippet = `import { Input } from "@brifui/components";
import { ArrowUpCircleIcon } from "lucide-react";

export const Example = () => {
  return (
    <>
      <Input placeholder="Default">
        <Input.Prefix>
          <ArrowUpCircleIcon color="currentColor" size={16} />
        </Input.Prefix>
      </Input>

      <Input placeholder="Default">
        <Input.Suffix>
          <ArrowUpCircleIcon color="currentColor" size={16} />
        </Input.Suffix>
      </Input>

      <Input placeholder="Default">
        <Input.Prefix>
          <ArrowUpCircleIcon color="currentColor" size={16} />
        </Input.Prefix>
        <Input.Suffix>
          <ArrowUpCircleIcon color="currentColor" size={16} />
        </Input.Suffix>
      </Input>
    </>
  )
}
`;

export const disabledSnippet = `import { Input } from "@brifui/components";

export const Example = () => {
  return (
    <>
      <Input size="sm" placeholder="Default" disabled />
      <Input size="md" placeholder="Default" disabled />
      <Input size="lg" placeholder="Default" disabled />
      <Input placeholder="Default" value="Default input" disabled>
        <Input.Prefix>
          <ArrowUpCircleIcon color="currentColor" size={16} />
        </Input.Prefix>
        <Input.Suffix>
          <ArrowUpCircleIcon color="currentColor" size={16} />
        </Input.Suffix>
      </Input>
    </>
  )
}
`;

export const errorSnippet = `import { Input } from "@brifui/components";

export const Example = () => {
  return (
    <>
      <Input error size="sm" placeholder="Error" />
      <Input error size="md" placeholder="Error" />
      <Input error size="lg" placeholder="Error" />
    </>
  )
}
`;
