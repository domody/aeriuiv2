"use client";

import React, { SetStateAction, useRef } from "react";
import { useState, useEffect, createContext, useContext } from "react";
import { Button, ButtonProps } from "aeriui/Button";
import { cn } from "@/app/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

interface DropdownContextProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  onHover: boolean;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  menuRef: React.RefObject<HTMLDivElement | null>;
}

const DropdownContext = createContext<DropdownContextProps | null>(null);

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  onHover?: boolean;
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, children, onHover = false, ...props }, ref) => {
    const [open, setOpen] = useState<boolean>(false);

    const triggerRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (!e.target) return;
        const target = e.target as Node;

        if (
          menuRef.current &&
          !menuRef.current.contains(target) &&
          triggerRef.current &&
          !triggerRef.current.contains(target)
        ) {
          setOpen(false);
        }
      }

      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [open, setOpen]);

    return (
      <DropdownContext.Provider
        value={{
          open,
          setOpen,
          onHover,
          triggerRef,
          menuRef,
        }}
      >
        <div ref={ref} className={cn("relative", className)} {...props}>
          {children}
        </div>{" "}
      </DropdownContext.Provider>
    );
  },
);
Dropdown.displayName = "Dropdown";

const DropdownTrigger = React.forwardRef<HTMLDivElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    const context = useContext(DropdownContext);
    if (!context)
      throw new Error("DropdownTwigger must be used in a Dropdown!");

    const { open, setOpen, triggerRef } = context;
    return (
      <div
        ref={(el) => {
          triggerRef.current = el;
          if (typeof ref === "function") ref(el);
          else if (ref) ref.current = el;
        }}
        className={cn("", className)}
      >
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className=""
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  },
);
DropdownTrigger.displayName = "DropdownTrigger";

const dropdownMenuVariants = cva(
  `bg-background border-secondary absolute top-[calc(100%+0.5rem)] w-max max-w-96 min-w-36 rounded-lg border transition-all shadow`,
  {
    variants: {
      position: {
        left: "left-0 origin-top-left",
        center: "left-1/2 -translate-x-1/2 origin-top",
        right: "right-0 origin-top-right",
      },
    },
    defaultVariants: {
      position: "left",
    },
  },
);

interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownMenuVariants> {
  position: "left" | "center" | "right";
  title?: string;
  titleSeperator?: boolean;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    { className, children, position, title, titleSeperator = true, ...props },
    ref,
  ) => {
    const context = useContext(DropdownContext);
    if (!context) throw new Error("DropdownMenu must be used in a Dropdown!");

    const { open, menuRef } = context;

    return (
      <div
        ref={(el) => {
          menuRef.current = el;
          if (typeof ref === "function") ref(el);
          else if (ref) ref.current = el;
        }}
        className={cn(
          dropdownMenuVariants({ position }),
          open ? "scale-100 opacity-100" : "scale-90 opacity-0",
          className,
        )}
        {...props}
      >
        {title && (
          <div
            className={`w-full px-3 py-2 font-medium ${titleSeperator ? "border-secondary border-b" : ""}`}
          >
            {title}
          </div>
        )}
        {children}
      </div>
    );
  },
);
DropdownMenu.displayName = "DropdownMenu";

interface DropdownSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  seperator?: boolean;
}
const DropdownSection = React.forwardRef<HTMLDivElement, DropdownSectionProps>(
  ({ className, children, seperator = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full flex-col items-start justify-start p-1 bg-red",
          seperator ? "border-secondary border-b" : "",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
DropdownSection.displayName = "DropdownSection";

const DropdownItem = React.forwardRef<HTMLDivElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="w-full" ref={ref}>
        <Button
          className={cn("w-full justify-start rounded px-2", className)}
          variant="ghost"
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  },
);
DropdownItem.displayName = "DropdownItem";

export {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
};
