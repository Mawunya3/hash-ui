import * as React from "react";
import { cn } from "../../lib/cn.js";

type SectionSpacing = "sm" | "md" | "lg" | "xl";
type SectionElement = "section" | "div" | "main" | "aside" | "article";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  as?: SectionElement;
}

export function Section({
  className,
  spacing = "lg",
  as: Comp = "section",
  ...props
}: SectionProps) {
  const spacingClasses: Record<SectionSpacing, string> = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24"
  };

  return (
    <Comp className={cn(spacingClasses[spacing], className)} {...props} />
  );
}

export function SectionHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-10 space-y-3", className)} {...props} />;
}

export function SectionTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-3xl font-semibold tracking-tight text-gray-900", className)}
      {...props}
    />
  );
}

export function SectionDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("max-w-2xl text-sm text-gray-500", className)} {...props} />
  );
}