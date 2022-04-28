import { Express } from 'express'
import { correlator, checkIfAuthenticated } from "../middleware";
import healthCheckRouter from './healthCheck';
import profilesRouter from './profiles';

export default function configureRoutes(app: Express) {
    // Configure routes
    app.use('/api/*', correlator());

    // Without Auth
    // Health check
    app.use('/api/health', healthCheckRouter);

    // With auth
    app.use('/api/*', checkIfAuthenticated);
    // Porfile
    app.use('/api/profiles', profilesRouter);
}