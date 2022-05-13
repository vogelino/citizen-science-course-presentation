import React from "react";
import { Deck } from "../../components/deck";
import { Slide } from "../../components/slide";
import { Heading, ListItem } from "../../components/typography";
import html from "../../assets/images/05-dom-manipulation/stock/html.jpg";
import HTMLWithJs from "./HTMLWithJs";
import Exercises from "./Exercises";

export default () => (
  <Deck>
    <IntroSlide />
    <HTMLWithJs />
    <Exercises />
  </Deck>
);

function IntroSlide() {
  return (
    <Slide backgroundImage={`url("${html}")`}>
      <Heading color="white" fontSize="96px" fontWeight="bold">
        HTML (DOM) Manipulation with JavaScript
      </Heading>
      <Heading color="gray" fontSize="h1" margin="0px">
        Part 1
      </Heading>
    </Slide>
  );
}
