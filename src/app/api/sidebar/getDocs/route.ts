import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const directoryPath = path.join(process.cwd(), "src/app/content/components");

  try {
    const filenames = fs.readdirSync(directoryPath);

    return NextResponse.json({
      files: filenames,
    });
  } catch (error) {
    let errorMessage = "An unexpected error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage });
  }
}
