import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

    return (
      <div
        className="bg-secondary/50 border-border max-w-full max-h-150 overflow-x-scroll rounded border p-2"
        style={{ scrollbarWidth: "none" }}
      >
        <SyntaxHighlighter
          language="tsx"
          style={vscDarkPlus}
          className="w-full max-w-full overflow-x-scroll !bg-transparent !p-4"
          customStyle={{ margin: 0, fontSize: 13, scrollbarWidth: "none" }}
        >
          {data}
        </SyntaxHighlighter>
      </div>
    );
  } catch (error) {
    console.error("Error fetching component code: ", error);
    return <p className="text-red-500">Failed to fetch component code.</p>;
  }
}
