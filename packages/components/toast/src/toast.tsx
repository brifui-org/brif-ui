import React from "react";
import { CircleCheck, CircleX, TriangleAlert } from "lucide-react";
import { Toaster as Sonner, toast } from "sonner";

import { ToastVariantProps, toastVariants } from "./variants";

export type ToastProps = ToastVariantProps &
  React.ComponentProps<typeof Sonner>;

export const Toaster: React.FC<ToastProps> = ({ ...props }) => {
  const classes = toastVariants({});

  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: classes.toast,
          content: classes.content,
          icon: classes.icon,
          description: classes.description,
          actionButton: classes.actionButton,
          cancelButton: classes.cancelButton,
          loader: classes.loader
        },
        unstyled: true
      }}
      icons={{
        warning: <TriangleAlert size={20} />,
        error: <CircleX size={20} />,
        success: <CircleCheck size={20} />
      }}
      {...props}
    />
  );
};

export { toast };
