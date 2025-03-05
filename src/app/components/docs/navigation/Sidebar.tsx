import { cn } from "@/app/lib/utils/cn";

async function getFiles() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/sidebar/getDocs`,
      {
        cache: "no-store",
      },
    );
    if (!response.ok) throw new Error("Failed to fetch files");

    const data = await response.json();
    return data.files;
  } catch (error) {
    console.error("Error fetching files:", error);
    return [];
  }
}

export async function Sidebar({ className }: { className?: string }) {
  const files = await getFiles();

  return (
    <div
      className={cn(
        "border-border bg-background fixed top-14 z-50 flex min-h-screen w-48 shrink-0 flex-col border-r pt-8",
        className,
      )}
    >
      <p className="mb-2 font-bold">Components</p>
      {files.length === 0 ? (
        <p className="text-muted-foreground text-sm">No components found.</p>
      ) : (
        files.map((file: string, index: number) => {
          const componentName =
            file[0].toUpperCase() +
            file
              .slice(1)
              .split(".")[0]
              .replace(/([A-Z])/g, " $1")
              .trim()
              .replace("-", " ");

          return (
            <a
              key={index}
              className="text-muted-foreground hover:text-secondary-foreground mb-1 text-sm transition-all"
              href={`/docs/components/${file.split(".")[0]}`}
            >
              {componentName}
            </a>
          );
        })
      )}
    </div>
  );
}
