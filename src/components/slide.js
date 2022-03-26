import React from "react";
import {
  Slide as OriginalSlide,
  MarkdownSlide as OriginalMarkdownSlide,
  MarkdownSlideSet as OriginalMarkdownSlideSet,
} from "spectacle";
import theme from "../theme";

const getFallbackProps = (props) => ({
  backgroundColor: props.backgroundColor || theme.colors.white,
  transition: props.transition
    ? {
        from: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
        },
        leave: {
          opacity: 0,
        },
      }
    : undefined,
  textAlign: "left",
});

export const Slide = (props = {}) => (
  <OriginalSlide {...props} {...getFallbackProps(props)} />
);

export const MarkdownSlide = (props = {}) => (
  <OriginalMarkdownSlide {...props} {...getFallbackProps(props)} />
);

export const MarkdownSlideSet = (props = {}) => (
  <OriginalMarkdownSlideSet {...props} {...getFallbackProps(props)} />
);
