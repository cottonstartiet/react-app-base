import axios, { AxiosResponse } from 'axios';
import { firebaseApp } from './firebase';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
axios.defaults.baseURL = apiBaseUrl;
axios.interceptors.request.use(async (req) => {
    const token = await firebaseApp.auth().currentUser?.getIdToken();
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
    }
    return req;
})

const requestHelper = {
    async get<TResponse>(url: string) {
        return axios.get<TResponse>(url);
    },
    async post<TResponse>(url: string, payload: any): Promise<AxiosResponse<TResponse>> {
        return axios.post(url, payload);
    },
    async patch<TResponse>(url: string, payload: any): Promise<AxiosResponse<TResponse>> {
        return axios.patch(url, payload);
    }
}

export default requestHelper;