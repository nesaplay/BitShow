import { FETCH_ALL_MOVIES } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_ALL_MOVIES:
            return [...action.payload];
        default:
            return state;
    }
}