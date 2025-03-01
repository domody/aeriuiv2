import Image from "next/image";
import { Button } from "aeriui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
} from "aeriui/Accordion";

export default function Home() {
  return (
    <main className="min-h-screen pt-32">
      <div className="container mx-auto flex h-full flex-col items-start justify-start px-2 font-mono">
        <h1>aeri ui v2</h1>
        <h3>free, copy-paste components built for nextjs.</h3>
        <div className="mt-2 flex gap-2">
          <Button>Learn More</Button>
          <Button variant="ghost">
            <img
              className="mb-0.5"
              height="18"
              width="18"
              src="https://cdn.simpleicons.org/github/black/white"
            />
            Github
          </Button>
        </div>
      </div>
    </main>
  );
}
