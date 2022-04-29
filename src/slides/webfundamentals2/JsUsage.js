import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  Grid,
  Image,
  ListItem,
  OrderedList,
  Quote,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";
import CodeSlide from "../../components/CodeSlide";
import { CodePane } from "../../components/codePane";
import { SplitImage } from "../../components/splitImage";
import labyrinth from "../../assets/images/03-javascript-fundamentals-2/stock/labyrinth.jpg";
import dispenser from "../../assets/images/03-javascript-fundamentals-2/stock/dispenser.jpg";
import assemblyline from "../../assets/images/03-javascript-fundamentals-2/stock/assemblyline.jpg";
import wires from "../../assets/images/03-javascript-fundamentals-2/stock/wires.jpg";

export default () => (
  <>
    <JsObjectsIntro1 />
    <JsObjectsIntro2 />
    <JsObjectsHandsOn />
    <JsObjectExercise />
    <JsArraysIntro />
    <JsArraysIntro2 />
    <JsArraysHandsOn />
    <JsArraysExercise />
    <JsConditionalsIntro />
    <JsConditionalsHandsOn />
    <JsConditionalsExercise />
    <JsFunctionsIntro />
    <JsFunctionsHandsOn />
    <JsFunctionsExercise />
    <JsArrayMethodsIntro />
    <JsArrayMethodsHandsOn />
    <JsArrayMethodsExercise />
    <AspectsRecap />
  </>
);

const JsObjectsIntroList = (
  <Box>
    <UnorderedList>
      <ListItem>Objects = Schubladen</ListItem>
      <ListItem>Key-value-pairs = Ordner, die man mit Label zugreift</ListItem>
      <ListItem>Key = Der Label, der den Ordner beschrifftet</ListItem>
      <ListItem>Value = Der Inhalt vom Ordner (Beliebiges JS Wert)</ListItem>
    </UnorderedList>
  </Box>
);

const JsArraysIntroList = (
  <Box>
    <UnorderedList>
      <ListItem>Arrays = Besondere Schubladen</ListItem>
      <ListItem>Key-value-pairs = Ordner, die man mit INDEX zugreift</ListItem>
      <ListItem>
        Key = Ein INDEX Label, der den Ordner beschrifftet und automatisch
        gesetzt ist
      </ListItem>
      <ListItem>Value = Der Inhalt vom Ordner (Beliebiges JS Wert)</ListItem>
    </UnorderedList>
  </Box>
);

const JSObjectsDrawers = ({ prop1, prop2, prop3 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 176 183"
    width={352}
    height={366}
  >
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}>
      <g>
        <path fill="var(--white)" d="M0 0h176v183H0z" />
        <path
          fill="var(--gray)"
          stroke="var(--blue)"
          strokeWidth={4}
          d="m134.063 113 16.667 20H20.27l16.667-20h97.126z"
        />
        <g id="Group-2" transform="translate(33 6)">
          <g id="Group">
            <path fill="var(--white)" d="M0 0h32v124H0z" />
            <path
              fill="var(--purple)"
              d="M32 0v124H0V0h32zM16.5 100a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zM28 5H4v87h24V5z"
            />
          </g>
          <text
            fill="var(--purple)"
            fontFamily="'Space Mono'"
            fontWeight="bold"
            fontSize={16}
            transform="rotate(-90 15.5 47.5)"
          >
            <tspan x={-20} y={52.5}>
              {prop1}
            </tspan>
          </text>
        </g>
        <g id="Group-2-Copy" transform="translate(70 6)">
          <path fill="var(--white)" d="M0 0h32v124H0z" />
          <path
            fill="var(--purple)"
            d="M32 0v124H0V0h32zM16.5 100a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zM28 5H4v87h24V5z"
          />
          <text
            fill="var(--purple)"
            fontFamily="'Space Mono'"
            fontWeight="bold"
            fontSize={16}
            transform="rotate(-90 15.5 47.5)"
          >
            <tspan x={-20} y={52.5}>
              {prop2}
            </tspan>
          </text>
        </g>
        <g id="Group-2-Copy-2" transform="translate(107 6)">
          <path fill="var(--white)" d="M0 0h32v124H0z" />
          <path
            fill="var(--purple)"
            d="M32 0v124H0V0h32zM16.5 100a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zM28 5H4v87h24V5z"
          />
          <text
            fill="var(--purple)"
            fontFamily="'Space Mono'"
            fontWeight="bold"
            fontSize={16}
            transform="rotate(-90 15.5 47.5)"
          >
            <tspan x={-20} y={52.5}>
              {prop3}
            </tspan>
          </text>
        </g>
        <path
          fill="var(--white)"
          stroke="var(--blue)"
          strokeWidth={4}
          d="M18 127h135v50H18z"
        />
        <path stroke="var(--blue)" strokeWidth={3} d="M73.5 147.5h25v10h-25z" />
      </g>
    </g>
  </svg>
);

