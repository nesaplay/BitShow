import { FETCH_SINGLE_POST } from '../actions/index';

const initState = {
  movie: {
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
  },
  loaded: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_SINGLE_POST:
      return {
        movie: { ...action.payload },
        loaded: true
      };
    default:
      return state;
  }
}
