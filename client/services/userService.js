//using this utility because it includes authentication
import {fetch, store, update, destroy} from '../utils/apiUtil';

// Import custom actionType
import * as UserAction from '../actions/userAction';
//import * as ApiAction from '../actions/apiAction';

import {BASE_URL, API_URL} from '../config/config';
import {setToken, clearToken} from '../utils/storageUtil';

export function getMe() {

    return function (dispatch) {

        dispatch(UserAction.getMeRequest());

        fetch(API_URL + 'me', '').then((response) => {
            dispatch(UserAction.getMeSuccess(response.data));
        })
            .catch((error) => {
                console.log(error);
            });
    };
}