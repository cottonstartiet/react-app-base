import axios from 'axios';
import { firebaseApp } from './firebase';

async function getHeader() {
    const token = await firebaseApp.auth().currentUser?.getIdToken();
    return {
        Authorization: `Bearer ${token}`
    }
}

const requestHelper = {
    async get<T>(url: string) {
        return axios.get<T>(url, {
            headers: await getHeader()
        });
    },
    async post(url: string, payload: any) {
        return axios.post(url, payload, {
            headers: await getHeader()
        })
    }
}

export default requestHelper;