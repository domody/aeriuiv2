import { CodeBlock } from "./CodeBlock";
async function getSourceCode(doc: string): Promise<string> {
  try {
    const formattedDoc = doc
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    const response = await fetch(
      // `https://raw.githubusercontent.com/domody/aeriui-pkg/refs/heads/main/src/components/${formattedDoc}.tsx`,
      `https://raw.githubusercontent.com/domody/aeriuiv2/refs/heads/master/src/app/components/ui/${formattedDoc}.tsx`,
      { cache: "no-store" },
    );

    if (!response.ok) throw new Error("Failed to fetch file");

    return await response.text();
  } catch (error) {
    console.error(error);
    return "";
  }
}

interface ComponentSourceCodeProps {
  component: string;
}

export async function ComponentSourceCode({
  component,
}: ComponentSourceCodeProps) {
  try {
    const data = await getSourceCode(component);

    if (!data) {
      return <p className="text-red-500">Error loading code.</p>;
    }

    return <CodeBlock code={data} />;
  } catch (error) {
    console.error("Error fetching component code: ", error);
    return <p className="text-red-500">Failed to fetch component code.</p>;
  }
}
