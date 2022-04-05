const categoryState = {
  car: [],
  motorbike: [],
  bike: [],
  pageInfo: {},
  isLoading: false,
  err: false,
  errMsg: '',
  successMsg: null,
};

const category = (state = categoryState, action) => {
  switch (action.type) {
    case 'GET_CAR_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'GET_CAR_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.car = data.results;
      state.pageInfo = data.pageInfo;
      state.isLoading = false;
      return {...state};
    }
    case 'GET_CAR_REJECTED': {
      state.isLoading = false;
      state.err = true;
      return {...state};
    }
    case 'GET_MOTORBIKE_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'GET_MOTORBIKE_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.motorbike = data.results;
      state.pageInfo = data.pageInfo;
      state.isLoading = false;
      return {...state};
    }
    case 'GET_MOTORBIKE_REJECTED': {
      state.isLoading = false;
      state.err = true;
      return {...state};
    }
    case 'GET_BIKE_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'GET_BIKE_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.bike = data.results;
      state.pageInfo = data.pageInfo;
      state.isLoading = false;
      return {...state};
    }
    case 'GET_BIKE_REJECTED': {
      state.isLoading = false;
      state.err = true;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default category;
