import { useEffect, useState } from 'react';
import { signinState } from '../constants';
import firebase from '../services/firebase';

function useAuth() {
  const [signinInfo, setSigninStatus] = useState<any>({
    status: signinState.inprogress,
    user: undefined
  });

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    setSigninStatus({
      status: signinState.inprogress,
      user: undefined
    });
    const unregisterAuthObserver = firebase.firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSigninStatus({
          status: signinState.signedin,
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
          status: signinState.signedout,
          user: undefined
        });
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return {
    signinStatus: signinInfo.status,
    user: signinInfo.user
  };
}

export {
  useAuth
}