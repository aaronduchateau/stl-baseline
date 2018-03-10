// Import custom constants
import {FETCH_ME_REQUEST, FETCH_ME_SUCCESS, AUTH_ME_FAILURE} from '../constants/actionType';

var initialState = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    status: null,
    createdAt: null,
    updatedAt: null,
    isLoading: false
};


/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;
    let data = action.data;

    switch (action.type) {
        case FETCH_ME_REQUEST:
            return Object.assign({}, state, {
                id: null,
                firstName: null,
                lastName: null,
                email: null,
                status: null,
                createdAt: null,
                updatedAt: null,
                isLoading: true
            });

        case FETCH_ME_SUCCESS:
            return Object.assign({}, state, {
                id: data.id,
                firstName: data.first_name,
                lastName: data.last_name,
                email: data.email,
                status: data.status,
                createdAt: data.created_at,
                updatedAt: data.updated_at,
                isLoading: false
            });
        default:
            return state;
    }
}