import React from "react";
import { FlexBox, Notes } from "spectacle";
import { Deck } from "../components/deck";
import { Slide } from "../components/slide";
import { Heading } from "../components/typography";

export default () => (
  <Deck>
    <Slide noBreadcrumb>
      <FlexBox flexDirection="column" height="90%">
        <div>
          <Heading fontSize="h1">SECOND</Heading>
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
    <Slide breadcrumb="Introduction">
      <Heading fontSize="h1">Willkommen</Heading>
    </Slide>
    <Slide breadcrumb="Introduction">
      <Heading fontSize="h1">Wer bin ich</Heading>
    </Slide>
    <Slide breadcrumb="Kursvorstellung">
      <Heading fontSize="h1">Worum geht es?</Heading>
    </Slide>
    <Slide breadcrumb="Kursvorstellung">
      <Heading fontSize="h1">Einschreibungsverfahren</Heading>
    </Slide>
    <Slide breadcrumb="Kursvorstellung">
      <Heading fontSize="h1">Kursprogramm</Heading>
    </Slide>
    <Slide breadcrumb="Kursvorstellung">
      <Heading fontSize="h1">Kriterien für die Benotung</Heading>
    </Slide>
    <Slide breadcrumb="Über euch">
      <Heading fontSize="h1">Wer seid ihr?</Heading>
      <Heading fontSize="h2" color="black">
        Formular schicken / Selfie
      </Heading>
    </Slide>
    <Slide breadcrumb="Über euch">
      <Heading fontSize="h1">Evaluation euer Skills</Heading>
    </Slide>
    <Slide breadcrumb="Warmup">
      <Heading fontSize="h1">Einführung zu Webentwicklung</Heading>
    </Slide>
  </Deck>
);
