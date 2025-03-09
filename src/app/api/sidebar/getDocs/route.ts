import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const directoryPath = path.join(process.cwd(), "src/app/content/");

  const folderOrder = [
    "getting-started",
    "installation",
    "customization",
    "components",
  ];

  try {
    const folderEntries = fs.readdirSync(directoryPath, {
      withFileTypes: true,
    });

    const unorderedResult: Record<string, string[]> = {};

    folderEntries.forEach((entry) => {
      if (entry.isDirectory()) {
        const folderPath = path.join(directoryPath, entry.name);
        let files = fs
          .readdirSync(folderPath)
          .filter((file) => fs.statSync(path.join(folderPath, file)).isFile());

        const orderFilePath = path.join(folderPath, "order.json");
        if (fs.existsSync(orderFilePath)) {
          try {
            const orderData = JSON.parse(
              fs.readFileSync(orderFilePath, "utf-8"),
            ).order;
            files = orderData.filter((file: string) => files.includes(file));
          } catch (error) {
            console.error(`Error reading order.json in ${entry.name}:`, error);
          }
        } else {
          files.sort();
        }

        unorderedResult[entry.name] = files;
      }
    });

    const orderedResult: Record<string, string[]> = {};

    folderOrder.forEach((folder) => {
      if (unorderedResult[folder]) {
        orderedResult[folder] = unorderedResult[folder];
      }
    });

    Object.keys(unorderedResult).forEach((folder) => {
      if (!folderOrder.includes(folder)) {
        orderedResult[folder] = unorderedResult[folder];
      }
    });

    return NextResponse.json(orderedResult);
  } catch (error) {
    let errorMessage = "An unexpected error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage });
  }
}
