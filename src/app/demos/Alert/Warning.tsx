import { Alert, AlertTitle, AlertDescription } from "aeriui/Alert";
import { CircleAlert } from "lucide-react";

export function AlertWarningDemo() {
  return (
    <Alert variant="warning">
      <CircleAlert className="size-4" />
      <AlertTitle>Are you sure?</AlertTitle>
      <AlertDescription>
        <p>This action is not reversible. Are you sure you want to proceed?</p>
      </AlertDescription>
    </Alert>
  );
}
