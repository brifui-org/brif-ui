"use client";

import React, { useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "../../packages/core/src/utils/cn/cn";

export const Section = ({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("flex flex-col gap-2", className)}>
      {children}
    </section>
  );
};

export const sectionTitleVariants = cva(
  ["inline-flex items-center gap-1 font-sans"],
  {
    variants: {
      level: {
        1: ["text-2xl font-semibold"],
        2: ["text-xl font-bold"]
      }
    },
    defaultVariants: {
      level: 1
    }
  }
);
export const SectionTitle = ({
  id,
  children,
  level
}: {
  id: string;
  children?: React.ReactNode;
} & VariantProps<typeof sectionTitleVariants>) => {
  const [isHover, setHover] = useState<boolean>(false);
  return (
    <Link
      id={id}
      href={{
        hash: id
      }}
      className={cn(sectionTitleVariants({ level }))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <span
        className={cn("font-normal text-md opacity-0 transition-opacity", {
          ["opacity-100"]: isHover
        })}
      >
        #
      </span>
    </Link>
  );
};
