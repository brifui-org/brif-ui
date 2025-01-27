"use client";

import React from "react";
import { cn } from "@brifui/core/utils";
import { useMenuContext } from "./context";

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
  const { size } = useMenuContext()
  return (
    <div
      className={cn(
        [
          "absolute top-0 left-0 w-full h-full pointer-events-none",
          "h-7 [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1)]"
        ],
        {
          ["bg-default/10 transition-[var(--hover-track-transition-property,_all)] opacity-[var(--hover-track-opacity,_0)] translate-y-[var(--hover-track-vertical-top,_0px)] -z-[10]"]:
            triggerType === "hover",
          ["bg-primary transition-[var(--active-track-transition-property,_none)] opacity-[var(--active-track-opacity,_0)] translate-y-[var(--active-track-vertical-top,_0px)] -z-[5] shadow-sm shadow-primary"]: triggerType === "active"
        },
        {
          ['text-sm h-7 rounded-md']: size === 'sm',
          ['text-md h-8 rounded-lg']: size === 'md',
          ['text-lg h-10 rounded-lg']: size === 'lg'
        },
        className
      )}
      {...props}
    />
  );
};
