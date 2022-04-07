import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  Grid,
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
import coding from "../../assets/images/stock/coding.jpg";

export default function TheTechPart() {
  return (
    <>
      <Focus />
      <Interests />
      <Experiment />
      <ExperimentRules />
      <Homework />
      <InTheNextCourses />
      <Plan />
      <QANDA />
    </>
  );
}

function Focus() {
  return (
    <Slide>
      <SplitImage src={coding} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">
        Focus: 🌐
        <br /> Webprogrammierung
      </Heading>
      <FlexBox alignItems="center" justifyContent="start" height="70%">
        <UnorderedList>
          <Appear>
            <ListItem fontSize="40px">Mein Fachwissen</ListItem>
          </Appear>
          <Appear>
            <ListItem fontSize="40px">
              Relevantes Werkzeug,
              <br /> um mit Daten umzugehen
            </ListItem>
          </Appear>
          <Appear>
            <ListItem fontSize="40px">
              Ermöglicht eine umfassende
              <br /> Kommunikation
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>Warum coding?</li>
          <li>Mein Fachwissen</li>
          <li>Es geht um Daten</li>
          <li>Wir sind ID und Internet ist unser canvas</li>
        </ul>
      </Notes>
    </Slide>
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
        style={{ gap: "2em" }}
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
      </FlexBox>
    </Slide>
  );
}

function Plan() {
  return (
    <Slide>
      <Heading fontSize="h1">Kusprogramm</Heading>
      <FlexBox
        flexDirection="column"
        height="70%"
        width="100%"
        alignItems="start"
      >
        <Grid gridTemplateColumns="repeat(2, 1fr)" gridGap="4em">
          <Box>
            <Appear>
              <Heading fontSize="h2" color="black">
                Phase 1
              </Heading>
            </Appear>
            <UnorderedList>
              <Appear>
                <ListItem>Javascript Fundamentals</ListItem>
              </Appear>
              <Appear>
                <ListItem>SVG & Markup</ListItem>
              </Appear>
              <Appear>
                <ListItem>Daten Visualisierung mit D3</ListItem>
              </Appear>
              <Appear>
                <ListItem>Mit Daten arbeiten</ListItem>
              </Appear>
              <Appear>
                <ListItem>APIs Grundlagen</ListItem>
              </Appear>
            </UnorderedList>
          </Box>
          <Box>
            <Appear>
              <Heading fontSize="h2" color="black">
                Phase 2
              </Heading>
            </Appear>
            <UnorderedList>
              <Appear>
                <ListItem>Citizen Science + Stadtpuls</ListItem>
              </Appear>
              <Appear>
                <ListItem>CityLAB Workshop</ListItem>
              </Appear>
              <Appear>
                <ListItem>Ideenentwicklung + Support</ListItem>
              </Appear>
              <Appear>
                <ListItem>Zwischenpräsentationen / Feedback</ListItem>
              </Appear>
              <Appear>
                <ListItem>Finale Präsentation</ListItem>
              </Appear>
            </UnorderedList>
          </Box>
        </Grid>
      </FlexBox>
    </Slide>
  );
}

function QANDA() {
  return (
    <Slide>
      <FlexBox alignItems="center" height="80%">
        <Heading color="blue" fontSize="96px">
          Danke! <br />
          Noch Fragen / Anmerkungen?
        </Heading>
      </FlexBox>
    </Slide>
  );
}
