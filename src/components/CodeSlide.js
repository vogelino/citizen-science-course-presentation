import React, { useEffect } from "react";
import sdk from "@stackblitz/sdk";
import { Slide } from "./slide";
import { Text } from "./typography";
import { Box } from "spectacle";

export default function CodeSlide({
  title = "",
  stackBlitzId = "stackblitz-id",
  stackBlitzOptions = {},
}) {
  useEffect(() => {
    const to = setTimeout(() => {
      sdk.embedProjectId(`${stackBlitzId}-embedd`, stackBlitzId, {
        forceEmbedLayout: true,
        openFile: "script.js",
        theme: "light",
        height: 700,
        hideDevTools: false,
        view: "both",
        clickToLoad: true,
        ...stackBlitzOptions,
        ...(stackBlitzOptions.hideEditor &&
        stackBlitzOptions.hideEditor === false
          ? {}
          : { hideEditor: true }),
      });
    }, 2000);
    return () => clearTimeout(to);
  }, []);

  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="100%" height="100%">
        <div
          id={`${stackBlitzId}-embedd`}
          style={{ width: "100vw", height: "100vh" }}
        />
        {title && (
          <Box position="absolute" bottom="10px" left="72px">
            <Text color="gray">{title}</Text>
          </Box>
        )}
      </Box>
    </Slide>
  );
}
