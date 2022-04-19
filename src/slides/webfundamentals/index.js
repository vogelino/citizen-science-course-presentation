import React from "react";
import { Deck } from "../../components/deck";
import { Slide } from "../../components/slide";
import { Heading, ListItem } from "../../components/typography";
import The3WebLanguages from "./The3WebLanguages";
import HTMLRecap from "./HTMLRecap";
import CSSRecap from "./CSSRecap";
import WebRecap from "./WebRecap";
import JsUsage from "./JsUsage";
import code from "../../assets/images/02-web-fundamentals/stock/code.jpg";
import toc from "../../assets/images/02-web-fundamentals/stock/toc.jpg";
import { Appear, Box, UnorderedList, Image } from "spectacle";

export default () => (
  <Deck>
    <IntroSlide />
    <TOC />
    <The3WebLanguages />
    <WebRecap />
    <HTMLRecap />
    <CSSRecap />
    <JsUsage />
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

function TOC() {
  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="50%" height="100%">
        <Box
          width="100%"
          height="100%"
          position="absolute"
          backgroundColor="blue"
          style={{ mixBlendMode: "lighten" }}
          opacity="0.5"
        />
        <Image
          src={toc}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Heading fontSize="h1">Plan für heute</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Web Recap</ListItem>
        </Appear>
        <Appear>
          <ListItem>Die Anwendung von JavaScript</ListItem>
        </Appear>
        <Appear>
          <ListItem>Javascript Grundlagen</ListItem>
        </Appear>
        <Appear>
          <ListItem>Praktische übung</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}
