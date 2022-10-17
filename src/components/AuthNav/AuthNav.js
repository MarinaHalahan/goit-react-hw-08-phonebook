import { AuthBox } from './AuthNav.styled';
import { LoginLink, SignupLink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <AuthBox>
      <LoginLink to="/login">Log In</LoginLink>
      <SignupLink to="/register">Sign Up</SignupLink>
    </AuthBox>
  );
};
