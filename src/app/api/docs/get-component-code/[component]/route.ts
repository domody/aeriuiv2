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

  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 },
      );
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");

    return NextResponse.json({ code: fileContent });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
