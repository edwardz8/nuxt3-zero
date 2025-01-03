# Nuxt 3 - External API and Content v2

Fantasy application integrating external APIs. Currently refactoring from NHL API.

### ! node version = v20.18.1

### new nhl api - https://gitlab.com/dword4/nhlapi/-/blob/master/new-api.md#new-api-documentation 

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

## Prisma Setup

$ npm i prisma -D 
$ npx prisma 
$ npm i @prisma/client 
$ npx prisma init 
$ npx prisma db push 

$ npx prisma migrate dev --name init
$ npx prisma migrate deploy

$ npx prisma studio

## Setup

```bash

# npm
npm install

```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
