import React from "react";
import { Appear, Box, FlexBox, Image, Notes } from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, ListItem, Text } from "../../components/typography";
import superkuehen from "../../assets/images/examples/superkuehen.jpg";
import superkuehenMobile from "../../assets/images/examples/superkuehen-mobile.png";
import superkuehenWebsite from "../../assets/images/examples/superkuehen-website.png";
import stadtpuls from "../../assets/images/examples/stadtpuls.png";
import fukushima from "../../assets/images/examples/fukushima.jpg";
import stadtpulsStories from "../../assets/images/examples/stadtpuls-stories.png";
import stadtpulsWebsite from "../../assets/images/examples/stadtpuls-website.png";
import stadtpulsBg from "../../assets/images/examples/stadtpuls-bg.jpg";
import mindTheFunghi from "../../assets/images/examples/mind-the-funghi.jpg";
import muekenatlas from "../../assets/images/examples/muekenatlas.jpg";

export default function AboutCourse() {
  return (
    <>
      <TitleSlide />
      <Muekenatlas />
      <MindTheFunghi />
      <Fukushima />
      <Stadtpuls />
      <StadtpulsPart2 />
      <Superkuehen />
      <MoreExamples />
    </>
  );
}

function TitleSlide() {
  return (
    <Slide>
      <FlexBox alignItems="center" height="80%">
        <Heading color="blue" fontSize="96px">
          Beispiele
        </Heading>
      </FlexBox>
    </Slide>
  );
}

function Stadtpuls() {
  return (
    <Slide backgroundImage={`url("${stadtpulsBg}")`}>
      <Heading fontSize="h1" color="white">
        stadtpuls.com
      </Heading>
      <Box
        style={{ boxShadow: "0 2px 80px -40px rgba(0,0,0,1)" }}
        width="80%"
        marginTop="32px"
      >
        <Image src={stadtpuls} width="100%" />
      </Box>
      <Notes>
        <ul>
          <li>Gemeinsamer Datensammlung</li>
          <li>Teilnahme sowohl von der Hobbyisten als auch Experten</li>
          <li>Gibt noch nicht der Richtung für die Anwendung vor</li>
          <li>Dient als Tool für weiter Recherche</li>
        </ul>
      </Notes>
    </Slide>
  );
}

function StadtpulsPart2() {
  return (
    <Slide backgroundImage={`url("${stadtpulsBg}")`}>
      <Heading fontSize="h1" color="white">
        stories.stadtpuls.com
      </Heading>
      <Box
        style={{ boxShadow: "0 2px 80px -40px rgba(0,0,0,1)" }}
        width="80%"
        marginTop="32px"
      >
        <Image src={stadtpuls} width="100%" />
      </Box>
      <Box
        style={{ boxShadow: "0 2px 80px -40px rgba(0,0,0,1)" }}
        position="absolute"
        bottom="40px"
        right="80px"
        width="50%"
      >
        <Image src={stadtpulsWebsite} width="100%" />
      </Box>
      <Appear>
        <Box
          style={{ boxShadow: "0 2px 80px -40px rgba(0,0,0,1)" }}
          position="absolute"
          bottom="-200px"
          right="40px"
          width="40%"
        >
          <Image src={stadtpulsStories} width="100%" />
        </Box>
      </Appear>
      <Notes>
        <ul>
          <li>Raum für Kommunikation über die Anwendung der Daten</li>
        </ul>
      </Notes>
    </Slide>
  );
}

function MindTheFunghi() {
  return (
    <Slide backgroundImage={`url("${mindTheFunghi}")`}>
      <Heading fontSize="h1" color="white">
        Mind
        <br /> the
        <br /> Funghi
      </Heading>
      <Notes>
        <ul>
          <li>TU + Art LAB</li>
          <li>Material Workshop</li>
          <li>Kunstaustellung</li>
          <li>Residencies</li>
          <li>Experimente</li>
        </ul>
      </Notes>
    </Slide>
  );
}

function Fukushima() {
  return (
    <Slide backgroundImage={`url("${fukushima}")`}>
      <Heading fontSize="h1" color="blue">
        Fukushima
      </Heading>
      <Notes>
        <ul>
          <li>2011 Atomkatastrophe von Fukushima Daiichi</li>
          <li>
            Die Regierung verbreitete falsche Informationen über die
            Strahlungswerte, um die Gefahren abzuschwächen und die Auswirkungen
            auf die Wirtschaft zu begrenzen
          </li>
          <li>Citizen scientists measured nuclear radiation</li>
          <li>
            Safecast wurde von Sean Bonner, Pieter Franken und Joi Ito kurz
            gegründet.
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

function Muekenatlas() {
  return (
    <Slide backgroundImage={`url("${muekenatlas}")`}>
      <Heading fontSize="h1" color="blue">
        Mückenatlas
      </Heading>
      <Box position="absolute" top="160px" left="64px">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/q1-CXszQdt0?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Slide>
  );
}

function MoreExamples() {
  return (
    <Slide>
      <Heading fontSize="h1" color="blue">
        Mehr Beispiele
      </Heading>
      <FlexBox
        flexDirection="column"
        alignItems="start"
        height="70%"
        style={{ gap: "2rem" }}
      >
        <Heading fontSize="h2" color="black" fontFamily="'Space Mono'">
          https://bit.ly/citizen-science-examples
        </Heading>
        <Appear>
          <Heading fontSize="h2">
            Kennst du mehr Beispiele? Teile sie im Workspace mit!
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

function Superkuehen() {
  return (
    <Slide backgroundImage={`url("${superkuehen}")`}>
      <Heading fontSize="h1" color="blue">
        Superkühe
      </Heading>
      <Appear>
        <Box
          style={{
            boxShadow: "0 2px 80px -40px rgba(0,0,0,1)",
            borderRadius: `27%`,
          }}
          position="absolute"
          bottom="-100px"
          left="20%"
          width="20%"
        >
          <Image src={superkuehenMobile} width="100%" />
        </Box>
      </Appear>
      <Appear>
        <Box
          style={{
            boxShadow: "0 2px 80px -40px rgba(0,0,0,1)",
            borderRadius: `27%`,
          }}
          position="absolute"
          bottom="40px"
          left="45%"
          width="50%"
        >
          <Image src={superkuehenWebsite} width="100%" />
        </Box>
      </Appear>
      <Notes>
        <ul>
          <li>Edukatives Charakter</li>
          <li>Involviert die Stadtgesellschat in eine Debatte über Konsum</li>
          <li>Ermöglicht ein Raum für Untersuchung der Daten</li>
          <li>Hohes Entertainment Charakter, zum Beteiligung aber Begrenzt</li>
          <li>Rawdaten nicht zur Verfügung gestellt</li>
          <li>Daten nicht vergleichbar</li>
        </ul>
      </Notes>
    </Slide>
  );
}
