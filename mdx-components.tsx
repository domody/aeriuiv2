import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}) => (
      <h1 className="mb-2">{children}</h1>
    ),
    hr: ({children}) => (
      <hr className="border-secondary my-8" />
    ),
    ...components,
  };
}
