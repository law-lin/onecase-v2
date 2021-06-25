import { Route, Redirect } from 'react-router-dom';

import { useCurrentUserId } from 'utils/services';

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  const { loading, error, data } = useCurrentUserId();

  if (restricted === undefined || restricted === null) {
    restricted = false;
  }

  const isAuthorized = () => {
    return data?.currentUserId !== undefined && data?.currentUserId !== null;
  };

  if (loading) return null;

  if (!isAuthorized()) {
    localStorage.removeItem('token');
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized() && restricted ? (
          <Redirect to='/home' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
