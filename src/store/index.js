import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';

import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers';

import rootSaga from './sagas';



const bindMiddleware = (middleware) => {

  return applyMiddleware(...middleware);

};



const initStore = () => {

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;

};



export const wrapper = createWrapper(initStore);