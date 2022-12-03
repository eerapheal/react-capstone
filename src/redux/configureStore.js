import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './home/information';

const reducers = combineReducers({
  datas: dataReducer,
});

const store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

export default store;
