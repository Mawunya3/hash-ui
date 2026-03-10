import * as React from "react";
import { cn } from "../../lib/cn";

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "col";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
};

export function Stack({
  className,
  direction = "col",
  gap = "md",
  ...props
}: StackProps) {
  const directionClasses = {
    row: "flex flex-row",
    col: "flex flex-col"
  };

  const gapClasses = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  };

  return (
    <div
      className={cn(directionClasses[direction], gapClasses[gap], className)}
      {...props}
    />
  );
}