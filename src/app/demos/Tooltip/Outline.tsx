import { Tooltip, TooltipTrigger, TooltipContent } from "aeriui/Tooltip";
import { Button } from "aeriui/Button";
import { Archive } from "lucide-react";
export function TooltipOutlineDemo() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button size="icon" variant="outline">
          <Archive />
        </Button>
      </TooltipTrigger>
      <TooltipContent position={"top-start"} variant={"outline"}>
        <p>Archive</p>
      </TooltipContent>
    </Tooltip>
  );
}
