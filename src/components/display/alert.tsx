import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const alertVariants = cva("rounded-2xl border p-4", {
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
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
  return <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
}

export function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn("mb-1 font-semibold", className)} {...props} />;
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm opacity-90", className)} {...props} />;
}