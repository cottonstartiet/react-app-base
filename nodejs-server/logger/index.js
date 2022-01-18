const executionContext = require('./../utils/executionContext');
const winstonlogger = require('./winstonLogger');

module.exports = {
    info(log) {
        const context = executionContext.get();
        winstonlogger.info({
            level: 'info',
            ...log,
            ...context
        });
    },
    error(log) {
        const context = executionContext.get();
        winstonlogger.error({
            ...log,
            ...context
        })
    }
}