import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: 15px;
  padding: 15px 200px 15px 15px;
  border: 2px solid black;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
`;
const Input = styled.input`
  margin-bottom: 4px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 150px;
  font-weight: 600;
  background-color: beige;
  border: 1px solid grey;
  border-radius: 4px;
`;

export { Form, Label, Input, Button };
