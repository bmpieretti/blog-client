# Blog App
> My personal playground for building an entire app from the initial UX design to full product deployment using a bunch of random stuff I wanted to learn: Client Edition

Does whatever a Blog App does

This project is a WIP

## Developing

### Built With
* [React](https://reactjs.org/) for view library
* [Jest](https://facebook.github.io/jest/) for unit testing
* [Styled Components](https://github.com/styled-components/styled-components) for modular css
* [Webpack](https://webpack.js.org/) for bundling js modules

### Prerequisites

Download Node 8 or above from [here](https://nodejs.org/en/)

### Setting Up

Run the following commands to set up the project:

```shell
git clone https://github.com/bmpieretti/blog-client.git
cd blog-client
npm i
```

This will clone the repo, take you into the cloned directory, and start installing the npm dependencies

### Running Locally

In order to run the app locally run the following commands:

```shell
  npm run build:local
  npm run start:local
```

The build command runs the webpack dll config and generates the `vendor.dll.js` script. This only needs to be run once to generate the file or if the `webpack.dll.config.js` file changes. The start starts up a webpack dev server using the development mode for the webpack bundle and serves the app on [http://localhost:8080](http://localhost:8080). A bundle analyzer is also server over locally when running in dev, and can be accessed via [http://localhost:8888](http://localhost:8888).

## Prod Configuration

A production version can also be run via the `npm run build && npm start` commands, which uses the production mode of the webpack configs

## Tests

This module is unit tested via Jest, and the unit test suite can be run via:

```shell
npm test
```

A test watch option for Jest can be run via:

```shell
npm run test:watch
```

Test coverage can be viewed when running:

```shell
npm run test:coverage
```

Verification of Tree Dependencies, Eslint, Stylelint, and tests can be run via:

```shell
npm run verify
```

## Licensing

This project is fully open source and can be used and modified freely. Check out the [license](https://github.com/bmpieretti/blog-client/blob/master/LICENSE) for more info.

## Related Links
* [blog-api](https://github.com/bmpieretti/blog-api.git)
