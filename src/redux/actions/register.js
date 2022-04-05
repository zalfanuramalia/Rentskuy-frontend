import http from '../../helpers/http';
import qs from 'qs';

export const userRegister = (name, email, password) => {
  try {
    const data = {name: name, email: email, password: password};
    return {
      type: 'USER_REGISTER',
      payload: http().post('/auth/register', qs.stringify(data)),
    };
  } catch (e) {
    console.log(e);
  }
};
