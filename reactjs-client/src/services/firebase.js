import 'firebase/auth';
import firebase from 'firebase/app';

const configuration = {
  apiKey: process.env.REACT_APP_FBASE_API_KEY,
  authDomain: process.env.REACT_APP_FBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FBASE_APP_ID
};

const firebaseApp = firebase.initializeApp(configuration);

const firebaseUiConfig = {
  signInFlow: 'popup',
  // signInSuccessUrl: '/editor',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  },
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '/tos',
  // Privacy policy url/callback.
  privacyPolicyUrl: '/privacy-policy'
};

export {
  firebaseUiConfig,
  firebaseApp
};
