import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks';
import Loading from './Loading';
import { signinState } from '../../constants';

function PrivateRoute(props: any) {
  const navigate = useNavigate();
  const { signinStatus, user } = useAuth();
  const { children } = props;

  if (signinStatus === signinState.inprogress) {
    return <Loading />;
  }

  console.log(signinStatus);

  if (signinStatus === signinState.signedout) {
    navigate(`/login`, {
      replace: true
    });
  }

  return (children);
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
