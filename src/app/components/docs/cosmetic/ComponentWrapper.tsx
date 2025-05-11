"use client";

import { useEffect, useState } from "react";
import React from "react";
import { cn } from "@/app/lib/utils/cn";
import jsxToString from "react-element-to-jsx-string"; // Import this package
import { Tabs, TabList, Tab, TabContent } from "aeriui/Tabs";
import { CodeBlock } from "./CodeBlock";
import { Eye, Terminal } from "lucide-react";
import * as AeriUIComponents from "aeriui/index";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  fileOverride: string;
}
const ComponentWrapper = React.forwardRef<
  HTMLDivElement,
  ComponentWrapperProps
>(({ className, children, fileOverride = "Input", ...props }, ref) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [demoCode, setDemoCode] = useState<string>("");
  const demoPath = fileOverride.split(/(?=[A-Z])/);
  console.log(demoPath);
  useEffect(() => {
    async function fetchDemoCode() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/domody/aeriui-pkg/refs/heads/main/src/components/${formattedDoc}.tsx`,
          { cache: "no-store" },
        );

        if (!response.ok) throw new Error("Failed to fetch file");
        const data = await response.text();
        setDemoCode(data);
      } catch (err) {
        console.error("Error fetching file:", err);
      } finally {
        setLoading(false);
      }
    }
    // fetchDemoCode();
  }, []);

  return (
    <Tabs defaultValue="Preview" className="mb-8">
      <TabList>
        <Tab value="Preview">
          <Eye /> Preview
        </Tab>
        <Tab value="Code">
          <Terminal /> Code
        </Tab>
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
          <CodeBlock code={"He"} />
        </div>
      </TabContent>
    </Tabs>
  );
});
ComponentWrapper.displayName = "ComponentWrapper";

export { ComponentWrapper };

// const findUsedComponents = (
//   element: React.ReactNode,
//   usedComponents: Set<string>,
// ) => {
//   if (!React.isValidElement(element)) return;
//   if (typeof element.type !== "string") {
//     let foundKey: keyof typeof AeriUIComponents | undefined;

//     for (const key of Object.keys(AeriUIComponents) as Array<
//       keyof typeof AeriUIComponents
//     >) {
//       if (AeriUIComponents[key] === element.type) {
//         foundKey = key;
//         break;
//       }
//     }

//     if (foundKey) {
//       usedComponents.add(foundKey);
//     }
//   }

//   if (
//     React.isValidElement<{ children?: React.ReactNode }>(element) &&
//     element.props.children
//   ) {
//     React.Children.forEach(element.props.children, (child) =>
//       findUsedComponents(child, usedComponents),
//     );
//   }
// };

// let codeString = jsxToString(children, {
//   displayName: (element: React.ReactNode): string => {
//     if (!React.isValidElement(element)) return "Unknown";

//     if (typeof element.type === "string") {
//       return element.type;
//     }

//     let uiComponentName = undefined;

//     for (const key of Object.keys(AeriUIComponents) as Array<
//       keyof typeof AeriUIComponents
//     >) {
//       if (AeriUIComponents[key] === element.type) {
//         uiComponentName = key;
//         break;
//       }
//     }

//     if (uiComponentName) return uiComponentName;

//     if (typeof element.type === "function") {
//       return (
//         (element.type as React.ComponentType).displayName ||
//         element.type.name ||
//         "Component"
//       );
//     }

//     if (
//       typeof element.type === "object" &&
//       element.type !== null &&
//       (element.type as { $$typeof?: symbol })?.$$typeof ===
//         Symbol.for("react.forward_ref")
//     ) {
//       const forwardRefComponent =
//         element.type as React.ForwardRefExoticComponent<unknown> & {
//           render?: React.ComponentType;
//         };

//       return (
//         forwardRefComponent.render?.displayName ||
//         forwardRefComponent.render?.name ||
//         (element.type as React.ComponentType).displayName ||
//         "ForwardRefComponent"
//       );
//     }

//     return "UnknownComponent";
//   },
// });

// const usedComponents = new Set<string>();

// React.Children.forEach(children, (child) =>
//   findUsedComponents(child, usedComponents),
// );

// const imports =
//   usedComponents.size > 0
//     ? `import {\n  ${[...usedComponents].join(",\n  ")}\n} from "aeriui/${[...usedComponents][0]}";`
//     : "";

// const indentation = `${" "}${" "}${" "}${" "}`;
// codeString = codeString
//   .split("\n")
//   .map((line, index) => (index == 0 ? line : indentation + line))
//   .join("\n");

// const formattedCode = `
// ${imports}

// export function ${[...usedComponents][0]}Demo() {
//   return (
//     ${codeString}
//   );
// }
// `.trim();
