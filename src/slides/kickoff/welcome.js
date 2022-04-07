import React from "react";
import { Box, ListItem, Image, UnorderedList } from "spectacle";
import { Slide } from "../../components/slide";
import { Heading } from "../../components/typography";
import makePlan from "../../assets/images/stock/make-a-plan.jpg";

export default function Welcome() {
  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="40%" height="100%">
        <Box
          width="100%"
          height="100%"
          position="absolute"
          backgroundColor="blue"
          style={{ mixBlendMode: "lighten" }}
          opacity="0.5"
        />
        <Image
          src={makePlan}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Heading fontSize="h1">Willkommen!</Heading>
      <UnorderedList>
        <ListItem>
          21EId-F <br /> Interfacedesign als Designforschung
        </ListItem>
        <ListItem>10 ECTS (ca 20 Std. / Woche inkl. Kurs)</ListItem>
        <ListItem>Freitag, 10:00 – 14:00</ListItem>
        <ListItem>Freitag, 15. April Keine Vorlesung (Karfreitag)</ListItem>
        <ListItem>Freitag, 13. Mai Remote Vorlesung</ListItem>
        <ListItem>Raum 302</ListItem>
        <ListItem>Max 16 Teilnehmer</ListItem>
      </UnorderedList>
    </Slide>
  );
}
