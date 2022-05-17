import axios from 'axios';

const {REACT_APP_BACKEND_URL} = process.env;

const http = token => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: 'https://rentskuy.herokuapp.com',
    headers,
  });
};

export default http;
