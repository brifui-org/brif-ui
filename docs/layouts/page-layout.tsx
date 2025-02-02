import React from "react";
import { Typography } from "@brifui/components";

import { cn } from "../../packages/core/src/utils/cn/cn";

export const PageLayout = ({
  title,
  children,
  className
}: {
  children?: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn("w-full grid grid-cols-[1fr_280px]", className)}>
      <div className="w-full flex flex-col gap-6 md:gap-8 pr-10">
        <Typography.Heading level={1} size="xl" className="mb-4">
          {title}
        </Typography.Heading>
        {children}
      </div>
      <div className="w-full bg-rose-50" />
    </div>
  );
};
