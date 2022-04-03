import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import auth from './auth';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
});

export default rootReducers;
