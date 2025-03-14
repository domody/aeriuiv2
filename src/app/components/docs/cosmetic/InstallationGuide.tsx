import { CodeBlock } from "./CodeBlock";
import { ComponentSourceCode } from "./ComponentSourceCode";
import { Tabs, TabContent, TabList, Tab } from "../../ui";
interface InstallationGuideProps {
  component: string;
}
export async function InstallationGuide({ component }: InstallationGuideProps) {
  return (
    <Tabs defaultValue="CLI">
      <TabList>
        <Tab value="CLI">CLI</Tab>
        <Tab value="Manual">Manual</Tab>
      </TabList>
      <TabContent value="CLI">
        <CodeBlock
          language="bash"
          code={`npx aeriui@latest add ${component}`}
        />
      </TabContent>
      <TabContent value="Manual">
        <ComponentSourceCode component={component} />
      </TabContent>
    </Tabs>
  );
}
