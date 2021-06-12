import React, { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks';
import Loading from './Loading';

interface Props {
    children: ReactNode;
    [key: string]: any
}

export default function PrivateRoute(props: Props) {
    const { signinStatus, user } = useAuth();
    const { children, ...rest } = props;

    if (signinStatus === 'inprogress') {
        return <Loading />
    }

    return (
        <Route
            {...rest}
            render={({ location }) => !!user ? (
                children
            ) : (<Redirect to={{
                pathname: '/login',
                state: {
                    from: location
                }
            }} />)}
        />
    );
}