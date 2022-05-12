import React from "react";
import { OrderedList, Quote, ListItem, Image } from "spectacle";
import { Slide } from "../../components/slide";
import { Heading } from "../../components/typography";
import cards from "../../assets/images/05-dom-manipulation/stock/cards.jpg";

export default () => (
  <>
    <DomExercise1 />
    <Outro />
  </>
);

function DomExercise1() {
  return (
    <Slide>
      <Heading fontSize="h1">Übung & Hausaufgaben</Heading>
      <OrderedList>
        <ListItem>
          Mit HTML/CSS/JS, male im Dokument abgedeckte Tarot/Spiel-Karten hinzu
        </ListItem>
        <ListItem>
          Wenn eine Karte anklick ist, wird der Inhlat der Karte angezeigt (Ihr
          entscheidet wie)
        </ListItem>
        <ListItem>Nur eine Karte darf gleichzeitig aufgedeckt sein</ListItem>
        <ListItem>Die Zuordnung der Karte sollte zuffällig sein</ListItem>
        <ListItem>
          Gerne mit Animation, Text und Gamification aufpeppen
        </ListItem>
      </OrderedList>
    </Slide>
  );
}

function Outro() {
  return (
    <Slide backgroundImage={`url("${cards}")`}>
      <Heading color="white" fontSize="96px" fontWeight="bold">
        Viel Erfolg!
      </Heading>
    </Slide>
  );
}
