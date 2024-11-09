/* signup page */
import styled from "styled-components"
import useForm from "../hooks/useForm"             // useForm hook
import { validateSignup } from "../utils/validsignup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate(); 
  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      password_check: '',   
    },
    validate: validateSignup,
  });

  const handlePressSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        email: signup.values.email,
        password: signup.values.password,
        passwordCheck: signup.values.passwordCheck,
      });
      alert('회원가입이 성공적으로 완료되었습니다.');
      navigate('/login'); 
    } catch (error) {
      console.error('회원가입 오류:', error.response?.data || error);
      alert(error.response?.data?.message || '회원가입에 실패했습니다.');
    }
  }

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
        onClick={handlePressSignUp}
        disabled={!isFormValid}  // 폼이 유효하지 않으면 버튼 비활성화
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