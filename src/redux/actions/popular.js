import http from '../../helpers/http';

const getPopular = () => {
  return {
    type: 'GET_POPULAR',
    payload: http().get('/history/vehicles?limit=20'),
  };
};

export default getPopular;
