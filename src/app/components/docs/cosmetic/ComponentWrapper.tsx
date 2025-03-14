import React from "react";
import { cn } from "@/app/lib/utils/cn";
import jsxToString from "react-element-to-jsx-string"; // Import this package
import { Tabs, TabList, Tab, TabContent } from "aeriui/Tabs";
import { CodeBlock } from "./CodeBlock";
import * as AeriUIComponents from "aeriui/index";

const findUsedComponents = (
  element: React.ReactNode,
  usedComponents: Set<string>,
) => {
  if (!React.isValidElement(element)) return;

  if (typeof element.type !== "string") {
    const foundComponent = Object.entries(AeriUIComponents).find(
      ([, comp]) => comp === element.type,
    );
    if (foundComponent) usedComponents.add(foundComponent[0]);
  }

  if (
    React.isValidElement<{ children?: React.ReactNode }>(element) &&
    element.props.children
  ) {
    React.Children.forEach(element.props.children, (child) =>
      findUsedComponents(child, usedComponents),
    );
  }
};

const ComponentWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  let codeString = jsxToString(children, {
    displayName: (element: React.ReactNode): string => {
      if (!React.isValidElement(element)) return "Unknown";

      if (typeof element.type === "string") {
        return element.type;
      }

      const uiComponentName = Object.entries(AeriUIComponents).find(
        ([, comp]) => comp === element.type,
      )?.[0];

      if (uiComponentName) return uiComponentName;

      if (typeof element.type === "function") {
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
        const forwardRefComponent =
          element.type as React.ForwardRefExoticComponent<unknown> & {
            render?: React.ComponentType;
          };

        return (
          forwardRefComponent.render?.displayName ||
          forwardRefComponent.render?.name ||
          (element.type as React.ComponentType).displayName ||
          "ForwardRefComponent"
        );
      }

      return "UnknownComponent";
    },
  });

  const usedComponents = new Set<string>();

  React.Children.forEach(children, (child) =>
    findUsedComponents(child, usedComponents),
  );

  const imports =
    usedComponents.size > 0
      ? `import {\n  ${[...usedComponents].join(",\n  ")}\n} from "aeriui/index";`
      : "";

  const indentation = `${" "}${" "}${" "}${" "}`;
  codeString = codeString
    .split("\n")
    .map((line, index) => (index == 0 ? line : indentation + line))
    .join("\n");

  const formattedCode = `
${imports}
  
export function ${[...usedComponents][0]}Demo() {
  return (
    ${codeString}
  );
}
`.trim();

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
        <div className="relative">
          <CodeBlock code={formattedCode} />
        </div>
      </TabContent>
    </Tabs>
  );
});
ComponentWrapper.displayName = "ComponentWrapper";

export { ComponentWrapper };
