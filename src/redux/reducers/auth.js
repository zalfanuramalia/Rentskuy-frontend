const initialState = {
  token: null,
  err: false,
  errMsg: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload,
      };
    }
    case 'AUTH_LOGOUT': {
      return {
        ...initialState,
      };
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
