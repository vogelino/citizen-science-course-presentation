import React from "react";
import { Appear, Box, FlexBox, Grid, Notes } from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";
import { Quote } from "../../components/quote";

export default function TheorieIntro() {
  return (
    <>
      <Interests />
      <Definition />
      <Wissensmodi />
      <Elfenbeinturm />
    </>
  );
}
function Interests() {
  return (
    <Slide>
      <Notes>Bevor wir in die Theorie gehen</Notes>
      <Heading fontSize="h1">Wie sieht's bei euch aus? 🧑‍🔬</Heading>
      <FlexBox
        flexDirection="column"
        height="70%"
        width="70%"
        alignItems="start"
      >
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Habt ihr euch schon mit dem Thema Citizen Science beschäftigt?
          </Heading>
        </Appear>
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Was interessiert euch am Thema?
          </Heading>
        </Appear>
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Was wünscht ihr euch vom Seminar?
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

function Definition() {
  return (
    <Slide>
      <Heading fontSize="h1">Eine kurze Geschichte der Wissenschaft</Heading>
      <FlexBox alignItems="center" height="80%">
        <Box>
          <Heading fontSize="h2" color="black">
            Definition Wissenschaft:
          </Heading>
          <Quote source="Duden">
            (Ein begründetes, geordnetes, für gesichert erachtetes) Wissen
            hervorbringende forschende Tätigkeit in einem bestimmten Bereich
          </Quote>
        </Box>
      </FlexBox>
    </Slide>
  );
}

function Wissensmodi() {
  return (
    <Slide>
      <Heading fontSize="h1">
        Wissensmodi nach Nowotny, <br />
        Scott, Gibbons 1994
      </Heading>
      <FlexBox alignItems="center" height="64%">
        <Grid gridTemplateColumns="repeat(2,1fr)" gridGap="2rem">
          <Heading fontSize="h2" color="black">
            <Text fontSize="inherit" fontWeight="bold" marginBottom=".5em">
              Wissensmodus 1:
            </Text>
            Akademisch, disziplinär, homogen, hierarchisch und konservativ
          </Heading>
          <Heading fontSize="h2" color="black">
            <Text fontSize="inherit" fontWeight="bold" marginBottom=".5em">
              Wissensmodus 2:
            </Text>
            Anwendungsorientiert, transdisziplinär, heterogen und
            antihierarchisch
          </Heading>
        </Grid>
      </FlexBox>
    </Slide>
  );
}

function Elfenbeinturm() {
  return (
    <Slide>
      <Heading fontSize="h1">Raus aus dem Elfenbeinturm:</Heading>
      <Heading fontSize="h2" color="black">
        Citizen Science und die Demokratisierung von Wissen
      </Heading>
      <FlexBox alignItems="center" height="70%">
        <Quote
          fontSize="28px"
          lineHeight="1.3em"
          source="Grünbuch Citizen Science Strategie 2020 für Deutschland, pdf, S. 13"
        >
          Citizen Science beschreibt die Beteiligung von Personen an
          wissenschaftlichen Prozessen, die nicht in diesem Wissenschaftsbereich
          institutionell gebunden sind. Dabei kann die Beteiligung in der
          kurzzeitigen Erhebung von Daten bis hin zu einem intensiven Einsatz
          von Freizeit bestehen, um sich gemeinsam mit Wissenschaftlerinnen bzw.
          Wissenschaftlern und/oder anderen Ehrenamtlichen in ein
          Forschungsthema zu vertiefen. Obwohl viele ehrenamtliche Forscherinnen
          und Forscher eine akademische Ausbildung aufweisen, ist dies keine
          Voraussetzung für die Teilnahme an Forschungsprojekten. Wichtig ist
          allerdings die Einhaltung wissenschaftlicher Standards, wozu vor allem
          Transparenz im Hinblick auf die Methodik der Datenerhebung und die
          öffentliche Diskussion der Ergebnisse gehören.
        </Quote>
      </FlexBox>
    </Slide>
  );
}
