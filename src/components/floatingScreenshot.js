import React from "react";
import { Box, Image } from "spectacle";
import { Heading } from "./typography";

export default function FloatingScreenshot({
  title,
  headingProps = {},
  src,
  boxProps = {},
  imageProps = {},
}) {
  return (
    <Box
      width="500px"
      position="absolute"
      top="280px"
      left="200px"
      {...boxProps}
      style={{
        transform: "rotate(2deg)",
        ...(boxProps.style || {}),
      }}
    >
      <Heading
        fontSize="h3"
        zIndex="10"
        backgroundColor="blue"
        color="white"
        padding="4px 8px"
        {...headingProps}
      >
        {title}
      </Heading>
      <Image
        src={src}
        width="100%"
        {...imageProps}
        style={{
          marginTop: "-16px",
          boxShadow: "0px 4px 20px -3px rgba(0,0,0,.2)",
          ...(imageProps.style || {}),
        }}
      />
    </Box>
  );
}
