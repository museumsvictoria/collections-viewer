import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas';

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    createLogger({
      collapsed: true,
    }),
    sagaMiddleware,
  ];

  const enhanced = [applyMiddleware(...middleware)];

  const store = createStore(rootReducer, preloadedState, compose(...enhanced));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      store.replaceReducer(require('../reducers/rootReducer').default);
    });

    module.hot.accept('../sagas', () => {
      createSagaMiddleware().run(require('../sagas').default);
    });
  }

  return store;
};

export default configureStore;