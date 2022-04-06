import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import auth from './auth';
import popular from './popular';
import register from './register';
import category from './category';
import vehicle from './vehicle';
import button from './button';
import password from './password';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistPopular = {
  key: 'popular',
  storage: AsyncStorage,
};

const persistRegister = {
  key: 'register',
  storage: AsyncStorage,
};

const persistCategory = {
  key: 'category',
  storage: AsyncStorage,
};

const persistVehicle = {
  key: 'vehicle',
  storage: AsyncStorage,
};

const persistButton = {
  key: 'button',
  storage: AsyncStorage,
};

const persistPassword = {
  key: 'password',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  popular: persistReducer(persistPopular, popular),
  register: persistReducer(persistRegister, register),
  category: persistReducer(persistCategory, category),
  vehicle: persistReducer(persistVehicle, vehicle),
  button: persistReducer(persistButton, button),
  password: persistReducer(persistPassword, password),
});

export default rootReducers;
