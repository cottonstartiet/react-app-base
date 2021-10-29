import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import { useAuth } from '../hooks';
import { firebaseApp, firebaseUiConfig } from '../services/firebase';

export default function Login() {
    const { signinStatus } = useAuth();
    const location = useLocation();

    if (signinStatus === 'inprogress') {
        return (
            <Loading />
        );
    }

    if (signinStatus === 'signedin') {
        let { from }: any = location.state || { from: { pathname: "/dashboard" } };
        return <Redirect to={from} />
    }
    return (
        <StyledFirebaseAuth
            uiConfig={firebaseUiConfig}
            firebaseAuth={firebaseApp.auth()}
        />
    );
}