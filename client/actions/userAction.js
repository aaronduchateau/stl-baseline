// Import actionType constants
import {
    FETCH_ME_REQUEST,
    FETCH_ME_SUCCESS,
} from '../constants/actionType';

export function getMeRequest() {
    return {
        type: FETCH_ME_REQUEST
    }
}

export function getMeSuccess(data) {
    return {
        type: FETCH_ME_SUCCESS,
        data: data.data
    }
}