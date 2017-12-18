import { combineReducers } from 'redux';
import moviesList from './reducer_movies_list';
import singleMovie from './reducer_single_movie';
import searchData from './reducer_search_list';

const rootReducer = combineReducers({
  moviesList,
  singleMovie,
  searchData
});

export default rootReducer;
