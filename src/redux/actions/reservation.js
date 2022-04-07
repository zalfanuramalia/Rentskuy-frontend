// import {default as axios} from 'axios';
// import qs from 'qs';
// import http from '../../helpers/http';

export const dataReservation = reservationData => {
  var data = {
    idCard: reservationData.idCard,
    fullname: `${reservationData.firstname} ${reservationData.lastname}`,
    mobilePhone: reservationData.mobileNumber,
    emailAddress: reservationData.email,
    payment_type: reservationData.paymentType,
  };

  return {
    type: 'SAVE_PAYMENT',
    payload: data,
  };
};
