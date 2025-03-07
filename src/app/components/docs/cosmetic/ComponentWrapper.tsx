import React from "react";
import { cn } from "@/app/lib/utils/cn";
const ComponentWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "border-border bg-dots not-prose mt-4 mb-8 flex items-center justify-center rounded border px-12 py-20",
        className,
      )}
      {...props}
    >
      <div className="flex w-[500px] items-center justify-center">
        {children}
      </div>
    </div>
  );
});
ComponentWrapper.displayName = "ComponentWrapper";

export { ComponentWrapper };
