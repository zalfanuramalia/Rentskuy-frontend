import http from '../../helpers/http';
import qs from 'qs';

export const getCar = () => {
  return {
    type: 'GET_CAR',
    payload: http().get('/vehicles/category/1?&limit=50'),
  };
};

export const getMotorbike = () => {
  return {
    type: 'GET_MOTORBIKE',
    payload: http().get('/vehicles/category/2?&limit=50'),
  };
};

export const getBike = () => {
  return {
    type: 'GET_BIKE',
    payload: http().get('/vehicles/category/3?&limit=50'),
  };
};

export const getListCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: http().get('/category'),
  };
};

export const addCategory = (token, category) => {
  const data = {name: category};
  return {
    type: 'ADD_CATEGORY',
    payload: http(token).post('/category', qs.stringify(data)),
  };
};
