import React from "react";
import { cn } from "@/app/lib/utils/cn";

const OnPage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("fixed top-14 flex w-48 shrink-0 flex-col pt-8", className)}
      {...props}
    >
      <p className="mb-2 font-bold">On this page</p>
      <div className="text-muted-foreground flex flex-col">
        <a
          className="hover:text-secondary-foreground mb-1 text-sm transition-all"
          href={`#installation`}
        >
          Installation
        </a>
        <a
          className="hover:text-secondary-foreground mb-1 text-sm transition-all"
          href={`#usage`}
        >
          Usage
        </a>
      </div>
    </div>
  );
});
OnPage.displayName = "OnPage";

export { OnPage };
