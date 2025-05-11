import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "aeriui/Dropdown";
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  LogOut,
  Trash2,
} from "lucide-react";

export function DropdownDemo() {
  return (
    <Dropdown>
      <DropdownTrigger variant="outline">Open</DropdownTrigger>
      <DropdownMenu title="My Account">
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
