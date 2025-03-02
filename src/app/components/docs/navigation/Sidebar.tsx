"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
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
      } catch (err) {
        setError("Error fetching files");
      }
    };

    fetchFiles();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="border-secondary bg-backgrund fixed top-14 z-50 flex min-h-screen w-48 shrink-0 flex-col border-r pt-8">
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
            className="text-muted-foreground hover:text-secondary-foreground mb-1 text-sm transition-all"
            href={`/docs/components/${file.split(".")[0]}`}
          >
            {componentName}
          </a>
        );
      })}
    </div>
  );
});

export { Sidebar };
