import { Separator } from "aeriui/Separator";
import { Input } from "aeriui/Input";
import { Button } from "aeriui/Button";
import { Eye } from "lucide-react";

export function SeparatorContentDemo() {
  return (
    <div className="border-border bg-background flex w-full flex-col items-center justify-center space-y-4 rounded border px-8 py-4">
      <Input
        className="w-full"
        label="Email"
        placeholder="example@email.com"
        type="email"
      />
      <Separator>OR CONTINUE WITH</Separator>
      <Button className="h-10 w-full" variant="outline">
        <Eye />
        <p>Retina verification</p>
      </Button>
    </div>
  );
}
