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
import jsLogo from "../../assets/images/02-web-fundamentals/misc/js-logo.svg";
import CodeSlide from "../../components/CodeSlide";

export default () => (
  <>
    <JSIntro />
    <JSUsage />
    <JsVariables />
    <JsPrimitives />
    <JsObjects />
    <JsArrays />
    <JsOtherTypes />
    <JsConditionals />
    <JsFunctions />
    <JsArrayMethods />
    <JsDOMManipulation />
    <JsExample />
    <JSUsageRecap />
    <JsExerciseCSVToArray />
    <JsExerciseCSVToInterestStats />
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
              <ListItem>Die populärste Sprache der Welt nach Python</ListItem>
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
              <ListItem>CSS-Klassen setzen uns Stile anpassen</ListItem>
            </Appear>
            <Appear>
              <ListItem>Daten laden</ListItem>
            </Appear>
            <Appear>
              <ListItem>Daten persistieren</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </Grid>
    </Slide>
  );
}

function JsVariables() {
  return (
    <CodeSlide
      title="Variables"
      stackBlitzId="js-course-variables"
      stackBlitzOptions={{
        hideExplorer: undefined,
      }}
    />
  );
}

function JsPrimitives() {
  return <CodeSlide title="Primitives" stackBlitzId="js-course-primitives" />;
}

function JsObjects() {
  return <CodeSlide title="Objects" stackBlitzId="js-course-objects" />;
}

function JsArrays() {
  return <CodeSlide title="Arrays" stackBlitzId="js-course-arrays" />;
}

function JsOtherTypes() {
  return <CodeSlide title="Other Types" stackBlitzId="js-course-other-types" />;
}

function JsConditionals() {
  return (
    <CodeSlide title="Conditionals" stackBlitzId="js-course-conditionals" />
  );
}

function JsFunctions() {
  return <CodeSlide title="Functions" stackBlitzId="js-course-functions" />;
}

function JsArrayMethods() {
  return (
    <CodeSlide title="Array Methods" stackBlitzId="js-course-array-methods" />
  );
}

function JsDOMManipulation() {
  return (
    <CodeSlide
      title="DOM Manipulation"
      stackBlitzId="js-course-dom-manipulation"
    />
  );
}

function JsExample() {
  return <CodeSlide title="Tutti quanti" stackBlitzId="static-webpage" />;
}

function JsExerciseCSVToArray() {
  return (
    <CodeSlide
      title="Exercise: CSV to Array"
      stackBlitzId="js-course-exercise-csv-to-arrays"
    />
  );
}

function JsExerciseCSVToInterestStats() {
  return (
    <CodeSlide
      title="Exercise: CSV to Interest Stats"
      stackBlitzId="js-course-exercise-csv-to-interest-stats"
    />
  );
}
