"use client";

import React from "react";
import { Form as BaseForm } from "radix-ui";
import { cx } from "@brifui/styled/css";
import { findChildrenByType } from "@brifui/utils";

import { FormProvider, useFormStyles } from "./context";
import { FormVariantProps, formVariants } from "./variants";

export type FormErrorMessageProps = React.ComponentPropsWithRef<"span">;
const ErrorMessage: React.FC<FormErrorMessageProps> = ({
  className,
  ...props
}) => {
  const {} = useFormStyles();

  const classes = formVariants({});

  return <span className={cx(classes.error, className)} {...props} />;
};

export type FormSubmitProps = BaseForm.FormSubmitProps;
const Submit: React.FC<FormSubmitProps> = ({
  asChild = true,
  className,
  children,
  ...props
}) => {
  const {} = useFormStyles();

  const classes = formVariants({});

  return (
    <BaseForm.Submit
      asChild={asChild}
      className={cx(classes.label, className)}
      {...props}
    >
      {children}
    </BaseForm.Submit>
  );
};

export type FormLabelProps = BaseForm.FormLabelProps;
const Label: React.FC<FormLabelProps> = ({ className, children, ...props }) => {
  const {} = useFormStyles();

  const classes = formVariants({});

  return (
    <BaseForm.Label className={cx(classes.label, className)} {...props}>
      {children}
    </BaseForm.Label>
  );
};

export type FormOptinalTextProps = React.ComponentPropsWithRef<"span">;
const OptionalText: React.FC<FormLabelProps> = ({
  className,
  children,
  ...props
}) => {
  const {} = useFormStyles();

  const classes = formVariants({});

  return (
    <span className={cx(classes.optionalText, className)} {...props}>
      {children}
    </span>
  );
};

export type FormControlProps = BaseForm.FormControlProps;
const Control: React.FC<FormControlProps> = ({
  className,
  asChild = true,
  ...props
}) => {
  const {} = useFormStyles();

  const classes = formVariants({});

  return (
    <BaseForm.Control
      asChild={asChild}
      className={cx(classes.control, className)}
      {...props}
    />
  );
};

export type FormFieldProps = BaseForm.FormFieldProps & {
  invalid?: boolean;
};
const Field: React.FC<FormFieldProps> = ({
  children,
  className,
  invalid = false,
  ...props
}) => {
  const {} = useFormStyles();

  const [labels, controls, errors, optionalTexts] = findChildrenByType(
    children,
    Label,
    Control,
    ErrorMessage,
    OptionalText
  );
  const classes = formVariants({});

  return (
    <BaseForm.Field
      data-invalid={invalid || undefined}
      className={cx(classes.field, "group", className)}
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

export type FormProps = FormVariantProps & BaseForm.FormProps;
const Root: React.FC<FormProps> = ({ children, className, ...props }) => {
  const [fields, submits, others] = findChildrenByType(children, Field, Submit);

  const classes = formVariants({});

  return (
    <FormProvider>
      <BaseForm.Root className={cx(classes.root, className)} {...props}>
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
