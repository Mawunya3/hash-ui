import * as React from "react";
import { cn } from "../../lib/cn";

export function Pagination({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <nav aria-label="Pagination" className={cn("flex items-center justify-center", className)} {...props} />;
}

export function PaginationList({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("flex items-center gap-2", className)} {...props} />;
}

export function PaginationItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={cn(className)} {...props} />;
}

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm transition-colors",
        isActive
          ? "bg-gray-900 text-white"
          : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        className
      )}
      {...props}
    />
  );
}