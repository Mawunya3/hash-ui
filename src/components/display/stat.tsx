import * as React from "react";
import { cn } from "../../lib/cn";

export function Stat({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border border-gray-200 bg-white p-6 shadow-sm", className)}
      {...props}
    />
  );
}

export function StatLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-gray-500", className)} {...props} />;
}

export function StatValue({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-2 text-3xl font-semibold text-gray-900", className)} {...props} />;
}

export function StatChange({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-2 text-sm font-medium text-gray-600", className)} {...props} />;
}