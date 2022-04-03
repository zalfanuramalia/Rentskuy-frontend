import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducers from './reducers';
import promise from 'redux-promise-middleware';

export default () => {
  const store = createStore(rootReducers, applyMiddleware(promise, logger));

  const persistor = persistStore(store);
  return {store, persistor};
};
