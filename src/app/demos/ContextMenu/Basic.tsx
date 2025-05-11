import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuSection,
  ContextMenuItem,
} from "aeriui/ContextMenu";

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="border-border bg-background flex h-[300px] w-[600px] items-center justify-center rounded-md border border-dashed text-sm">
        Right-Click Here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuSection seperator>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuItem>More Tools</ContextMenuItem>
        </ContextMenuSection>
        <ContextMenuSection seperator>
          <ContextMenuItem>Show Bookmarks Bar</ContextMenuItem>
          <ContextMenuItem>Show Full URLs</ContextMenuItem>
        </ContextMenuSection>
        <ContextMenuSection>
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuSection>
      </ContextMenuContent>
    </ContextMenu>
  );
}
