import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SignUpForm,
  SignUpLabel,
  SignUpInput,
  SignUpButton,
} from './Registration.styled';
import { authOperations } from '../../redux/auth';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'user_name':
        setName(e.currentTarget.value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <SignUpLabel htmlFor="1">Name</SignUpLabel>
      <SignUpInput
        id="1"
        type="text"
        value={name}
        name="user_name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe,
        dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de
        Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
      <SignUpLabel htmlFor="2">Email</SignUpLabel>
      <SignUpInput
        id="2"
        type="email"
        value={email}
        name="user_email"
        onChange={handleChange}
        required
      />
      <SignUpLabel htmlFor="3">Password</SignUpLabel>
      <SignUpInput
        id="3"
        type="password"
        value={password}
        name="user_password"
        minlength="3"
        // pattern="[0-9a-fA-F]{3}"
        title="Enter password that is at least 7 symbols long"
        onChange={handleChange}
        required
      />
      <SignUpButton type="Submit">Sign Up</SignUpButton>
    </SignUpForm>
  );
};

export default Registration;
