import React from "react";
import {
  Appear,
  Box,
  FlexBox,
  Grid,
  Image,
  ListItem,
  UnorderedList,
} from "spectacle";
import { Slide } from "../../components/slide";
import { Heading, Text } from "../../components/typography";
import toc from "../../assets/images/02-web-fundamentals/stock/toc.jpg";
import cables from "../../assets/images/02-web-fundamentals/stock/cables.jpg";
import browserHtmlInterpretation from "../../assets/images/02-web-fundamentals/graphics/BrowserHtmlInterpretation.svg";
import { CodePane } from "../../components/codePane";

export default () => (
  <>
    <TOC />
    <HTMLRecapOverview />
    <HTMLRecapHead />
    <HTMLRecapBody />
    <HTMLRecapLisibility />
    <HTMLTags />
    <HTMLAttributes />
    <HTMLRecapConclusion />
  </>
);

function TOC() {
  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="50%" height="100%">
        <Box
          width="100%"
          height="100%"
          position="absolute"
          backgroundColor="blue"
          style={{ mixBlendMode: "lighten" }}
          opacity="0.5"
        />
        <Image
          src={toc}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Heading fontSize="h1">Plan für heute</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>HTML / CSS Recap</ListItem>
        </Appear>
        <Appear>
          <ListItem>Statisch vs. Dynamische Seiten</ListItem>
        </Appear>
        <Appear>
          <ListItem>Web-Grundlagen</ListItem>
        </Appear>
        <Appear>
          <ListItem>Die Anwendung von JavaScript</ListItem>
        </Appear>
        <Appear>
          <ListItem>Wann JavaScript nicht benutzen</ListItem>
        </Appear>
        <Appear>
          <ListItem>Javascript Grundlagen</ListItem>
        </Appear>
        <Appear>
          <ListItem>Praktische übung</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}

function HTMLRecapOverview() {
  return (
    <Slide>
      <Heading fontSize="h1">HTML Recap</Heading>
      <Appear order={1}>
        <Box
          position="absolute"
          right="3.6em"
          top="3em"
          padding="0.4em 2em 1.4em"
          backgroundColor="purple"
        >
          <Heading
            fontSize="h2"
            position="absolute"
            right="0"
            color="white"
            lineHeight="0.8em"
          >
            XML
          </Heading>
        </Box>
      </Appear>
      <Grid height="100%" style={{ marginTop: "2em" }}>
        <CodePane
          language="html"
          showLineNumbers={false}
          highlightRanges={[[3], [11], [10]]}
        >
          {`
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meine Webseite</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <meta property="og:image" content="img/og-image.png" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <script src="script.js"></script>
  </body>
</html>
        `}
        </CodePane>
      </Grid>
    </Slide>
  );
}
function HTMLRecapHead() {
  return (
    <Slide>
      <Heading fontSize="h1">HTML Metadaten</Heading>
      <Appear order={1}>
        <Box
          position="absolute"
          right="3.6em"
          top="3em"
          padding="0.4em 2em 1.4em"
          backgroundColor="purple"
        >
          <Heading
            fontSize="h2"
            position="absolute"
            right="0"
            color="white"
            lineHeight="0.8em"
          >
            Head 💀
          </Heading>
        </Box>
      </Appear>
      <Grid height="100%" style={{ marginTop: "2em" }}>
        <CodePane
          language="html"
          showLineNumbers={false}
          highlightRanges={[
            [3, 11],
            [4, 6],
            [7, 7],
            [8, 8],
            [9, 9],
            [10, 10],
            [14, 14],
          ]}
        >
          {`
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meine Webseite</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <meta property="og:image" content="img/og-image.png" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <script src="script.js"></script>
  </body>
</html>
        `}
        </CodePane>
      </Grid>
      <Appear>
        <Box
          position="absolute"
          right="24em"
          top="32em"
          padding="0.4em 2em 1.4em"
          backgroundColor="white"
          style={{ transform: "rotate(-2deg)" }}
        >
          <Heading fontSize="h3" color="blue">
            Ausnahme: Skripte
          </Heading>
        </Box>
      </Appear>
    </Slide>
  );
}

function HTMLRecapBody() {
  return (
    <Slide>
      <Heading fontSize="h1">HTML Inhaltstruktur</Heading>
      <Appear order={1}>
        <Box
          position="absolute"
          right="3.6em"
          top="3em"
          padding="0.4em 2em 1.4em"
          backgroundColor="purple"
        >
          <Heading
            fontSize="h2"
            position="absolute"
            right="0"
            color="white"
            lineHeight="0.8em"
          >
            Body 🩱
          </Heading>
        </Box>
      </Appear>
      <Grid height="90%" style={{ marginTop: "2em", overflowY: "scroll" }}>
        <CodePane
          language="html"
          showLineNumbers={false}
          highlightRanges={[
            [3, 20],
            [4, 13],
            [5, 5],
            [6, 12],
            [7, 11],
            [8, 8],
            [14, 18],
          ]}
        >
          {`
<html>
  <head>...</head>
  <body>
    <header>
      <img src="img/logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Top 10 ways to spread fake news</h1>
      <p>...</p>
      <p>...</p>
    </main>
    <footer>...</footer>
  </body>
</html>
        `}
        </CodePane>
      </Grid>
      <Appear>
        <Box
          position="absolute"
          right="8em"
          top="16em"
          padding="0.4em 2em 1.4em"
          backgroundColor="white"
          style={{ transform: "rotate(2deg)" }}
        >
          <Heading fontSize="h3" color="blue">
            Semantische Hierarchie
          </Heading>
        </Box>
      </Appear>
      <Appear>
        <Box
          position="absolute"
          right="11em"
          top="24em"
          padding="0.4em 2em 1.4em"
          backgroundColor="white"
          style={{ transform: "rotate(-2deg)" }}
        >
          <Heading fontSize="h3" color="blue">
            Visuelle Hierarchie
          </Heading>
        </Box>
      </Appear>
    </Slide>
  );
}

