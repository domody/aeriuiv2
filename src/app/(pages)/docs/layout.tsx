import { Sidebar } from "@/app/components/docs/navigation/Sidebar";
import { OnPage } from "@/app/components/docs/navigation/OnPage";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col font-mono">
      <div className="container mx-auto flex h-full pt-14">
        <div className="relative w-48 shrink-0">
          <Sidebar />
        </div>
        <div className="flex w-full max-w-full shrink flex-col overflow-hidden px-8 py-8">
          {children}
        </div>
        <div className="relative h-full w-48 shrink-0">
          <OnPage />
        </div>
      </div>
    </main>
  );
}
