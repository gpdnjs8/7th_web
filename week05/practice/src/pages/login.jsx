/* login page */
import React from 'react';
import {useForm} from 'react-hook-form'             // useForm hook
import * as yup from 'yup'                          // yup
import {yupResolver} from '@hookform/resolvers/yup'
import './login.css';

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup.string().email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요').required('이메일을 반드시 입력해주세요.'),
    password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required(),
  })

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  });

  const onSubmit = (data) => {
    console.log('폼 데이터 제출')
    console.log(data);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h1>로그인</h1>

        {/* 이메일 */}
        <input
          type="email" placeholder="이메일을 입력해주세요!" {...register("email")}
          className="login-input"
        />
        <p className="error-message">{errors.email?.message}</p>

        {/* 비밀번호 */}
        <input
          type="password" placeholder="비밀번호를 입력해주세요!" {...register("password")}
          className="login-input"
        />
        <p className="error-message">{errors.password?.message}</p>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          disabled={!isValid}
          className={`login-button ${isValid ? 'enabled' : 'disabled'}`}
        >로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;