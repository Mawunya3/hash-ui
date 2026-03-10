import * as React from "react";
import { cn } from "../../lib/cn";

export function Hero({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("relative overflow-hidden py-20 sm:py-28", className)}
      {...props}
    />
  );
}

export function HeroContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto max-w-3xl text-center", className)} {...props} />;
}

export function HeroBadge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function HeroTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn("text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl", className)} {...props} />;
}

export function HeroDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mx-auto mt-6 max-w-2xl text-base text-gray-500 sm:text-lg", className)} {...props} />;
}

export function HeroActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-8 flex flex-wrap items-center justify-center gap-3", className)} {...props} />;
}