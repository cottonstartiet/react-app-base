import { AsyncLocalStorage } from 'async_hooks';
import { IExecutionContext, IExecutionContextOptions } from '../types';

const asyncLocalStorage = new AsyncLocalStorage<IExecutionContext>();

const executionContext = {
    init(options: IExecutionContextOptions, next: any) {
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

export default executionContext;