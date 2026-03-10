import * as React from "react";
import { cn } from "../../lib/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return <div className={cn("h-full w-px bg-gray-200", className)} {...props} />;
  }

  return <hr className={cn("w-full border-0 border-t border-gray-200", className)} {...props} />;
}