import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ component: string }> },
) {
  const { component } = await params;

  const filePath = path.join(
    process.cwd(),
    `src/app/components/ui/${component}/${component}.tsx`,
  );

  console.log(component);
  console.log(process.env.NEXT_PUBLIC_SITE_URL);
  console.log(filePath);

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
