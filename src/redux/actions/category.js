import http from '../../helpers/http';

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
