import styled from 'styled-components';
import {
  Form,
  Label,
  Input,
  Button,
} from '../../components/ContactForm/ContactForm.styled';
const SignUpForm = styled(Form)`
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  padding: 25px 25px 25px 25px;
`;

const SignUpLabel = styled(Label)``;
const SignUpInput = styled(Input)`
  min-height: 25px;
  margin-bottom: 10px;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
`;
const SignUpButton = styled(Button)`
  margin-right: auto;
  margin-left: auto;
  min-height: 35px;
  min-width: 105px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
`;

export { SignUpForm, SignUpLabel, SignUpInput, SignUpButton };
