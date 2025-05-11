"use client";

import { useState } from "react";
import { Input } from "aeriui/Input";

export function InputControlledDemo() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col gap-4">
      <Input
        className="w-[500px]"
        label="Username"
        placeholder="John Doe"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-muted-foreground bg-background w-max rounded p-1 text-sm">
        {value.length > 0
          ? `Value: ${value}`
          : `Type something in the input above`}
      </p>
    </div>
  );
}
