import { ILogData } from "../types/logging";

const logger = {
    info(log: ILogData) {
        console.info({
            level: 'info',
            ...log
        })
    },
    error(log: ILogData) {
        console.error({
            level: 'error',
            ...log
        })
    }
}

export default logger;