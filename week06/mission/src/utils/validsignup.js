const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]*[A-Za-z0-9\-]+/;

function validateSignup(values) {
    const errors = {};
    
    if (!values.email) {
        errors.email = '이메일을 반드시 입력해주세요.';
    } else if (!emailPattern.test(values.email)) {
        errors.email = '올바른 이메일 형식이 아닙니다. 다시 확인해주세요.';
    }
    
    if (!values.password) {
        errors.password = '비밀번호는 4자 이상이어야 합니다.';
    } else if (values.password.length < 4 || values.password.length > 16) {
        errors.password = '비밀번호는 4 ~ 16자 사이로 입력해주세요.';
    }
    
    if (!values.passwordCheck) {
        errors.passwordCheck = '비밀번호 검증 또한 필수 입력요소입니다.';
    } else if (values.password !== values.passwordCheck) {
        errors.passwordCheck = '비밀번호가 일치하지 않습니다.';
    }
  
    return errors;
}

export {validateSignup};