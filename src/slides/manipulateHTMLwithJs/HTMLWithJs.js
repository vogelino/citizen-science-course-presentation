import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  Grid,
  Image,
  ListItem,
  OrderedList,
  Quote,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";
import CodeSlide from "../../components/CodeSlide";
import { CodePane } from "../../components/codePane";
import { SplitImage } from "../../components/splitImage";
import doc from "../../assets/images/05-dom-manipulation/stock/document.jpg";
import dom from "../../assets/images/05-dom-manipulation/stock/dom.jpg";

export default () => (
  <>
    <Intro />
    <DocumentObject />
    <DocumentObjectExample />
    <DocumentObjectExample2 />
  </>
);

function Intro() {
  return (
    <Slide>
      <SplitImage src={dom} boxProps={{ width: "45%" }} />
      <Heading fontSize="h1">DOM Manipulation</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="4em"
      >
        <UnorderedList>
          <ListItem>Interaktivität hinzufügen</ListItem>
          <ListItem>Bestehende Elemente modifizieren</ListItem>
          <ListItem>Neue Elemente erzeugen</ListItem>
          <ListItem>Stille von Element setzen/verändern</ListItem>
          <ListItem>Elemente Animieren</ListItem>
          <ListItem>Elemente mit Daten füllen</ListItem>
          <ListItem>Und vieles mehr...</ListItem>
        </UnorderedList>
      </Grid>
    </Slide>
  );
}

function DocumentObject() {
  return (
    <Slide>
      <SplitImage src={doc} boxProps={{ width: "45%" }} />
      <Heading fontSize="h1">Document object</Heading>
      <Grid
        width="90%"
        height="90%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="4em"
        style={{ paddingTop: "4em" }}
      >
        <UnorderedList>
          <ListItem>
            Eine Eigenschaft vom globalen <code>window</code> Objekt
          </ListItem>
          <ListItem>Der Kern Element von der HTML Baumstruktur</ListItem>
          <ListItem>
            Besitzt nützliche Methoden und Eigenschaften, die das Arbeiten mit
            HTML erleichtert
          </ListItem>
        </UnorderedList>
      </Grid>
    </Slide>
  );
}

function DocumentObjectExample() {
  return (
    <Slide>
      <Heading fontSize="h1">Document object (Eigenshaften)</Heading>
      <Grid width="90%" height="90%" gridTemplateColumns="1fr">
        <UnorderedList>
          <ListItem>
            Hiflreiche Eigenshaften:
            <UnorderedList>
              <ListItem>
                <code>document.location.pathname</code>
              </ListItem>
              <ListItem>
                <code>document.title</code>
              </ListItem>
              <ListItem>
                <code>document.body</code>
              </ListItem>
              <ListItem>
                <code>document.activeElement</code>
              </ListItem>
              <ListItem>
                Und viele mehr... (
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">
                  Siehe MDN
                </a>
                )
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Grid>
    </Slide>
  );
}

function DocumentObjectExample2() {
  return (
    <Slide>
      <Heading fontSize="h1">Document object (Methoden)</Heading>
      <Grid width="90%" height="90%" gridTemplateColumns="1fr">
        <UnorderedList>
          <ListItem>
            DOM-Element zugreifen:
            <UnorderedList>
              <ListItem>
                By ID: <code>document.getElementById('myId')</code>
              </ListItem>
              <ListItem>
                By class: <code>document.getElementByClassName('myClass')</code>
              </ListItem>
              <ListItem>
                By CSS selector:{" "}
                <code>document.querySelector('ul {">"} li')</code>
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            DOM-Element modifizieren:
            <UnorderedList>
              <ListItem>
                <code>parentElement.appendChild(childElement)</code>
              </ListItem>
              <ListItem>
                <code>element.setAttribute('src', 'https://...')</code>
              </ListItem>
              <ListItem>
                <code>element.classList.add('logo')</code>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Grid>
    </Slide>
  );
}
