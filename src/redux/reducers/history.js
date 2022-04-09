const dataHistory = {
  listHistory: [],
  historyData: null,
  isError: false,
  isLoading: false,
  errMessage: null,
  message: null,
  isSuccessPayment: false,
};

const history = (state = dataHistory, action) => {
  switch (action.type) {
    case 'GET_HISTORY_PENDING': {
      state.isLoading = true;
      return {...state};
    }
    case 'GET_HISTORY_FULFILLED': {
      const {data} = action.payload;
      state.historyData = data.results;
      state.isLoading = false;
      state.isError = false;
      state.message = data.message;
      return {...state};
    }
    case 'CLEAR_HISTORY': {
      return dataHistory;
    }
    case 'GET_HISTORY_REJECTED': {
      const {data} = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
      return {...state};
    }
    case 'ALL_HISTORY_PENDING': {
      state.isLoading = true;
      return {...state};
    }
    case 'ALL_HISTORY_FULFILLED': {
      const {data} = action.payload;
      state.listHistory = data.results;
      state.isLoading = false;
      state.isError = false;
      state.message = data.message;
      return {...state};
    }
    case 'ALL_HISTORY_REJECTED': {
      const {data} = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
      return {...state};
    }
    case 'HISTORY_DETAIL_PENDING': {
      state.isLoading = true;
      return {...state};
    }
    case 'HISTORY_DETAIL_FULFILLED': {
      const {data} = action.payload;
      state.historyData = data.result;
      state.isLoading = false;
      state.isError = false;
      state.message = data.message;
      return {...state};
    }
    case 'HISTORY_DETAIL_REJECTED': {
      const {data} = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
      return {...state};
    }
    case 'HISTORY_SET_SUCCESS': {
      state.isSuccessPayment = true;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default history;
