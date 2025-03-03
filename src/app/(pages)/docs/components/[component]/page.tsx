import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const component = (await params).component;
  const parsedComponent =
    component[0].toUpperCase() + component.slice(1).trim();

  const componentMetadata = {
    name: component[0].toUpperCase() + component.slice(1).trim(),
    description: "A reusable UI component.",
    exampleCode: `<${component} />`,
    props: [
      { name: "size", type: "string", description: "Size of the component" },
      { name: "variant", type: "string", description: "Style variant" },
    ],
  };
  try {
    // Dynamically import the MDX file
    const Page = (await import(`@/app/content/components/${component}.mdx`))
      .default;

    return (
      <div className="min-h-48 w-full max-w-full shrink overflow-hidden">
        <Page />
        {/* <h1>{componentMetadata.name}</h1>
        <p>{componentMetadata.description}</p> */}
      </div>
    );
  } catch (error) {
    console.error("Error loading component page: ", error);
    return notFound();
  }
}
