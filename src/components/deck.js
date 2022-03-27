import React from "react";
import { Box, Deck as OriginalDeck, FlexBox, FullScreen } from "spectacle";
import theme from "../theme";
import { Text } from "./typography";

const template = (props) => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom="16px"
    width="calc(100% - 48px)"
    padding="0 24px"
  >
    {console.log(props)}
    <Box>
      <FullScreen color={theme.colors.gray} />
    </Box>
    <Box>
      <Text
        fontSize="24px"
        lineHeight="24px"
        padding="0px"
        color="gray"
        fontFamily="monospace"
      >
        {props.slideNumber}/{props.numberOfSlides}
      </Text>
    </Box>
  </FlexBox>
);

const getFallbackProps = (props) => ({
  template: template,
  theme: theme,
  pageSize: "13.66in 7.68in",
  transition: {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  },
});

export const Deck = (props = {}) => (
  <>
    <OriginalDeck {...getFallbackProps(props)} {...props} />
  </>
);
