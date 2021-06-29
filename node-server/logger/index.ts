import { ILogData } from "../types";
import executionContext from "../utils/executionContext";
import winstonlogger from "./winstonLogger";

const logger = {
    info(log: ILogData) {
        const context = executionContext.get();
        const payload = { ...log, ...context };
        winstonlogger.info({
            level: 'info',
            ...payload
        });
    },
    error(log: ILogData) {
        const context = executionContext.get();
        const payload = { ...log, ...context };
        winstonlogger.error({
            level: 'error',
            ...payload
        })
    }
}

export default logger;