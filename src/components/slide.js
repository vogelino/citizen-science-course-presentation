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
  ...props,
  padding: "88px 24px",
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
  <OriginalSlide {...getFallbackProps(props)}>
    {!props.noBreadcrumb && (
      <FlexBox
        position="absolute"
        top="24px"
        width="calc(100% - 48px)"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="grayLight"
        padding="0 0 24px 0"
      >
        <FlexBox>
          <Text {...breadcrumbProps}>Citizen Science</Text>
          {props.breadcrumb && (
            <>
              <Text
                {...breadcrumbProps}
                color="gray"
                opacity={0.5}
                fontFamily="monospace"
                padding="0px 12px"
              >
                {"->"}
              </Text>
              <Text {...breadcrumbProps}>{props.breadcrumb}</Text>
            </>
          )}
        </FlexBox>
        <Text
          fontSize="16px"
          lineHeight="24px"
          color="gray"
          fontFamily="monospace"
          opacity={0.5}
        >
          {dateToday}
        </Text>
      </FlexBox>
    )}
    {props.children}
  </OriginalSlide>
);
