"use client";

import Image from "next/image";
import Link from "next/link";
import GithubLogoWhite from "@/app/assets/brand/github/github-mark-white.svg";

import { Button } from "aeriui/Button";
import { Input } from "@/app/components/ui/Input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");

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
        <div className="mt-8 flex max-w-[500px] space-x-8">
          <Input
            className="w-[500px]"
            type="email"
            label="Email"
            labelType="floating"
            placeholder="example@email.com"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[500px]"
            type="email"
            label="Email"
            labelType="stationary"
            placeholder="example@email.com"
          />
          {email}
        </div>
      </div>

      {/* <div className="from-secondary/45 to-75% to-background min-h-screen bg-gradient-to-b"></div> */}
    </main>
  );
}
