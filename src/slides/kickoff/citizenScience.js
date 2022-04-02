import React from "react";
import { Appear, FlexBox, Notes } from "spectacle";
import { Slide } from "../../components/slide";
import { Heading } from "../../components/typography";

export default function AboutCourse() {
  return (
    <>
      <Interests />
      <StatusQuo />
      <SchoolsOfTHoughts />
      <Example1 />
      <Example2 />
      <Example3 />
      <Relevance />
    </>
  );
}
function Interests() {
  return (
    <Slide>
      <Notes>Bevor wir in die Theorie gehen</Notes>
      <Heading fontSize="h1">Wie sieht's bei euch aus? 🧑‍🔬</Heading>
      <FlexBox
        flexDirection="column"
        height="70%"
        width="70%"
        alignItems="start"
      >
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Habt ihr euch schon mit dem Thema Citizen Science beschäftigt?
          </Heading>
        </Appear>
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Was interessiert euch am Thema?
          </Heading>
        </Appear>
        <Appear>
          <Heading fontSize="h2" color="black" lineHeight="h2">
            Was wünscht ihr euch vom Seminar?
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

function StatusQuo() {
  return (
    <Slide>
      <Heading fontSize="h1" color="blue">
        Status Quo
      </Heading>
    </Slide>
  );
}

function SchoolsOfTHoughts() {
  return (
    <Slide>
      <Heading fontSize="h1" color="blue">
        Die Citizen Science Denkschulen
      </Heading>
    </Slide>
  );
}

function Example1() {
  return (
    <Slide>
      <Heading fontSize="h1" color="blue">
        Beispiel 1
      </Heading>
    </Slide>
  );
}

function Example2() {
  return (
    <Slide>
      <Heading fontSize="h1" color="blue">
        Beispiel 2
      </Heading>
    </Slide>
  );
}

function Example3() {
  return (
    <Slide>
      <Heading fontSize="h1" color="blue">
        Beispiel 3
      </Heading>
    </Slide>
  );
}

function Relevance() {
  return (
    <Slide>
      <Heading fontSize="h1" color="blue">
        Relevanz für Interface Design
      </Heading>
    </Slide>
  );
}
