import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  Grid,
  Image,
  ListItem,
  OrderedList,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { SplitImage } from "../../components/splitImage";
import { Heading, Text } from "../../components/typography";
import calendar from "../../assets/images/02-web-fundamentals/stock/calendar.jpg";
import todo from "../../assets/images/02-web-fundamentals/stock/todo.jpg";

export default () => (
  <>
    <NextCourse />
    <HomeWork1 />
    <HomeWork2 />
  </>
);

function NextCourse() {
  return (
    <Slide>
      <SplitImage src={calendar} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1">Nächstes Mal</Heading>
      <Box width="50%">
        <UnorderedList>
          <Appear>
            <ListItem>Let's reiterate</ListItem>
          </Appear>
          <Appear>
            <ListItem>Array Methoden - Tieftauchgang</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Object-orientiertes vs. funktionales-Programmieren
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Ihr möchtet nicht erben, glaubt mir</ListItem>
          </Appear>
          <Appear>
            <ListItem>Scalable Vector Graphics (SVG)</ListItem>
          </Appear>
          <Appear>
            <ListItem>CSS Übergänge und Animationen</ListItem>
          </Appear>
        </UnorderedList>
      </Box>
    </Slide>
  );
}

function HomeWork1() {
  return (
    <Slide>
      <SplitImage src={todo} boxProps={{ width: "40%" }} />
      <Heading fontSize="h1" color="blue">
        Hausaufgaben
      </Heading>
      <Box width="56%">
        <OrderedList>
          <Appear>
            <ListItem>
              <b>Kleine Todo-Seite entwickeln (mit CSS)</b> <br />
              <UnorderedList>
                <Appear>
                  <ListItem>
                    Es gibt ein Text-Feld, indem die Aufgaben geschrieben
                    werden.
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Nach dem Absenden wird die Aufgabe in eine Liste auf der
                    Seite angezeigt.
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Ein kleines X kann angeklickt werden, um eine Aufgabe zu
                    entfernen.
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Die Aufgaben sind im `localStorage` abgelegt, damit sie beim
                    page reload wieder angezeigt werden.
                  </ListItem>
                </Appear>
              </UnorderedList>
            </ListItem>
          </Appear>
        </OrderedList>
      </Box>
    </Slide>
  );
}

function HomeWork2() {
  return (
    <Slide>
      <SplitImage
        src="https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif"
        boxProps={{ width: "40%" }}
        imageProps={{ style: { objectFit: "contain" } }}
      />
      <Heading fontSize="h1" color="blue">
        Hausaufgaben
      </Heading>
      <Box width="56%">
        <OrderedList start="2">
          <ListItem>Denkt weiter über eure Projektidee nach... ;)</ListItem>
        </OrderedList>
      </Box>
    </Slide>
  );
}
