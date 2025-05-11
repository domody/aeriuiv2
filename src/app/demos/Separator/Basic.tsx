import { Separator } from "aeriui/Separator";

export function SeparatorDemo() {
  return (
    <div className="border-border bg-background flex w-full flex-col items-start justify-center space-y-4 rounded border px-8 py-4">
      <div className="flex-col">
        <p className="font-medium">Account Settings</p>
        <p className="text-muted-foreground text-sm">
          Manage your personal details and update your preferences.
        </p>
      </div>
      <Separator />
      <div className="flex h-7 w-full items-center justify-between space-x-4">
        <div className="flex flex-1 justify-center">
          <p>Profile</p>
        </div>
        <Separator vertical />
        <div className="flex flex-1 justify-center">
          <p>Security</p>
        </div>
        <Separator vertical />
        <div className="flex flex-1 justify-center">
          <p>Notifications</p>
        </div>
      </div>
    </div>
  );
}
