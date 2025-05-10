"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import GithubLogoWhite from "@/app/assets/brand/github/github-mark-white.svg";
import { Navbar } from "@/app/components/docs/navigation/Navbar";

import { Button } from "aeriui/Button";
import {
  OptionList,
  OptionListSection,
  OptionListItem,
} from "aeriui/OptionList";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={`fixed top-16 left-0 z-50 w-screen px-2 transition-all ${sidebarOpen ? "opaicty-100 translate-y-0" : "-translate-y-full opacity-0"}`}
      >
        <OptionList className="w-full max-w-none">
          <OptionListSection>
            <OptionListItem asChild>
              <Link href="/docs/getting-started/introduction">Docs</Link>
            </OptionListItem>
            <OptionListItem asChild>
              <Link href="/docs/components/accordion">Components</Link>
            </OptionListItem>
          </OptionListSection>
        </OptionList>
      </div>
      <main className="min-h-screen">
        <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
          <div className="bg-dots h-full w-full" />
        </div>
        <div className="container mx-auto flex h-full min-h-screen flex-col items-start justify-start px-4 pt-48 sm:pt-64">
          <h1>aeri ui v2</h1>
          <h3>free, copy-paste components built for react.</h3>
          <div className="mt-4 flex gap-2">
            <Button asChild>
              <Link href="/docs/components/accordion">Learn More</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                href="https://github.com/domody/aeriuiv2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GithubLogoWhite}
                  alt="Github Icon"
                  className="mb-0.5"
                  height="18"
                  width="18"
                />
                Github
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="from-secondary/45 to-75% to-background min-h-screen bg-gradient-to-b"></div> */}
      </main>
    </>
  );
}
