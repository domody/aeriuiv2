import { Tooltip, TooltipTrigger, TooltipContent } from "aeriui/Tooltip";
import { Button } from "aeriui/Button";
import { Trash2 } from "lucide-react";

export function TooltipDestructiveDemo() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button size="icon" variant="destructive">
          <Trash2 />
        </Button>
      </TooltipTrigger>
      <TooltipContent position="right-center" variant="destructive">
        <p>Delete Account</p>
      </TooltipContent>
    </Tooltip>
  );
}
