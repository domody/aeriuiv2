"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui";
import { cn } from "@/app/lib/utils/cn";
import { Loader } from "lucide-react";
import { usePathname } from "next/navigation";

type FilesByFolder = Record<string, string[]>;

export function Sidebar({ className }: { className?: string }) {
  const [filesByFolder, setFilesByFolder] = useState<FilesByFolder>({});
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const docsPath = pathname.split("/").slice(2);

  useEffect(() => {
    async function fetchFiles() {
      setLoading(true);
      try {
        const response = await fetch("/api/sidebar/getDocs");
        if (!response.ok) throw new Error("Failed to fetch files");
        const data = await response.json();
        setFilesByFolder(data);
      } catch (err) {
        console.error("Error fetching sidebar files:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFiles();
  }, []);

  return (
    <div
      className={cn(
        "bg-background sm:fixed sm:top-14 sm:w-48 border-border z-50 min-h-screen w-full shrink-0 flex-col border-r pt-8 pr-2 pl-4 transition-transform duration-300",
        className,
      )}
    >
      {loading ? (
        <Loader className="text-muted-foreground mx-auto my-auto size-5 animate-spin" />
      ) : Object.keys(filesByFolder).length === 0 ? (
        <p className="text-muted-foreground text-sm">No documents found.</p>
      ) : (
        Object.entries(filesByFolder).map(([folder, files]) => {
          return (
            <div key={folder} className="mb-4">
              <p className="text-sm font-bold capitalize">
                {folder.replace("-", " ")}
              </p>
              <div className="mt-1 flex flex-col">
                {files.map((file, index) => {
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
                      className={`justify-start text-sm ${
                        folder == docsPath[0] && file == `${docsPath[1]}.mdx`
                          ? "font-medium"
                          : "text-muted-foreground"
                      }`}
                      asChild
                    >
                      <Link href={`/docs/${folder}/${fileSlug}`}>
                        {fileName}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

// import { cn } from "@/app/lib/utils/cn";
// import Link from "next/link";
// import { Button } from "@/app/components/ui";

// type FilesByFolder = Record<string, string[]>;

// async function getFiles(): Promise<FilesByFolder> {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_SITE_URL}/api/sidebar/getDocs`,
//       { cache: "no-store" },
//     );

//     if (!response.ok) throw new Error("Failed to fetch files");

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching files:", error);
//     return {};
//   }
// }

// export async function Sidebar({ className }: { className?: string }) {
//   const filesByFolder: FilesByFolder = await getFiles();

//   return (
//     <div
//       className={cn(
//         "border-border bg-background fixed top-14 z-50 hidden min-h-screen w-48 shrink-0 flex-col border-r pt-8 pr-2 pl-4 sm:flex",
//         className,
//       )}
//     >
//       {Object.keys(filesByFolder).length === 0 ? (
//         <p className="text-muted-foreground text-sm">No documents found.</p>
//       ) : (
//         Object.entries(filesByFolder).map(([folder, files]) => (
//           <div key={folder} className="mb-4">
//             <p className="text-sm font-bold capitalize">
//               {folder.replace("-", " ")}
//             </p>

//             <div className="mt-1 ml-2 flex flex-col">
//               {files.map((file: string, index: number) => {
//                 const fileName =
//                   file[0].toUpperCase() +
//                   file
//                     .slice(1)
//                     .split(".")[0]
//                     .replace(/([A-Z])/g, " $1")
//                     .trim()
//                     .replace("-", " ");
//                 const fileSlug = file.replace(".mdx", "");

//                 return (
//                   <Button
//                     key={index}
//                     variant={"ghost"}
//                     className="justify-start text-sm"
//                     asChild
//                   >
//                     <Link href={`/docs/${folder}/${fileSlug}`}>{fileName}</Link>
//                   </Button>
//                 );
//               })}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
