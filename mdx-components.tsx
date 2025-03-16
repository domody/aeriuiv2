import type { MDXComponents } from "mdx/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";
import { CodeBlock } from "@/app/components/docs/cosmetic/CodeBlock";

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
    pre: ({ children }) => <>{children}</>,
    code: ({
      children,
      className,
    }: {
      children: string;
      className?: string;
    }) => {
      const language = className?.replace("language-", "") || "tsx"; // Extract language

      return <CodeBlock code={children} language={language} />;
    },

    ...components,
  };
}
