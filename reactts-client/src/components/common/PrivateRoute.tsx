import { Navigate, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks';
import Loading from './Loading';

function PrivateRoute(props: any) {
  const { signinStatus, user } = useAuth();
  const { children, ...rest } = props;

  if (signinStatus === signinStatus.inprogress) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={({ location }: any) => (user ? (
        children
      ) : (
        <Navigate to='/login'
          replace={true}
          state={{
            from: location
          }}
        />
      ))}
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
