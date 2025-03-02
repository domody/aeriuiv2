"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils/cn";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const pathname = usePathname();

  const [files, setFiles] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/sidebar/getDocs");
        if (!response.ok) {
          throw new Error("Failed to fetch files");
        }
        const data = await response.json();
        setFiles(data.files);
      } catch (error) {
        setError("Error fetching files");
        console.error("Error fetching files: ", error);
      }
    };

    fetchFiles();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "border-secondary bg-backgrund fixed top-14 z-50 flex min-h-screen w-48 shrink-0 flex-col border-r pt-8",
        className,
      )}
      {...props}
    >
      <p className="mb-2 font-bold">Components</p>
      {files.map((file, index) => {
        const componentName =
          file[0].toUpperCase() +
          file
            .slice(1)
            .split(".")[0]
            .replace(/([A-Z])/g, " $1")
            .trim();

        return (
          <a
            key={index}
            className={`mb-1 text-sm transition-all ${pathname == `/docs/components/${file.split(".")[0]}` ? "text-secondary-foreground" : "text-muted-foreground hover:text-secondary-foreground"}`}
            href={`/docs/components/${file.split(".")[0]}`}
          >
            {componentName}
          </a>
        );
      })}
    </div>
  );
});
Sidebar.displayName = "Sidebar";

export { Sidebar };
