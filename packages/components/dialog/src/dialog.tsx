import React from "react";
import { XIcon } from "lucide-react";
import { Dialog as BaseDialog } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { dialog, DialogVariantProps } from "@brifui/styled/recipes";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { DialogProvider, useDialog } from "./context";

export type DialogCloseProps = WithCssProps<BaseDialog.DialogCloseProps>;
const Close: React.FC<DialogCloseProps> = ({ css, className, ...props }) => {
  const { size } = useDialog();
  const classes = dialog({ size });

  return (
    <BaseDialog.Close
      className={cx(classes.close, _css(css), className)}
      {...props}
    >
      <XIcon color="currentColor" />
    </BaseDialog.Close>
  );
};

export type DialogDescriptionProps =
  WithCssProps<BaseDialog.DialogDescriptionProps>;
const Description: React.FC<DialogDescriptionProps> = ({
  css,
  className,
  ...props
}) => {
  const { size } = useDialog();
  const classes = dialog({ size });

  return (
    <BaseDialog.Description
      className={cx(classes.description, _css(css), className)}
      {...props}
    />
  );
};

export type DialogTitleProps = WithCssProps<BaseDialog.DialogTitleProps>;
const Title: React.FC<DialogContentProps> = ({ css, className, ...props }) => {
  const { size } = useDialog();
  const classes = dialog({ size });

  return (
    <BaseDialog.Title
      className={cx(classes.title, _css(css), className)}
      {...props}
    />
  );
};

export type DialogHeaderProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Header: React.FC<DialogContentProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const { size } = useDialog();
  const classes = dialog({ size });
  const [titles, closes, descs] = findChildrenByType(
    children,
    Title,
    Close,
    Description
  );

  return (
    <div className={cx(classes.header, _css(css), className)} {...props}>
      {titles}
      {descs}
      {closes}
    </div>
  );
};

export type DialogBodyProps = WithCssProps<React.ComponentPropsWithRef<"div">>;
const Body: React.FC<DialogBodyProps> = ({ css, className, ...props }) => {
  const { size } = useDialog();
  const classes = dialog({ size });

  return <div className={cx(classes.body, _css(css), className)} {...props} />;
};

export type DialogFooterProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Footer: React.FC<DialogFooterProps> = ({ css, className, ...props }) => {
  const { size } = useDialog();
  const classes = dialog({ size });

  return (
    <div className={cx(classes.footer, _css(css), className)} {...props} />
  );
};

export type DialogContentProps = WithCssProps<BaseDialog.DialogContentProps>;
const Content: React.FC<DialogContentProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const { size } = useDialog();
  const classes = dialog({ size });
  const [headers, bodies, footers] = findChildrenByType(
    children,
    Header,
    Body,
    Footer
  );

  return (
    <BaseDialog.Content
      className={cx(classes.content, _css(css), className)}
      {...props}
    >
      {headers}
      {bodies}
      {footers}
    </BaseDialog.Content>
  );
};

export type DialogOverlayProps = WithCssProps<BaseDialog.DialogOverlayProps>;
const Overlay: React.FC<DialogOverlayProps> = ({
  css,
  className,
  ...props
}) => {
  const { size } = useDialog();
  const classes = dialog({ size });

  return (
    <BaseDialog.Overlay
      className={cx(classes.overlay, _css(css), className)}
      {...props}
    />
  );
};

export type DialogPortalProps = BaseDialog.DialogPortalProps;
const Portal: React.FC<DialogPortalProps> = (props) => {
  return <BaseDialog.Portal {...props} />;
};

export type DialogTriggerProps = WithCssProps<BaseDialog.DialogTriggerProps>;
const Trigger: React.FC<DialogTriggerProps> = ({
  css,
  className,
  ...props
}) => {
  const { size } = useDialog();
  const classes = dialog({ size });

  return (
    <BaseDialog.Trigger
      asChild
      className={cx(classes.trigger, _css(css), className)}
      {...props}
    />
  );
};

export type DialogProps = DialogVariantProps & BaseDialog.DialogProps;
const Root: React.FC<DialogProps> = ({ children, size, ...props }) => {
  const [triggers, portals, overlays, contents] = findChildrenByType(
    children,
    Trigger,
    Portal,
    Overlay,
    Content
  );

  return (
    <DialogProvider size={size}>
      <BaseDialog.Root {...props}>
        {triggers}
        {portals}
        {overlays}
        {contents}
      </BaseDialog.Root>
    </DialogProvider>
  );
};

export const Dialog = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Header,
  Title,
  Body,
  Footer,
  Close,
  Description
};
