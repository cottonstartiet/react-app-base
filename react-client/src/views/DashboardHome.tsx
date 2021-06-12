import React from 'react';
import { firebaseApp } from '../services';

export default function DashboardHome() {
    return (
        <div>
            <h1>Dashboard Home</h1>
            <hr />
            <button onClick={() => firebaseApp.auth().signOut()}>Logout</button>
        </div>
    )
}