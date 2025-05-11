import { Checkbox } from "@/app/components/ui";

export function CheckboxDisabledDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="subscribe-disabled" disabled />
      <label
        htmlFor="subscribe-disabled"
        className="cursor-pointer text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
      >
        Subscribe to weekly product updates
      </label>
    </div>
  );
}
