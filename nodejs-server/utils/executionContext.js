const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();
const executionContext = {
    init(options, next) {
        return asyncLocalStorage.run({
            correlationId: options.correlationId
        }, () => {
            return next();
        })
    },
    get() {
        const store = asyncLocalStorage.getStore();
        return store
    }
}

module.exports = executionContext;