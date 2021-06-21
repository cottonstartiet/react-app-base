import axios from 'axios';
import { firebaseApp } from './firebase';

async function getHeader() {
    const token = await firebaseApp.auth().currentUser?.getIdToken();
    return {
        Authorization: `Bearer ${token}`
    }
}

const requestHelper = {
    async get<TResponse>(url: string) {
        return axios.get<TResponse>(url, {
            headers: await getHeader()
        });
    },
    async post<TResponse>(url: string, payload: any) {
        return axios.post<TResponse>(url, payload, {
            headers: await getHeader()
        })
    },
    async patch<TResponse>(url: string, payload: any) {
        return axios.patch<TResponse>(url, payload, {
            headers: await getHeader()
        })
    }
}

export default requestHelper;