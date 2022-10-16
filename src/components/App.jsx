import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelectors } from '../redux/auth';
import Contacts from 'pages/Contacts/Contacts';
import Registration from '../pages/Registration/Registration';
import Auth from '../pages/Authorization/Authorization';
import AppBar from '../components/AppBar/AppBar';
import Home from '../pages/Home';
import { authOperations } from '../redux/auth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import NotFound from '../pages/NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectRefreshing);
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <AppBar />

      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Auth />} />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
};
