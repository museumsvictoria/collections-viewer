import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import * as reducers from '../reducers';
import rootSaga from '../sagas';
import routesMap from './routesMap';

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const { reducer, middleware, enhancer } = connectRoutes(routesMap, {
    basename: '/',
  });

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(
    createLogger({
      collapsed: true,
    }),
    sagaMiddleware,
    middleware,
  );
  const enhancers = compose(enhancer, middlewares);

  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(
        combineReducers({ ...require('../reducers'), location: reducer }),
      );
    });
  }
  return store;
};

export default configureStore;
