import { Alert, AlertTitle, AlertDescription } from "aeriui/Alert";
import { Bell } from "lucide-react";

export function AlertDemo() {
  return (
    <Alert>
      <Bell className="size-4" />
      <AlertTitle>New Update Available</AlertTitle>
      <AlertDescription>
        <p>
          A new version of the app is available. Please refresh the page to get
          the latest features and improvements.
        </p>
      </AlertDescription>
    </Alert>
  );
}
