import * as React from "react";
import { cn } from "../../lib/cn";

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  side?: "left" | "right";
}

export function Drawer({
  className,
  open = true,
  side = "right",
  ...props
}: DrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div
        className={cn(
          "absolute top-0 h-full w-full max-w-md bg-white shadow-xl",
          side === "right" ? "right-0" : "left-0",
          className
        )}
        {...props}
      />
    </div>
  );
}