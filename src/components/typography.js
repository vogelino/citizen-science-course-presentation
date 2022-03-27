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
  margin: "0px 0px 16px 0px",
  padding: "0px",
  ...props,
  fontWeight: (({ fontSize, fontWeight }) => {
    if (fontWeight) return fontWeight;
    if (fontSize === "h2") return "normal";
    return "bold";
  })(props),
  fontSize: fontSizer(props),
  lineHeight: (({ fontSize, lineHeight }) => {
    if (lineHeight) return lineHeight;
    return fontSizer({ fontSize });
  })(props),
});

export const Heading = (props = {}) => (
  <OriginalHeading {...getHeadingFallbackProps(props)} />
);

const getListItemFallbackProps = (props) => ({
  ...commonToAll,
  ...textSizedDefaults,
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
