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
import cssStructure1 from "../../assets/images/02-web-fundamentals/graphics/CSSStructure-001.svg";
import cssStructure2 from "../../assets/images/02-web-fundamentals/graphics/CSSStructure-002-Rule.svg";
import cssStructure3 from "../../assets/images/02-web-fundamentals/graphics/CSSStructure-003-Selector.svg";
import cssStructure4 from "../../assets/images/02-web-fundamentals/graphics/CSSStructure-004-Property.svg";
import cssStructure5 from "../../assets/images/02-web-fundamentals/graphics/CSSStructure-005-Value.svg";
import bemExample from "../../assets/images/02-web-fundamentals/screenshots/bem-example.jpg";
import clips from "../../assets/images/02-web-fundamentals/stock/clips2.jpg";
import { CodePane } from "../../components/codePane";
import { Quote } from "../../components/quote";

export default () => (
  <>
    <CSSRecapIntro />
    <CSSSpecificityA />
    <CSSSpecificityB />
    <CSSSpecificityC />
    <CSSEmbedd />
  </>
);

function CSSRecapIntro() {
  return (
    <Slide>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(2)` }}
        >
          <Image src={cssStructure1} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(2)` }}
        >
          <Image src={cssStructure2} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(2)` }}
        >
          <Image src={cssStructure3} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(2)` }}
        >
          <Image src={cssStructure4} />
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          left="50%"
          top="50%"
          style={{ transform: `translate(-50%, -50%) scale(2)` }}
        >
          <Image src={cssStructure5} />
        </Box>
      </Appear>
      <Heading fontSize="h1">CSS: Cascading StyleSheet</Heading>
    </Slide>
  );
}

function CSSSpecificityA() {
  return (
    <Slide>
      <Heading fontSize="h1">CSS specificity</Heading>
      <Quote source="MDN Web Docs">
        Specificity is the means by which browsers decide which CSS property
        values are the most relevant to an element and, therefore, will be
        applied. Specificity is based on the matching rules which are composed
        of different sorts of CSS selectors.
      </Quote>
    </Slide>
  );
}

function CSSSpecificityB() {
  return (
    <Slide>
      <Heading fontSize="h1">CSS specificity</Heading>
      <FlexBox
        width="100%"
        height="90%"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="start"
      >
        <Grid
          width="100%"
          height="90%"
          alignItems="center"
          justifyContent="start"
          gridTemplateColumns="1fr auto"
          gridGap="4em"
        >
          <Box>
            <Text>Spezifität basiert auf Regeln wie:</Text>
            <UnorderedList>
              <Appear>
                <ListItem>
                  In welche Reihenfolge die CSS-Regel auftaucht
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Wie genau die Regel ist</ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Welcher Art von Selector verwendet wird (id, class, pattern,
                  etc)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Wieviele keywords gibt es in ein CSS-Selector
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>usw.</ListItem>
              </Appear>
            </UnorderedList>
          </Box>
          <Box>
            <iframe
              src="https://giphy.com/embed/Y4kZokSLJov84J421T"
              width="346"
              height="480"
              frameBorder="0"
              allowFullScreen
            />
          </Box>
        </Grid>
      </FlexBox>
    </Slide>
  );
}

function CSSSpecificityC() {
  return (
    <Slide>
      <Heading fontSize="h1">CSS specificity - Die Abhilfe</Heading>
      <FlexBox
        width="100%"
        height="90%"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="start"
      >
        <UnorderedList>
          <Appear>
            <ListItem>Verlasst euch nicht auf Spezifität</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Verwendet Konventionen wie BEM
              <Grid height="100%" style={{ marginTop: "0.4em" }}>
                <CodePane language="css" showLineNumbers={false}>
                  {`
.button {
	color: #000;
}
.button--state-success {
	color: #569E3D;
}
.button--state-danger {
	color: #900;
}
        `}
                </CodePane>
              </Grid>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Verwendet Bibliotheken wie TailwindCSS
              <Grid height="100%" style={{ marginTop: "0.4em" }}>
                <CodePane language="html" showLineNumbers={false}>
                  {`
<div class="container mx-auto text-blue px-4">
        `}
                </CodePane>
              </Grid>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <FlexBox position="absolute" top={0} right={0} bottom={0} width="45%">
        <figure>
          <Image
            src={bemExample}
            width="100%"
            style={{ mixBlendMode: "multiply" }}
          />
          <figcaption>
            <Text
              fontSize="1em"
              paddingLeft="1em"
              lineHeight="1.25em"
              color="gray"
            >
              Example of Blocks, Elements and Modifiers according
              <br />
              to the BEM convention
            </Text>
          </figcaption>
        </figure>
      </FlexBox>
    </Slide>
  );
}

function CSSEmbedd() {
  return (
    <Slide>
      <Box
        position="absolute"
        right="0px"
        top="0px"
        width="40%"
        height="100%"
        opacity="0.3"
      >
        <Box
          width="100%"
          height="100%"
          position="absolute"
          backgroundColor="blue"
          style={{ mixBlendMode: "hue" }}
          opacity="1"
        />
        <Image
          src={clips}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Heading fontSize="h1">CSS Anbinden</Heading>
      <FlexBox
        width="100%"
        height="90%"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="start"
      >
        <UnorderedList>
          <Appear>
            <ListItem>
              Als Datei (Empfohlen)
              <Grid style={{ marginTop: "0.4em" }}>
                <CodePane language="html" showLineNumbers={false}>
                  {`
<link rel="stylesheet" href="style.css">
        `}
                </CodePane>
              </Grid>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Als HTML style tag (Selten sinnvoll)
              <Grid style={{ marginTop: "0.4em" }}>
                <CodePane language="html" showLineNumbers={false}>
                  {`
<style>
  .button { color: #000; }
</style>
        `}
                </CodePane>
              </Grid>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Inline: direkt auf Elemente (Vermeiden)
              <Grid style={{ marginTop: "0.4em" }}>
                <CodePane language="html" showLineNumbers={false}>
                  {`
<p style="font-weight: bold;">
        `}
                </CodePane>
              </Grid>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
