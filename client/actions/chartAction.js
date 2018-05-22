// Import actionType constants
import {
    FETCH_EXCHANGES_REQUEST,
    FETCH_EXCHANGES_SUCCESS,
    FETCH_EXCHANGE_MARKET_SUMMARY_REQUEST,
    FETCH_EXCHANGE_MARKET_SUMMARY_SUCCESS,
} from '../constants/actionType';

export function getExchangesRequest() {
    return {
        type: FETCH_EXCHANGES_REQUEST
    }
}

export function getExchangesSuccess(data) {
    return {
        type: FETCH_EXCHANGES_SUCCESS,
        data: data.data
    }
}

export function getExchangeRequest() {
    return {
        type: FETCH_EXCHANGE_MARKET_SUMMARY_REQUEST
    }
}

export function getExchangeSuccess(data) {
    return {
        type: FETCH_EXCHANGE_MARKET_SUMMARY_SUCCESS,
        data: data.data
    }
}