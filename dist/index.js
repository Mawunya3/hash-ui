// src/components/forms/button.tsx
import "react";
import { cva } from "class-variance-authority";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/forms/button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        ghost: "hover:bg-gray-100 text-gray-900"
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
function Button({
  className,
  variant,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(buttonVariants({ variant, size }), className),
      ...props
    }
  );
}

// src/components/forms/button-group.tsx
import "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function ButtonGroup({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: cn(
        "inline-flex",
        orientation === "horizontal" ? "flex-row items-center" : "flex-col",
        className
      ),
      role: "group",
      ...props
    }
  );
}

// src/components/forms/icon-button.tsx
import "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var iconButtonVariants = cva2(
  "inline-flex items-center justify-center rounded-xl transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        ghost: "text-gray-900 hover:bg-gray-100"
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12"
      }
    },
    defaultVariants: {
      variant: "ghost",
      size: "md"
    }
  }
);
function IconButton({
  className,
  variant,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "button",
    {
      className: cn(iconButtonVariants({ variant, size }), className),
      ...props
    }
  );
}

// src/components/forms/input.tsx
import * as React4 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Input = React4.forwardRef(
  ({ className, type = "text", ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "input",
      {
        ref,
        type,
        className: cn(
          "flex h-10 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/forms/label.tsx
import "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "label",
    {
      className: cn(
        "text-sm font-medium leading-none text-gray-900",
        className
      ),
      ...props
    }
  );
}

// src/components/forms/select.tsx
import * as React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Select = React6.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
      "select",
      {
        ref,
        className: cn(
          "flex h-10 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Select.displayName = "Select";

// src/components/forms/switch.tsx
import * as React7 from "react";
import { jsx as jsx7, jsxs } from "react/jsx-runtime";
var Switch = React7.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs("label", { className: "inline-flex cursor-pointer items-center", children: [
      /* @__PURE__ */ jsx7("input", { ref, type: "checkbox", className: "peer sr-only", ...props }),
      /* @__PURE__ */ jsx7(
        "span",
        {
          className: cn(
            "relative h-6 w-11 rounded-full bg-gray-300 transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-gray-900 peer-checked:after:translate-x-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            className
          )
        }
      )
    ] });
  }
);
Switch.displayName = "Switch";

// src/components/forms/textarea.tsx
import * as React8 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var Textarea = React8.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx8(
      "textarea",
      {
        ref,
        className: cn(
          "flex min-h-[120px] w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/display/alert.tsx
import "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx9 } from "react/jsx-runtime";
var alertVariants = cva3("rounded-2xl border p-4", {
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
function Alert({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx9("div", { role: "alert", className: cn(alertVariants({ variant }), className), ...props });
}
function AlertTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9("h5", { className: cn("mb-1 font-semibold", className), ...props });
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9("p", { className: cn("text-sm opacity-90", className), ...props });
}

// src/components/display/avatar.tsx
import "react";
import { jsx as jsx10 } from "react/jsx-runtime";
function Avatar({
  className,
  src,
  alt,
  fallback,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    "div",
    {
      className: cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-medium text-gray-700",
        className
      ),
      ...props,
      children: src ? /* @__PURE__ */ jsx10(
        "img",
        {
          src,
          alt: alt ?? "Avatar",
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ jsx10(AvatarFallback, { children: fallback ?? "UI" })
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10("span", { className: cn("uppercase", className), ...props });
}
function AvatarGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10("div", { className: cn("flex -space-x-3", className), ...props });
}

// src/components/display/badge.tsx
import "react";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx11 } from "react/jsx-runtime";
var badgeVariants = cva4(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white",
        secondary: "bg-gray-100 text-gray-900",
        success: "bg-green-100 text-green-700",
        warning: "bg-yellow-100 text-yellow-700",
        danger: "bg-red-100 text-red-700",
        info: "bg-blue-100 text-blue-700"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx11("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/components/display/card.tsx
import "react";
import { jsx as jsx12 } from "react/jsx-runtime";
function Card({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      className: cn("rounded-2xl border border-gray-200 bg-white shadow-sm", className),
      ...props
    }
  );
}
function CardHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12("div", { className: cn("p-6 pb-4", className), ...props });
}
function CardTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12("h3", { className: cn("text-lg font-semibold text-gray-900", className), ...props });
}
function CardDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12("p", { className: cn("text-sm text-gray-500", className), ...props });
}
function CardContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12("div", { className: cn("p-6 pt-0", className), ...props });
}
function CardFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12("div", { className: cn("flex items-center p-6 pt-4", className), ...props });
}

// src/components/display/empty-state.tsx
import "react";
import { jsx as jsx13 } from "react/jsx-runtime";
function EmptyState({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center",
        className
      ),
      ...props
    }
  );
}
function EmptyStateTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13("h3", { className: cn("mt-4 text-lg font-semibold text-gray-900", className), ...props });
}
function EmptyStateDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13("p", { className: cn("mt-2 max-w-md text-sm text-gray-500", className), ...props });
}
function EmptyStateActions({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13("div", { className: cn("mt-6 flex items-center gap-3", className), ...props });
}

// src/components/display/notification.tsx
import "react";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx14 } from "react/jsx-runtime";
var noticeVariants = cva5(
  "rounded-2xl border p-4 shadow-sm",
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
function Notice({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: cn(noticeVariants({ variant }), className),
      role: "status",
      ...props
    }
  );
}
function NoticeTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx14("h4", { className: cn("font-semibold", className), ...props });
}
function NoticeDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx14("p", { className: cn("mt-1 text-sm opacity-90", className), ...props });
}
function NoticeActions({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx14("div", { className: cn("mt-4 flex items-center gap-2", className), ...props });
}

// src/components/display/skeleton.tsx
import "react";
import { jsx as jsx15 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx15(
    "div",
    {
      className: cn("animate-pulse rounded-xl bg-gray-200", className),
      ...props
    }
  );
}

// src/components/display/spinner.tsx
import "react";
import { jsx as jsx16 } from "react/jsx-runtime";
function Spinner({
  className,
  size = "md",
  ...props
}) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-[3px]"
  };
  return /* @__PURE__ */ jsx16(
    "div",
    {
      className: cn(
        "inline-block animate-spin rounded-full border-gray-300 border-t-gray-900",
        sizes[size],
        className
      ),
      "aria-label": "Loading",
      role: "status",
      ...props
    }
  );
}

