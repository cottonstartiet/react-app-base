import config from 'config';
import * as firebaseAdmin from 'firebase-admin';
import * as serviceAccount from './../creds/service-account.json';

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount as any),
});

export default firebaseAdmin;