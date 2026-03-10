import * as React from "react";
import { cn } from "../../lib/cn";

export function Tooltip({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tooltip"
      className={cn(
        "inline-flex rounded-lg bg-gray-900 px-2 py-1 text-xs text-white shadow-md",
        className
      )}
      {...props}
    />
  );
}