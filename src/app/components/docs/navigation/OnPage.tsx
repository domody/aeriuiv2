"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/app/lib/utils/cn";

type Heading = {
  id: string;
  text: string;
  level: number;
};

const OnPage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3"),
    ) as HTMLHeadingElement[];

    const newHeadings = headingElements.map((el) => ({
      id: el.id,
      text: el.innerText,
      level: Number(el.tagName.replace("H", "")),
    }));

    setHeadings(newHeadings.slice(1));
  }, [pathname]);

  return (
    <div
      ref={ref}
      className={cn("fixed top-14 flex w-48 shrink-0 flex-col pt-8", className)}
      {...props}
    >
      <p className="mb-2 font-bold">On this page</p>
      <div className="text-muted-foreground flex flex-col">
        {headings.map((heading) => {
          return (
            <a
              key={heading.id}
              className={`hover:text-secondary-foreground mb-1 text-sm transition-all ${
                heading.level === 3 ? "pl-2" : ""
              }`}
              href={`#${heading.id}`}
            >
              {heading.text}
            </a>
          );
        })}
      </div>
    </div>
  );
});
OnPage.displayName = "OnPage";

export { OnPage };
