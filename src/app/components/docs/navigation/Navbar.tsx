"use client";

import Link from "next/link";

const links = [
  { title: "Docs", link: "/docs/getting-started/introduction" },
  { title: "Components", link: "/docs/components/accordion" },
];
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Selector,
  SelectorContent,
  SelectorContentItem,
  SelectorTrigger,
  Button,
} from "aeriui/index";

import { Sun, Moon, Monitor, Menu } from "lucide-react";

const applyToRoot = (className: string) => {
  const current = Array.from(document.documentElement.classList);
  document.documentElement.classList.remove(...current);

  if (className === "system") {
    className = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  document.documentElement.className = className;
  localStorage.setItem("theme", className);
};

export function Navbar() {
  return (
    <div className="bg-background border-border fixed top-0 left-0 z-99 h-14 w-full border-b">
      <div className="container mx-auto flex h-14 items-center justify-between px-8 sm:px-4">
        <div className="flex space-x-8">
          <h2>
            <Link href={`/`}>aeri</Link>
          </h2>
          <Selector defaultValue="React" className="hidden">
            <SelectorTrigger placeholder="Framework" />
            <SelectorContent checkEnd>
              <SelectorContentItem value="React">React</SelectorContentItem>
              <SelectorContentItem value="Svelte">Svelte</SelectorContentItem>
            </SelectorContent>
          </Selector>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Button variant={"ghost"} size={"icon"} className="sm:hidden">
            <Menu />
          </Button>
          {links.map((link, index) => {
            return (
              <Link className="hidden sm:block" key={index} href={link.link}>
                <p className={`!opacity-100 transition-all`}>{link.title}</p>
              </Link>
            );
          })}
          <Dropdown>
            <DropdownTrigger variant="ghost" size="icon">
              <Sun className="h-5 w-5" />
            </DropdownTrigger>
            <DropdownMenu className="max-w-36 min-w-36" position="right">
              <DropdownSection>
                <DropdownItem onClick={() => applyToRoot("light")}>
                  <Sun />
                  Light
                </DropdownItem>
                <DropdownItem onClick={() => applyToRoot("dark")}>
                  <Moon />
                  Dark
                </DropdownItem>
                <DropdownItem onClick={() => applyToRoot("dark")}>
                  <Monitor />
                  System
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
