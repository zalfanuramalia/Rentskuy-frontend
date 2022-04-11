const detailState = {
  listVehicle: {},
  detailVehicle: [],
  allVehicle: [],
  dataDetail: null,
  dataVehicle: {},
  pageInfo: {},
  isLoading: false,
  err: false,
  errMsg: '',
  successMsg: null,
  search: '',
};

const detail = (state = detailState, action) => {
  switch (action.type) {
    case 'ALL_VEHICLES_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'ALL_VEHICLES_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.allVehicle = data.result;
      state.pageInfo = data.pageInfo;
      state.isLoading = false;
      return {...state};
    }
    case 'ALL_VEHICLES_REJECTED': {
      state.isLoading = false;
      state.err = true;
      return {...state};
    }
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
    case 'GET_SEARCH_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'GET_SEARCH_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.search = data.result;
      state.pageInfo = data.pageInfo;
      state.isLoading = false;
      return {...state};
    }
    case 'GET_SEARCH_REJECTED': {
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
      state.successMsg = data.message;
      state.isLoading = false;
      return {...state};
    }
    case 'ADD_VEHICLES_REJECTED': {
      const {data} = action.payload.response;
      state.isLoading = false;
      state.err = true;
      state.errMsg = data.message;
      return {...state};
    }
    case 'DELETE_VEHICLES_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'DELETE_VEHICLES_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.listVehicle = data.result;
      state.successMsg = data.message;
      state.isLoading = false;
      return {...state};
    }
    case 'DELETE_VEHICLES_REJECTED': {
      const {data} = action.payload.response;
      state.isLoading = false;
      state.err = true;
      state.errMsg = data.message;
      return {...state};
    }
    case 'UPDATE_VEHICLES_PENDING': {
      state.isLoading = true;
      state.err = false;
      return {...state};
    }
    case 'UPDATE_VEHICLES_FULFILLED': {
      const {data} = action.payload;
      console.log(data);
      state.dataVehicle = data.results;
      state.successMsg = data.message;
      state.isLoading = false;
      return {...state};
    }
    case 'UPDATE_VEHICLES_REJECTED': {
      const {data} = action.payload.response;
      state.isLoading = false;
      state.err = true;
      state.errMsg = data.message;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default detail;
