import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useAuth } from '../hooks';
import { firebaseApp, firebaseUiConfig } from '../services';

export default function FirebaseUserInfo() {
    const { signinStatus, user } = useAuth();

    if (signinStatus === 'signedout') {
        return (
            <StyledFirebaseAuth
                uiConfig={firebaseUiConfig}
                firebaseAuth={firebaseApp.auth()}
            />
        )
    }

    if (signinStatus === 'inprogress') {
        return (
            <div>
                Signing you in
            </div>
        )
    }

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