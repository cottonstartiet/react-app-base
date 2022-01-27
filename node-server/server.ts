import { CorsOptions } from "cors";
import express, { Express } from 'express';
import logger from "./logger";
import cors from 'cors';
import helmet from 'helmet';
import { IMongodbConfig } from "./types";
import mongoose from 'mongoose';
import configureRoutes from "./routes";

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
        app.use(express.urlencoded({ extended: false }));

        // Conect to MongoDB Server
        try {
            await mongoose.connect(mongodbConfig.connectionString);
        } catch (error) {
            logger.error({
                message: 'Error while connecting to MongoDB',
                data: error
            });
            throw error;
        }

        configureRoutes(app);
    },
    start(app: Express, port: number) {
        app.listen(port, () => logger.info({
            message: `App listening on PORT ${port}`
        })).on('error', (error: any) => logger.error({
            message: `Error starting node server on PORT ${port}`,
            data: error
        }));
    }
}

export default server;