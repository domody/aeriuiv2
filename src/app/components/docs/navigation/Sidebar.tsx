import { cn } from "@/app/lib/utils/cn";
import Link from "next/link";
import { Button } from "@/app/components/ui";

type FilesByFolder = Record<string, string[]>;

async function getFiles(): Promise<FilesByFolder> {
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
  const filesByFolder: FilesByFolder = await getFiles();

  return (
    <div
      className={cn(
        "border-border bg-background fixed top-14 z-50 hidden min-h-screen w-48 shrink-0 flex-col border-r pt-8 pr-2 pl-4 sm:flex",
        className,
      )}
    >
      {Object.keys(filesByFolder).length === 0 ? (
        <p className="text-muted-foreground text-sm">No documents found.</p>
      ) : (
        Object.entries(filesByFolder).map(([folder, files]) => (
          <div key={folder} className="mb-4">
            <p className="text-sm font-bold capitalize">
              {folder.replace("-", " ")}
            </p>

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
                  <Button
                    key={index}
                    variant={"ghost"}
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href={`/docs/${folder}/${fileSlug}`}>{fileName}</Link>
                  </Button>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
