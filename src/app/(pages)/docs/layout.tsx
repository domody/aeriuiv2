import { Sidebar } from "@/app/components/docs/navigation/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col font-mono">
      <div className="border-secondary h-14 w-full border-b"></div>
      <div className="container mx-auto flex">
        <Sidebar />
        <div className="w-full flex flex-col px-4 py-8">{children}</div>
      </div>
    </main>
  );
}
