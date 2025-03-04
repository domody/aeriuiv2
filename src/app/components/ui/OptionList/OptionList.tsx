"use client";

import React from "react";
import { Button, ButtonProps } from "aeriui/Button";
import { cn } from "@/app/lib/utils/cn";

interface OptionListProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  titleHasSeperator?: boolean;
}

const OptionList = React.forwardRef<HTMLDivElement, OptionListProps>(
  (
    { className, children, title, titleHasSeperator = false, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border-secondary bg-background h-min max-w-96 min-w-56 rounded-md border px-1 shadow-md transition-all",
          className,
        )}
        {...props}
      >
        {title && (
          <p
            className={cn(
              "pt-1.5 pl-2 text-sm font-semibold",
              titleHasSeperator && "border-secondary border-b pb-2.5",
            )}
          >
            {title}
          </p>
        )}
        {children}
      </div>
    );
  },
);
OptionList.displayName = "OptionList";

interface OptionListSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  seperator?: boolean;
}

const OptionListSection = React.forwardRef<
  HTMLDivElement,
  OptionListSectionProps
>(({ className, children, seperator = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "py-1",
        className,
        seperator && "border-secondary border-b",
      )}
      {...props}
    >
      {children}
    </div>
  );
});
OptionListSection.displayName = "OptionListSection";

interface OptionListItemProps extends ButtonProps {
  shortcut?: string;
}

const OptionListItem = React.forwardRef<HTMLDivElement, OptionListItemProps>(
  ({ className, children, shortcut, variant = "ghost", ...props }, ref) => {
    return (
      <div ref={ref} className="w-full">
        <Button
          className={cn(
            "w-full justify-start rounded px-2",
            variant === "destructive" &&
              "hover:text-primary bg-transparent text-red-500 hover:bg-red-500",
            className,
          )}
          variant={variant}
          {...props}
        >
          {children}
          {shortcut && (
            <span className="text-muted-foreground ml-auto font-mono text-xs">
              {shortcut}
            </span>
          )}
        </Button>
      </div>
    );
  },
);
OptionListItem.displayName = "OptionListItem";

export {
  type OptionListProps,
  type OptionListSectionProps,
  type OptionListItemProps,
};
export { OptionList, OptionListSection, OptionListItem };
