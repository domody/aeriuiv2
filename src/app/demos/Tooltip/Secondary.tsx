import { Tooltip, TooltipTrigger, TooltipContent } from "aeriui/Tooltip";
import { Button } from "aeriui/Button";
import { Plus } from "lucide-react";

export function TooltipSecondaryDemo() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          size="icon"
          variant="outline"
        >
          <Plus />
        </Button>
      </TooltipTrigger>
      <TooltipContent
        position="bottom-center"
        variant="secondary"
      >
        <p>
          Add to library
        </p>
      </TooltipContent>
    </Tooltip>
  );
}