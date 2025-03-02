import { notFound } from "next/navigation";

export default async function ComponentPage({
  params,
}: {
  params: { component: string };
}) {
  const component = params.component;
  try {
    const Page = (await import(`@/app/content/components/${component}.mdx`))
      .default;

    return (
      <div className="w-full">
        <Page />
      </div>
    );
  } catch (error) {
    console.error("Error loading component page: ", error);
    return notFound();
  }
}
