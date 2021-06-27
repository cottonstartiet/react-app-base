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
1. `cors` for allowing requests coming from web client.
1. Run the server in dev mode with support for typescript compilation and server restart automatically wheneveryou change code.

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

### How to run?
Follow the steps below to run the node api server:

**Steps**
1. Rename `.env.sample` to `.env`. This file will contain all your secrets and connection strings.
1. Provide the values required in the `.env` file.

**On Windows:**
Open a command prompt in the root of the repository and run the below or opena a command prompt in the `node-server` directory:
```
cd node-server
```
Install npm packages
```
npm install
```
Run the server in dev mode
```
npm run dev
```  
### Production Build and Deplyment
Create a build
```
npm run build
```
This will create the build in `/dist` folder. To deploy this to production, you will need to copy the `.env` file to the `/dist` folder, provide the setting in the `.env` file based on the environment where you want to deploy your application. These values could be different for various environments.



## React Frontend
A basic react fontend bootstrapped using create-react-app and is integrated with the node-server. The frontend itself does not use any UI library as people have different choices and prefernces. The project provides a frontend that calls the backend node api to get data from MongoDB. 
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