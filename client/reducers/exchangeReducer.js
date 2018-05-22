// Import custom components
import {
    FETCH_EXCHANGES_REQUEST,
    FETCH_EXCHANGES_SUCCESS,
    FETCH_EXCHANGES_FAILURE,
    FETCH_EXCHANGE_MARKET_SUMMARY_REQUEST,
    FETCH_EXCHANGE_MARKET_SUMMARY_SUCCESS,
    FETCH_EXCHANGE_MARKET_SUMMARY_FAILURE,
} from '../constants/actionType';

var initialState = {
    exchanges: null,
    isLoading: true,
    flowState: 'initial'
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case FETCH_EXCHANGES_SUCCESS:
            console.log('exchanges list');
            console.log(action);
            return Object.assign({}, state, {
                exchanges: action.data,
                isLoading: false,
            });

      
            

        default:
            return state;
    }
}