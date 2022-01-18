const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./service-account.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
});

module.exports = firebaseAdmin;