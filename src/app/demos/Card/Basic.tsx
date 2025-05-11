import { Card, CardHeader, CardContent, CardFooter } from "aeriui/Card";
import { Button } from "aeriui/Button";

export function CardDemo() {
  return (
    <Card>
      <CardHeader>Account</CardHeader>
      <CardContent>
        <p>
          You are about to make changes to your account settings. These changes
          are irreversible, so please make sure you're certain before saving.
        </p>
        <p className="mt-2">
          Once confirmed, these modifications cannot be undone, and will affect
          your profile and preferences.
        </p>
      </CardContent>
      <CardFooter className="gap-1">
        <Button variant="ghost">Cancel</Button>
        <Button variant="destructive">Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
