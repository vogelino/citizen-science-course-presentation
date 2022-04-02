import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  ListItem,
  Quote,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";
import goalsOfCitizenScience from "../../assets/images/stock/goals-of-citizen-science.jpg";
import conductExperiments from "../../assets/images/stock/conduct-experiments.jpg";
import communicateResults from "../../assets/images/stock/communicate-results.jpg";
import { EdgeImage } from "../../components/edgeImage";
import { SplitImage } from "../../components/splitImage";

export default function AboutCourse() {
  return (
    <>
      <Definition />
      <AboutCourseWhy />
      <AboutCourseHow />
      <AboutCourseThen />
    </>
  );
}

function Definition() {
  return (
    <Slide>
      <Heading fontSize="h1">Citizen Science</Heading>
      <FlexBox flexDirection="column" height="60%">
        <Heading fontSize="h2" color="black" lineHeight="h2" padding="0 10%">
          Die Teilnahme von nicht-Wissenschaftler und Amateure in Forschung und
          andere wissenschaftliche Tätigkeiten
        </Heading>
      </FlexBox>
    </Slide>
  );
}

function AboutCourseWhy() {
  return (
    <Slide>
      <SplitImage src={goalsOfCitizenScience} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">Ziele</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Ein bestimmtes Umfeld oder Phänomen <br /> besser zu verstehen
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Aufmerkamkeit auf ein Problem zu richten</ListItem>
        </Appear>
        <Appear>
          <ListItem>Die Politik auf Aktion anzuregen</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}

function AboutCourseHow() {
  return (
    <Slide>
      <SplitImage src={conductExperiments} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">Konkret heisst es?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Daten aufnehmen</ListItem>
        </Appear>
        <Appear>
          <ListItem>Existierende Daten analysieren</ListItem>
        </Appear>
        <Appear>
          <ListItem>Das Umfeld beobachten</ListItem>
        </Appear>
        <Appear>
          <ListItem>Experimente Durchführen</ListItem>
        </Appear>
        <Appear>
          <ListItem>Theorien erproben</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}

function AboutCourseThen() {
  return (
    <Slide>
      <SplitImage src={communicateResults} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">Um Schließlich...</Heading>
      <Box width="60%">
        <UnorderedList>
          <Appear>
            <ListItem>
              Die Ergebnisse zu kommunizieren
              <br />
              und das erworbene Wissen zu teilen
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Die Daten und andere Materialien die
              <br />
              Allgemeinheit zur Verfügung zu stellen
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Ein Raum für Diskussion und Debatte <br />
              zu schaffen und die Fortsetzung der Recherche zu ermöglichen
            </ListItem>
          </Appear>
        </UnorderedList>
      </Box>
    </Slide>
  );
}
