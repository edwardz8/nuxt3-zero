# Nuxt 3 and Content v2

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

todos

- dynamic images from methods.js 

<img class="player-img flex justify-content-center text-align-center align-items-center"
    :src="matchPlayerImage(player.name)" />

import methods from '../methods'

methods: { 
    ...methods 
 }

.player-img {
  width: 180px;
  margin: 0 auto;
}

## Prisma Setup

$ npm i prisma -D 
$ npx prisma 
$ npm i @prisma/client 
$ npx prisma init 
$ npx prisma db push 


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
