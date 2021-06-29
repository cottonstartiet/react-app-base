import { AsyncLocalStorage } from 'async_hooks';
import { IExecutionContextOptions } from '../types';

export const ExecutionContext = 'EXECUTION_CONTEXT';

interface IExecutionContext {
    correlationId: string;
}

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