import React from "react";
import { Deck } from "../../components/deck";
import { Slide } from "../../components/slide";
import { Heading, ListItem } from "../../components/typography";
import code from "../../assets/images/03-javascript-fundamentals-2/stock/js-code.jpg";
import ArrayMethods from "./ArrayMethods";
import ExerciseRecap from "./ExerciseRecap";

export default () => (
  <Deck>
    <IntroSlide />
    <ExerciseRecap />
    <ArrayMethods />
  </Deck>
);

function IntroSlide() {
  return (
    <Slide backgroundImage={`url("${code}")`}>
      <Heading color="white" fontSize="96px" fontWeight="bold">
        Javascript Fundamentals
      </Heading>
      <Heading color="gray" fontSize="h1" margin="0px">
        Part 3
      </Heading>
    </Slide>
  );
}
