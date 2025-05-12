import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "aeriui/Dropdown";
import { Button } from "aeriui/Button";
import {
  CircleDashed,
  Clock,
  CircleCheck,
  CircleDotDashed,
  CircleMinus,
  ChevronRight,
  Filter,
  SquarePen,
} from "lucide-react";

export function DropdownSubmenuDemo() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" size="icon">
          <CircleDashed />
        </Button>
      </DropdownTrigger>
      <DropdownMenu title="Status options" className="min-w-64">
        <DropdownSection>
          <DropdownItem>
            <Filter />
            <p>Filter by Status</p>
          </DropdownItem>
          <Dropdown onHover>
            <DropdownTrigger>
              <Button variant={"ghost"} className="w-full px-2">
                <SquarePen /> <p>Change Status</p>
                <ChevronRight className="ml-auto" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu position="side">
              <DropdownSection className="min-w-32">
                <DropdownItem className="flex items-center gap-2">
                  <CircleDashed className="stroke-muted-foreground" />
                  <span>Pending</span>
                </DropdownItem>
                <DropdownItem className="flex items-center gap-2">
                  <Clock className="stroke-orange-400" />
                  <span>In Progress</span>
                </DropdownItem>
                <DropdownItem className="flex items-center gap-2">
                  <CircleDotDashed className="stroke-blue-400" />
                  <span>In review</span>
                </DropdownItem>
                <DropdownItem className="flex items-center gap-2">
                  <CircleCheck className="stroke-green-400" />
                  <span>Completed</span>
                </DropdownItem>
                <DropdownItem className="flex items-center gap-2">
                  <CircleMinus className="stroke-red-500" />
                  <span>Blocked</span>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