// src/components/display/stat.tsx
import "react";
import { jsx as jsx17 } from "react/jsx-runtime";
function Stat({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      className: cn("rounded-2xl border border-gray-200 bg-white p-6 shadow-sm", className),
      ...props
    }
  );
}
function StatLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx17("p", { className: cn("text-sm text-gray-500", className), ...props });
}
function StatValue({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx17("p", { className: cn("mt-2 text-3xl font-semibold text-gray-900", className), ...props });
}
function StatChange({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx17("p", { className: cn("mt-2 text-sm font-medium text-gray-600", className), ...props });
}

// src/components/primitives/box.tsx
import "react";
import { jsx as jsx18 } from "react/jsx-runtime";
function Box({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx18("div", { className: cn(className), ...props });
}

// src/components/primitives/container.tsx
import "react";
import { jsx as jsx19 } from "react/jsx-runtime";
function Container({
  className,
  size = "lg",
  ...props
}) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    full: "max-w-none"
  };
  return /* @__PURE__ */ jsx19(
    "div",
    {
      className: cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className),
      ...props
    }
  );
}

// src/components/primitives/divider.tsx
import "react";
import { jsx as jsx20 } from "react/jsx-runtime";
function Divider({
  className,
  orientation = "horizontal",
  ...props
}) {
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx20("div", { className: cn("h-full w-px bg-gray-200", className), ...props });
  }
  return /* @__PURE__ */ jsx20("hr", { className: cn("w-full border-0 border-t border-gray-200", className), ...props });
}

// src/components/primitives/grid.tsx
import "react";
import { jsx as jsx21 } from "react/jsx-runtime";
function Grid({
  className,
  cols = 3,
  gap = "md",
  ...props
}) {
  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-6",
    12: "grid-cols-12"
  };
  const gapClasses = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  };
  return /* @__PURE__ */ jsx21(
    "div",
    {
      className: cn("grid", colsClasses[cols], gapClasses[gap], className),
      ...props
    }
  );
}