function JsObjectsIntro1() {
  return (
    <Slide>
      <Heading fontSize="h1">Objects → Analogie</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="8em"
        style={{ paddingTop: "4em" }}
      >
        {JsObjectsIntroList}
        <Box>
          <JSObjectsDrawers prop1="name" prop2="age" prop3="weight" />
          <Text color="gray" fontSize="24px" lineHeight="32px" marginTop="24px">
            Die Schubladen-Analogie:{" "}
            <a href="https://javascript.info/object">javascript.info</a>
          </Text>
        </Box>
      </Grid>
    </Slide>
  );
}

function JsObjectsIntro2() {
  return (
    <Slide>
      <Heading fontSize="h1">Objects → Analogie</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="8em"
        style={{ paddingTop: "4em" }}
      >
        {JsObjectsIntroList}
        <Box>
          <CodePane language="js" showLineNumbers={false}>
            {`{ name: "Max", age: 30, weight: 80 }`}
          </CodePane>
          <CodePane language="js" showLineNumbers={false}>
            {`
{ // Schublade Anfang
  // Ordner Label "name" & Inhalt "Max"
  name: "Max",
  // Ordner Label "age" & Inhalt 30
  age: 30,
  // Ordner Label "weight" & Inhalt 80
  weight: 80
} // Schublade Ende
`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  );
}

function JsObjectsHandsOn() {
  return <CodeSlide title="Objects" stackBlitzId="js-course-objects-2" />;
}

function JsObjectExercise() {
  return (
    <Slide>
      <Heading fontSize="h1">Objects → Übung</Heading>
      <OrderedList>
        <ListItem>
          In eine <code>const</code> namens <code>me</code>, erstellt ein{" "}
          Objekt, der folgende Eigenschaften hat:
          <UnorderedList>
            <ListItem>name</ListItem>
            <ListItem>age</ListItem>
            <ListItem>hobby</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Loggt in der console der folgender satz:
          <Quote>
            Hi! Ich heisse <code>NAME</code>, bin <code>AGE</code> Jahre alt und
            mein hobby ist <code>HOBBY</code>!
          </Quote>
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function JsArraysIntro() {
  return (
    <Slide>
      <Heading fontSize="h1">Arrays → Analogie</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="8em"
        style={{ paddingTop: "4em" }}
      >
        {JsArraysIntroList}
        <Box>
          <JSObjectsDrawers prop1="0" prop2="1" prop3="2" />
          <Text color="gray" fontSize="24px" lineHeight="32px" marginTop="24px">
            Die Schubladen-Analogie (Angepasst):{" "}
            <a href="https://javascript.info/object">javascript.info</a>
          </Text>
        </Box>
      </Grid>
    </Slide>
  );
}

function JsArraysIntro2() {
  return (
    <Slide>
      <Heading fontSize="h1">Arrays → Analogie</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="8em"
        style={{ paddingTop: "4em" }}
      >
        {JsArraysIntroList}
        <Box>
          <CodePane language="js" showLineNumbers={false}>
            {`[ "Max", 30, 80 ]`}
          </CodePane>
          <CodePane language="js" showLineNumbers={false}>
            {`
[ // Schublade Anfang
  // Ordner mit INDEX 0 & Inhalt "Max"
  "Max",
  // Ordner mit INDEX 1 & Inhalt 30
  30,
  // Ordner mit INDEX 2 & Inhalt 80
  80
] // Schublade Ende
`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  );
}

function JsArraysHandsOn() {
  return <CodeSlide title="Arrays" stackBlitzId="js-course-arrays-2" />;
}

function JsArraysExercise() {
  return (
    <Slide>
      <Heading fontSize="h1">Arrays → Übung</Heading>
      <OrderedList>
        <ListItem>
          In eine <code>const</code> namens <code>people</code>, erstellt ein{" "}
          Array von 3 Personen-Objekte, mit der Eigenschaften <code>name</code>,{" "}
          <code>age</code> und <code>hobby</code>
        </ListItem>
        <ListItem>
          Loggt in der console die folgende Sätze:
          <Quote>
            Person 1 heisst <code>NAME</code> <br />
            Person 2 ist <code>AGE</code> Jahre alt <br /> Person 3 hat der
            hobby <code>HOBBY</code>
          </Quote>
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function JsConditionalsIntro() {
  return (
    <Slide>
      <SplitImage src={labyrinth} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">Conditionals</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="4em"
        style={{ paddingTop: "4em" }}
      >
        <UnorderedList>
          <ListItem>Grundbausteine für die Logik</ListItem>
          <ListItem>
            Unterteilt die Komplexität in kleinere, handhabbare Segmente
          </ListItem>
          <ListItem>Vorsicht! Auf Lesbarkeit achten</ListItem>
        </UnorderedList>
        <Box></Box>
      </Grid>
    </Slide>
  );
}

function JsConditionalsHandsOn() {
  return (
    <CodeSlide title="Conditionals" stackBlitzId="js-course-conditionals-2" />
  );
}

function JsFunctionsExercise() {
  return (
    <Slide>
      <Heading fontSize="h1">Functions → Übung</Heading>
      <OrderedList>
        <ListItem>
          In eine <code>const</code> namens <code>people</code>, erstellt ein{" "}
          Array von 3 Personen-Objekte, mit der Eigenschaften <code>name</code>{" "}
          und <code>diet</code>
        </ListItem>
        <ListItem>
          Erstellt eine Fuktion names <code>getMenuByDiet</code>, welches ein
          Parameter <code>diet</code> akzepriert, und ein menu zurück gibt.
        </ListItem>
        <ListItem>
          Ruft die Funktion mit der jeweilige personen auf, sodass für jede
          Person geloggt wird:
          <Quote>
            Person ist <code>DIET</code> und isst <code>MENU</code>
          </Quote>
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function JsConditionalsExercise() {
  return (
    <Slide>
      <Heading fontSize="h1">Conditionals → Übung</Heading>
      <OrderedList>
        <ListItem>
          Herstellt eine <code>const</code> namens <code>diet</code> mit dem
          Wert <code>freegan</code>, <code>vegetarian</code> oder{" "}
          <code>vegan</code>
        </ListItem>
        <ListItem>
          In eine <code>const</code> namens <code>menus</code>, erstellt ein{" "}
          Array von 3 string: <code>"Hallumi burger"</code>,{" "}
          <code>"Cheese burger"</code> und <code>"Jackfruit Burger"</code>
        </ListItem>
        <ListItem>
          Loggt in der console:
          <UnorderedList>
            <ListItem>
              Falls freeganer: <code>"Cheese burger"</code>
            </ListItem>
            <ListItem>
              Falls vegetarier: <code>"Hallumi burger"</code>
            </ListItem>
            <ListItem>
              Falls veganer: <code>"Jackfruit burger"</code>
            </ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function JsFunctionsIntro() {
  return (
    <Slide>
      <SplitImage src={dispenser} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">Functions</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="4em"
        style={{ paddingTop: "4em" }}
      >
        <UnorderedList>
          <ListItem>Eingabe → Ausgabe</ListItem>
          <ListItem>Ermöglicht die Modularisierung der Logik</ListItem>
          <ListItem>Einmal schreiben, 100x ausführen</ListItem>
          <ListItem>Function als Eingabe oder Ausgabe geht auch</ListItem>
        </UnorderedList>
        <Box></Box>
      </Grid>
    </Slide>
  );
}

function JsFunctionsHandsOn() {
  return <CodeSlide title="Functions" stackBlitzId="js-course-functions-2" />;
}

function JsArrayMethodsIntro() {
  return (
    <Slide>
      <SplitImage src={assemblyline} boxProps={{ width: "45%" }} />
      <Heading fontSize="h1">Array Methods</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="4em"
        style={{ paddingTop: "4em" }}
      >
        <UnorderedList>
          <ListItem>Ermöglicht das "loopen" über Elements einer Liste</ListItem>
          <ListItem>
            Ermöglicht das transformieren von Elemente einer Liste
          </ListItem>
          <ListItem>
            Ist in kombination mit Funktionen extrem nützlich, um Aktionen zu
            wiederholen und Aufgaben zu automatisieren
          </ListItem>
          <ListItem>Vorsicht! Auf Lesbarkeit achten</ListItem>
        </UnorderedList>
        <Box></Box>
      </Grid>
    </Slide>
  );
}

function JsArrayMethodsHandsOn() {
  return (
    <CodeSlide title="Array Methods" stackBlitzId="js-course-array-methods-2" />
  );
}

function JsArrayMethodsExercise() {
  return (
    <Slide>
      <Heading fontSize="h1">Array Methods → Übung</Heading>
      <OrderedList>
        <ListItem>
          In eine <code>const</code> namens <code>people</code>, erstellt ein{" "}
          Array von 3 Personen-Objekte, mit der Eigenschaften <code>name</code>{" "}
          und <code>diet</code>
        </ListItem>
        <ListItem>
          Erstellt eine Fuktion names <code>getMenuByDiet</code>, welches ein
          Parameter <code>diet</code> akzepriert, und ein menu zurück gibt.
        </ListItem>
        <ListItem>
          Erstellt ein neuen Array namens <code>vegetarians</code> das nur die
          vegetarier beinhaltet.
        </ListItem>
        <ListItem>
          Eine einzelne String loggen, die sagt:
          <Quote>
            Die Personen <code>A, B und C</code> sind <code>DIET</code> und
            essen <code>MENU</code>
          </Quote>
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function AspectsRecap() {
  return (
    <Slide>
      <SplitImage src={wires} boxProps={{ width: "45%" }} />
      <Heading fontSize="h1">Recap</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="4em"
        style={{ paddingTop: "4em" }}
      >
        <UnorderedList>
          <ListItem>Objekte für Datenstrukturen</ListItem>
          <ListItem>Arrays für listen</ListItem>
          <ListItem>Conditionals für logik</ListItem>
          <ListItem>Funktionen für modularisierung</ListItem>
          <ListItem>Arrays Methoden für Fließbandarbeit mit Arrays</ListItem>
          <ListItem>Alles zusammen für all the POWER! Muhahaha!</ListItem>
        </UnorderedList>
      </Grid>
    </Slide>
  );
}
