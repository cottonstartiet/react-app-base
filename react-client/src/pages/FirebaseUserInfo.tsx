import React from 'react';
import { useAuth } from '../hooks';
import { firebaseApp } from '../services/firebase';

export default function FirebaseUserInfo() {
    const { user } = useAuth();

    if (user) {
        return (
            <>
                {[user?.email, user?.name, user?.uid].map((value) => (
                    <div key={value}>
                        {value}
                    </div>
                ))}
                <img src={user?.picture ?? undefined} width={100} alt={user?.name ?? 'user'} />
                <div>
                    <button onClick={() => firebaseApp.auth().signOut()}>
                        Logout
                    </button>
                </div>
            </>
        );
    }

    return (
        <div>
            Unknown
        </div>
    );
}