// src/components/primitives/section.tsx
import "react";
import { jsx as jsx22 } from "react/jsx-runtime";
function Section({
  className,
  spacing = "lg",
  as: Comp = "section",
  ...props
}) {
  const spacingClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24"
  };
  return /* @__PURE__ */ jsx22(Comp, { className: cn(spacingClasses[spacing], className), ...props });
}
function SectionHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx22("div", { className: cn("mb-10 space-y-3", className), ...props });
}
function SectionTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    "h2",
    {
      className: cn("text-3xl font-semibold tracking-tight text-gray-900", className),
      ...props
    }
  );
}
function SectionDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx22("p", { className: cn("max-w-2xl text-sm text-gray-500", className), ...props });
}

// src/components/primitives/stack.tsx
import "react";
import { jsx as jsx23 } from "react/jsx-runtime";
function Stack({
  className,
  direction = "col",
  gap = "md",
  ...props
}) {
  const directionClasses = {
    row: "flex flex-row",
    col: "flex flex-col"
  };
  const gapClasses = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  };
  return /* @__PURE__ */ jsx23(
    "div",
    {
      className: cn(directionClasses[direction], gapClasses[gap], className),
      ...props
    }
  );
}

// src/components/navigation/accordion.tsx
import "react";
import { jsx as jsx24 } from "react/jsx-runtime";
function Accordion({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx24("div", { className: cn("w-full space-y-2", className), ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: cn("overflow-hidden rounded-2xl border border-gray-200", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    "button",
    {
      className: cn(
        "flex w-full items-center justify-between bg-white px-4 py-3 text-left text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
        className
      ),
      ...props
    }
  );
}
function AccordionContent({
  className,
  open = false,
  ...props
}) {
  if (!open) return null;
  return /* @__PURE__ */ jsx24("div", { className: cn("border-t border-gray-200 p-4 text-sm text-gray-600", className), ...props });
}

// src/components/navigation/breadcrumb.tsx
import "react";
import { jsx as jsx25 } from "react/jsx-runtime";
function Breadcrumb({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25("nav", { "aria-label": "Breadcrumb", className: cn("text-sm text-gray-500", className), ...props });
}
function BreadcrumbList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25("ol", { className: cn("flex flex-wrap items-center gap-2", className), ...props });
}
function BreadcrumbItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25("li", { className: cn("inline-flex items-center gap-2", className), ...props });
}
function BreadcrumbSeparator({
  className,
  children = "/",
  ...props
}) {
  return /* @__PURE__ */ jsx25("span", { className: cn("text-gray-400", className), ...props, children });
}
function BreadcrumbPage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25("span", { className: cn("font-medium text-gray-900", className), ...props });
}

// src/components/navigation/command-palette.tsx
import "react";
import { jsx as jsx26 } from "react/jsx-runtime";
function CommandPalette({
  className,
  open = true,
  ...props
}) {
  if (!open) return null;
  return /* @__PURE__ */ jsx26("div", { className: "fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-24", children: /* @__PURE__ */ jsx26(
    "div",
    {
      className: cn(
        "w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl",
        className
      ),
      role: "dialog",
      "aria-modal": "true",
      ...props
    }
  ) });
}
function CommandPaletteInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
    "input",
    {
      className: cn(
        "h-12 w-full border-b border-gray-200 bg-transparent px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400",
        className
      ),
      placeholder: "Search commands...",
      ...props
    }
  );
}
function CommandPaletteList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26("div", { className: cn("max-h-80 overflow-y-auto p-2", className), ...props });
}
function CommandPaletteGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26("div", { className: cn("mb-2", className), ...props });
}
function CommandPaletteGroupLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26("p", { className: cn("px-2 py-1 text-xs font-medium uppercase tracking-wide text-gray-500", className), ...props });
}
function CommandPaletteItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
    "button",
    {
      className: cn(
        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900",
        className
      ),
      ...props
    }
  );
}
function CommandPaletteEmpty({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26("div", { className: cn("p-6 text-center text-sm text-gray-500", className), ...props });
}

// src/components/navigation/header.tsx
import "react";
import { jsx as jsx27 } from "react/jsx-runtime";
function Header({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27(
    "header",
    {
      className: cn("w-full border-b border-gray-200 bg-white", className),
      ...props
    }
  );
}
function HeaderInner({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27(
    "div",
    {
      className: cn(
        "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
        className
      ),
      ...props
    }
  );
}
function HeaderBrand({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27("div", { className: cn("flex items-center gap-3 font-semibold text-gray-900", className), ...props });
}
function HeaderNav({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27("nav", { className: cn("hidden items-center gap-6 md:flex", className), ...props });
}
function HeaderActions({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27("div", { className: cn("flex items-center gap-3", className), ...props });
}

// src/components/navigation/navbar.tsx
import "react";
import { jsx as jsx28 } from "react/jsx-runtime";
function Navbar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx28(
    "nav",
    {
      className: cn(
        "flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3",
        className
      ),
      ...props
    }
  );
}
function NavbarBrand({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx28("div", { className: cn("font-semibold text-gray-900", className), ...props });
}
function NavbarNav({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx28("div", { className: cn("hidden items-center gap-6 md:flex", className), ...props });
}
function NavbarActions({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx28("div", { className: cn("flex items-center gap-3", className), ...props });
}

// src/components/navigation/pagination.tsx
import "react";
import { jsx as jsx29 } from "react/jsx-runtime";
function Pagination({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx29("nav", { "aria-label": "Pagination", className: cn("flex items-center justify-center", className), ...props });
}
function PaginationList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx29("ul", { className: cn("flex items-center gap-2", className), ...props });
}
function PaginationItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx29("li", { className: cn(className), ...props });
}
function PaginationLink({
  className,
  isActive,
  ...props
}) {
  return /* @__PURE__ */ jsx29(
    "a",
    {
      className: cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm transition-colors",
        isActive ? "bg-gray-900 text-white" : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        className
      ),
      ...props
    }
  );
}

// src/components/navigation/sidebar.tsx
import "react";
import { jsx as jsx30 } from "react/jsx-runtime";
function Sidebar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx30(
    "aside",
    {
      className: cn(
        "flex h-full w-72 flex-col border-r border-gray-200 bg-white",
        className
      ),
      ...props
    }
  );
}
function SidebarHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx30("div", { className: cn("border-b border-gray-200 p-4", className), ...props });
}
function SidebarContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx30("div", { className: cn("flex-1 p-4", className), ...props });
}
function SidebarFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx30("div", { className: cn("border-t border-gray-200 p-4", className), ...props });
}
function SidebarGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx30("div", { className: cn("mb-6 space-y-2", className), ...props });
}
function SidebarGroupLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx30("p", { className: cn("text-xs font-medium uppercase tracking-wide text-gray-500", className), ...props });
}
function SidebarItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx30(
    "a",
    {
      className: cn(
        "flex items-center rounded-xl px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900",
        className
      ),
      ...props
    }
  );
}

