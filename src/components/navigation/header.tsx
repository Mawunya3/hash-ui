import * as React from "react";
import { cn } from "../../lib/cn";

export function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn("w-full border-b border-gray-200 bg-white", className)}
      {...props}
    />
  );
}

export function HeaderInner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}

export function HeaderBrand({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-3 font-semibold text-gray-900", className)} {...props} />;
}

export function HeaderNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn("hidden items-center gap-6 md:flex", className)} {...props} />;
}

export function HeaderActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-3", className)} {...props} />;
}