import * as React from "react";
import { cn } from "../../lib/cn";

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
type GapSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: GridCols;
  gap?: GapSize;
}

export function Grid({
  className,
  cols = 3,
  gap = "md",
  ...props
}: GridProps) {
  const colsClasses: Record<GridCols, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-6",
    12: "grid-cols-12"
  };

  const gapClasses: Record<GapSize, string> = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  };

  return (
    <div
      className={cn("grid", colsClasses[cols], gapClasses[gap], className)}
      {...props}
    />
  );
}