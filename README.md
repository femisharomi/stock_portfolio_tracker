# Stock Portfolio Tracker!

We're currently developing a Stock Portfolio Tracker using React Remix, HTML/CSS, Typescript, and Javascript. This tracker will offer users a platform to monitor and manage their stock investments, providing real-time data updates and intuitive tools for analysis.
(This README is currently incomplete and will have more instructions once the project is nearer to its completion.) 

## Installation and dependencies: 

### Install runtime dependencies
From your terminal at the project root level:

```sh
npm i @remix-run/node @remix-run/react @remix-run/serve isbot@4 react react-dom
```

#### install dev dependencies
Also from the project root level:

```sh
npm i -D @remix-run/dev vite
```

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/server`
- `build/client`

©2024 FemiSharomi and Luke Ibeachum. Icons by Icons8
