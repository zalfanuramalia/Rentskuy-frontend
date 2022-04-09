const detailState = {
  listVehicle: {},
  detailVehicle: [],
  dataDetail: null,
  pageInfo: {},
  isLoading: false,
  err: false,
  errMsg: '',
  successMsg: null,
};

const detail = (state = detailState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'GET_DETAIL_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.detailVehicle = data.results;
      state.pageInfo = data.pageInfo;
      state.isLoading = false;
      return {...state};
    }
    case 'GET_DETAIL_REJECTED': {
      state.isLoading = false;
      state.err = true;
      return {...state};
    }
    case 'DATA_DETAIL': {
      state.dataDetail = action.payload;
      return {...state};
    }
    case 'ADD_VEHICLES_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'ADD_VEHICLES_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.listVehicle = data.results;
      state.pageInfo = data.pageInfo;
      state.isLoading = false;
      return {...state};
    }
    case 'ADD_VEHICLES_REJECTED': {
      state.isLoading = false;
      state.err = true;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default detail;
