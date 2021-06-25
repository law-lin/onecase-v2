import { Route } from 'react-router-dom';
import AdminLoginPage from 'pages/AdminLoginPage';
import { Redirect } from 'react-router-dom';
import { useCurrentUserRole } from 'utils/services';

const AdminRoute = ({ component: Component, ...rest }: any) => {
  const { loading, error, data } = useCurrentUserRole();

  const currentRole = data?.currentUserRole;

  const isUserLoggedIn = currentRole === 'onecase_user';

  const isAuthorized = currentRole === 'onecase_admin';

  if (loading) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? (
          <Component {...props} />
        ) : isUserLoggedIn ? (
          <Redirect to='/home' />
        ) : (
          <AdminLoginPage />
        )
      }
    />
  );
};

export default AdminRoute;
