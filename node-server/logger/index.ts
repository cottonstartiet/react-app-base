import { ILogData } from "../types";
import executionContext from "../utils/executionContext";
import winstonlogger from "./winstonLogger";

const logger = {
    info(log: ILogData) {
        const context = executionContext.get();
        winstonlogger.info({
            level: 'info',
            ...log,
            ...context
        });
    },
    error(log: ILogData) {
        const context = executionContext.get();
        winstonlogger.error({
            level: 'error',
            ...log,
            ...context
        })
    }
}

export default logger;