"use client";

import React, { useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";

import { useMenuContext } from "./context";
import { makeDataAttribute } from "./utils";

export const menuSectionVariants = cva(
  ["inline-flex items-center", "text-foreground font-bold", "w-full"],
  {
    variants: {
      size: {
        sm: ["text-sm h-7"],
        md: ["text-md h-8"],
        lg: ["text-lg h-10"]
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
  const { size } = useMenuContext();

  return (
    <div
      ref={sectionRef}
      {...makeDataAttribute.section(id)}
      role="group"
      className="group mb-2"
      {...props}
    >
      <div className={cn(menuSectionVariants({ size }))}>{label}</div>
      <div
        className={cn(
          "relative grid w-full overflow-hidden transition-[grid-template-rows] pl-4"
        )}
      >
        <div className="absolute top-0 left-0 w-px h-full bg-border ml-2" />
        <div className={cn("flex flex-col min-h-0 items-center gap-1")}>
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
