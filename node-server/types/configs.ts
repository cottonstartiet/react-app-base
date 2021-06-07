export interface IServerConfig {
    port: number;
    corsOptions: {
        allowedOrigins: string[];
        optionsSuccessStatus: number;
    }
}

export interface IMongodbConfig {
    connectionString: string;
}

export interface IFirebaseAdminConfig {
    projectId: string;
    privateKey: string;
    clientEmail: string;
}