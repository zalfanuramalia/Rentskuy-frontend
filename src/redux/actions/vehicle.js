import http from '../../helpers/http';

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
