"use client";

import { Page } from "@/components/page";
import { Button, Dialog, Form, Input } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { defaultSnippet } from "./snippet";

export default function DialogDocs() {
  return (
    <Page>
      <Page.Title
        title="Dialog"
        description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      />

      <Page.Section title="Default">
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: "center",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 1fr 1fr 1fr"
            }
          })}
        >
          <Dialog.Root size="sm">
            <Dialog.Trigger>
              <Button>Open - sm</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Delete profile</Dialog.Title>
                  <Dialog.Description>
                    Are you sure that you want to delete your profile?
                  </Dialog.Description>
                  <Dialog.Close />
                </Dialog.Header>
                <Dialog.Footer>
                  <Button variant="error">Delete</Button>
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
        </Page.Preview>
        <Page.CodePreview>{defaultSnippet}</Page.CodePreview>
      </Page.Section>
    </Page>
  );
}
