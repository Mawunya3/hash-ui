import * as React from "react";
import { cn } from "../../lib/cn";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export function Modal({
  className,
  open = true,
  ...props
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          "w-full max-w-lg rounded-2xl bg-white shadow-xl",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function ModalHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("border-b border-gray-200 p-6", className)} {...props} />;
}

export function ModalTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("text-lg font-semibold text-gray-900", className)} {...props} />;
}

export function ModalDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-1 text-sm text-gray-500", className)} {...props} />;
}

export function ModalContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function ModalFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center justify-end gap-3 border-t border-gray-200 p-6", className)} {...props} />;
}