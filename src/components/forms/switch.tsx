import * as React from "react";
import { cn } from "../../lib/cn";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="inline-flex cursor-pointer items-center">
        <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
        <span
          className={cn(
            "relative h-6 w-11 rounded-full bg-gray-300 transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-gray-900 peer-checked:after:translate-x-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            className
          )}
        />
      </label>
    );
  }
);

Switch.displayName = "Switch";