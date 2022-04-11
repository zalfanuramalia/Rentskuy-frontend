import http from '../../helpers/http';
import qs from 'qs';
import RNFetchBlob from 'rn-fetch-blob';

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

export const updateProfile = (
  id,
  token,
  name,
  gender,
  email,
  address,
  number,
  birthdate,
  image,
) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: RNFetchBlob.fetch(
      'PATCH',
      `http://192.168.1.8:5000/users/${id}`,
      {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'image',
          filename: image.fileName,
          type: image.type,
          data: RNFetchBlob.wrap(image.uri),
        },
        {name: 'name', data: name},
        {name: 'gender', data: gender},
        {name: 'email', data: email},
        {name: 'address', data: address},
        {name: 'number', data: number},
        {name: 'birthdate', data: birthdate},
      ],
    ),
  };
};
