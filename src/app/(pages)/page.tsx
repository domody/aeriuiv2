import Image from "next/image";
import { Button } from "aeriui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-32">
      <div className="container mx-auto flex h-full flex-col items-start justify-start px-2 font-mono">
        <h1>aeri ui v2</h1>
        <h3>free, copy-paste components built for nextjs.</h3>
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
                src="https://cdn.simpleicons.org/github/black/white"
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
    </main>
  );
}
