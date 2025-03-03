import Link from "next/link";

const links = [
  { title: "Docs", link: "/docs/installation" },
  { title: "Components", link: "/docs/components/accordion" },
];
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "aeriui/Dropdown";

import { Sun, Moon, Monitor } from "lucide-react";

export function Navbar() {
  return (
    <div className="bg-background border-secondary fixed top-0 left-0 z-50 h-14 w-full border-b">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <h2>
          <Link href={`/`}>aeri</Link>
        </h2>
        <div className="flex items-center justify-end space-x-4">
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.link}>
                <p className={`!opacity-100 transition-all`}>{link.title}</p>
              </Link>
            );
          })}
          <Dropdown>
            <DropdownTrigger variant="ghost" size="icon">
              <Sun className="h-5 w-5" />
            </DropdownTrigger>
            <DropdownMenu className="!min-w-36" position="right">
              <DropdownSection>
                <DropdownItem>
                  <Sun />
                  Light
                </DropdownItem>
                <DropdownItem>
                  <Moon />
                  Dark
                </DropdownItem>
                <DropdownItem>
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
