import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks';
import Loading from './Loading';

export default function PrivateRoute(props) {
  const { signinStatus, user } = useAuth();
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;

  if (signinStatus === signinStatus.inprogress) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) => (user ? (
        children
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {
            from: location
          }
        }}
        />
      ))}
    />
  );
}
