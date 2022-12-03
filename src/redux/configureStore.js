const reducers = combineReducers({
  datas: dataReducer,
});

const store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

export default store;
