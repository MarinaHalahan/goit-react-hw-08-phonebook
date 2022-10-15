import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import {
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginButton,
} from './Authorization.styled';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'user_email':
        setEmail(e.currentTarget.value);
        break;
      case 'user_password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.login({ email, password }));
    reset();
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginLabel htmlFor="1">Email</LoginLabel>
      <LoginInput
        id="1"
        type="email"
        value={email}
        name="user_email"
        onChange={handleChange}
        required
      />
      <LoginLabel htmlFor="2">Password</LoginLabel>
      <LoginInput
        id="2"
        type="password"
        value={password}
        name="user_password"
        minlength="3"
        // pattern="[0-9a-fA-F]{3}"
        title="Enter password that is at least 3 symbols long"
        onChange={handleChange}
        required
      />
      <LoginButton type="Submit">Log In</LoginButton>
    </LoginForm>
  );
};

export default Auth;
