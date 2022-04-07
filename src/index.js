import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Box, Grid } from "spectacle";
import { Deck } from "./components/deck";
import { Slide } from "./components/slide";
import { Heading, Text } from "./components/typography";
import Kickoff from "./slides/kickoff";
import Second from "./slides/second";

const presentations = [
  { title: "First", path: "first", Component: Kickoff },
  { title: "Second", path: "second", Component: Second },
  { title: "Third", path: "third", Component: Second },
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
                  <Heading fontSize="h1">Alle Kurspräsentationen</Heading>
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

ReactDOM.render(<Kickoff />, document.getElementById("root"));
