const reservationState = {
  reservationData: null,
  isLoading: false,
  errMsg: null,
  err: false,
};

const reservation = (state = reservationState, action) => {
  switch (action.type) {
    case 'SAVE_PAYMENT': {
      state.reservationData = action.payload;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default reservation;
