const winston = require('winston');

const winstonlogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'nodejs-ts-server' },
    transports: [
        new winston.transports.File({
            filename: 'logs/log.log',
            maxFiles: 3,
            maxsize: '5m'
        }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    winstonlogger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export default winstonlogger;