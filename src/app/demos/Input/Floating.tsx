import { Input } from "aeriui/Input";

export function InputFloatingDemo() {
  return (
    <Input
      className="w-full md:w-[500px]"
      label="Password"
      labelType="floating"
      type="password"
    />
  );
}
