import { ILogData } from "../types";
import winstonlogger from "./winstonLogger";



const logger = {
    info(log: ILogData) {
        winstonlogger.info({
            level: 'info',
            ...log
        });
    },
    error(log: ILogData) {
        winstonlogger.error({
            level: 'error',
            ...log
        })
    }
}

export default logger;