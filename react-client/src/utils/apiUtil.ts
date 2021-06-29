import { AxiosResponse } from "axios";
import httpStatus from "http-status";
import { ApiStatus, IApiStatus } from "../types";

const apiUtil = {
    getApiStatus<T>(status: ApiStatus, response?: AxiosResponse<T>): IApiStatus<T> {
        return {
            status: status,
            data: response?.data,
            statusCode: response?.status || httpStatus.INTERNAL_SERVER_ERROR
        }
    }
}

export default apiUtil;