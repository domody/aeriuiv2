import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "aeriui/Dropdown";
import { Button } from "aeriui/Button";
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  LogOut,
  Trash2,
} from "lucide-react";

export function DropdownHoverDemo() {
  return (
    <Dropdown onHover>
      <DropdownTrigger>
        <Button variant="outline">Open</Button>
      </DropdownTrigger>
      <DropdownMenu position={"side"} title="My Account ">
        <DropdownSection seperator>
          <DropdownItem>
            <User />
            <p>Profile</p>
          </DropdownItem>
          <DropdownItem disabled>
            <CreditCard />
            <p>Billing</p>
          </DropdownItem>
          <DropdownItem>
            <Settings />
            <p>Settings</p>
          </DropdownItem>
          <DropdownItem>
            <Keyboard />
            <p>Keyboard Shortcuts</p>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem>
            <LogOut />
            <p>Log out</p>
          </DropdownItem>
          <DropdownItem variant="destructive">
            <Trash2 />
            <p>Delete Account</p>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
