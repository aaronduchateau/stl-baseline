//using this utility because it includes authentication
import {fetch, store, update, destroy} from '../utils/apiUtil';

// Import custom actionType
import * as ChartAction from '../actions/chartAction';
//import * as ApiAction from '../actions/apiAction';

import {BASE_URL, API_URL, BITTREX_API_V1_PUBLIC} from '../config/config';
//import {setToken, clearToken} from '../utils/storageUtil';

export function getExchanges() {

    return function (dispatch) {

        dispatch(ChartAction.getExchangesRequest());

        console.log('made it here');
        fetch(API_URL + 'charts/exchanges', '').then((response) => {
            dispatch(ChartAction.getExchangesSuccess(response.data));
        })
            .catch((error) => {
                console.log(error);
            });
    };
}

export function getExchange(id) {

    return function (dispatch) {

        dispatch(ChartAction.getExchangeRequest());

        console.log('made it here');
        fetch(API_URL + 'charts/exchange/' + id, '').then((response) => {
            dispatch(ChartAction.getExchangeSuccess(response.data));
        })
            .catch((error) => {
                console.log(error);
            });
    };
}
