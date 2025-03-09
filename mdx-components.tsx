import type { MDXComponents } from "mdx/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-2">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-2">{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    a: ({ children, href }) => (
      <Link href={href} className="cursor-pointer underline">
        {children}
      </Link>
    ),
    hr: () => <hr className="border-border my-8" />,
    pre: ({ children }) => (
      <pre
        className="bg-secondary/50 border-border not-prose mb-8 max-w-full overflow-x-scroll rounded border p-0"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </pre>
    ),
    code: ({
      children,
      className,
    }: {
      children: string;
      className?: string;
    }) => {
      const language = className?.replace("language-", "") || "tsx"; // Extract language

      return (
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          className="w-full !bg-transparent !p-4 [&>*]:!bg-transparent"
          customStyle={{ margin: 0, fontSize: 13 }}
        >
          {children}
        </SyntaxHighlighter>
      );
    },

    ...components,
  };
}