// src/components/navigation/tabs.tsx
import "react";
import { jsx as jsx31 } from "react/jsx-runtime";
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx31("div", { className: cn("w-full", className), ...props });
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx31(
    "div",
    {
      className: cn(
        "inline-flex items-center rounded-xl bg-gray-100 p-1",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  active,
  ...props
}) {
  return /* @__PURE__ */ jsx31(
    "button",
    {
      className: cn(
        "inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        active ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx31("div", { className: cn("mt-4", className), ...props });
}

// src/components/overlays/drawer.tsx
import "react";
import { jsx as jsx32 } from "react/jsx-runtime";
function Drawer({
  className,
  open = true,
  side = "right",
  ...props
}) {
  if (!open) return null;
  return /* @__PURE__ */ jsx32("div", { className: "fixed inset-0 z-50 bg-black/40", children: /* @__PURE__ */ jsx32(
    "div",
    {
      className: cn(
        "absolute top-0 h-full w-full max-w-md bg-white shadow-xl",
        side === "right" ? "right-0" : "left-0",
        className
      ),
      ...props
    }
  ) });
}

// src/components/overlays/dropdown.tsx
import "react";
import { jsx as jsx33 } from "react/jsx-runtime";
function Dropdown({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx33("div", { className: cn("relative inline-block text-left", className), ...props });
}
function DropdownMenu({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx33(
    "div",
    {
      className: cn(
        "absolute right-0 z-50 mt-2 min-w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg",
        className
      ),
      ...props
    }
  );
}
function DropdownItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx33(
    "button",
    {
      className: cn(
        "flex w-full items-center rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100",
        className
      ),
      ...props
    }
  );
}

// src/components/overlays/modal.tsx
import "react";
import { jsx as jsx34 } from "react/jsx-runtime";
function Modal({
  className,
  open = true,
  ...props
}) {
  if (!open) return null;
  return /* @__PURE__ */ jsx34(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
      "aria-modal": "true",
      role: "dialog",
      children: /* @__PURE__ */ jsx34(
        "div",
        {
          className: cn(
            "w-full max-w-lg rounded-2xl bg-white shadow-xl",
            className
          ),
          ...props
        }
      )
    }
  );
}
function ModalHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx34("div", { className: cn("border-b border-gray-200 p-6", className), ...props });
}
function ModalTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx34("h2", { className: cn("text-lg font-semibold text-gray-900", className), ...props });
}
function ModalDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx34("p", { className: cn("mt-1 text-sm text-gray-500", className), ...props });
}
function ModalContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx34("div", { className: cn("p-6", className), ...props });
}
function ModalFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx34("div", { className: cn("flex items-center justify-end gap-3 border-t border-gray-200 p-6", className), ...props });
}

