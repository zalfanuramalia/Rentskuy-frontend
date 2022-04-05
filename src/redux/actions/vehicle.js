import http from '../../helpers/http';

export const getDetailVehicle = id => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`),
  };
};
