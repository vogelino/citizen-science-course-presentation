import React from "react";
import { Box } from "spectacle";
import { Heading, Text } from "./typography";

export const Quote = ({ children, source, ...props }) => (
  <Box
    borderLeft="3px solid"
    borderColor="purple"
    padding="0px"
    marginTop="32px"
  >
    <Heading
      color="black"
      margin="0px"
      fontStyle="italic"
      fontWeight="normal"
      padding="0 0 0 40px"
      fontSize="h2"
      lineHeight={props.lineHeight || "1.25em"}
      {...props}
    >
      {children}
      {source && (
        <Text color="gray" margin="1rem 0 0 0" fontSize="28px">
          — {source}
        </Text>
      )}
    </Heading>
  </Box>
);
