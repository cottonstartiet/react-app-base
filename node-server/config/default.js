module.exports = {
    server: {
        port: 5001,
        corsOptions: {
            allowedOrigins: ['http://localhost:3000'],
            optionsSuccessStatus: 200
        }

    },
    mongodb: {
        connectionString: process.env.MONGODB_CONNECTION_STRING
    },
    firebase: {
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL
    }
}