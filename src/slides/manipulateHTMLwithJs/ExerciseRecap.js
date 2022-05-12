import React from "react";
import { OrderedList, Quote, ListItem, Image } from "spectacle";
import { Slide } from "../../components/slide";
import { Heading } from "../../components/typography";

export default () => (
  <>
    <JsArrayMethodsExercise2 />
    <JsArrayMethodsExercise3 />
    <JsArrayMethodsExercise4 />
    <JsArrayMethodsExercise5 />
  </>
);

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
