import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Import custom components
import authReducer from './authReducer';
import userReducer from './userReducer';
import exchangeReducer from './exchangeReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,  // ← redux-form
    user: userReducer,
    exchanges: exchangeReducer
});

export default rootReducer;