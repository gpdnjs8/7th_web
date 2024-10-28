/* login page */
import styled from "styled-components"
import useForm from "../hooks/useForm"             // useForm hook
import { validateLogin } from "../utils/validate";

const LoginPage = () => {
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password)
  }

  const isFormValid = !login.errors.email && !login.errors.password;

  return (
    <Container>
      <h1>로그인</h1>

      <Input
        error={login.touched.email && login.errors.email}
        type={'email'}
        placeholder={'이메일을 입력해주세요!'}
        {...login.getTextInputProps('email')}
      />
      {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}

      <Input
        error={login.touched.password && login.errors.password}
        type={'password'}
        placeholder={'비밀번호를 입력해주세요!'}
        {...login.getTextInputProps('password')}
      />
      {login.touched.password && login.errors.password && <ErrorText>{login.errors.password}</ErrorText>}

      <Button
        onClick={handlePressLogin}
        disabled={!isFormValid}
        isFormValid={isFormValid}
      >로그인</Button>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`

const Input = styled.input`
  margin: 10px 0;
  padding: 1rem;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: ${props => props.error ? '4px solid red' : '1px solid #ccc'};
  &:focus {
    border-color: #007bff;
  }
`
const ErrorText = styled.h1`
  color: red;
  font-size: 14px;
`
const Button = styled.button`
  background-color: ${(props) => (props.isFormValid ? '#ff4b6e' : '#ccc')};
  color: white;
  width: 400px;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: ${(props) => (props.isFormValid ? 'pointer' : 'not-allowed')};
  &:disabled {
    cursor: not-allowed;
  }
`

