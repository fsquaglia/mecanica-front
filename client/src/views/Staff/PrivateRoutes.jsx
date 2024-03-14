import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, authenticated, allowedRoles, ...rest }) => {
  if (authenticated && allowedRoles.includes(allow)) {
    return <Route {...rest} element={element} />;
  } else {
    return <Navigate to="/error" />;
  }
};

export default PrivateRoute;
