import React from "react";
import {
  Appear,
  ListItem,
  Stepper,
  UnorderedList,
  Image,
  Box,
  FlexBox,
  Notes,
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
      <ProjectsCityLAB />
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
          <ListItem>
            Wirtschaftskommunikation (WK) B.A. HTW Berlin
            <br />
            und Gesellschafts- und WK M.A. UDK Berlin
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Tätigkeiten im Bereich (Wissens)transfer, in Kultur- <br />
            und Bildungseinrichtungen sowie im Innovationsbereich <br />
            u.a. bei: HU Berlin, UdK Berlin, Goethe Institut, <br />
            Bundeszentrale für politische Bildung
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Aktuell: Community Management & ÖA beim CityLAB Berlin
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Masterarbeit im Kontext der Forschungsgruppe Critical Makers
            <br /> an der UDK/Weizenbaum Institut
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Schwerpunkt M.A.: Potentiale der Citizen & Open Science / Open Lab
            Bewegung in Verbindung mit Nachhaltigkeit
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}

function AboutCityLAB() {
  return (
    <Slide breadcrumb="Einführung">
      <SplitImage src={cityLab} />
      <Heading fontSize="h1">Das CityLAB</Heading>
      <FlexBox width="45%">
        <UnorderedList>
          <Appear>
            <ListItem>Berlins öffentliches Innovationslabor</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Digitale Transformation, Stadtentwicklung und Partizipation
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>MIT den Bürger:innen entwickelt</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Stadtgesellschaft + Wissenschaft = Citizen Science
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>CityLAB als Berlins öffentliches Innovationslabor/Stadtlabor</li>
          <li>
            Themenschwerpunkte des CityLAB: Digitale Transformation,
            Stadtentwicklung und Partizipation
          </li>
          <li>
            Aufbau des CityLAB: Das CityLAB als ein offener Ort, an dem
            Stadtgesellschaft und Verwaltung zusammen kommen kann um gemeinsam
            an Ideen und Projekten für das Berlin der Zukunft zu arbeiten,
            Projekte werden nicht FÜR die Bürger:innen sondern MIT den
            Bürger:innen entwickelt
          </li>
          <li>
            Stadtgesellschaft/Bürger:innen → Citizens → Übergang zu Citizen
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

function ProjectsCityLAB() {
  return (
    <Slide breadcrumb="Einführung">
      <SplitImage src={cityLab} />
      <Heading fontSize="h1">Das CityLAB</Heading>
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
      <Notes>
        <b>Science Beispiel Projekte:</b>
        <ul>
          <li>Stadtbäume und deren Wasserbedarf</li>
          <li>Kühle & Winde Bereiche in der Stadt</li>
          <li>Platform für das Teilen von Sensordaten</li>
        </ul>
      </Notes>
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
      <Heading fontSize="h1">Nicht das einzige Innovationslabor</Heading>
      <FlexBox
        alignItems="start"
        position="relative"
        height="80%"
        width="66%"
        flexDirection="column"
      >
        <Image
          src={allLabsLogos}
          width="100%"
          height="auto"
          style={{ mixBlendMode: "multiply" }}
        />
        <Heading fontSize="h3" color="black" fontFamily="'Space Mono'">
          https://bit.ly/other-labs
        </Heading>
      </FlexBox>
      <Notes>
        <b>Es gibt Stadtlaboren überall:</b>
        <ul>
          <li>Unterschiedliche Finanzierungen</li>
          <li>Unterschiedliche Ziele</li>
          <li>Unterschiedliche Kompetenzen</li>
        </ul>
      </Notes>
    </Slide>
  );
}
