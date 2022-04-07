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

const fontSizer = ({ fontSize }) => {
  switch (fontSize) {
    case "h1":
      return "64px";
    case "h2":
      return "48px";
    case "h3":
      return "32px";
    case "h4":
      return "24px";
    default:
      return fontSize;
  }
};

const getHeadingFallbackProps = (props) => ({
  ...commonToAll,
  margin: "16px 0px 0 0px",
  padding: "0px",
  lineHeight: "1.2em",
  fontWeight: "normal",
  ...props,
  fontSize: fontSizer(props),
});

export const Heading = (props = {}) => (
  <OriginalHeading {...getHeadingFallbackProps(props)} />
);

const getListItemFallbackProps = (props) => ({
  ...commonToAll,
  ...textSizedDefaults,
  ...props,
});

export const ListItem = (props = {}) => (
  <OriginalListItem {...getListItemFallbackProps(props)} {...props} />
);

const getTextFallbackProps = (props) => ({
  ...commonToAll,
  margin: "0px",
  padding: "0px",
  ...textSizedDefaults,
});

export const Text = (props = {}) => (
  <OriginalText {...getTextFallbackProps(props)} {...props} />
);

const getCodeSpanFallbackProps = (props) => ({
  ...commonToAll,
  ...textSizedDefaults,
  fontSize: "1em",
  lineHeight: "0.8em",
});

export const CodeSpan = (props = {}) => (
  <OriginalCodeSpan {...getCodeSpanFallbackProps(props)} {...props} />
);
