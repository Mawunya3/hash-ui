import * as React from "react";
import { cn } from "../../lib/cn";

export function Dropdown({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative inline-block text-left", className)} {...props} />;
}

export function DropdownMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute right-0 z-50 mt-2 min-w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export function DropdownItem({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "flex w-full items-center rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}