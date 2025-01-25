"use client";

import React from "react";
import { cn } from "@brifui/core/utils";

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
  return (
    <div
      className={cn(
        [
          "absolute top-0 left-0 bg-default/10 w-full h-full rounded-md pointer-events-none",
          "transition-all h-7 [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1)]",
          "translate-y-[var(--menu-vertical-top,_0px)]"
        ],
        className
      )}
      {...props}
    />
  );
};
