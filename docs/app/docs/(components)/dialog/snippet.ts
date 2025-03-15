export const defaultSnippet = `import { Button, Dialog, Form, Input } from "@brifui/components"

const Example = () => (
  <>
    <Dialog.Root size="sm">
      <Dialog.Trigger>
        <Button>Open - sm</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're
              done.
            </Dialog.Description>
            <Dialog.Close />
          </Dialog.Header>
          <Dialog.Body>
            <Form.Root css={css.raw({ py: 2 })}>
              <Form.Field name="name">
                <Form.Label>Name</Form.Label>
                <Form.Control>
                  <Input value="John Doe" />
                </Form.Control>
              </Form.Field>
              <Form.Field name="email">
                <Form.Label>Email</Form.Label>
                <Form.Control>
                  <Input value="john.doe@example.com" />
                </Form.Control>
              </Form.Field>
            </Form.Root>
          </Dialog.Body>
          <Dialog.Footer>
            <Button>Save changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>

    <Dialog.Root size="md">
      <Dialog.Trigger>
        <Button>Open - md</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're
              done.
            </Dialog.Description>
            <Dialog.Close />
          </Dialog.Header>
          <Dialog.Body>
            <Form.Root css={css.raw({ py: 2 })}>
              <Form.Field name="name">
                <Form.Label>Name</Form.Label>
                <Form.Control>
                  <Input value="John Doe" />
                </Form.Control>
              </Form.Field>
              <Form.Field name="email">
                <Form.Label>Email</Form.Label>
                <Form.Control>
                  <Input value="john.doe@example.com" />
                </Form.Control>
              </Form.Field>
            </Form.Root>
          </Dialog.Body>
          <Dialog.Footer>
            <Button>Save changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>

    <Dialog.Root size="lg">
      <Dialog.Trigger>
        <Button>Open - lg</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're
              done.
            </Dialog.Description>
            <Dialog.Close />
          </Dialog.Header>
          <Dialog.Body>
            <Form.Root css={css.raw({ py: 4 })}>
              <Form.Field name="name">
                <Form.Label>Name</Form.Label>
                <Form.Control>
                  <Input value="John Doe" />
                </Form.Control>
              </Form.Field>
              <Form.Field name="email">
                <Form.Label>Email</Form.Label>
                <Form.Control>
                  <Input value="john.doe@example.com" />
                </Form.Control>
              </Form.Field>
            </Form.Root>
          </Dialog.Body>
          <Dialog.Footer>
            <Button>Save changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>

    <Dialog.Root size="screen">
      <Dialog.Trigger>
        <Button>Open - screen</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're
              done.
            </Dialog.Description>
            <Dialog.Close />
          </Dialog.Header>
          <Dialog.Body>
            <Form.Root css={css.raw({ py: 2 })}>
              <Form.Field name="name">
                <Form.Label>Name</Form.Label>
                <Form.Control>
                  <Input value="John Doe" />
                </Form.Control>
              </Form.Field>
              <Form.Field name="email">
                <Form.Label>Email</Form.Label>
                <Form.Control>
                  <Input value="john.doe@example.com" />
                </Form.Control>
              </Form.Field>
            </Form.Root>
          </Dialog.Body>
          <Dialog.Footer>
            <Button>Save changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </>
)
`;
