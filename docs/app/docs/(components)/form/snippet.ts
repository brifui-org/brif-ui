export const defaultSnippet = `import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input } from "@brifui/components";

export const Example = () => {
  return (
    <>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.Field invalid={!!formState.errors.username} name="username">
          <Form.Label>Username</Form.Label>
          <Form.OptionalText>Optional</Form.OptionalText>
          <Form.Control>
            <Input
              error={!!formState.errors.username}
              placeholder="Enter your username"
              {...register("username", {
                required: {
                  value: true,
                  message: "This field is required"
                }
              })}
            />
          </Form.Control>
          <Form.ErrorMessage>
            {formState.errors.username?.message}
          </Form.ErrorMessage>
        </Form.Field>

        <Form.Field invalid={!!formState.errors.password} name="password">
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Input
              error={!!formState.errors.password}
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "This field is required"
                }
              })}
            />
          </Form.Control>
          <Form.ErrorMessage>
            {formState.errors.password?.message}
          </Form.ErrorMessage>
        </Form.Field>

        <Form.Submit>
          <Button>Submit</Button>
        </Form.Submit>
      </Form.Root>
    </>
  )
}
`;
