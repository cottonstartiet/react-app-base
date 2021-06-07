import config from 'config';
import * as firebaseAdmin from 'firebase-admin';
import { IFirebaseAdminConfig } from '../types';
const firebaseConfig = config.get<IFirebaseAdminConfig>('firebase');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
        projectId: firebaseConfig.projectId,
        privateKey: firebaseConfig.privateKey,
        clientEmail: firebaseConfig.clientEmail
    }),
});

export default firebaseAdmin;