import * as React from "react";
import { cn } from "../../lib/cn";

export function EmptyState({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center",
        className
      )}
      {...props}
    />
  );
}

export function EmptyStateTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("mt-4 text-lg font-semibold text-gray-900", className)} {...props} />;
}

export function EmptyStateDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-2 max-w-md text-sm text-gray-500", className)} {...props} />;
}

export function EmptyStateActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-6 flex items-center gap-3", className)} {...props} />;
}