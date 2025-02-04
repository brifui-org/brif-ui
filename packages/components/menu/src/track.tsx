"use client";

import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@brifui/core/utils";

import { useMenuContext } from "./context";
import { sizeVariants } from "./shared";

export const menuTrackVariants = cva(
  [
    "absolute top-0 left-0 h-full pointer-events-none",
    "h-7 [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1)] origin-center"
  ],
  {
    variants: {
      triggerType: {
        hover: [
          "bg-background-hover",
          "transition-[var(--hover-track-transition-property,_all)] opacity-[var(--hover-track-opacity,_0)] translate-x-[var(--hover-track-vertical-left,_0px)] translate-y-[var(--hover-track-vertical-top,_0px)]",
          "w-[var(--hover-track-width,_0px)]",
          "-z-[10]"
        ],
        active: [
          "transition-[var(--active-track-transition-property,_none)] opacity-[var(--active-track-opacity,_0)] translate-x-[var(--active-track-vertical-left,_0px)] translate-y-[var(--active-track-vertical-top,_0px)]",
          "w-[var(--active-track-width,_100%)]",
          "-z-[5] shadow-sm"
        ]
      },
      color: {
        default: [],
        primary: [],
        secondary: [],
        success: [],
        destructive: []
      }
    },
    compoundVariants: [
      /**
       * Active
       */
      {
        triggerType: "active",
        color: "default",
        class: ["bg-default"]
      },
      {
        triggerType: "active",
        color: "primary",
        class: ["bg-primary"]
      },
      {
        triggerType: "active",
        color: "secondary",
        class: ["bg-secondary"]
      },
      {
        triggerType: "active",
        color: "success",
        class: ["bg-success"]
      },
      {
        triggerType: "active",
        color: "destructive",
        class: ["bg-danger"]
      }
    ]
  }
);

export type MenuTrackProps = React.ComponentPropsWithRef<"div"> & {
  /**
   * Menu track's trigger type.
   * The event that the menu track will listen to move itself to the corresponding item.
   */
  triggerType?: "hover" | "active";
};

export const Track: React.FC<MenuTrackProps> = ({
  triggerType = "hover",
  className,
  ...props
}) => {
  const { size, color } = useMenuContext();
  return (
    <div
      className={cn(
        menuTrackVariants({ color, triggerType }),
        sizeVariants({ size }),
        className
      )}
      {...props}
    />
  );
};
