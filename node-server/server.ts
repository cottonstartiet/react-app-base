import { CorsOptions } from "cors";
import express, { Express } from 'express';
import profilesController from "./controllers/profilesController";
import logger from "./logger";
import { checkIfAuthenticated } from "./middleware/firebaseAuthMiddleware";
const cors = require('cors');

const server = {
    initialize(app: Express, corsOptions: CorsOptions) {
        app.use(express.json())
        // Setup Cors
        app.options('*', cors(corsOptions))
        app.use(cors(corsOptions));

        // Configure routes
        // With auth
        app.get('/api/profile', checkIfAuthenticated, profilesController.getUserProfile);
    },
    start(app: Express, port: number) {
        app.listen(port, () => logger.info({
            message: `App listening on PORT ${port}`
        }));
    }
}

export default server;