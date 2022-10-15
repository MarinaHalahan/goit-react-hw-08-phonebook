import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Contacts from 'pages/Contacts/Contacts';
import Registration from '../pages/Registration/Registration';
import Auth from '../pages/Authorization/Authorization';
import AppBar from '../components/AppBar/AppBar';
import { authOperations } from '../redux/auth';
// import NotFound from '../pages/NotFound';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Auth />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
