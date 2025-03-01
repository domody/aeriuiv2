export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container mx-auto">{children}</main>;
}
