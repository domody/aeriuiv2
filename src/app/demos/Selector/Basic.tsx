import {
  Selector,
  SelectorTrigger,
  SelectorContent,
  SelectorContentItem,
} from "aeriui/Selector";

export function SelectorDemo() {
  return (
    <Selector>
      <SelectorTrigger placeholder="Select Fruit..." />
      <SelectorContent checkEnd>
        <SelectorContentItem value="Apple">Apple</SelectorContentItem>
        <SelectorContentItem value="Orange">Orange</SelectorContentItem>
        <SelectorContentItem value="Bananas">Bananas</SelectorContentItem>
        <SelectorContentItem value="Pear">Pear</SelectorContentItem>
        <SelectorContentItem value="Blueberry">Blueberry</SelectorContentItem>
      </SelectorContent>
    </Selector>
  );
}
