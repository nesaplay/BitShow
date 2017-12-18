import { FETCH_SINGLE_POST } from '../actions/index';

const initState = {
    image: {
        original: 'http://via.placeholder.com/700x1000'
    },
    name: '',
    rating: {
        average: 'N/A'
    },
    externals: {
        imdb: ''
    },
    _embedded: {
        seasons: [],
        cast: []
    },
    summary: '',
    genres: ['']
}

export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_SINGLE_POST:
            return {...action.payload};
        default:
            return state;
    }
}