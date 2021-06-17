import { CorsOptions } from "cors";
import express, { Express } from 'express';
import profilesController from "./controllers/profilesController";
import logger from "./logger";
import { checkIfAuthenticated } from "./middleware/firebaseAuthMiddleware";
import cors from 'cors';
import helmet from 'helmet';

const server = {
    initialize(app: Express, corsOptions: CorsOptions) {
        // Setup Cors
        // app.options('*', cors)
        app.use(cors(corsOptions));
        app.use(helmet());
        app.use(express.json())

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