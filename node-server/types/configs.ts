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