Citizen Science - Course Presentation Slides
============================================

This repo collects presentention slides for my seminar done @FH-Potsdam in the sommer semester 2022 called "Citizen Science - Visualize Citydata". The slides are done using the React presentation library [Spectacle](https://github.com/FormidableLabs/spectacle).

## Contents

- [Citizen Science - Course Presentation Slides](#citizen-science---course-presentation-slides)
  - [Contents](#contents)
  - [Reference](#reference)
  - [Getting Started](#getting-started)
  - [Build & Deployment](#build--deployment)

## Reference

The Spectacle core API is available in the [Spectacle Docs](https://github.com/FormidableLabs/spectacle/blob/main/README.md).

## Getting Started

1. Install dependencies

    ```sh
    $ npm install
    ```

2. Start the webpack server. The server will run at the default `webpack-dev-server` address, [`localhost:8080`](http://localhost:8080).

    ```sh
    $ npm run dev

    # Or with a specific port!
    $ npm run dev --port=3000
    ```

## Build & Deployment

Building the dist version of the project is as easy as running

```sh
$ npm run build
```

From there you can deploy the built slides  in `dist` to services like Netlify, Surge, etc!

I use Vercel to deploy my slides.