// src/components/overlays/toast.tsx
import "react";
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx35 } from "react/jsx-runtime";
var toastVariants = cva6(
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
function Toast({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx35("div", { className: cn(toastVariants({ variant }), className), ...props });
}
function ToastTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx35("h4", { className: cn("font-semibold", className), ...props });
}
function ToastDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx35("p", { className: cn("mt-1 text-sm opacity-90", className), ...props });
}
function ToastViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      className: cn("fixed right-4 top-4 z-50 flex flex-col gap-3", className),
      ...props
    }
  );
}

// src/components/overlays/tooltip.tsx
import "react";
import { jsx as jsx36 } from "react/jsx-runtime";
function Tooltip({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    "div",
    {
      role: "tooltip",
      className: cn(
        "inline-flex rounded-lg bg-gray-900 px-2 py-1 text-xs text-white shadow-md",
        className
      ),
      ...props
    }
  );
}

// src/components/marketing/hero.tsx
import "react";
import { jsx as jsx37 } from "react/jsx-runtime";
function Hero({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    "section",
    {
      className: cn("relative overflow-hidden py-20 sm:py-28", className),
      ...props
    }
  );
}
function HeroContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37("div", { className: cn("mx-auto max-w-3xl text-center", className), ...props });
}
function HeroBadge({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    "div",
    {
      className: cn(
        "mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function HeroTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37("h1", { className: cn("text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl", className), ...props });
}
function HeroDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37("p", { className: cn("mx-auto mt-6 max-w-2xl text-base text-gray-500 sm:text-lg", className), ...props });
}
function HeroActions({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37("div", { className: cn("mt-8 flex flex-wrap items-center justify-center gap-3", className), ...props });
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CommandPalette,
  CommandPaletteEmpty,
  CommandPaletteGroup,
  CommandPaletteGroupLabel,
  CommandPaletteInput,
  CommandPaletteItem,
  CommandPaletteList,
  Container,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateTitle,
  Grid,
  Header,
  HeaderActions,
  HeaderBrand,
  HeaderInner,
  HeaderNav,
  Hero,
  HeroActions,
  HeroBadge,
  HeroContent,
  HeroDescription,
  HeroTitle,
  IconButton,
  Input,
  Label,
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarNav,
  Notice,
  NoticeActions,
  NoticeDescription,
  NoticeTitle,
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationList,
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  Select,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarItem,
  Skeleton,
  Spinner,
  Stack,
  Stat,
  StatChange,
  StatLabel,
  StatValue,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  Tooltip,
  cn
};
