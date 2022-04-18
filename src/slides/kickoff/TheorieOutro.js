import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  Grid,
  Notes,
  OrderedList,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { SplitImage } from "../../components/splitImage";
import { Heading, ListItem, Text } from "../../components/typography";
import grenzen from "../../assets/images/01-course-kickoff/stock/complexity.jpg";
import openness from "../../assets/images/01-course-kickoff/stock/openness.jpg";
import interfaceD from "../../assets/images/01-course-kickoff/stock/interface.jpg";

export default function TheorieOutro() {
  return (
    <>
      <OpenEverything />
      <Principles />
      <Limits />
      <Relevance />
    </>
  );
}

function OpenEverything() {
  return (
    <Slide backgroundImage={`url("${openness}")`}>
      <FlexBox alignItems="center" height="90%">
        <Heading color="gray" fontSize="96px" textAlign="left" width="30%">
          {`Open `}
          <Text color="white" fontSize="inherit" style={{ display: "inline" }}>
            Science
          </Text>
          {", "}
          <br />
          {`Open `}
          <Text color="white" fontSize="inherit" style={{ display: "inline" }}>
            Source
          </Text>
          {", "}
          <br />
          {`Open `}
          <Text color="white" fontSize="inherit" style={{ display: "inline" }}>
            Access
          </Text>
          {", "}
          <br />
          {`Open `}
          <Text color="white" fontSize="inherit" style={{ display: "inline" }}>
            Knowledge
          </Text>
          ?
        </Heading>
      </FlexBox>
    </Slide>
  );
}

function Principles() {
  return (
    <Slide>
      <Heading fontSize="h1" color="blue">
        10 Prinzipien von Citizen Science
      </Heading>
      <FlexBox alignItems="center" height="70%">
        <Grid gridTemplateColumns="repeat(2,1fr)">
          <OrderedList>
            <Appear>
              <ListItem>Bürgerbeteiligung</ListItem>
            </Appear>
            <Appear>
              <ListItem>Echte Ergebnisse</ListItem>
            </Appear>
            <Appear>
              <ListItem>Alle profitieren</ListItem>
            </Appear>
            <Appear>
              <ListItem>Beteiligung in beliebige Phasen</ListItem>
            </Appear>
            <Appear>
              <ListItem>Projekt Feed-Back</ListItem>
            </Appear>
          </OrderedList>
          <OrderedList start="6">
            <Appear>
              <ListItem>Limitationen und Vorannahmen</ListItem>
            </Appear>
            <Appear>
              <ListItem>Publikation in open-access Format</ListItem>
            </Appear>
            <Appear>
              <ListItem>Wertschätzung</ListItem>
            </Appear>
            <Appear>
              <ListItem>Evaluation und Qualitätssicherung</ListItem>
            </Appear>
            <Appear>
              <ListItem>Kontrolle von Verantwortlichen</ListItem>
            </Appear>
          </OrderedList>
        </Grid>
      </FlexBox>
      <Box
        position="absolute"
        bottom="72px"
        left="72px"
        width="100%"
        textAlign="center"
      >
        <Text color="gray" fontSize="20px" lineHeight="1.2em">
          ECSA (European Citizen Science Association). 2015.
          <br />
          Ten Principles of Citizen Science. Berlin.
          http://doi.org/10.17605/OSF.IO/XPR2N
        </Text>
      </Box>
      <Notes>
        <ol>
          <li>
            <Text color="green" margin="0px">
              Bürgerbeteiligung
            </Text>
            Citizen Science Projekte binden Bürgerinnen und Bürger aktiv in
            wissenschaftliche Unternehmungen ein, die zu neuem Wissen und
            Verstehen führen
          </li>
          <li>
            <Text color="green" margin="0px">
              Echte Ergebnisse
            </Text>
            Citizen Science Projekte führen zu echten wissenschaftlichen
            Ergebnissen
          </li>
          <li>
            <Text color="green" margin="0px">
              Alle profitieren
            </Text>
            Alle Teilnehmenden profitieren von der Teilnahme, sowohl die
            institutionell beschäftigten Wissenschaftlerinnen und
            Wissenschaftler als auch die ehrenamtlich Beteiligten
          </li>
          <li>
            <Text color="green" margin="0px">
              Beteiligung in beliebige Phasen
            </Text>
            Wenn sie möchten, können die Bürgerwissenschaftlerinnen und
            -wissenschaftler sich an verschiedenen Phasen im wissenschaftlichen
            Prozess beteiligen.
          </li>
          <li>
            <Text color="green" margin="0px">
              Projekt Feed-Back
            </Text>
            Bürgerwissenschaftlerinnen und -wissenschaftler erhalten eine
            Rückmeldung (Feed-back) vom Projekt.{" "}
          </li>
          <li>
            <Text color="green" margin="0px">
              Limitationen und Vorannahmen
            </Text>
            Citizen Science ist ein Forschungsansatz, der wie andere auch
            Limitationen und Vorannahmen hat, die berücksichtigt und
            kontrolliert werden müssen
          </li>
          <li>
            <Text color="green" margin="0px">
              Publikation in open-access Format
            </Text>
            Die Daten und Metadaten aus Citizen Science Projekten werden
            öffentlich zugänglich gemacht und die Ergebnisse soweit möglich in
            einem open-access Format publiziert
          </li>
          <li>
            <Text color="green" margin="0px">
              Wertschätzung
            </Text>
            Bürgerwissenschaftlerinnen und -wissenschaftlern wird Dank und
            Wertschätzung in den Projektergebnissen und -publikationen
            ausgesprochen.{" "}
          </li>
          <li>
            <Text color="green" margin="0px">
              Evaluation und Qualitätssicherung
            </Text>
            Die Evaluierung von Citizen Science Programmen erfolgt auf Grundlage
            der wissenschaftlichen Ergebnisse, der Qualität der Daten, des
            Mehrwerts für die Beteiligten sowie der breiteren gesellschaftlichen
            Wirkung.
          </li>
          <li>
            <Text color="green" margin="0px">
              Kontrolle von Verantwortlichen
            </Text>
            Die Projektverantwortlichen berücksichtigen bei sämtlichen
            Aktivitäten legale und ethische Aspekte, die Urheberrechte, Rechte
            des geistigen Eigentums, Datenprotokolle, Vertraulichkeit,
            Verantwortlichkeiten oder Auswirkungen auf die Umwelt betreffen.{" "}
          </li>
        </ol>
      </Notes>
    </Slide>
  );
}

