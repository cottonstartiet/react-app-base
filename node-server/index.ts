import dotenv from 'dotenv';
dotenv.config(); // This needs to be as early as possible as firebase service gets initialized even before the server is in running state.
import express from 'express';
import config from 'config';
import { IMongodbConfig, IServerConfig } from './types';
import logger from './logger';
import { CorsOptions } from 'cors';
import * as server from './server';

const app = express();
const serverConfig = config.get<IServerConfig>('server');
const mongodbConfig = config.get<IMongodbConfig>('mongodb');
const corsOptions: CorsOptions = {
    origin: serverConfig.corsOptions.allowedOrigins,
    optionsSuccessStatus: serverConfig.corsOptions.optionsSuccessStatus
};

async function main() {
    try {
        await server.connectToDb(mongodbConfig);
        await server.start(app, serverConfig.port, corsOptions)
    } catch (error) {
        logger.error({
            message: 'Startup  error',
            data: error
        });

        throw error;
    }
}

main()
    .then(() => logger.info({
        message: 'Application started successfully.'
    }))
    .catch(error => {
        logger.error({
            message: 'Server startup error',
            data: error
        });
        process.exit(1);
    });