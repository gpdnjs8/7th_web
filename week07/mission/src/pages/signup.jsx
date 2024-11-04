/* signup page */
import styled from "styled-components"
import useForm from "../hooks/useForm"             // useForm hook
import { validateSignup } from "../utils/validsignup";

const SignUpPage = () => {
  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      password_check: '',    // password check
    },
    validate: validateSignup,
  });

  const handlePressLogin = () => {
    console.log(signup.values.email, signup.values.password, signup.values.passwordCheck);
  }

  // check
  const isFormValid = !signup.errors.email && !signup.errors.password && !signup.errors.passwordCheck && signup.values.password === signup.values.passwordCheck;

  return (
    <Container>
      <h1>회원가입</h1>

      <Input
        error={signup.touched.email && signup.errors.email}
        type={'email'}
        placeholder={'이메일을 입력해주세요!'}
        {...signup.getTextInputProps('email')}
      />
      {signup.touched.email && signup.errors.email && <ErrorText>{signup.errors.email}</ErrorText>}

      <Input
        error={signup.touched.password && signup.errors.password}
        type={'password'}
        placeholder={'비밀번호를 입력해주세요!'}
        {...signup.getTextInputProps('password')}
      />
      {signup.touched.password && signup.errors.password && <ErrorText>{signup.errors.password}</ErrorText>}

      <Input
        error={signup.touched.passwordCheck && signup.errors.passwordCheck}
        type="password"
        placeholder="비밀번호를 다시 입력해주세요!"
        {...signup.getTextInputProps('passwordCheck')}
      />
      {signup.touched.passwordCheck && signup.errors.passwordCheck && <ErrorText>{signup.errors.passwordCheck}</ErrorText>}

      <Button
        onClick={handlePressLogin}
        disabled={!isFormValid}
        isFormValid={isFormValid}
      >회원가입</Button>
    </Container>
  );
};

export default SignUpPage;

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