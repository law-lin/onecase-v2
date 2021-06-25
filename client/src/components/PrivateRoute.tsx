import { Route, Redirect } from 'react-router-dom';

import { useCurrentUserId } from 'utils/services';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { loading, error, data } = useCurrentUserId();

  const isAuthorized = () => {
    return data?.currentUserId !== undefined && data?.currentUserId !== null;
  };

  if (loading) return null;
  return (
    <Route
      {...rest}
      render={
        (props) =>
          isAuthorized() ? (
            <Component {...props} />
          ) : (
            (window.location.href = '/')
          )
        //  <Redirect to='/' />
      }
    />
  );
};

export default PrivateRoute;
