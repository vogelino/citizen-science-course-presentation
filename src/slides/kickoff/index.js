import React from "react";
import { Deck } from "../../components/deck";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";
import AboutUs from "./aboutUs";
import TheorieIntro from "./TheorieIntro";
import TheTechPart from "./theTechPart";
import TheorieOutro from "./TheorieOutro";
import Examples from "./examples";
import Welcome from "./welcome";
import visualizing from "../../assets/images/stock/visualizing.jpg";

export default () => (
  <Deck>
    <IntroSlide />
    <Welcome />
    <AboutUs />
    <TheorieIntro />
    <Examples />
    <TheorieOutro />
    <TheTechPart />
  </Deck>
);

function IntroSlide() {
  return (
    <Slide backgroundImage={`url("${visualizing}")`}>
      <Heading color="white" fontSize="96px" fontWeight="bold">
        Citizen Science
      </Heading>
      <Heading color="gray" fontSize="h1" margin="0px">
        Stadtdaten visualisieren
      </Heading>
    </Slide>
  );
}
