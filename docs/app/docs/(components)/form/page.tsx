"use client";

import { Page } from "@/components/page";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { defaultSnippet } from "./snippet";

type Inputs = {
  username: string;
  password: string;
};

export default function FormDocs() {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.alert(JSON.stringify(data));
  };

  return (
    <Page>
      <Page.Title
        title="Form"
        description="Collect information from your users using validation rules."
      />

      <Page.Section>
        <Page.Preview
          className={css({
            gap: 4,
            justifyItems: {
              base: "start",
              md: "center"
            },
            gridTemplateColumns: "1fr"
          })}
        >
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
        </Page.Preview>
        <Page.CodePreview>{defaultSnippet}</Page.CodePreview>
      </Page.Section>
    </Page>
  );
}
