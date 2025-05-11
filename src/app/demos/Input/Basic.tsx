import { Input } from "aeriui/Input";

export function InputDemo() {
  return (
    <Input
      className="w-full md:w-[500px]"
      label="Email"
      placeholder="example@email.com"
      type="email"
    />
  );
}
