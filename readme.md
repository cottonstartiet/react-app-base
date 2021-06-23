# node-app-starter + react

## Node.js Server

Setting up a new application in node requires a good amount of work. Most tutorials online do not follow patterns that will scale to larger teams in real production scenarios. For anyone starting new or even for experienced developers that are new to node.js, its very common to get confused and they end up spending a lot of time in just setting up the base application. 

The aim of this project is to provide a starter app with patterns, practices and structure that can bse used to create a production level service.

This project is an opinionated take on creating a base application that can be reused for creating any type of node.js api's. 

You can swap out libraries and replace them with other libraries you are comfortable with.

If you already have an application and are trying to solve some issue, this would be a good starting point to see how those issues are solved in other applications.

This project contains:
1. Node.js api server using express
1. React front end

### Features
1. `Firebase Authentication:` Authenticate users via firebase on the client and while making api calls, pass the token as `Authorization Bearer <token>` header to access secure content.
1. `MongoDB:` - Save data in MongoDB usnig `mongoose`.
1. `Auth middleware:` Secure any api endpoint by simply adding the firebase auth middleware.
1. `Logger:` Use winston logger to log to a file.
1. `config` & `dotenv` modules for managing configurations in your application. config module along with `dotenv` provides a convenient way to manage configurations in local development as well as production deployments.
1. `firebase-admin` sdk to manage firebase.
1. `express` server for creating REST api's.
1. `helmet` for basic server side security.
1. `cors` for managing requests coming from web client.

## Code
The server code written in typescript and is divided into modules and layers.

### Folder structure: 
```js
config
|-default.json // Contains configurations and secrets that are used by the application 
controllers
|-profilesController.ts // Controllers that contains the actual implementation for an api endpoint
logger
|-//Winston logger related 
logs
|- // Logs directory created by winston
middleware
|- firebaseAuthMiddleware.ts // Directory to hold all your middlewares
models
|- // Models and business entities
services
|- // Services are wrappers that encapsulate interaction with services/db's outide this api. Ideally you should have one service per external endpoint 
types
|- // Typescript types and interfaces 
- index.ts // Starting point of the application that initializes and starts the server
- server.ts // Actual express server
```


## React Frontend
This repo also contains a basic creat font end that was bootstrapped using Create-React-App. The frontend itself does not use any UI library as people have different choices and prefernces. The project provides a sample frontend that calls the backend node api to get data from MongoDB. 
You can use these together as a starting point and extend this to a larger application.

### Fatures:
1. Built using Typescript.
1. React app using CRA.
1. No UI library dependency so you can use any library you want.
1. Redux/Redux-Toolkit for state management fetching data.
1. Axios for api calls.
1. Firebase for user authentication.
1. React-Router for navigation
1. Private routes using react-router to handle auth/unauth routes.
1. Nested routing for Dashboard like applications.
1. Simple way to manage api response status to show loading status.
1. PWA support by opting into PWA features provided by create-react-app 

### Code
The server code written in typescript and is divided into components and layers.

### Folder Structure
```js
components
|- // Core UI components that you might share across views 
hooks
|- useAuth.ts // Hook that handles firebase authentication
|- // Reusable react hooks 
services
|- // Any interaction with external services should be in a service. Ideally one file for each external service.
store
|- // Redux store and states implemented using redux-toolkit 
types
|- // Typescript types
utils
|- // Helpers and utils
views
|- // Folder that contains pages and their sub views
App.tsx // Actual react application. Load redux provider.
index.tsx // Starting point of application
Routes.tsx // Application routes
service-worker.ts // PWA related file from CRA
serviceWorkerRegistration.ts // PWA related file from CRA
setupTests.ts // File from CRA
```

## ToDo
- Support for GraphQL
- Encapsulate DB layer
- Swagger integration
- Api input validation
- Error handling middleware
- More clients
    - React-Native
    - Flutter