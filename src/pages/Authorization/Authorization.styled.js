import styled from 'styled-components';
import {
  Form,
  Label,
  Input,
  Button,
} from '../../components/ContactForm/ContactForm.styled';
const LoginForm = styled(Form)`
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  padding: 15px 15px 50px 15px;
`;

const LoginLabel = styled(Label)``;
const LoginInput = styled(Input)`
  min-height: 25px;
  margin-bottom: 10px;
`;
const LoginButton = styled(Button)`
  margin-right: auto;
  margin-left: auto;
  min-height: 35px;
  min-width: 105px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
`;

export { LoginForm, LoginLabel, LoginInput, LoginButton };
