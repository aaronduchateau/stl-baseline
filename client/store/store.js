import {createStore, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import history from '../utils/history';
const middleware = routerMiddleware(history);

// Import custom components
import rootReducer from '../reducers/rootReducer';

/**
 * Create redux store that holds the app state.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware, middleware, logger)
));

/*
//if issues with redux dev tools, go back to this, or consider using this in production only. 
const store = createStore(rootReducer, compose(
    applyMiddleware(thunkMiddleware, middleware, logger)
));
*/

export default store;