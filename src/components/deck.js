import React from "react";
import {
  Box,
  Deck as OriginalDeck,
  FlexBox,
  FullScreen,
  Progress,
} from "spectacle";
import theme from "../theme";

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={-1}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color="gray" />
    </Box>
    <Box padding="1em">
      <Progress color="gray" />
    </Box>
  </FlexBox>
);

const getFallbackProps = (props) => ({
  template: props.template || template,
  theme: props.theme || theme,
  pageSize: props.pageSize || "100vw 100vh",
  transition: props.transition
    ? {
        from: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
        },
        leave: {
          opacity: 0,
        },
      }
    : undefined,
});

export const Deck = (props = {}) => (
  <>
    <OriginalDeck {...props} {...getFallbackProps(props)} />
  </>
);
