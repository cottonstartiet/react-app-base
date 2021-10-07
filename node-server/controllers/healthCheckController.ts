import { Request, Response } from "express";
import logger from "../logger";
import { IHealthCheckResponse } from "../types";

export const healthCheckController = {
    async getApiHealth(_: Request, response: Response<IHealthCheckResponse>) {
        logger.info({
            message: 'Api health check invoked.'
        });
        response.json({
            db: 'Ok',
            api: 'Ok'
        });
    }
}