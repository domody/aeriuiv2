"use client";

import React, {
  useState,
  useLayoutEffect,
  useRef,
  createContext,
  useContext,
  SetStateAction,
} from "react";
import { cn } from "@/app/lib/utils/cn";
import { ChevronDown } from "lucide-react";

interface AccordionContextProps {
  openItem: string | null;
  setOpenItem: React.Dispatch<SetStateAction<string | null>>;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
}

interface AccordionItemContextProps {
  value: string;
  setContentHeight: React.Dispatch<SetStateAction<number>>;
}

const AccordionItemContext = createContext<AccordionItemContextProps | null>(
  null,
);

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, defaultValue, ...props }, ref) => {
    const [openItem, setOpenItem] = useState<string | null>(
      defaultValue ?? null,
    );

    return (
      <AccordionContext.Provider value={{ openItem, setOpenItem }}>
        <div
          ref={ref}
          className={cn(className, "text-foreground w-full")}
          {...props}
        />
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const context = useContext(AccordionContext);
    if (!context)
      throw new Error("AccordionItem must be used in an Accordion!");

    const { openItem, setOpenItem } = context;
    const isOpen = openItem === value;
    const [contentHeight, setContentHeight] = useState<number>(0);

    const toggle = () => setOpenItem(isOpen ? null : value);

    return (
      <AccordionItemContext.Provider value={{ value, setContentHeight }}>
        <div
          ref={ref}
          className={cn(
            className,
            "border-border overflow-hidden border-b transition-all",
          )}
          style={{ height: isOpen ? `${contentHeight + 40}px` : "2.5rem" }}
          onClick={toggle}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  },
);
AccordionItem.displayName = "AccordionItem";

const AccordionTitle = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionTitle must be used in an Accordion!");

  const { openItem } = context;

  const itemContext = useContext(AccordionItemContext);
  if (!itemContext)
    throw new Error("AccordionTitle must be used in an AccordionItem!");

  const { value } = itemContext;

  const isOpen = openItem === value;

  return (
    <button
      ref={ref}
      className={cn(
        className,
        "flex h-10 w-full cursor-pointer items-center justify-between px-2",
      )}
      {...props}
    >
      {children}
      <ChevronDown
        size={16}
        className={`stroke-secondary-foreground transition-all ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
});
AccordionTitle.displayName = "AccordionTitle";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const itemContext = useContext(AccordionItemContext);
  if (!itemContext)
    throw new Error("AccordionContent must be used in an AccordionItem!");

  const { setContentHeight } = itemContext;

  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!contentRef.current || !setContentHeight) return;

    const updateHeight = () => {
      setContentHeight(contentRef.current!.clientHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [setContentHeight]);

  return (
    <div
      ref={(el) => {
        contentRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      className={cn(className, "px-2 pb-4")}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTitle, AccordionContent };
