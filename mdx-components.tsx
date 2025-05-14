import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CodeBlock } from "@/app/components/docs/cosmetic/CodeBlock";
import { Separator } from "@/app/components/ui";
import { slugify } from "@/app/lib/utils/slugify";

interface CodeElementProps {
  className?: string;
  children: string;
}



export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-2">{children}</h1>,
    h2: ({ children }) => (
      <h2 id={slugify(children as string)} className="mb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 id={slugify(children as string)} className="!text-red-500">{children}</h3>,
    a: ({ children, href }) => (
      <Link href={href} className="cursor-pointer underline">
        {children}
      </Link>
    ),
    hr: () => <Separator className="my-8" />,

    pre: ({ children }) => {
      const codeElement = children as React.ReactElement<CodeElementProps>;

      const language =
        codeElement.props.className?.replace("language-", "") || "tsx";
      const codeString = codeElement.props.children.trim();

      return <CodeBlock code={codeString} language={language} />;
    },

    code: ({ children }) => {
      return (
        <code className="bg-muted not-prose rounded px-1 py-0.5 font-mono text-sm">
          {children}
        </code>
      );
    },

    ...components,
  };
}
