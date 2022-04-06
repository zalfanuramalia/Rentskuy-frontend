import http from '../../helpers/http';
import qs from 'qs';

const onLogin = (email, password) => {
  try {
    const data = {email: email, password: password};
    return {
      type: 'AUTH_LOGIN',
      payload: http().post('/auth/login', qs.stringify(data)),
    };
  } catch (e) {
    console.log(e);
  }
};

export default onLogin;

export const getProfile = token => {
  return {
    type: 'GET_PROFILE',
    payload: http(token).get('/profile'),
  };
};
