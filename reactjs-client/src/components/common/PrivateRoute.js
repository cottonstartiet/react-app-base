import { Redirect, Route } from 'react-router-dom';
import { useAuth, signinStatus } from '../hooks';
import Loading from './Loading';

function PrivateRoute(props) {
    const { signinStatus, user } = useAuth();
    const { children, ...rest } = props;

    if (signinStatus === signinStatus.inprogress) {
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