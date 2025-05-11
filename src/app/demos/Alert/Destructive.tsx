import { Alert, AlertTitle, AlertDescription } from "aeriui/Alert";
import { Trash2 } from "lucide-react";

export function AlertDestructiveDemo() {
  return (
    <Alert variant="destructive">
      <Trash2 className="size-4" />
      <AlertTitle>Account Deleted.</AlertTitle>
      <AlertDescription>
        <p>Your account has been deleted. This action is not reversible.</p>
      </AlertDescription>
    </Alert>
  );
}
