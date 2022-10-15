import { AuthBox } from './AuthNav.styled';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <AuthBox>
      <Link to="/login">Log In</Link>
      <Link to="/register">Sign Up</Link>
    </AuthBox>
  );
};
