import type { MDXComponents } from "mdx/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-2">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-2">{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    hr: () => <hr className="border-secondary my-8" />,
    pre: ({ children }) => (
      <pre
        className="bg-secondary/50 mb-8 max-w-full overflow-x-scroll rounded p-2"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <SyntaxHighlighter
        language="tsx"
        style={vscDarkPlus}
        className={`w-full !bg-transparent !p-4 [&>*]:!bg-transparent`}
        customStyle={{ margin: 0, fontSize: 13 }}
      >
        {children}
      </SyntaxHighlighter>
    ),
    ...components,
  };
}
