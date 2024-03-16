# Introduction

This monorepo contains the code that implements the [Farodyne](https://www.farodyne.com) homepage. With a frontend written using Vue 3 and a backend implemented with Node.js and Express, a sharable package of common TypeScript model definitions ensures that the combined logic reuses a common collection of application types.

As the webpage is heavily centered around one of my main hobbies, photography and digital editining, the aim of the page is to present a selection of my results in a well-structured manner. For this reason, images and videos are logically grouped together in material I have captured either during my trips, in my home studio or sketched together on my Wacom tablet.

By reflecting this grouping as different album sections on my webpage, I can easily fetch the required information for each section or album from the backend module over a simple REST API.

All the microservices that constitute the infrastructure for my homepage solution are packaged into Docker images. These images are built and pushed automatically by a GitHub actions workflow. As such, automation, maintainance and deployment of the combined, distributed application become a breeze.

## Developing the code

To install the project dependencies, simply run:

```
pnpm install
```

To run the local development server run:

```
npm run dev
```
