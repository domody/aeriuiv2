"use client";
import { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/app/components/ui";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null;
    }, 1500);
  }

  return (
    <div
      className="border-border relative max-h-150 max-w-full overflow-x-scroll rounded border bg-[oklch(23.76%_0.0114_285.5deg)] p-2"
      style={{ scrollbarWidth: "none" }}
    >
      <Button
        className="absolute top-4.5 right-4.5 bg-[oklch(23.76%_0.0114_285.5deg)]/80"
        size={"icon"}
        variant={"ghost"}
        onClick={() => handleCopy()}
      >
        {copied ? (
          <Check className="text-success" />
        ) : (
          <Copy className="-scale-x-100" />
        )}
      </Button>
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
