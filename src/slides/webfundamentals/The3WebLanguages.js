import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  Grid,
  Image,
  ListItem,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";

export default () => (
  <>
    <Overview />
  </>
);

function Overview() {
  return (
    <Slide>
      <Heading fontSize="h1">Die 3 Sprachen des Webs</Heading>
      <Grid
        width="90%"
        height="90%"
        alignItems="center"
        justifyContent="start"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <Appear>
          <FlexBox
            justifyContent="center"
            style={{ gap: "4em" }}
            height="100%"
            flexDirection="column"
          >
            <Text fontSize="120px">🗃</Text>
            <Box>
              <Heading textAlign="center" color="black" fontSize="64px">
                HTML
              </Heading>
              <Heading textAlign="center" color="black" fontSize="32px">
                Inhalt & Struktur
              </Heading>
            </Box>
          </FlexBox>
        </Appear>
        <Appear>
          <FlexBox
            justifyContent="center"
            style={{ gap: "4em" }}
            height="100%"
            flexDirection="column"
          >
            <Text fontSize="120px">🎨</Text>
            <Box>
              <Heading textAlign="center" color="black" fontSize="64px">
                CSS
              </Heading>
              <Heading textAlign="center" color="black" fontSize="32px">
                Aussehen
              </Heading>
            </Box>
          </FlexBox>
        </Appear>
        <Appear>
          <FlexBox
            justifyContent="center"
            style={{ gap: "4em" }}
            height="100%"
            flexDirection="column"
          >
            <Text fontSize="120px">{`⚙️`}</Text>
            <Box>
              <Heading textAlign="center" color="black" fontSize="64px">
                JavaScript
              </Heading>
              <Heading textAlign="center" color="black" fontSize="32px">
                Transformationen
              </Heading>
            </Box>
          </FlexBox>
        </Appear>
      </Grid>
    </Slide>
  );
}
