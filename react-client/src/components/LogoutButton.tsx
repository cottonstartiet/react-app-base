import React from 'react';
import { useHistory } from 'react-router';
import { firebaseApp } from '../services/firebase';

export default function LogoutButton() {
    const history = useHistory();
    return (
        <button onClick={() => {
            firebaseApp.auth().signOut();
            history.push('/');
        }}>
            Logout
        </button>
    )
}