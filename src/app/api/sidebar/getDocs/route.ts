import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request, context) {
  const directoryPath = path.join(process.cwd(), "src/app/content/components");

  try {
    const filenames = fs.readdirSync(directoryPath);

    return NextResponse.json({
      files: filenames,
    });
    
  } catch (err) {
    return NextResponse.json({
      error: err.message || "An unexpected error occurred",
    });
  }
}
