import React from "react";
import {
  Badge,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui";
import { Info } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";
import { slugify } from "@/app/lib/utils/slugify";

type Prop = {
  name: string;
  type: string;
  default: string;
  required: boolean;
  description: string;
  internal?: boolean;
};

type SubComponent = {
  extends?: string;
  props?: Prop[];
};

type Component = {
  [subComponentName: string]: SubComponent;
};

type ComponentProps = {
  [componentName: string]: Component;
};

import rawPropData from "@/app/data/props.json";
const propData = rawPropData as ComponentProps;

function resolveProps(
  components: ComponentProps,
  componentName: string,
  subComponentName: string,
  visited: Set<string> = new Set(),
): Prop[] {
  const sub = components[componentName]?.[subComponentName];
  if (!sub) return [];

  const key = `${componentName}.${subComponentName}`;
  if (visited.has(key)) {
    console.warn("Circular extends detected:", key);
    return [];
  }

  visited.add(key);

  const baseProps = sub.props || [];

  if (!sub.extends) return baseProps;

  const [parentComp, parentSub] = sub.extends.split(".");
  const extendedProps = resolveProps(
    components,
    parentComp,
    parentSub,
    visited,
  );

  return [...extendedProps, ...baseProps];
}

interface ComponentPropsProps extends React.HTMLAttributes<HTMLDivElement> {
  component?: string;
}

const ComponentProps = React.forwardRef<HTMLDivElement, ComponentPropsProps>(
  ({ className, component, ...props }, ref) => {
    if (!component) {
      return <div ref={ref}>No component selected.</div>;
    }
    const formattedComponent = component.replace(" ", "");
    const data = (propData as ComponentProps)[formattedComponent];

    if (!data) {
      return <div ref={ref}>No props available for this component.</div>;
    }

    const allAreEmpty = Object.entries(data).every(([key, value]) => {
      const hasExtends = "extends" in value;
      const hasProps = Array.isArray(value.props) && value.props.length > 0;
      return !hasExtends && !hasProps;
    });

    if (allAreEmpty) return;
    
    return (
      <div className="flex w-full flex-col">
        <h2 id="API" className="flex w-full gap-4">
          API
          <Separator />
        </h2>
        <div
          ref={ref}
          className={cn(className, "flex w-full flex-col gap-y-8")}
          {...props}
        >
          {Object.entries(data).map(([subComponentName], index) => {
            const resolvedProps = resolveProps(
              propData as ComponentProps,
              formattedComponent,
              subComponentName,
            );

            if (resolvedProps.length === 0) return;
            return (
              <div key={index} className="flex w-full flex-col gap-y-2">
                <h3
                  id={slugify(`${subComponentName} Props`)}
                  className="mt-2 text-lg font-semibold"
                >
                  {subComponentName} Props
                </h3>
                <div className="border-border bg-muted/25 flex h-8 w-full items-center gap-x-16 rounded px-2">
                  <p className="text-muted-foreground w-2/8 text-start text-sm">
                    Prop
                  </p>
                  <p className="text-muted-foreground w-5/8 text-start text-sm">
                    Type
                  </p>
                  <p className="text-muted-foreground w-1/8 text-start text-sm">
                    Default
                  </p>
                </div>

                {resolvedProps.map((prop, propIndex) => {
                  const propType = prop.type.split("|");

                  return (
                    <div
                      key={propIndex}
                      className="not-prose flex w-full gap-x-16 px-2"
                    >
                      <div className="flex w-2/8 items-start">
                        <div className="flex items-center gap-x-2">
                          <Badge variant={"secondary"}>{prop.name}</Badge>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="text-muted-foreground size-4 cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent
                              position="top-start"
                              variant="secondary"
                              className="z-50 max-w-96 p-2 text-sm break-words whitespace-pre-line"
                            >
                              {prop.description}
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="flex w-5/8 flex-wrap items-start gap-2">
                        {propType.map((type, typeIndex) => (
                          <Badge key={typeIndex} variant={"secondary"}>
                            {type.trim()}
                          </Badge>
                        ))}
                      </div>
                      <div className="w-1/8">
                        <Badge variant={"secondary"}>{prop.default}</Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ComponentProps.displayName = "ComponentProps";

export { ComponentProps };
