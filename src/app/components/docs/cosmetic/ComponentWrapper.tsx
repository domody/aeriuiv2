import React, { ReactNode } from "react";
import { cn } from "@/app/lib/utils/cn";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsxToString from "react-element-to-jsx-string"; // Import this package
import { Tabs, TabList, Tab, TabContent } from "aeriui/Tabs";
const ComponentWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const codeString = getCodeString(children);

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

function getCodeString(children: ReactNode): string {
  return jsxToString(children, {
    sortProps: true,
    showFunctions: true,
    displayName: (element: React.ReactNode): string => {
      if (!React.isValidElement(element)) {
        console.log("Invalid React element:", element);
        return "Unknown";
      }

      console.log("Valid React element:", element);
      console.log("element.type:", element.type);
      console.log("element.type (typeof):", typeof element.type);

      // Log whether it's a string, function, or object
      console.log(
        "Is element.type a string?",
        typeof element.type === "string",
      );
      console.log(
        "Is element.type a function?",
        typeof element.type === "function",
      );
      console.log(
        "Is element.type an object?",
        typeof element.type === "object",
      );

      // Checking for displayName and name
      console.log(
        "displayName:",
        (element.type as React.ComponentType).displayName,
      );
      console.log("name:", (element.type as React.ComponentType).name);

      if (typeof element.type === "string") {
        console.log("Returning element.type as a string:", element.type);
        return element.type;
      }

      if (typeof element.type === "function") {
        console.log("Returning function component displayName or name");
        return (
          (element.type as React.ComponentType).displayName ||
          element.type.name ||
          "Component"
        );
      }

      if (
        typeof element.type === "object" &&
        element.type !== null &&
        (element.type as { $$typeof?: symbol })?.$$typeof ===
          Symbol.for("react.forward_ref")
      ) {
        console.log("Detected ForwardRef component.");
        const forwardRefComponent =
          element.type as React.ForwardRefExoticComponent<unknown> & {
            render?: React.ComponentType;
          };

        // Log render details
        console.log("forwardRefComponent.render:", forwardRefComponent.render);
        console.log(
          "forwardRefComponent.render.displayName:",
          forwardRefComponent.render?.displayName,
        );
        console.log(
          "forwardRefComponent.render.name:",
          forwardRefComponent.render?.name,
        );

        return (
          forwardRefComponent.render?.displayName ||
          forwardRefComponent.render?.name ||
          (element.type as React.ComponentType).displayName ||
          "ForwardRefComponent"
        );
      }

      console.log("Returning UnknownComponent");
      return "UnknownComponent";
    },
  });
}
