# Blog App
> My personal playground for building an entire app from the initial UX design to full product deployment using a bunch of random stuff I wanted to learn: Client Edition

Does whatever a Blog App does

This project is a WIP

## Developing

### Built With
* [React](https://reactjs.org/) for view library
* [Jest](https://facebook.github.io/jest/) for unit testing
* [Css Modules](https://github.com/css-modules/css-modules) for moduler css (Potentially changing this)
* [Webpack](https://webpack.js.org/) for bundling js modules
* [Apollo Client](https://www.apollographql.com/client/) for client-server communication
* [TODO: Mobx](https://github.com/mobxjs/mobx) for application wide state
* [TODO: React Intl](https://github.com/yahoo/react-intl) for i18n support
* [TODO: React Router](https://reacttraining.com/react-router/) for client side routing

### Prerequisites

Download Node 8 or above from [here](https://nodejs.org/en/)

### Setting Up

Run the following commands to set up the project:

```shell
git clone https://github.com/bmpieretti/helix-plus-client.git
cd helix-plus-client
npm i
```

This will clone the repo, take you into the cloned directory, and start installing the npm dependencies

### Running Locally

In order to run the app locally run the following command:

```shell
  npm run start:local
```

This starts up a webpack dev server using the `webpack.dev.js` bundle and serves the app on [http://localhost:8080](http://localhost:8080). A bundle analyzer is also server over locally when running in dev, and can be accessed via [http://localhost:8888](http://localhost:8888)

## Prod Configuration

A production version can also be run via the `npm run start:prod` command, which uses the `webpack.prod.js` config

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

## Licensing

This project is fully open source and can be used and modified freely. Check out the [license](https://github.com/bmpieretti/helix-plus-client/blob/master/LICENSE) for more info.

## Related Links
* [helix-plus-api](https://github.com/bmpieretti/helix-plus-api.git)
