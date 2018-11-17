## Chat App

This project was bootstrapped with Create React App. The scripts used to build this project and configuration for tests were created by the team that created Create React App. Run `npm install` or `yarn install` from the root folder to install front-end dependencies. Run `cd server` and `npm install` or `yarn install` to install dependencies for the server.

## Available Scripts

In the project directory, you can run these commands (you can also use `yarn`):

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Architecture

### Frontend

The client for this application is written utilizing `React` and `styled-components`. `styled-components` is a library that allows for styling of React components directly in an es6 environment. The instructions for this project stated to not spend too much time on front-end styling, but since I am being considered for a front-end position I decided to spend a good part of the project on front-end styling. I also decided to make most of the components presentational components, meaning that most of the logic for the client is located in the wrapper `App.js` file. I do not use Redux anywhere in the front-end (only local component state) since the state transformations did not get complex enough to warrant it. The `src/shared` folder contains constants that I use throughout the app.

### Persistance

To save members able to use the app and message state across page refreshes, I decided to use Google's Firebase service. The Firestore database I am using is completely open to the public so there are no API keys in the front-end code. I created a utility to encapsulate some of the Firebase functionality under `src/utils/Firebase.js`. There are two collections in the database: `members` and `chat-rooms`. `chat-rooms` contains docs that follow this structure: `{ name: <chat room name>, messages [{ content: <message content>, fromUser: <user who sent the message>},...]}`.

### Server

The server for this app is a very simple Node backend with one endpoint that utilizes `socket.io` for the socket-based communication. Right now, its only capability is joining rooms and sending messages. The server can be started by running `cd server` and `npm start` or `yarn start`.

### Testing

I have only written unit tests for a couple of functions in the front-end. I wanted to use those tests to demonstrate my knowledge of front-end testing frameworks and mocking node modules and custom modules. The entire application needs more testing including functional tests. That would be my next step in this project.
