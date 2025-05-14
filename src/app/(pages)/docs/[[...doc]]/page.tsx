import { notFound } from "next/navigation";
import { SetTitle } from "@/app/components/docs/navigation/SetTitle";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ doc: string }>;
}) {
  const doc = (await params).doc;
  const [section, slug] = doc;

  try {
    const Page = (await import(`@/app/content/${section}/${slug}.mdx`)).default;

    const title = `${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} | Aeri UI`;

    return (
      <>
        <SetTitle title={title} />
        <div className="prose prose-h1:!text-foreground prose-h2:!text-foreground prose-h3:!text-foreground min-h-full w-full max-w-full shrink">
          <Page />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error loading component page: ", error);
    return notFound();
  }
}
