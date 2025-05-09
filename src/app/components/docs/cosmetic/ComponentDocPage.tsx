import React from "react";
import Link from "next/link";
import { Separator } from "aeriui/Separator";
import { InstallationGuide } from "@/app/components/docs/cosmetic/InstallationGuide";

interface ComponentDocPageProps {
  name: string;
  description: string;
  children: React.ReactNode;
}

export const ComponentDocPage: React.FC<ComponentDocPageProps> = ({
  name,
  description,
  children,
}) => {
  return (
    <div className="prose w-full max-w-none">
      <h1 className="mb-2">{name}</h1>
      <p>{description}</p>

      <InstallationGuide component={name.replace(/\s+/g, "")} />

      {children}

      <Separator className="not-prose">
        <Link
          href="https://github.com/domody/aeriuiv2"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          aeriui on github
        </Link>
        , by{" "}
        <Link
          href="https://domody.vercel.app/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          domody
        </Link>
      </Separator>
    </div>
  );
};
