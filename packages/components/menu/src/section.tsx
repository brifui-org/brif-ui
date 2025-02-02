"use client";

import React, { useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";

import { useMenuContext } from "./context";
import { makeDataAttribute } from "./utils";

export const menuSectionVariants = cva(
  [
    "text-foreground",
    "px-2 py-1 w-full",
    "cursor-pointer",
    "active:bg-opacity-30",
  ],
  {
    variants: {
      size: {
        sm: ["text-sm h-7 rounded-md"],
        md: ["text-md h-8 rounded-lg"],
        lg: ["text-lg h-10 rounded-lg"]
      },
      color: {
        default: ["active:bg-default"],
        primary: ["active:bg-primary"],
        secondary: ["active:bg-secondary"],
        success: ["active:bg-success"],
        destructive: ["active:bg-danger"]
      }
    }
  }
);

export type MenuSectionProps = Prefer<
  { id?: string; label: string },
  React.ComponentPropsWithRef<"div">
>;

export const Section: React.FC<MenuSectionProps> = ({
  id,
  label,
  children,
  ...props
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(true);
  const { size, color, onItemHover, onSectionClick } = useMenuContext();
  return (
    <div
      ref={sectionRef}
      {...makeDataAttribute.section(id)}
      data-state={open ? "opened" : "closed"}
      role="group"
      className="group"
      {...props}
    >
      <div
        className={cn(menuSectionVariants({ color, size }))}
        onMouseEnter={onItemHover}
        onClick={(e) => {
          setOpen((prev) => !prev);
          onSectionClick(e);
        }}
      >
        {label}
      </div>
      <div
        className={cn(
          "grid w-full overflow-hidden transition-[grid-template-rows]",
          {
            ["grid-rows-1"]: open,
            ["grid-rows-[0]"]: !open
          }
        )}
      >
        <div
          className={cn("flex flex-col min-h-0 items-center gap-2", {
            ["ml-6 mt-2"]: open
          })}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {});
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
};
