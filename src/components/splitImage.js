import React from "react";
import { Box, Image } from "spectacle";

export function SplitImage({
  src,
  boxProps = {},
  overlayProps = {},
  imageProps = {},
}) {
  return (
    <Box
      position="absolute"
      right="0px"
      top="0px"
      width="50%"
      height="100%"
      {...boxProps}
    >
      <Box
        width="100%"
        height="100%"
        position="absolute"
        backgroundColor="blue"
        {...overlayProps}
        style={{
          mixBlendMode: "lighten",
          opacity: "0.5",
          ...(overlayProps.style || {}),
        }}
      />
      <Image
        src={src}
        width="100%"
        height="100%"
        {...imageProps}
        style={{ objectFit: "cover", ...(imageProps.style || {}) }}
      />
    </Box>
  );
}
