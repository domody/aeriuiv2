import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  return (
    <div
      className="bg-secondary/50 border-border max-w-full overflow-x-scroll rounded border p-2"
      style={{ scrollbarWidth: "none" }}
    >
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="w-full max-w-full overflow-x-scroll !bg-transparent !p-4"
        customStyle={{ margin: 0, fontSize: 13, scrollbarWidth: "none" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
