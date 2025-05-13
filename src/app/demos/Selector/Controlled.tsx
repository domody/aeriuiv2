"use client";

import { useState } from "react";
import {
  Selector,
  SelectorTrigger,
  SelectorContent,
  SelectorContentItem,
} from "aeriui/Selector";

export function SelectorControlledDemo() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Selector value={value} onValueChange={(e) => setValue(e)}>
        <SelectorTrigger placeholder="Select Fruit..." />
        <SelectorContent checkEnd>
          <SelectorContentItem value="Apple">Apple</SelectorContentItem>
          <SelectorContentItem value="Orange">Orange</SelectorContentItem>
          <SelectorContentItem value="Bananas">Bananas</SelectorContentItem>
          <SelectorContentItem value="Pear">Pear</SelectorContentItem>
          <SelectorContentItem value="Blueberry">Blueberry</SelectorContentItem>
        </SelectorContent>
      </Selector>
      <p className="text-muted-foreground bg-background w-max rounded p-1 text-sm">
        {value.length > 0 ? `Value: ${value}` : `Select an option`}
      </p>
    </div>
  );
}
