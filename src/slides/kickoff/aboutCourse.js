import React from "react";
import {
  Appear,
  Box,
  Image,
  ListItem,
  Stepper,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading } from "../../components/typography";
import goalsOfCitizenScience from "../../assets/images/stock/goals-of-citizen-science.jpg";
import conductExperiments from "../../assets/images/stock/conduct-experiments.jpg";
import communicateResults from "../../assets/images/stock/communicate-results.jpg";

export default function AboutCourse() {
  return (
    <>
      <AboutCourseWhy />
      <AboutCourseHow />
      <AboutCourseThen />
    </>
  );
}

function EdgeImage({ src, width = "auto", height = "100%" }) {
  return (
    <Box
      position="absolute"
      top="0px"
      right="0px"
      width="550px"
      height="550px"
      overflow="hidden"
      borderBottomLeftRadius="90%"
    >
      <Box
        width="100%"
        height="100%"
        backgroundColor="blue"
        position="absolute"
        right="0px"
        top="0px"
        opacity="0.5"
        style={{ mixBlendMode: "lighten" }}
      />
      <Image
        src={src}
        width="550"
        height="550"
        style={{ objectFit: "cover" }}
        objectFit="cover"
      />
    </Box>
  );
}

function CitizenScience() {
  return (
    <ListItem>
      <b>Citizen Science:</b> <br />
      Involvierung von nicht-Wissenschaftler
      <br /> in wissenschaftliche Tätigkeiten
    </ListItem>
  );
}

function AboutCourseWhy() {
  return (
    <Slide breadcrumb="Introduction">
      <EdgeImage src={goalsOfCitizenScience} />
      <Heading fontSize="h1">Worum geht es?</Heading>
      <UnorderedList>
        <Appear>
          <CitizenScience />
        </Appear>
        <Appear>
          <ListItem>
            <b>Ziele sind</b>
          </ListItem>
        </Appear>
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
      </UnorderedList>
    </Slide>
  );
}

function AboutCourseHow() {
  return (
    <Slide breadcrumb="Introduction">
      <EdgeImage src={conductExperiments} />
      <Heading fontSize="h1">Worum geht es?</Heading>
      <UnorderedList>
        <CitizenScience />
        <ListItem>
          <b>Konkret heisst es</b>
        </ListItem>
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
      </UnorderedList>
    </Slide>
  );
}

function AboutCourseThen() {
  return (
    <Slide breadcrumb="Introduction">
      <EdgeImage src={communicateResults} />
      <Heading fontSize="h1">Worum geht es?</Heading>
      <UnorderedList>
        <CitizenScience />
        <ListItem>
          <b>Um schließlich...</b>
        </ListItem>
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
              Ein Raum für Diskussion und Debatte zu schaffen
              <br />
              und die Fortsetzung der Recherche zu ermöglichen
            </ListItem>
          </Appear>
        </UnorderedList>
      </UnorderedList>
    </Slide>
  );
}
