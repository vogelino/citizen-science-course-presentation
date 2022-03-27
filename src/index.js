import React from "react";
import ReactDOM from "react-dom";
import { Deck } from "./components/deck";
import { IntroductionSlide } from "./slides/intro";

const Presentation = () => (
  <Deck>
    <IntroductionSlide />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
