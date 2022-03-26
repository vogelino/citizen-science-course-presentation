import React from "react";
import {
  Heading as OriginalHeading,
  ListItem as OriginalListItem,
  Text as OriginalText,
  CodeSpan as OriginalCodeSpan,
} from "spectacle";

const commonToAll = {
  textAlign: "left",
};

const textSizedDefaults = {
  fontWeight: "normal",
  fontSize: "32px",
  lineHeight: "48px",
};

const getHeadingFallbackProps = (props) => ({
  ...commonToAll,
  fontWeight: "bold",
  fontSize: "56px",
  lineHeight: "56px",
  margin: 0,
});

export const Heading = (props = {}) => (
  <OriginalHeading {...props} {...getHeadingFallbackProps(props)} />
);

const getListItemFallbackProps = (props) => ({
  ...commonToAll,
  ...textSizedDefaults,
});

export const ListItem = (props = {}) => (
  <OriginalListItem {...props} {...getListItemFallbackProps(props)} />
);

const getTextFallbackProps = (props) => ({
  ...commonToAll,
  ...textSizedDefaults,
});

export const Text = (props = {}) => (
  <OriginalText {...props} {...getTextFallbackProps(props)} />
);

const getCodeSpanFallbackProps = (props) => ({
  ...commonToAll,
  ...textSizedDefaults,
  fontSize: "1em",
  lineHeight: "0.8em",
});

export const CodeSpan = (props = {}) => (
  <OriginalCodeSpan {...props} {...getCodeSpanFallbackProps(props)} />
);
