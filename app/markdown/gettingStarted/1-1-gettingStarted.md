```mainHeading
# Getting Started with Opus UI

```markdown
You're on your way to making music! This page will teach you everything you need to plug Opus into your React application.

```divider
5px

```markdown
## Prerequisites
Before you begin, ensure you have the following set up:
- Node.js and npm
- React development environment

## Creating a New React App

If you don't have a React app set up yet, you can create a new one using any number of tools. We recommend [Vite](https://vitejs.dev/guide/), but please use whatever works for you!

## Installing Opus UI

Once you have your React app set up, you can proceed to install Opus UI and the standard component library.

```codeBash
npm install opus-ui opus-ui-components
```markdown
## Hybrid vs. Pure

There are two ways in which you can use Opus UI:

* Pure: Your application will be mostly Opus UI JSON (components, scripts and flows) with a few React components and helper functions in between
* Hybrid: This is an existing application that utilizes Opus UI within its own components (recommended if you already have an existing React application or if you will have very specialized components within your application)

Don't worry, you can always change your mind later. Choosing Pure