import React from "react";
import { cn } from "@/app/lib/utils/cn";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
  vertical?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, children, content, vertical = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `flex items-center ${vertical ? "h-full flex-col" : "w-full"}`,
          className,
        )}
      >
        <div
          className={`bg-border ${vertical ? "h-full w-px" : "h-px w-full"}`}
          {...props}
        />
        {content && (
          <>
            <p
              className={`text-border text-sm text-nowrap ${vertical ? "my-4" : "mx-4"}`}
            >
              {content}
            </p>
            <div
              className={`bg-border ${vertical ? "h-full w-px" : "h-px w-full"}`}
              {...props}
            />
          </>
        )}
      </div>
    );
  },
);

export { Separator };
