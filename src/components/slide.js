import React from "react";
import {
  Slide as OriginalSlide,
  FlexBox,
  Box,
  FullScreen,
  Progress,
} from "spectacle";
import theme from "../theme";
import { Text } from "./typography";

const getFallbackProps = (props) => ({
  backgroundColor: theme.colors.white,
  transition: {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  },
  textAlign: "left",
  padding: "32px 56px",
  ...props,
});

export const TitleSlide = (props = {}) => (
  <OriginalSlide {...getFallbackProps(props)} {...props} />
);

const breadcrumbProps = {
  fontSize: "24px",
  lineHeight: "24px",
  color: "gray",
  fontFamily: "header",
};

const dateToday = new Date().toLocaleDateString("de-DE", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const Slide = (props = {}) => (
  <OriginalSlide {...getFallbackProps(props)}>{props.children}</OriginalSlide>
);
