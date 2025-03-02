import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ComponentSourceCodeProps {
  component: string;
}

export async function ComponentSourceCode({
  component,
}: ComponentSourceCodeProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/docs/get-component-code/${component}`,
      {
        cache: "no-store",
      },
    );
    const data = await response.json();

    if (!data.code) {
      return <p className="text-red-500">Error loading code.</p>;
    }

    return (
      <div
        className="bg-secondary/50 max-w-full overflow-x-scroll rounded p-2"
        style={{ scrollbarWidth: "none" }}
      >
        <SyntaxHighlighter
          language="tsx"
          style={vscDarkPlus}
          className="w-full max-w-full overflow-x-scroll !bg-transparent !p-4"
          customStyle={{ margin: 0, fontSize: 13, scrollbarWidth: "none" }}
        >
          {data.code}
        </SyntaxHighlighter>
      </div>
    );
  } catch (error) {
    return <p className="text-red-500">Failed to fetch component code.</p>;
  }
}
