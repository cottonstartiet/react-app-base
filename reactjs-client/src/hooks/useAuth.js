import { useEffect, useState } from 'react';
import { firebaseApp } from '../services/firebase';

const signinStatus = {
  inprogress: 'inprogress',
  signedin: 'signedin',
  signedout: 'signedout'
};

function useAuth() {
  const [signinInfo, setSigninStatus] = useState({
    status: signinStatus.inprogress,
    user: undefined
  });

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    setSigninStatus({
      status: signinStatus.inprogress,
      user: undefined
    });
    const unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSigninStatus({
          status: signinStatus.signedin,
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
          status: signinStatus.signedout,
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
  useAuth,
  signinStatus
};
