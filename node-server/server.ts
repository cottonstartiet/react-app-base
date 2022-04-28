import { CorsOptions } from "cors";
import { Express } from 'express';
import logger from "./logger";
import { IMongodbConfig } from "./types";
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import configureRoutes from "./routes";

interface IServerOptions {
    corsOptions: CorsOptions;
    mongodbConfig: IMongodbConfig;
}

export async function connectToDb(mongoConfig: IMongodbConfig) {
    try {
        await mongoose.connect(mongoConfig.connectionString);
    } catch (error) {
        logger.error({
            message: 'Error while connecting to MongoDB',
            data: error
        });
        throw error;
    }
}

export async function start(app: Express, port: number, corsOptions: CorsOptions) {
    try {
        // Setup Cors
        app.use(cors(corsOptions));

        // Basic security
        app.use(helmet());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

        // Configure express routes
        configureRoutes(app);

        app.listen(port, () => logger.info({
            message: `App listening on PORT ${port}`
        })).on('error', (error: any) => logger.error({
            message: `Error starting node server on PORT ${port}`,
            data: error
        }));
    } catch (error) {
        logger.error({
            message: "Could not start server",
            data: error
        });
        throw error;
    }

}