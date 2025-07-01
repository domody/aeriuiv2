import { notFound } from "next/navigation";
import { SetTitle } from "@/app/components/docs/navigation/SetTitle";
import { Separator } from "@/app/components/ui";
import Link from "next/link";

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
        <div className="prose prose-headings:!text-white prose-headings:!font-semibold min-h-full w-full max-w-full shrink">
          <Page />

          <Separator className="not-prose mt-8">
            <Link
              href="https://github.com/domody/aeriuiv2"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              aeriui on github
            </Link>
            , by{" "}
            <Link
              href="https://domody.vercel.app/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              domody
            </Link>
          </Separator>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error loading component page: ", error);
    return notFound();
  }
}
