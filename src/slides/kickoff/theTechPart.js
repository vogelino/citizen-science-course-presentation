import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  ListItem,
  Notes,
  OrderedList,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { SplitImage } from "../../components/splitImage";
import { Heading, Text } from "../../components/typography";
import experiment from "../../assets/images/stock/experiment.jpg";
import homework from "../../assets/images/stock/homework.jpg";

export default function TheTechPart() {
  return (
    <>
      <Interests />
      <Experiment />
      <ExperimentRules />
      <Homework />
      <InTheNextCourses />
    </>
  );
}

function Interests() {
  return (
    <Slide>
      <Notes>Bevor wir ins Praktisches gehen</Notes>
      <Heading fontSize="h1">Wie nerdy seid ihr? 🤓</Heading>
      <FlexBox
        flexDirection="column"
        height="70%"
        width="90%"
        alignItems="start"
      >
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Wieviel Programmierungserfahrung habt ihr?
          </Heading>
        </Appear>
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Habr ihr Webseiten oder Datenvisualisierung schon programmiert?
          </Heading>
        </Appear>
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Was würdet ihr gerne lernen?
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

function Experiment() {
  return (
    <Slide>
      <Notes>Jeder von uns trägt mehrer Sensoren auf sich</Notes>
      <SplitImage src={experiment} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">Experiment 🧪 </Heading>
      <Box width="56%">
        <UnorderedList>
          <Appear>
            <ListItem>Jeder von uns trägt mehrere Sensoren bei sich</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Welcher dieser Sensoren erlaubt es uns, Aussagen über unsere
              Umwelt zu machen?
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Können es andere auch reproduzieren?</ListItem>
          </Appear>
        </UnorderedList>
      </Box>
    </Slide>
  );
}

function ExperimentRules() {
  return (
    <Slide>
      <Notes>Jeder von uns trägt mehrer Sensoren auf sich</Notes>
      <SplitImage src={experiment} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">Experiment 🧪 </Heading>
      <Box width="56%">
        <UnorderedList>
          <Appear>
            <ListItem>Die App PhyPhox herunterladen</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Einsehen, welche Sensoren ihr auf eurem Gerät habt
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Sich für einen Sensor entscheiden</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Eine Hypothese defninieren, die ihr mit diesem Sensor testen wollt
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Daten erheben und testen, ob die Hypothese bestätigt werden kann
            </ListItem>
          </Appear>
        </UnorderedList>
      </Box>
    </Slide>
  );
}

function Homework() {
  return (
    <Slide>
      <Notes>Für nächstes mal</Notes>
      <SplitImage src={homework} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1" color="blue">
        Hausaufgaben
      </Heading>
      <Box width="56%">
        <OrderedList>
          <Appear>
            <ListItem>
              Führt ein neues Experiment durch, auch mit mehreren Sensoren, das
              ihr jemand anderem reproduzieren lässt
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Sucht euch ein cooles Citizen Science Projekt aus, das ihr beim
              nächsten Mal in 5 bis 10 Minuten vorstellt
              <br />
              <br />
              <Text color="gray">
                (Bitte im Worspace kurz ankündigen, um Doppelungen zu vermeiden)
              </Text>
            </ListItem>
          </Appear>
        </OrderedList>
      </Box>
    </Slide>
  );
}

function InTheNextCourses() {
  return (
    <Slide>
      <Notes>In den nächsten Wochen</Notes>
      <Heading fontSize="h1" color="blue">
        In den nächsten Wochen
      </Heading>
      <FlexBox
        flexDirection="column"
        height="70%"
        width="90%"
        alignItems="start"
      >
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Austausch über Coole Citizen Science Projekte
          </Heading>
        </Appear>
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Fokus: Webentwicklung und Datenvisualisierung
          </Heading>
        </Appear>
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Bin gespannt!
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
  );
}
