export const defaultSnippet = `import { TerminalIcon } from "lucide-react";
import { Alert } from "@brifui/components";

const Example = () => {
  return (
    <>
      <Alert.Root>
        <TerminalIcon className={css({ w: 4, h: 4 })} />
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>
          You can add components to your app using the cli.
        </Alert.Description>
      </Alert.Root>
    </>
  )
}`;

export const errorSnippet = `import { TerminalIcon } from "lucide-react";
import { Alert } from "@brifui/components";

const Example = () => {
  return (
    <>
      <Alert.Root error>
        <TerminalIcon className={css({ w: 4, h: 4 })} />
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>
          You can add components to your app using the cli.
        </Alert.Description>
      </Alert.Root>
    </>
  )
}`;
