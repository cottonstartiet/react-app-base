import { Express } from 'express'
import { correlator } from "../middleware/correlator";
import firebaseMiddleware from '../middleware/firebaseAuthMiddleware';
import health from './healthCheck';
import profiles from './profiles';

export default function configureRoutes(app: Express) {
    // Configure routes
    app.use('/api/*', correlator());

    // Without Auth
    // Health check
    app.use('/api/health', health);

    // With auth
    app.use('/api/*', firebaseMiddleware.checkIfAuthenticated);
    // Porfile
    app.use('/api/profiles', profiles);
}