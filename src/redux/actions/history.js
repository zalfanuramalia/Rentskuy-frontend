import {default as axios} from 'axios';
import qs from 'qs';
import http from '../../helpers/http';

export const historyInput = (id_users, order, returned, token) => {
  var data = {
    id_users,
    id_vehicles: order,
    returned,
  };

  console.log(data);
  return {
    type: 'HISTORY_DETAIL',
    payload: http(token).post('/history', qs.stringify(data)),
  };
};

export const getDetailHistory = (token, id) => {
  return {
    type: 'GET_HISTORY',
    payload: http(token).get(`/history/${id}`),
  };
};

export const getAllHistoryUser = (token, id) => {
  return {
    type: 'ALL_HISTORY',
    payload: http(token).get(`/history/users/${id}`),
  };
};
