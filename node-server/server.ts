import { CorsOptions } from "cors";
import express, { Express } from 'express';
import { profilesController } from "./controllers";
import logger from "./logger";
import cors from 'cors';
import helmet from 'helmet';
import { IMongodbConfig } from "./types";
import mongoose from 'mongoose';
import { firebaseMiddleware } from "./middleware";

interface IServerOptions {
    corsOptions: CorsOptions;
    mongodbConfig: IMongodbConfig;
}

const server = {
    async initialize(app: Express, options: IServerOptions) {
        const { corsOptions, mongodbConfig } = options;
        // Setup Cors
        app.use(cors(corsOptions));
        // Basic security
        app.use(helmet());
        app.use(express.json());

        // Conect to MongoDB Server
        try {
            await mongoose.connect(mongodbConfig.connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
        } catch (error) {
            logger.error({
                message: 'Error while connecting to MongoDB',
                data: error
            });
            throw error;
        }

        // Configure routes
        // With auth
        app.get('/api/profile', firebaseMiddleware.checkIfAuthenticated, profilesController.getUserProfile);
        app.patch('/api/profile', firebaseMiddleware.checkIfAuthenticated, profilesController.updateUserProfile);
    },
    start(app: Express, port: number) {
        app.listen(port, () => logger.info({
            message: `App listening on PORT ${port}`
        })).on('error', (error) => logger.error({
            message: `Error starting node server on PORT ${port}`,
            data: error
        }));
    }
}

export default server;