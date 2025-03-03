import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ component: string }> },
) {
  const { component } = await params;
  const parsedComponent = component[0].toUpperCase() + component.slice(1);
  const filePath = path.join(
    process.cwd(),
    `src/app/components/ui/${parsedComponent}/${parsedComponent}.tsx`,
  );

  console.log("Requested component:", component);
  console.log("Expected file path:", filePath);

  console.log(
    "Reseloved FilePath: ",
    path.resolve(
      process.cwd(),
      `src/app/components/ui/${parsedComponent}/${parsedComponent}.tsx`,
    ),
  );
  console.log("CWD:", process.cwd());

  const baseDir = path.join(process.cwd(), "src/app/components/ui");

  // Helper function to recursively list all folders and files
  function listFilesRecursive(dir: string, depth = 0) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        console.log(`${" ".repeat(depth * 2)}- ${entry.name}`);
        if (entry.isDirectory()) {
          listFilesRecursive(fullPath, depth + 1);
        }
      }
    } catch (error) {
      console.error("Error reading directory:", dir, error);
    }
  }

  console.log("Listing all files under:", baseDir);
  listFilesRecursive(baseDir);

  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 },
      );
    }

    console.log("File exists.");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ code: fileContent });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
