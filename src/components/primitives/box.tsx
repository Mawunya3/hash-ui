import * as React from "react";
import { cn } from "../../lib/cn";

export function Box({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}