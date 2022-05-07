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
import assemblyline from "../../assets/images/03-javascript-fundamentals-2/stock/assemblyline.jpg";
import wires from "../../assets/images/03-javascript-fundamentals-2/stock/wires.jpg";

export default () => (
  <>
    <JsArrayMethodsIntro />
    <JsArrayMethodsHandsOn />
    <JsArrayMethodsExercise1 />
    <JsArrayMethodsExercise1Solution />
    <JsArrayMethodsExercise2 />
    <JsArrayMethodsExercise3 />
    <JsArrayMethodsExercise4 />
    <JsArrayMethodsExercise5 />
    <AspectsRecap />
  </>
);

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

function JsArrayMethodsExercise1() {
  return (
    <Slide>
      <Heading fontSize="h1">Array Methods → Übung 1</Heading>
      <OrderedList>
        <ListItem>
          In eine <code>const</code> namens <code>people</code>, erstellt ein{" "}
          Array von 9 Personen-Objekte, mit der Eigenschaften <code>name</code>{" "}
          und <code>diet</code> (Für jede diet 3 Personen)
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

function JsArrayMethodsExercise1Solution() {
  return (
    <CodeSlide
      title="Only Vegetarians"
      stackBlitzId="js-course-exercise-filter-vegetarians-solution"
    />
  );
}

function JsArrayMethodsExercise2() {
  return (
    <Slide>
      <Heading fontSize="h1">Array Methods → Übung 2</Heading>
      <OrderedList>
        <ListItem>
          Verwende die gleiche Liste von Personen wie in der vorherigen Übung
        </ListItem>
        <ListItem>
          Speichere in einer <code>const</code> eine beliebige Person{" "}
          <b>aus dem Array</b> mit der Methode <code>find</code> und der
          Eigenschaft <code>name</code> (verwende hier nicht den Index dafür)
        </ListItem>
        <ListItem>
          Finde der index dieser Person mit der Methode <code>findIndex</code>{" "}
          heraus
        </ListItem>
        <ListItem>
          Logge der einzelne String:
          <Quote>
            <code>NAME</code> ist <code>DIET</code> und ist die{" "}
            <code>N-TE</code> Person in der Liste
          </Quote>
          (Mit N-TE ist der position der Person in der Liste gemeint)
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function JsArrayMethodsExercise3() {
  return (
    <Slide>
      <Heading fontSize="h1">Array Methods → Übung 3</Heading>
      <OrderedList>
        <ListItem>
          Verwende die gleiche Liste von Personen wie in der vorherigen Übung
        </ListItem>
        <ListItem>
          Verwende die Methode <code>some</code>, um zu wissen, ob es manche
          Leute aus eine bestimmte Diet gehören
        </ListItem>
        <ListItem>
          Für jede Diet, logge der String:
          <Quote>
            Es gibt manche Leute die <code>DIET</code> sind
          </Quote>
          Oder
          <Quote>
            Es gibt keine Leute die <code>DIET</code> sind
          </Quote>
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function JsArrayMethodsExercise4() {
  return (
    <Slide>
      <Heading fontSize="h1">Array Methods → Übung 4</Heading>
      <OrderedList>
        <ListItem>
          Verwende die gleiche Liste von Personen wie in der vorherigen Übung
        </ListItem>
        <ListItem>
          Verwende die Methode <code>every</code>, um zu wissen, ob alle Leute
          aus eine bestimmte Diet gehören
        </ListItem>
        <ListItem>
          Für jede Diet, logge der String:
          <Quote>
            Alle Leute sind <code>DIET</code>
          </Quote>
          Oder
          <Quote>
            Nicht alle Leute sind <code>DIET</code>
          </Quote>
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function JsArrayMethodsExercise5() {
  return (
    <Slide>
      <Heading fontSize="h1">Array Methods → Übung 5</Heading>
      <OrderedList>
        <ListItem>
          Verwende die gleiche Liste von Personen wie in der vorherigen Übung
        </ListItem>
        <ListItem>
          Verwende die Methode <code>filter</code>, um ein Array per Diet zu
          erstellen
        </ListItem>
        <ListItem>
          Anhand der Eigenschaft <code>length</code>, berechne der Prozentsatz
          von Leute, die zu eine bestimmte Diet gehören
        </ListItem>
        <ListItem>
          Für jede Diet, logge der String:
          <Quote>
            <code>X</code>% der Leute sind <code>DIET</code>
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
