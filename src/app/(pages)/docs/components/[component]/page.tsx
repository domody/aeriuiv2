export default async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const component = (await params).component;

  const Comp = component[0].toLocaleUpperCase() + component.slice(1)
  return <div className="">{Comp}</div>;
}
