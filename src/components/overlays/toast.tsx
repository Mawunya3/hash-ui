import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const toastVariants = cva(
  "w-full max-w-sm rounded-2xl border p-4 shadow-lg",
  {
    variants: {
      variant: {
        default: "border-gray-200 bg-white text-gray-900",
        success: "border-green-200 bg-green-50 text-green-800",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
        danger: "border-red-200 bg-red-50 text-red-800",
        info: "border-blue-200 bg-blue-50 text-blue-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {}

export function Toast({ className, variant, ...props }: ToastProps) {
  return <div className={cn(toastVariants({ variant }), className)} {...props} />;
}

export function ToastTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn("font-semibold", className)} {...props} />;
}

export function ToastDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-1 text-sm opacity-90", className)} {...props} />;
}

export function ToastViewport({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("fixed right-4 top-4 z-50 flex flex-col gap-3", className)}
      {...props}
    />
  );
}