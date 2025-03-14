import { CodeBlock } from "./CodeBlock";
async function getSourceCode(): Promise<string> {
  const doc = "context-menu";
  try {
    const formattedDoc = doc
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    const response = await fetch(
      `https://raw.githubusercontent.com/domody/aeriui-pkg/refs/heads/main/src/components/${formattedDoc}.tsx`,
      { cache: "no-store" },
    );

    if (!response.ok) throw new Error("Failed to fetch file");

    return await response.text(); // Convert response to string
  } catch (error) {
    console.error(error);
    return ""; // Return empty string on error
  }
}

interface ComponentSourceCodeProps {
  component: string;
}

export async function ComponentSourceCode({
  component,
}: ComponentSourceCodeProps) {
  try {
    const data = await getSourceCode();

    if (!data) {
      return <p className="text-red-500">Error loading code.</p>;
    }

    return <CodeBlock code={data} />;
  } catch (error) {
    console.error("Error fetching component code: ", error);
    return <p className="text-red-500">Failed to fetch component code.</p>;
  }
}
