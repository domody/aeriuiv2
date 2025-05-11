import { Tooltip, TooltipTrigger, TooltipContent } from "aeriui/Tooltip";
import { Button } from "aeriui/Button";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  );
}
