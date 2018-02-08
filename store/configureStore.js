// @flow

// Redux Store Configuration
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import getRootReducer from '../reducers/index';
import loggingMiddleware from './middleware/logging';

export default function getStore(navReducer:Object) {
  const middleware = applyMiddleware(thunk, loggingMiddleware);

    const store = createStore(
        getRootReducer(navReducer),
        middleware,
    );
    return store;
}
