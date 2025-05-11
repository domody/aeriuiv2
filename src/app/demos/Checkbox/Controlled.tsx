"use client";

import { useState } from "react";
import { Checkbox } from "@/app/components/ui";

export function CheckboxControlledDemo() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="controlled"
        checked={checked}
        onCheckedChange={() => {
          setChecked(!checked);
        }}
      />
      <label
        htmlFor="controlled"
        className="cursor-pointer text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
      >
        {checked ? "Subscribed!" : "Subscribe to weekly product updates"}
      </label>
    </div>
  );
}
