import { Request, Response } from "express";
import logger from "../logger";
import { IHealthCheckResponse } from "../types";

export async function getApiHealth(_: Request, response: Response<IHealthCheckResponse>) {
    const status = {
        db: 'ok',
        api: 'ok'
    };
    logger.info({
        message: 'Api health check invoked.',
        data: status
    });
    response.json(status);
}