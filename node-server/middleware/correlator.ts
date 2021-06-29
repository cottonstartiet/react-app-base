import { NextFunction, Request, Response } from "express";
import { v4 as uuid4 } from 'uuid';
import logger from "../logger";
import executionContext from "../utils/executionContext";

interface ICorrelatorOptions {
    header?: string;
}

export const DefaultHeaderName = 'x-correlation-id';

export function correlator(options?: ICorrelatorOptions) {
    const headerName = (options && options.header) || DefaultHeaderName;

    return (req: Request, res: Response, next: NextFunction) => {
        logger.info({
            message: 'middleware invoked'
        })
        const correlationId = req.headers[headerName] as string || uuid4();
        return executionContext.init({
            correlationId
        }, next);
    }
}