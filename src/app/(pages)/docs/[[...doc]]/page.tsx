import { notFound } from "next/navigation";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ doc: string }>;
}) {
  const doc = (await params).doc;

  try {
    // Dynamically import the MDX file
    const Page = (await import(`@/app/content/${doc[0]}/${doc[1]}.mdx`))
      .default;

    return (
      <div className="prose prose-h1:!text-foreground prose-h2:!text-foreground prose-h3:!text-foreground min-h-full w-full max-w-full shrink overflow-hidden">
        <Page />
      </div>
    );
  } catch (error) {
    console.error("Error loading component page: ", error);
    return notFound();
  }
}
