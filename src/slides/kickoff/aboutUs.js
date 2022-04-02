import React from "react";
import {
  Appear,
  ListItem,
  Stepper,
  UnorderedList,
  Image,
  Box,
  FlexBox,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading } from "../../components/typography";
import freshMap from "../../assets/images/erfrischungskarte.png";
import treeMap from "../../assets/images/giessdenkiez.png";
import cityLab from "../../assets/images/citylab.jpg";
import stadtpuls from "../../assets/images/stadtpuls.png";
import allLabsLogos from "../../assets/images/all-logos.png";
import cityLabsBg from "../../assets/images/stock/city-labs.png";
import me from "../../assets/images/me.png";
import ines from "../../assets/images/ines.jpg";
import { FloatingImage } from "../../components/floatingImage";
import { SplitImage } from "../../components/splitImage";
import FloatingScreenshot from "../../components/floatingScreenshot";

export default function AboutUs() {
  return (
    <>
      <AboutLucas />
      <AboutInes />
      <AboutCityLAB />
      <AboutLabs />
    </>
  );
}

function AboutLucas() {
  return (
    <Slide breadcrumb="Einführung">
      <FloatingImage src={me} />
      <Heading fontSize="h1">Kurz über mich</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Lucas Vogel 👋</ListItem>
        </Appear>
        <Appear>
          <ListItem>Aus 🇨🇭 und 🇨🇱</ListItem>
        </Appear>
        <Appear>
          <ListItem>Interface Design B.A. @FHP (2014 - 2019)</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            In versch. Softwareunternehmen gearbeitet
            <UnorderedList>
              <Appear>
                <ListItem>
                  <b>Ubermetrics</b>: Media Intelligence KI Software
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <b>Nexenio</b>: Hochsichere Dropbox Alternative
                </ListItem>
              </Appear>
            </UnorderedList>
          </ListItem>
        </Appear>
        <Stepper
          alwaysVisible
          values={[
            "Aktuell Frontend Entwickler @CityLAB",
            <>
              Aktuell{" "}
              <span style={{ textDecoration: "line-through" }}>
                Frontend Entwickler
              </span>{" "}
              <b>Creative Technologist 😎</b> @CityLAB
            </>,
            <>
              Aktuell{" "}
              <span style={{ textDecoration: "line-through" }}>
                Frontend Entwickler
              </span>{" "}
              <b>Creative Technologist 😎</b> @CityLAB
              <UnorderedList>
                <ListItem>
                  Entwicklung von Prototypen für die Stadtgesellschaft
                </ListItem>
              </UnorderedList>
            </>,
          ]}
        >
          {(value, step, isActive) => isActive && <ListItem>{value}</ListItem>}
        </Stepper>
      </UnorderedList>
    </Slide>
  );
}

function AboutInes() {
  return (
    <Slide breadcrumb="Einführung">
      <FloatingImage src={ines} />
      <Heading fontSize="h1">Kurz über Ines</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Ines Weigand 👋</ListItem>
        </Appear>
        <Appear>
          <ListItem>Dies</ListItem>
        </Appear>
        <Appear>
          <ListItem>Das</ListItem>
        </Appear>
        <Appear>
          <ListItem>Jenes</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}

function AboutCityLAB() {
  return (
    <Slide breadcrumb="Einführung">
      <SplitImage src={cityLab} />
      <Heading fontSize="h1">Im CityLAB</Heading>
      <Appear>
        <FloatingScreenshot
          boxProps={{
            style: { top: "160px", left: "40px", transform: "rotate(-3deg)" },
          }}
          headingProps={{ backgroundColor: "green", color: "blue" }}
          title="Gieß Den Kiez"
          src={treeMap}
        />
      </Appear>
      <Appear>
        <FloatingScreenshot
          boxProps={{
            style: { top: "250px", left: "120px" },
          }}
          title="Erfrischungskarte"
          src={freshMap}
        />
      </Appear>
      <Appear>
        <FloatingScreenshot
          boxProps={{
            style: { top: "340px", left: "240px", transform: "rotate(-4deg)" },
          }}
          headingProps={{ backgroundColor: "purple" }}
          title="Stadtpuls"
          src={stadtpuls}
        />
      </Appear>
    </Slide>
  );
}

export function AboutLabs() {
  return (
    <Slide breadcrumb="Einführung">
      <SplitImage
        src={cityLabsBg}
        boxProps={{ width: "40%", right: "-80px" }}
        imageProps={{
          style: {
            mixBlendMode: "multiply",
            opacity: 0.2,
          },
        }}
      />
      <Heading fontSize="h1">Über Stadtlaboren</Heading>
      <FlexBox
        position="relative"
        height="90%"
        width="66%"
        flexDirection="column"
      >
        <Image
          src={allLabsLogos}
          width="100%"
          height="auto"
          style={{ mixBlendMode: "multiply" }}
        />
      </FlexBox>
    </Slide>
  );
}
