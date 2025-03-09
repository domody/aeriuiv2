"use client";

import Image from "next/image";
import { Button } from "aeriui/Button";
import Link from "next/link";
import GithubLogoWhite from "@/app/assets/brand/github/github-mark-white.svg";

import { Tabs, TabList, Tab, TabContent } from "aeriui/Tabs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
        <div className="bg-dots h-full w-full" />
      </div>
      <div className="container mx-auto flex h-full min-h-screen flex-col items-start justify-start px-2 pt-64">
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
        <div className="mt-8 flex space-x-8">
          <Tabs defaultValue={"Inbox"}>
            <TabList>
              <Tab value="Inbox">Inbox</Tab>
              <Tab value="Drafts">Drafts</Tab>
            </TabList>
            <TabContent value="Inbox">Inbox Content</TabContent>
            <TabContent value="Drafts">Drafts Content</TabContent>
          </Tabs>
        </div>
      </div>

      {/* <div className="from-secondary/45 to-75% to-background min-h-screen bg-gradient-to-b"></div> */}
    </main>
  );
}
