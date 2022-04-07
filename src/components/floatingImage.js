import React from "react";
import { Box, Image } from "spectacle";

export function FloatingImage({ src }) {
  return (
    <Box
      position="absolute"
      top="80px"
      right="80px"
      width="300px"
      height="300px"
      borderRadius="50%"
      overflow="hidden"
    >
      <Image
        src={src}
        style={{ objectFit: "cover" }}
        width="300px"
        height="300px"
      />
    </Box>
  );
}
