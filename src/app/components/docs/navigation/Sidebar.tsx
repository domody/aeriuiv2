import { cn } from "@/app/lib/utils/cn";

async function getFiles() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/sidebar/getDocs`,
      { cache: "no-store" },
    );

    if (!response.ok) throw new Error("Failed to fetch files");

    return await response.json();
  } catch (error) {
    console.error("Error fetching files:", error);
    return {};
  }
}

export async function Sidebar({ className }: { className?: string }) {
  const filesByFolder = await getFiles();

  return (
    <div
      className={cn(
        "border-border bg-background fixed top-14 z-50 flex min-h-screen w-48 shrink-0 flex-col border-r pt-8",
        className,
      )}
    >
      {Object.keys(filesByFolder).length === 0 ? (
        <p className="text-muted-foreground text-sm">No documents found.</p>
      ) : (
        Object.entries(filesByFolder).map(([folder, files]) => (
          <div key={folder} className="mb-4">
            {/* Convert folder name to a formatted title */}
            <p className="font-bold capitalize">{folder.replace("-", " ")}</p>

            {/* List files inside the folder */}
            <div className="mt-1 ml-2 flex flex-col">
              {files.map((file: string, index: number) => {
                const fileName =
                  file[0].toUpperCase() +
                  file
                    .slice(1)
                    .split(".")[0]
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .replace("-", " ");
                const fileSlug = file.replace(".mdx", "");

                return (
                  <a
                    key={index}
                    className="text-muted-foreground hover:text-secondary-foreground mb-1 text-sm transition-all"
                    href={`/docs/${folder}/${fileSlug}`}
                  >
                    {fileName}
                  </a>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
