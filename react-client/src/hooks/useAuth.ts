import { useEffect, useState } from "react";
import { firebaseApp } from "../services/firebase";
import { IFirebaseUser } from "../types";

export type SigninStatus = 'inprogress' | 'signedin' | 'signedout';

export interface SigninInfo {
    status: SigninStatus,
    user?: IFirebaseUser
}

export function useAuth() {
    const [signinInfo, setSigninStatus] = useState<SigninInfo>({
        status: 'inprogress',
        user: undefined
    });
    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        setSigninStatus({
            status: 'inprogress',
            user: undefined
        });
        const unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
            if (!!user) {
                setSigninStatus({
                    status: 'signedin',
                    user: {
                        uid: user.uid,
                        email: user.email,
                        name: user.displayName,
                        picture: user.photoURL,
                        user_id: user.uid,
                        getIdToken: user.getIdToken
                    }
                });
            } else {
                setSigninStatus({
                    status: 'signedout',
                    user: undefined
                });
            }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return {
        signinStatus: signinInfo.status,
        user: signinInfo.user
    }
}