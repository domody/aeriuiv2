import React from "react";
import Link from "next/link";
import { Separator } from "aeriui/Separator";
import { InstallationGuide } from "@/app/components/docs/cosmetic/InstallationGuide";
import { ComponentProps } from "@/app/components/docs/cosmetic/ComponentProps";

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
      <Separator className="mb-8" />

      <h2 id="Installation">Installation</h2>
      <InstallationGuide component={name.replace(/\s+/g, "")} />

      {children}

      <ComponentProps component={name} />
    </div>
  );
};
