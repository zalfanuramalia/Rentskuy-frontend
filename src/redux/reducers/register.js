const registerState = {
  isLoading: false,
  err: false,
  successMsg: '',
  errMsg: '',
};

const register = (state = registerState, action) => {
  switch (action.type) {
    case 'USER_REGISTER_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'USER_REGISTER_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.isLoading = false;
      state.err = false;
      state.successMsg = data.message;
      return {...state};
    }
    case 'USER_REGISTER_REJECTED': {
      const {data} = action.payload.data;
      state.isLoading = false;
      state.err = true;
      state.errMsg = data.err;
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

export default register;
