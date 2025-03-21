"use client";

import React from "react";
import { Form as BaseForm } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { form, FormVariantProps } from "@brifui/styled/recipes";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { FormProvider } from "./context";

export type FormErrorMessageProps = WithCssProps<
  React.ComponentPropsWithRef<"span">
>;
const ErrorMessage: React.FC<FormErrorMessageProps> = ({
  css,
  className,
  ...props
}) => {
  const classes = form({});

  return (
    <span className={cx(classes.error, _css(css), className)} {...props} />
  );
};

export type FormSubmitProps = WithCssProps<BaseForm.FormSubmitProps>;
const Submit: React.FC<FormSubmitProps> = ({
  asChild = true,
  css,
  className,
  children,
  ...props
}) => {
  const classes = form({});

  return (
    <BaseForm.Submit
      asChild={asChild}
      className={cx(classes.submit, _css(css), className)}
      {...props}
    >
      {children}
    </BaseForm.Submit>
  );
};

export type FormLabelProps = WithCssProps<BaseForm.FormLabelProps>;
const Label: React.FC<FormLabelProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const classes = form({});

  return (
    <BaseForm.Label
      className={cx(classes.label, _css(css), className)}
      {...props}
    >
      {children}
    </BaseForm.Label>
  );
};

export type FormOptinalTextProps = WithCssProps<
  React.ComponentPropsWithRef<"span">
>;
const OptionalText: React.FC<FormLabelProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const classes = form({});

  return (
    <span className={cx(classes.optionalText, _css(css), className)} {...props}>
      {children}
    </span>
  );
};

export type FormControlProps = WithCssProps<BaseForm.FormControlProps>;
const Control: React.FC<FormControlProps> = ({
  css,
  className,
  asChild = true,
  ...props
}) => {
  const classes = form({});

  return (
    <BaseForm.Control
      asChild={asChild}
      className={cx(classes.control, _css(css), className)}
      {...props}
    />
  );
};

export type FormFieldProps = WithCssProps<
  BaseForm.FormFieldProps & {
    invalid?: boolean;
  }
>;
const Field: React.FC<FormFieldProps> = ({
  css,
  children,
  className,
  invalid = false,
  ...props
}) => {
  const [labels, controls, errors, optionalTexts] = findChildrenByType(
    children,
    Label,
    Control,
    ErrorMessage,
    OptionalText
  );
  const classes = form({});

  return (
    <BaseForm.Field
      data-invalid={invalid || undefined}
      className={cx(classes.field, _css(css), "group", className)}
      {...props}
    >
      <div className={classes.fieldLabelContainer}>
        {labels}
        {optionalTexts}
      </div>
      {controls}
      {errors}
    </BaseForm.Field>
  );
};

export type FormProps = WithCssProps<FormVariantProps & BaseForm.FormProps>;
const Root: React.FC<FormProps> = ({ css, children, className, ...props }) => {
  const [fields, submits, others] = findChildrenByType(children, Field, Submit);

  const classes = form({});

  return (
    <FormProvider>
      <BaseForm.Root
        className={cx(classes.root, _css(css), className)}
        {...props}
      >
        {fields}
        {submits}
        {others}
      </BaseForm.Root>
    </FormProvider>
  );
};

export const Form = {
  Root,
  Label,
  Field,
  Control,
  Submit,
  ErrorMessage,
  OptionalText
};
