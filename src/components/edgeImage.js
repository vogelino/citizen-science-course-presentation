import React from "react";
import { Box, Image } from "spectacle";

export function EdgeImage({ src, width = "auto", height = "100%" }) {
  return (
    <Box
      position="absolute"
      top="0px"
      right="0px"
      width="550px"
      height="550px"
      overflow="hidden"
      borderBottomLeftRadius="90%"
    >
      <Box
        width="100%"
        height="100%"
        backgroundColor="blue"
        position="absolute"
        right="0px"
        top="0px"
        opacity="0.5"
        style={{ mixBlendMode: "lighten" }}
      />
      <Image
        src={src}
        width="550"
        height="550"
        style={{ objectFit: "cover" }}
        objectFit="cover"
      />
    </Box>
  );
}
