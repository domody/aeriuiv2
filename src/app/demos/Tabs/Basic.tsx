import { Tabs, TabList, Tab, TabContent } from "aeriui/Tabs";
import { Card, CardHeader, CardContent, CardFooter } from "aeriui/Card";

export function TabsDemo() {
  return (
    <Tabs defaultValue="paris">
      <TabList>
        <Tab value="paris">Paris</Tab>
        <Tab value="kyoto">Kyoto</Tab>
        <Tab value="newyork">New York</Tab>
      </TabList>
      <TabContent value="paris">
        <Card>
          <CardHeader>Paris, France</CardHeader>
          <CardContent>
            <p>
              Known as the <strong>&#34;City of Light&#34;</strong>, Paris is famous for
              its iconic landmarks like the Eiffel Tower, the Louvre, and the
              charming streets of Montmartre. It&#39;s a city of art, history, and
              romance.
            </p>
            <p className="mt-2">
              Don’t miss: A sunset cruise on the Seine River, exploring hidden
              cafés in Le Marais, and indulging in fresh croissants at a local
              bakery.
            </p>
          </CardContent>
          <CardFooter>
            <span className="text-muted-foreground">
              Best visited: Spring & Fall
            </span>
          </CardFooter>
        </Card>
      </TabContent>
      <TabContent value="kyoto">
        <Card>
          <CardHeader>Kyoto, Japan</CardHeader>
          <CardContent>
            <p>
              Kyoto is Japan’s cultural heart, home to stunning temples,
              traditional tea houses, and breathtaking cherry blossoms in the
              spring.
            </p>
            <p className="mt-2">
              Don’t miss: Walking through the Fushimi Inari Shrine’s famous red
              torii gates, experiencing a tea ceremony, and visiting the golden
              Kinkaku-ji Temple.
            </p>
          </CardContent>
          <CardFooter>
            <span className="text-muted-foreground">
              Best visited: Spring (cherry blossoms) & Autumn (fall colors)
            </span>
          </CardFooter>
        </Card>
      </TabContent>
      <TabContent value="newyork">
        <Card>
          <CardHeader>New York City, USA</CardHeader>
          <CardContent>
            <p>
              The city that never sleeps! New York is a melting pot of cultures,
              offering world-class museums, Broadway shows, and legendary
              skyscrapers.
            </p>
            <p className="mt-2">
              Don’t miss: Taking in the skyline from the Empire State Building,
              walking across Brooklyn Bridge, and grabbing a slice of classic
              New York-style pizza.
            </p>
          </CardContent>
          <CardFooter>
            <span className="text-muted-foreground">
              Best visited: Year-round, but fall is magical
            </span>
          </CardFooter>
        </Card>
      </TabContent>
    </Tabs>
  );
}
