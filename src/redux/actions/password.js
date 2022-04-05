import http from '../../helpers/http';
import qs from 'qs';

export const forgotpass = email => {
  try {
    const data = {email: email};
    return {
      type: 'FORGOT_PASSWORD',
      payload: http().post('/auth/forgotPass', qs.stringify(data)),
    };
  } catch (e) {
    console.log(e);
  }
  // const params = new URLSearchParams();
  // params.append('email', email);
  // return {
  //   type: 'FORGOT_PASSWORD',
  //   payload: http().post('/auth/forgotPass', params),
  // };
};

export const resetPass = (email, code, password, confirmPass) => {
  try {
    const data = {
      email: email,
      code: code,
      password: password,
      confirmPass: confirmPass,
    };
    return {
      type: 'RESET_PASSWORD',
      payload: http().post('/auth/forgotPass', qs.stringify(data)),
    };
  } catch (e) {
    console.log(e);
  }
  // const params = new URLSearchParams();
  // params.append('email', email);
  // params.append('code', code);
  // params.append('password', password);
  // params.append('confirmPass', confirmPass);
  // return {
  //   type: 'RESET_PASSWORD',
  //   payload: http().post('/auth/forgotPass', params),
  // };
};
