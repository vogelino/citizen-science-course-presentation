import React, { useRef, useEffect } from "react";
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
import jsLogo from "../../assets/images/02-web-fundamentals/misc/js-logo.svg";
import sdk from "@stackblitz/sdk";

export default () => (
  <>
    <JSIntro />
    <JSUsage />
    <JsExample />
  </>
);

function JSIntro() {
  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="50%" height="100%">
        <FlexBox
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={jsLogo} width="300" />
        </FlexBox>
      </Box>
      <Heading fontSize="h1">⚙️ JavaScript</Heading>
      <Grid width="90%" height="70%" gridTemplateColumns="3fr 2fr">
        <FlexBox
          alignItems="center"
          justifyContent="start"
          alignContent="center"
          justifyItems="center"
        >
          <UnorderedList>
            <Appear>
              <ListItem>Entwickelt für den Browser</ListItem>
            </Appear>
            <Appear>
              <ListItem>Nichts mit Java zu tun</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <em>Multi-Paradigmatische</em> Sprache
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <em>Live</em> interpretiert
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Die populärste Sprache der Welt</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </Grid>
    </Slide>
  );
}

function JSUsage() {
  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="50%" height="100%">
        <FlexBox
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={jsLogo} width="300" />
        </FlexBox>
      </Box>
      <Heading fontSize="h1">Typische Anwendung</Heading>
      <Grid width="90%" height="70%" gridTemplateColumns="3fr 2fr">
        <FlexBox
          alignItems="center"
          justifyContent="start"
          alignContent="center"
          justifyItems="center"
        >
          <UnorderedList>
            <Appear>
              <ListItem>DOM (HTML) Manipulation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Interaktivität</ListItem>
            </Appear>
            <Appear>
              <ListItem>CSS Veränderung</ListItem>
            </Appear>
            <Appear>
              <ListItem>Abrufen von Daten</ListItem>
            </Appear>
            <Appear>
              <ListItem>Persistenz von Daten</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </Grid>
    </Slide>
  );
}

function JsExample() {
  useEffect(() => {
    const to = setTimeout(() => {
      sdk.embedProjectId("js-example-embedd", "static-webpage", {
        forceEmbedLayout: true,
        openFile: "index.html",
        theme: "light",
        height: 700,
      });
    }, 1000);
    return () => clearTimeout(to);
  }, []);

  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="100%" height="100%">
        <div
          id="js-example-embedd"
          style={{ width: "100vw", height: "100vh" }}
        />
      </Box>
    </Slide>
  );
}

function JSUsageRecap() {
  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="50%" height="100%">
        <FlexBox
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={jsLogo} width="300" />
        </FlexBox>
      </Box>
      <Heading fontSize="h1">Mit JS kann ich...</Heading>
      <Grid width="90%" height="70%" gridTemplateColumns="3fr 2fr">
        <FlexBox
          alignItems="center"
          justifyContent="start"
          alignContent="center"
          justifyItems="center"
        >
          <UnorderedList>
            <Appear>
              <ListItem>DOM (HTML) Verändern und erweitern</ListItem>
            </Appear>
            <Appear>
              <ListItem>Auf Nutzerinteraktion reagieren</ListItem>
            </Appear>
            <Appear>
              <ListItem>CSS Kassen setzen uns Stile anpassen</ListItem>
            </Appear>
            <Appear>
              <ListItem>Daten laden</ListItem>
            </Appear>
            <Appear>
              <ListItem>Daten Persistieren</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </Grid>
    </Slide>
  );
}
