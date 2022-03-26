import React from "react";
import { CodePane as OriginalCodePane } from "spectacle";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const getFallbackProps = (props) => ({
  theme: prism,
});

export const CodePane = (props = {}) => (
  <>
    <OriginalCodePane {...props} {...getFallbackProps(props)} />
  </>
);
