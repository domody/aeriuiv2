import { notFound } from "next/navigation";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const component = (await params).component;

  try {
    // Dynamically import the MDX file
    const Page = (await import(`@/app/content/components/${component}.mdx`))
      .default;

    return (
      <div className="min-h-48 w-full max-w-full shrink overflow-hidden">
        <Page />
      </div>
    );
  } catch (error) {
    console.error("Error loading component page: ", error);
    return notFound();
  }
}
