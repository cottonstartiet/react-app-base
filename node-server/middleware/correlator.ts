import { NextFunction, Request, Response } from "express";
import { v4 as uuid4 } from 'uuid';
import executionContext from "../utils/executionContext";

interface ICorrelatorOptions {
    header?: string;
}

export const DEFAULT_HEADER_NAME = 'x-correlation-id';

export function correlator(options?: ICorrelatorOptions) {
    const headerName = (options && options.header) || DEFAULT_HEADER_NAME;

    return (req: Request, res: Response, next: NextFunction) => {
        const correlationId = req.headers[headerName] as string || uuid4();
        return executionContext.init({
            correlationId
        }, next);
    }
}