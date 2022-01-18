const express = require('express');
const logger = require("./logger");
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const correlator = require('./middleware/correlator');
const checkIfAuthenticated = require('./middleware/checkIfAuthenticated')
// const profiles = require('./routes/profiles');
// const health = require('./routes/healthCheck');

module.exports = {
    async initialize(app, options) {
        const { corsOptions, mongodbConfig } = options;
        // Setup Cors
        app.use(cors(corsOptions));
        // Basic security
        app.use(helmet());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

        // Conect to MongoDB Server
        try {
            console.log(mongodbConfig);
            await mongoose.connect(mongodbConfig.connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (error) {
            console.log(error);
            logger.error({
                message: 'Error while connecting to MongoDB',
                error
            });
            throw error;
        }

        // Configure routes
        app.use('/api/*', correlator());

        // Without Auth
        // Health check
        // app.get('/api/health', health);

        // With auth
        app.use('/api/*', checkIfAuthenticated);
        // Porfile
        // app.use('/api/profile', profiles);
    },
    start(app, port) {
        app.listen(port, () => logger.info({
            message: `App listening on PORT ${port}`
        })).on('error', (error) => {
            console.log(error);
            logger.error({
                message: `Error starting node server on PORT ${port}`,
                error
            })
        });
    }
}