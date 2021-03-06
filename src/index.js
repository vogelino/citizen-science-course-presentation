import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Box, Grid } from "spectacle";
import { Deck } from "./components/deck";
import { Slide } from "./components/slide";
import { Heading, Text } from "./components/typography";
import Kickoff from "./slides/kickoff";
import WebFundamentals1 from "./slides/webfundamentals";
import WebFundamentals2 from "./slides/webfundamentals2";
import WebFundamentals3 from "./slides/webfundamentals3";
import ManipulateHTMLwithJs from "./slides/manipulateHTMLwithJs";

const presentations = [
  { title: "Course Kickoff", path: "kickoff", Component: Kickoff },
  {
    title: "Web Fundamentals 1",
    path: "web-fundamentals",
    Component: WebFundamentals1,
  },
  {
    title: "Web Fundamentals 2",
    path: "web-fundamentals-2",
    Component: WebFundamentals2,
  },
  {
    title: "Web Fundamentals 3",
    path: "web-fundamentals-3",
    Component: WebFundamentals3,
  },
  {
    title: "DOM Manipulation",
    path: "html-manipulation-with-js",
    Component: ManipulateHTMLwithJs,
  },
];

const Presentation = () => (
  <HashRouter basename={process.env.PUBLIC_URL || process.env.VERCEL_URL}>
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <Deck>
              <Slide noBreadcrumb padding="32px 24px">
                <Box>
                  <Heading fontSize="h1">Alle Kurspr√§sentationen</Heading>
                  <Grid gridTemplateColumns="1fr">
                    {presentations.map((presentation, index) => (
                      <Box
                        key={presentation.path}
                        padding="16px 0 0"
                        margin="16px 0 0"
                        borderTop="1px dashed"
                        borderColor="grayLight"
                      >
                        <Grid
                          gridTemplateColumns="auto 1fr 1fr 1fr"
                          gridGap="48px"
                        >
                          <Text
                            fontFamily="monospace"
                            fontSize="24px"
                            color="gray"
                          >
                            {index + 1}
                          </Text>
                          <Text fontWeight="bold">{presentation.title}</Text>
                          <Text>
                            <Link
                              to={`/${presentation.path}?presenterMode=false`}
                            >
                              Slides
                            </Link>
                          </Text>
                          <Text>
                            <Link
                              to={`/${presentation.path}?presenterMode=true`}
                            >
                              Presenter Mode
                            </Link>
                          </Text>
                        </Grid>
                      </Box>
                    ))}
                  </Grid>
                </Box>
              </Slide>
            </Deck>
          }
        />
        {presentations.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  </HashRouter>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
