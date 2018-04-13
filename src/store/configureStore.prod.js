import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas';

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
