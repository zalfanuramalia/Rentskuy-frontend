import http from '../../helpers/http';
import RNFetchBlob from 'rn-fetch-blob';

export const getAllVehicles = () => {
  return {
    type: 'ALL_VEHICLES',
    payload: http().get('/vehicles'),
  };
};

export const getDetailVehicle = id => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`),
  };
};

export const onReservation = (datas, qty, countDay, date) => {
  var rentStartDate = new Date(date);
  var rentEndDate = null;
  var tempDay = 0;
  if (countDay === 1) {
    rentEndDate = rentStartDate;
  } else {
    const dayTemp = countDay - 1;
    tempDay = rentStartDate.getDate() + dayTemp;
    rentEndDate = new Date(new Date().setDate(tempDay));
  }

  const total = qty * datas.price * countDay;

  const data = {
    idVehicle: datas.id,
    brand: datas.brand,
    image: datas.image,
    qty,
    rentStartDate,
    rentEndDate,
    countDay,
    totalPayment: total,
  };
  console.log(data);
  return {
    type: 'DATA_DETAIL',
    payload: data,
  };
};

export const addDataVehicles = (
  token,
  brand,
  price,
  description,
  location,
  category_id,
  qty,
  image,
) => {
  return {
    type: 'ADD_VEHICLES',
    payload: RNFetchBlob.fetch(
      'POST',
      'http://192.168.1.8:5000/vehicles',
      {Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data'},
      [
        {
          name: 'image',
          filename: image.fileName,
          type: image.type,
          data: RNFetchBlob.wrap(image.uri),
        },
        {name: 'brand', data: brand},
        {name: 'price', data: String(price)},
        {name: 'description', data: description},
        {name: 'location', data: location},
        {name: 'category_id', data: String(category_id)},
        {name: 'qty', data: String(qty)},
      ],
    ),
  };
};

export const deleteVehicles = id => {
  return {
    type: 'DELETE_VEHICLES',
    payload: http().delete(`/vehicles/${id}`),
  };
};

export const updateVehicle = (
  id,
  token,
  brand,
  price,
  can_prepayment,
  isAvailable,
  location,
  qty,
  image,
) => {
  return {
    type: 'UPDATE_VEHICLES',
    payload: RNFetchBlob.fetch(
      'PATCH',
      `http://192.168.1.8:5000/vehicles/${id}`,
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
        {name: 'brand', data: brand},
        {name: 'price', data: String(price)},
        {name: 'can_prepayment', data: can_prepayment},
        {name: 'isAvailable', data: isAvailable},
        {name: 'location', data: location},
        {name: 'qty', data: String(qty)},
      ],
    ),
  };
};
