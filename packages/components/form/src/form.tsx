"use client";

import React from "react";
import { Form as BaseForm } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { FormProvider } from "./context";
import { FormVariantProps, formVariants } from "./variants";

export type FormErrorMessageProps = WithCssProps<
  React.ComponentPropsWithRef<"span">
>;
const ErrorMessage: React.FC<FormErrorMessageProps> = ({
  css,
  className,
  ...props
}) => {
  const raw = formVariants.raw({});

  return <span className={cx(_css(raw.error, css), className)} {...props} />;
};

export type FormSubmitProps = WithCssProps<BaseForm.FormSubmitProps>;
const Submit: React.FC<FormSubmitProps> = ({
  asChild = true,
  css,
  className,
  children,
  ...props
}) => {
  const raw = formVariants.raw({});

  return (
    <BaseForm.Submit
      asChild={asChild}
      className={cx(_css(raw.submit, css), className)}
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
  const raw = formVariants.raw({});

  return (
    <BaseForm.Label className={cx(_css(raw.label, css), className)} {...props}>
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
  const raw = formVariants.raw({});

  return (
    <span className={cx(_css(raw.optionalText, css), className)} {...props}>
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
  const raw = formVariants.raw({});

  return (
    <BaseForm.Control
      asChild={asChild}
      className={cx(_css(raw.control, css), className)}
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
  const raw = formVariants.raw({});

  return (
    <BaseForm.Field
      data-invalid={invalid || undefined}
      className={cx(_css(raw.field, css), "group", className)}
      {...props}
    >
      <div className={_css(raw.fieldLabelContainer)}>
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

  const raw = formVariants.raw({});

  return (
    <FormProvider>
      <BaseForm.Root className={cx(_css(raw.root, css), className)} {...props}>
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
