import React, { ReactNode } from "react";
import { cn } from "@/app/lib/utils/cn";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsxToString from "react-element-to-jsx-string"; // Import this package
import { Tabs, TabList, Tab, TabContent } from "aeriui/Tabs";

import * as AeriUIComponents from "aeriui/index";

const ComponentWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const codeString = jsxToString(children, {
    displayName: (element: React.ReactNode): string => {
      if (!React.isValidElement(element)) return "Unknown";

      if (typeof element.type === "string") {
        return element.type;
      }
      return (
        Object.entries(AeriUIComponents).find(
          ([, comp]) => comp === element.type,
        )?.[0] || "UnknownComponent"
      );
    },
  });
  return (
    <Tabs defaultValue="Preview" className="mb-8">
      <TabList>
        <Tab value="Preview">Preview</Tab>
        <Tab value="Code">Code</Tab>
      </TabList>
      <TabContent value="Preview">
        <div
          ref={ref}
          className={cn(
            "border-border bg-dots not-prose text-foreground flex items-center justify-center rounded border px-12 py-20",
            className,
          )}
          {...props}
        >
          <div className="flex w-[500px] items-center justify-center">
            {children}
          </div>
        </div>
      </TabContent>
      <TabContent value="Code">
        <SyntaxHighlighter
          language="tsx"
          style={vscDarkPlus}
          className="w-ful !bg-secondary/50 border-border not-prose max-w-full overflow-x-scroll rounded border !p-4 [&>*]:!bg-transparent"
          customStyle={{ margin: 0, fontSize: 13 }}
        >
          {codeString}
        </SyntaxHighlighter>
      </TabContent>
    </Tabs>
  );
});
ComponentWrapper.displayName = "ComponentWrapper";

export { ComponentWrapper };
