const passwordState = {
  isLoading: false,
  err: false,
  successMsg: '',
  errMsg: '',
};

const password = (state = passwordState, action) => {
  switch (action.type) {
    case 'FORGOT_PASSWORD_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'FORGOT_PASSWORD_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.isLoading = false;
      state.err = false;
      state.successMsg = data.message;
      return {...state};
    }
    case 'FORGOT_PASSWORD_REJECTED': {
      const {data} = action.payload;
      state.isLoading = false;
      state.err = true;
      state.errMsg = data.message;
      return {...state};
    }
    case 'RESET_PASSWORD_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'RESET_PASSWORD_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.isLoading = false;
      state.err = false;
      state.successMsg = data.message;
      return {...state};
    }
    case 'RESET_PASSWORD_REJECTED': {
      const {data} = action.payload;
      state.isLoading = false;
      state.err = true;
      state.errMsg = data.message;
      return {...state};
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        successMsg: '',
      };
    }
    default: {
      return {...state};
    }
  }
};

export default password;
