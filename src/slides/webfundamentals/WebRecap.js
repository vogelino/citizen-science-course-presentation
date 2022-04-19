import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  Grid,
  Image,
  ListItem,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";
import webRequest001 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-001.svg";
import webRequest002 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-002.svg";
import webRequest003 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-003.svg";
import webRequest004 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-004.svg";
import webRequest005 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-005.svg";
import webRequest006 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-006.svg";
import webRequest007 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-007.svg";
import webRequest008 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-008.svg";
import webRequest009 from "../../assets/images/02-web-fundamentals/graphics/BasicHtmlRequest-009.svg";
import staticWebsite001 from "../../assets/images/02-web-fundamentals/graphics/ApacheNginx-001.svg";
import staticWebsite002 from "../../assets/images/02-web-fundamentals/graphics/ApacheNginx-002.svg";
import staticWebsite003 from "../../assets/images/02-web-fundamentals/graphics/ApacheNginx-003.svg";
import dynamicWebsite001 from "../../assets/images/02-web-fundamentals/graphics/PHP-001.svg";
import dynamicWebsite002 from "../../assets/images/02-web-fundamentals/graphics/PHP-002.svg";
import dynamicWebsite003 from "../../assets/images/02-web-fundamentals/graphics/PHP-003.svg";
import dynamicWebsite004 from "../../assets/images/02-web-fundamentals/graphics/PHP-004.svg";
import dynamicWebsite005 from "../../assets/images/02-web-fundamentals/graphics/PHP-005.svg";
import spa001 from "../../assets/images/02-web-fundamentals/graphics/SPA-001.svg";
import spa002 from "../../assets/images/02-web-fundamentals/graphics/SPA-002.svg";
import spa003 from "../../assets/images/02-web-fundamentals/graphics/SPA-003.svg";
import spa004 from "../../assets/images/02-web-fundamentals/graphics/SPA-004.svg";
import spa005 from "../../assets/images/02-web-fundamentals/graphics/SPA-005.svg";
import spa006 from "../../assets/images/02-web-fundamentals/graphics/SPA-006.svg";
import spa007 from "../../assets/images/02-web-fundamentals/graphics/SPA-007.svg";
import spa008 from "../../assets/images/02-web-fundamentals/graphics/SPA-008.svg";

export default () => (
  <>
    <WebRecapIntro />
    <WebStatic001 />
    <WebDynamic001 />
    <SPA />
    <Recap />
  </>
);

function WebRecapIntro() {
  return (
    <Slide>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest001} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest002} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest003} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest004} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest005} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest006} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest007} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest008} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={webRequest009} />
        </Box>
      </Appear>
      <Heading fontSize="h1">Web Recap</Heading>
    </Slide>
  );
}

function WebStatic001() {
  return (
    <Slide>
      <Heading fontSize="h1">
        <b>Statisch</b> vs. Dynamisch
      </Heading>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={staticWebsite001} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={staticWebsite002} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={staticWebsite003} />
        </Box>
      </Appear>
    </Slide>
  );
}

function WebDynamic001() {
  return (
    <Slide>
      <Heading fontSize="h1">
        Statisch vs. <b>Dynamisch</b>
      </Heading>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -30%) scale(1.5)` }}
        >
          <Image src={dynamicWebsite001} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -30%) scale(1.5)` }}
        >
          <Image src={dynamicWebsite003} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -30%) scale(1.5)` }}
        >
          <Image src={dynamicWebsite004} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -30%) scale(1.5)` }}
        >
          <Image src={dynamicWebsite005} />
        </Box>
      </Appear>
    </Slide>
  );
}

function SPA() {
  return (
    <Slide>
      <Heading fontSize="h1">Single Page Application (SPA)</Heading>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={spa001} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={spa002} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={spa003} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={spa004} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={spa005} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={spa006} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={spa007} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(1.5)` }}
        >
          <Image src={spa008} />
        </Box>
      </Appear>
    </Slide>
  );
}

function Recap() {
  return (
    <Slide>
      <Heading fontSize="h1">Zusammenfassung</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="8em"
        style={{ paddingTop: "4em" }}
      >
        <Box>
          <Heading fontSize="h2">Statische Seiten</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>Immer gleich.</ListItem>
              <ListItem>So wie sie sind (unverändert)</ListItem>
              <ListItem>Sehr schnell und leicht gecached</ListItem>
            </Appear>
          </UnorderedList>
        </Box>
        <Box>
          <Heading fontSize="h2">Dynamische Seiten</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>
                <em>On the fly</em> hergestellt
              </ListItem>
              <ListItem>
                Kombination von versch. Dateien und externe Daten
              </ListItem>
              <ListItem>Auf externe Faktoren zugeschnitten</ListItem>
            </Appear>
          </UnorderedList>
        </Box>
      </Grid>
    </Slide>
  );
}
