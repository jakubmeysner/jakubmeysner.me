---
name: Cubelify
order: 1

technologies:
  - JavaScript
  - TypeScript
  - Node.js
  - Vue.js
  - Vuex
  - Vuetify
  - Webpack
  - Electron
  - Apollo
  - GraphQL
  - Prisma
  - PostgreSQL
  - Redis

links:
  web: https://cubelify.com
---

A set of tools built for the Minecraft multiplayer server Hypixel.

## Web App

A web app built with Vue.js. Provides users with basic information about the project and allows them to download the
desktop app. Allows user to log in to their account (which they can do using Discord OAuth2) and manage it.

![](/assets/img/projects/cubelify/web-screenshot.png)

## Overlay

A desktop app built with Vue.js and Electron. Analyzes Minecraft's log file and uses it to provide users with
information about other players in the game from the official API.

![](/assets/img/projects/cubelify/overlay-screenshot.png)

## API

A GraphQL API built with Apollo Server. Used by the web and desktop app. Responsible for handling authentication and
providing user information. Uses Prisma as the client for the underlying PostgreSQL database. Also uses Redis.

## Discord Bot

A bot for the Discord social media platform. Handles user authentication - requires them to link their game account in
order to confirm that they're not a bot. Uses Discord.js.
