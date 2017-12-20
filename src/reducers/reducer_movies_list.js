import { FETCH_ALL_MOVIES } from '../actions/index';

export default function(state = { data: [], loaded: false}, action) {
    switch(action.type) {
        case FETCH_ALL_MOVIES:
            return {
                data: [...action.payload],
                loaded: true
            };
        default:
            return state;
    }
}