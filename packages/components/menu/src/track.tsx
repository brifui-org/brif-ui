"use client";

import React from "react";
import { cn } from "@brifui/core/utils";

export type MenuTrackProps = React.ComponentPropsWithRef<"div"> & {
  orientation?: "horizontal" | "vertical";
  /**
   * Menu track's trigger type.
   * The event that the menu track will listen to move itself to the corresponding item.
   */
  triggerType?: "hover" | "active";
};

export const Track: React.FC<MenuTrackProps> = ({
  orientation = "vertical",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        [
          "absolute bg-default/10 w-full h-full rounded-md pointer-events-none",
          "transition-all h-7",
          "top-[var(--menu-vertical-top,_0px)] left-0"
        ],
        className
      )}
      {...props}
    />
  );
};