function Limits() {
  return (
    <Slide>
      <SplitImage src={grenzen} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1" color="blue">
        Die Grenzen von CS
      </Heading>
      <FlexBox alignItems="center" justifyContent="start" height="80%">
        <UnorderedList>
          <Appear>
            <ListItem fontSize="40px">
              Komplexität
              <br /> des Forschungsprozesses
            </ListItem>
          </Appear>
          <Appear>
            <ListItem fontSize="40px">Verzerrung von Daten</ListItem>
          </Appear>
          <Appear>
            <ListItem fontSize="40px">Rechtliche Grenzen</ListItem>
          </Appear>
          <Appear>
            <ListItem fontSize="40px">
              <b>Falscher Ansatz:</b>
              <br /> CS ist keine billige Arbeitskraft
            </ListItem>
          </Appear>
          <Appear>
            <ListItem fontSize="40px">
              <b>Tradeoff:</b>
              <br /> Verantwortung und Inkusion
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}

function Relevance() {
  return (
    <Slide>
      <SplitImage src={interfaceD} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1" color="blue">
        Citizen Science
        <br />
        und Interface Design
      </Heading>
      <FlexBox alignItems="center" justifyContent="start" height="70%">
        <UnorderedList>
          <Appear>
            <ListItem fontSize="40px">
              Datenerhebung, Auswertung <br /> und Darstellung
            </ListItem>
          </Appear>
          <Appear>
            <ListItem fontSize="40px">
              UX aka SX{" "}
              <Text
                fontSize="inherit"
                color="gray"
                style={{ display: "inline" }}
              >
                (Scientist Experience)
              </Text>
            </ListItem>
          </Appear>
          <UnorderedList>
            <Appear>
              <ListItem fontSize="40px">
                Wissenschaftskommunikation <br />
                <Text fontSize="inherit" color="gray">
                  (Presentation der Ergebnissen)
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem fontSize="40px">
                Wissenschaft-Werkzeuge <br />
                <Text fontSize="inherit" color="gray">
                  (Vereinfachung des Prozesses)
                </Text>
              </ListItem>
            </Appear>
          </UnorderedList>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