function HTMLRecapLisibility() {
  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="50%" height="100%">
        <Box
          width="100%"
          height="100%"
          position="absolute"
          backgroundColor="blue"
          style={{ mixBlendMode: "lighten" }}
          opacity="0.5"
        />
        <Image
          src={cables}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Heading fontSize="h1">HTML Semantik</Heading>
      <FlexBox
        width="45%"
        height="90%"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="start"
      >
        <Box>
          <Text>
            Die Qualität des Inhalts und seiner Struktur entscheidet darüber,
            wie gut sie verstanden werden von:
          </Text>
          <UnorderedList>
            <Appear>
              <ListItem>Nutzer:innen</ListItem>
            </Appear>
            <Appear>
              <ListItem>Suchmachinen</ListItem>
            </Appear>
            <Appear>
              <ListItem>Bots & Crawlers</ListItem>
            </Appear>
            <Appear>
              <ListItem>Screen readers</ListItem>
              <ListItem>usw.</ListItem>
            </Appear>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>
  );
}

function HTMLTags() {
  return (
    <Slide>
      <Heading fontSize="h1">HTML tags</Heading>
      <Grid
        width="90%"
        height="90%"
        alignItems="center"
        justifyContent="start"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="4em"
      >
        <Box>
          <Appear>
            <Heading fontSize="h2" color="black">
              Inhaltliche
            </Heading>
          </Appear>
          <UnorderedList>
            <Appear>
              <ListItem>
                <b>Überschriften:</b>
                <br />
                h1, h2, h3, h4, h5, h6
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Textaufbau:</b>
                <br />
                p, blockquote, ul, ol, li, table, usw.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Textformatierung:</b>
                <br />
                em, strong, b, i, u, pre, usw.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Medien:</b>
                <br />
                img, video, picture, audio, usw.
              </ListItem>
            </Appear>
          </UnorderedList>
        </Box>
        <Box>
          <Appear>
            <Heading fontSize="h2" color="black">
              Strukturell
            </Heading>
          </Appear>
          <UnorderedList>
            <Appear>
              <ListItem>header, footer, article, aside, main, usw.</ListItem>
            </Appear>
          </UnorderedList>
          <Appear>
            <Heading fontSize="h2" color="black">
              Interaktiv
            </Heading>
          </Appear>
          <UnorderedList>
            <Appear>
              <ListItem>a, input, button, select, textarea, usw.</ListItem>
            </Appear>
          </UnorderedList>
          <Appear>
            <Heading fontSize="h2" color="black">
              Ergänzend
            </Heading>
          </Appear>
          <UnorderedList>
            <Appear>
              <ListItem>label, figcaption, details, fieldset, usw.</ListItem>
            </Appear>
          </UnorderedList>
        </Box>
      </Grid>
    </Slide>
  );
}

function HTMLAttributes() {
  return (
    <Slide>
      <Heading fontSize="h1">HTML attributes</Heading>

      <Grid height="90%" style={{ marginTop: "2em", overflowY: "scroll" }}>
        <CodePane
          language="html"
          showLineNumbers={false}
          highlightRanges={[
            [1, 6],
            [8, 14],
          ]}
        >
          {`
<img
  src="img/logo.png"
  alt="Logo"
  width="600"
  height="300"
/>

<a
  href="/about"
  target="_blank"
  rel="noopener noreferrer"
>
  About
</a>
        `}
        </CodePane>
      </Grid>
    </Slide>
  );
}

function HTMLRecapConclusion() {
  return (
    <Slide>
      <Box position="absolute" right="0px" top="0px" width="50%" height="100%">
        <FlexBox
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={browserHtmlInterpretation} />
        </FlexBox>
      </Box>
      <Heading fontSize="h1">HTML: Zusammenfassung</Heading>
      <Grid
        width="90%"
        height="90%"
        alignItems="center"
        justifyContent="start"
        gridTemplateColumns="3fr 2fr"
      >
        <UnorderedList>
          <Appear>
            <ListItem>HTML ist Rohtext in einer .html-Datei</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Die beinhaltet Metadaten (Head) und strukturiertes Inhlat (Body)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Der Browser parst den Code von oben nach unten.</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Es lädt zusätzliche Ressourcen wie CSS-Dateien,
              JavaScript-Dateien, Bilder usw.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Es übersetzt den HTML-Inhalt und das CSS in Pixels auf dem
              Bildschirm
            </ListItem>
          </Appear>
        </UnorderedList>
      </Grid>
    </Slide>
  );
}
