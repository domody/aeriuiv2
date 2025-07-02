"use client";

import { useState } from "react";
import { Navbar } from "@/app/components/docs/navigation/Navbar";
import { Sidebar } from "@/app/components/docs/navigation/Sidebar";
import { OnPage } from "@/app/components/docs/navigation/OnPage";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto flex min-h-[calc(100vh)] pt-14">
          <div
            className={`fixed z-50 flex shrink-0 items-start justify-start overflow-hidden transition-all sm:relative sm:w-48 ${sidebarOpen ? "w-[80vw]" : "w-0"}`}
          >
            <Sidebar />
          </div>
          <div className="flex min-h-full w-full max-w-full shrink flex-col items-center overflow-hidden px-4 py-8">
            <div className="flex w-full max-w-[640px] items-center justify-start">
              {children}
            </div>
          </div>
          <div className="relative hidden h-full w-48 shrink-0 lg:block">
            <OnPage />
          </div>
        </div>
      </main>
    </>
  );
}
