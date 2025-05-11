import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "aeriui/Accordion";

export function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTitle>What is your return policy?</AccordionTitle>
        <AccordionContent>
          We accept returns within 30 days of purchase if the item is unused, in
          its original packaging, and accompanied by a valid receipt. Refunds
          are issued to the original payment method within 5-7 business days
          after we receive the returned product.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTitle>How long does shipping take?</AccordionTitle>
        <AccordionContent>
          Standard shipping typically takes 5-7 business days, while expedited
          options are available for an additional fee. Orders placed before 2
          p.m. are usually processed the same business day and shipped out the
          following day.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
