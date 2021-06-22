import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import config from 'config';
import { IMongodbConfig, IServerConfig } from './types';
import server from './server';
import logger from './logger';
import { CorsOptions } from 'cors';

async function main() {
    const serverConfig = config.get<IServerConfig>('server');
    const mongodbConfig = config.get<IMongodbConfig>('mongodb');

    const app = express();
    const corsOptions: CorsOptions = {
        origin: serverConfig.corsOptions.allowedOrigins,
        optionsSuccessStatus: serverConfig.corsOptions.optionsSuccessStatus
    };
    await server.initialize(app, {
        corsOptions,
        mongodbConfig
    });
    server.start(app, serverConfig.port);
}

main()
    .then(() => logger.info({
        message: 'Application started successfully.'
    }))
    .catch(error => logger.error({
        message: 'Server startup error',
        data: error
    }))