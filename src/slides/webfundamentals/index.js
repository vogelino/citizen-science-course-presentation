import React from "react";
import { Deck } from "../../components/deck";
import { Slide } from "../../components/slide";
import { Heading } from "../../components/typography";
import HTMLRecap from "./HTMLRecap";
import code from "../../assets/images/02-web-fundamentals/stock/code.jpg";

export default () => (
  <Deck>
    <IntroSlide />
    <HTMLRecap />
  </Deck>
);

function IntroSlide() {
  return (
    <Slide backgroundImage={`url("${code}")`}>
      <Heading color="white" fontSize="96px" fontWeight="bold">
        Web Fundamentals
      </Heading>
      <Heading color="gray" fontSize="h1" margin="0px">
        HTML / CSS / JavaScript
      </Heading>
    </Slide>
  );
}
