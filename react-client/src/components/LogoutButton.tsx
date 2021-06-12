import React from 'react';
import { useHistory } from 'react-router';
import { firebaseApp } from '../services';

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