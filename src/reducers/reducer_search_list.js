import { RENDER_SEARCH, RESET_SEARCH } from '../actions/index';

const initState = {
    searchList : [],
    isHidden: true
}

export default function(state = initState, action) {
    switch(action.type) {
        case RENDER_SEARCH:
            return {
                ...state,
                searchList: [...action.payload],
                isHidden: false
            }
        case RESET_SEARCH:
            return {
                ...state,
                isHidden: true
            }
        default:
            return state;
    }
}