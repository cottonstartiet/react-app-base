import { AxiosResponse } from "axios";
import { ApiStatus, IApiStatus } from "../types";

const apiUtil = {
    getApiStatus<T>(status: ApiStatus, response?: AxiosResponse<T>): IApiStatus<T> {
        return {
            status: status,
            data: response?.data,
            statusCode: response?.status
        }
    }
}

export default apiUtil;