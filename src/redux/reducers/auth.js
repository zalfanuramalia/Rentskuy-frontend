const initialState = {
  userData: null,
  token: null,
  err: false,
  errMsg: '',
  successMsg: null,
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'AUTH_LOGIN_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.isLoading = false;
      state.err = false;
      state.token = data.results.token;
      return {...state};
    }
    case 'AUTH_LOGIN_REJECTED': {
      const {message} = action.payload.response.data;
      state.isLoading = false;
      state.err = true;
      state.errMsg = message;
      return {...state};
    }
    case 'GET_PROFILE_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'GET_PROFILE_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.userData = data.result;
      state.pageInfo = data.info;
      state.isLoading = false;
      return {...state};
    }
    case 'GET_PROFILE_REJECTED': {
      const {data} = action.payload.response;
      state.isLoading = false;
      state.errMsg = data.message;
      state.err = true;
      return {...state};
    }
    case 'AUTH_LOGOUT': {
      state.token = null;
      state.successMsg = '';
      return {...state};
    }
    case 'AUTH_ERR': {
      return {
        ...state,
        err: true,
        errMsg: action.payload,
      };
    }
    case 'CLEAR_ERR': {
      return {
        ...state,
        err: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
