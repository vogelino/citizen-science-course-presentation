import React from "react";
import {
  Appear,
  Box,
  ListItem,
  Stepper,
  UnorderedList,
  Image,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";
import freshMap from "../../assets/images/erfrischungskarte.png";
import treeMap from "../../assets/images/giessdenkiez.png";
import cityLab from "../../assets/images/citylab.jpg";
import stadtpuls from "../../assets/images/stadtpuls.png";

export default function AboutMe() {
  return (
    <>
      <AboutLucas />
      <AboutCityLAB />
    </>
  );
}

function FloatingImage({ src }) {
  return (
    <Box
      position="absolute"
      top="180px"
      right="120px"
      width="300px"
      height="300px"
      borderRadius="50%"
      overflow="hidden"
    >
      <Image
        src={src}
        style={{ objectFit: "cover" }}
        width="300px"
        height="300px"
      />
    </Box>
  );
}

function AboutLucas() {
  return (
    <Slide breadcrumb="Introduction">
      <FloatingImage src="https://avatars.githubusercontent.com/u/2759340?v=4" />
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

function AboutCityLAB() {
  return (
    <Slide breadcrumb="Introduction">
      <Box
        position="absolute"
        right="0px"
        top="0px"
        width="50%"
        height="100%"
        opacity="0.8"
      >
        <Box
          width="100%"
          height="100%"
          position="absolute"
          backgroundColor="blue"
          style={{ mixBlendMode: "lighten", opacity: "0.5" }}
        />
        <Image
          src={cityLab}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Heading fontSize="h1">Im CityLAB</Heading>
      <Appear>
        <Box
          width="500px"
          position="absolute"
          top="200px"
          left="100px"
          style={{
            transform: "rotate(-3deg)",
          }}
        >
          <Heading
            fontSize="h3"
            zIndex="10"
            backgroundColor="green"
            color="blue"
            padding="4px 8px"
          >
            Gieß Den Kiez
          </Heading>
          <Image
            src={treeMap}
            width="100%"
            style={{
              marginTop: "-16px",
              boxShadow: "0px 4px 20px -3px rgba(0,0,0,.2)",
            }}
          />
        </Box>
      </Appear>
      <Appear>
        <Box
          width="500px"
          position="absolute"
          top="280px"
          left="200px"
          style={{
            transform: "rotate(2deg)",
          }}
        >
          <Heading
            fontSize="h3"
            zIndex="10"
            backgroundColor="blue"
            color="white"
            padding="4px 8px"
          >
            Erfrischungskarte
          </Heading>
          <Image
            src={freshMap}
            width="100%"
            style={{
              marginTop: "-16px",
              boxShadow: "0px 4px 20px -3px rgba(0,0,0,.2)",
            }}
          />
        </Box>
      </Appear>
      <Appear>
        <Box
          width="500px"
          position="absolute"
          top="360px"
          left="300px"
          style={{
            transform: "rotate(-4deg)",
          }}
        >
          <Heading
            fontSize="h3"
            zIndex="10"
            backgroundColor="purple"
            color="white"
            padding="4px 8px"
          >
            Stadtpuls
          </Heading>
          <Image
            src={stadtpuls}
            width="100%"
            style={{
              marginTop: "-16px",
              boxShadow: "0px 4px 20px -3px rgba(0,0,0,.2)",
            }}
          />
        </Box>
      </Appear>
    </Slide>
  );
}
