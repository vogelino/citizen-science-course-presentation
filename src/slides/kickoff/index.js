import React from "react";
import { FlexBox, Notes } from "spectacle";
import { Deck } from "../../components/deck";
import { Slide } from "../../components/slide";
import { Heading } from "../../components/typography";
import AboutUs from "./aboutUs";
import AboutCourse from "./aboutCourse";
import TheTechPart from "./theTechPart";
import CitizenScience from "./citizenScience";
import Welcome from "./welcome";

export default () => (
  <Deck>
    <Slide noBreadcrumb>
      <FlexBox flexDirection="column" height="90%">
        <div>
          <Heading fontSize="h1">Citizen Science</Heading>
          <Heading color="black" fontSize="h2">
            Stadtdaten visualisieren
          </Heading>
        </div>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Welcome />
    <AboutUs />
    <AboutCourse />
    <CitizenScience />
    <TheTechPart />
  </Deck>
);
