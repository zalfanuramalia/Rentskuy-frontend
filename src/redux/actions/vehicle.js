import http from '../../helpers/http';
import RNFetchBlob from 'rn-fetch-blob';

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

export const addDataVehicles = async (
  token,
  brand,
  price,
  description,
  location,
  category_id,
  qty,
  image,
) => {
  try {
    const {data} = await RNFetchBlob.fetch(
      'POST',
      'http://192.168.1.4:5000/vehicles',
      {Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data'},
      [
        {
          name: 'image',
          filename: image.fileName,
          type: image.type,
          data: RNFetchBlob.wrap(image.uri),
        },
        {name: 'brand', data: brand},
        {name: 'price', data: price},
        {name: 'description', data: description},
        {name: 'location', data: location},
        {name: 'idCategory', data: category_id},
        {name: 'qty', data: qty},
      ],
    );
    return {
      type: 'ADD_VEHICLES',
      payload: data,
    };
  } catch (e) {
    console.log(e);
  }
};
