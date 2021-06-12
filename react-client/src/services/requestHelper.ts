import axios from 'axios';
import { firebaseApp } from '.';

const requestHelper = {
    async getPublic(url: string) {
        return axios.get(url);
    },
    async get(url: string) {
        const token = await firebaseApp.auth().currentUser?.getIdToken();
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    async post(url: string, payload: any) {
        const token = await firebaseApp.auth().currentUser?.getIdToken();
        return axios.post(url, payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    async put(url: string, payload: any) {
        const token = await firebaseApp.auth().currentUser?.getIdToken();
        return axios.put(url, payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export default requestHelper;