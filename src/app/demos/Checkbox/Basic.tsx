import { Checkbox } from "@/app/components/ui";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="subscribe" />
      <label htmlFor="subscribe" className="cursor-pointer text-sm font-medium">
        Subscribe to weekly product updates
      </label>
    </div>
  );
}
