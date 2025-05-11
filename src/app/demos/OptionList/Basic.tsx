import {
  OptionList,
  OptionListSection,
  OptionListItem,
} from "aeriui/OptionList";
import { FolderOpen, SquarePen, Share, Trash2 } from "lucide-react";

export function OptionListDemo() {
  return (
    <OptionList title="File Options">
      <OptionListSection>
        <OptionListItem shortcut="⇧⌘O">
          <FolderOpen />
          <p>Open File</p>
        </OptionListItem>
        <OptionListItem disabled>
          <SquarePen />
          <p>Edit File</p>
        </OptionListItem>
        <OptionListItem>
          <Share />
          <p>Share File</p>
        </OptionListItem>
        <OptionListItem variant="destructive">
          <Trash2 />
          <p>Delete File</p>
        </OptionListItem>
      </OptionListSection>
    </OptionList>
  );
}
