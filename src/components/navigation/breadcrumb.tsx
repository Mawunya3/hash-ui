import * as React from "react";
import { cn } from "../../lib/cn";

export function Breadcrumb({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <nav aria-label="Breadcrumb" className={cn("text-sm text-gray-500", className)} {...props} />;
}

export function BreadcrumbList({
  className,
  ...props
}: React.OlHTMLAttributes<HTMLOListElement>) {
  return <ol className={cn("flex flex-wrap items-center gap-2", className)} {...props} />;
}

export function BreadcrumbItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn("inline-flex items-center gap-2", className)} {...props} />;
}

export function BreadcrumbSeparator({
  className,
  children = "/",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("text-gray-400", className)} {...props}>{children}</span>;
}

export function BreadcrumbPage({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("font-medium text-gray-900", className)} {...props} />;
}