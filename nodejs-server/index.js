const dotenv = require('dotenv');
dotenv.config(); // This needs to be as early as possible as firebase service gets initialized even before the server is in running state.
const express = require('express');
const config = require('config');
const server = require('./server');
const logger = require('./logger');

async function main() {
    const app = express();
    const serverConfig = config.get('server');
    const mongodbConfig = config.get('mongodb');
    const corsOptions = {
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
    .catch(error => {
        logger.error({
            message: 'Server startup error',
            error
        })
    })