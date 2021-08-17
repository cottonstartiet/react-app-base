import axios from 'axios';
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
    async post<TResponse>(url: string, payload: any) {
        return axios.post<TResponse>(url);
    },
    async patch<TResponse>(url: string, payload: any) {
        return axios.patch<TResponse>(url, payload);
    }
}

export default requestHelper;