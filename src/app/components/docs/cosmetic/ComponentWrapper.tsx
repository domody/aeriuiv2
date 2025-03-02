import React from "react";

const ComponentWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className="border-secondary mt-4 rounded border px-12 py-20">
      <div className="flex w-[500px] items-center justify-center">
        {children}
      </div>
    </div>
  );
});

export { ComponentWrapper };
