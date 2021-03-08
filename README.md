# Guilded

Web app for freelancer cooperation.

Currently designed as a static landing page.

## Developing

### Prerequisites

1. Node v12+ via [nvm](https://github.com/nvm-sh/nvm#readme): `nvm install`

### Setup

1. `yarn install` to install dependencies
1. `yarn test` to run test suite
1. `yarn start` to run the app in development mode
   - Open <http://localhost:3000/> in your browser

## Publishing

1. Push to the main branch on GitHub and Netlify will automatically build and
   publish a new version.

## Tech stack

### Client (Node)

- [React](https://reactjs.org/)
- [Material UI](https://material-ui.com/) components and JSS styles
- [React static](https://github.com/react-static/react-static#readme) for static
  serving
- Statically hosted on [Netlify](https://app.netlify.com/sites/guilded/)

### Server (Node)

Eventually, the plan is:

- [Express](http://expressjs.com/) server
- [Apollo server](https://www.apollographql.com/server) for GraphQL API

## Architecture

- Web config at [static.config.js](static.config.js)
- Main components at [src/components](src/components)

## Credits

- Fonts: [Bebas Kai](http://bebaskai.com/),
  [Kiona](https://creativemarket.com/EllenLuff/2095752-KIONA-A-Modern-Sans-Serif)
