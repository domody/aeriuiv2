import { Alert, AlertTitle, AlertDescription } from "aeriui/Alert";
import { CircleCheck } from "lucide-react";

export function AlertSuccessDemo() {
  return (
    <Alert variant="success">
      <CircleCheck className="size-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        <p>
          Your settings have been successfully saved. You can now leave this
          page safely.
        </p>
      </AlertDescription>
    </Alert>
  );
}
