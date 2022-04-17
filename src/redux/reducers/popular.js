const popularState = {
  popular: [],
  pageInfo: {},
  isLoading: false,
  err: false,
  errMsg: '',
  successMsg: null,
};

const popular = (state = popularState, action) => {
  switch (action.type) {
    case 'GET_POPULAR_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'GET_POPULAR_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.popular = data.results;
      state.pageInfo = data.pageInfo;
      state.isLoading = false;
      return {...state};
    }
    case 'GET_POPULAR_REJECTED': {
      state.isLoading = false;
      state.err = true;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default popular;
