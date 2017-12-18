import axios from 'axios';
import { BASE_URL, BASE_SEARCH_URL } from '../constants';

export const FETCH_ALL_MOVIES = 'FETCH_ALL_MOVIES';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const RENDER_SEARCH = 'RENDER_SEARCH';
export const RESET_SEARCH = 'RESET_SEARCH';

export async function fetchAllMovies() {

    const config = {
        method: 'get',
        url: BASE_URL,
        headers: { 'Content-Type': 'application/json' }
    };

    const { data } = await axios(config);

    return {
        type: FETCH_ALL_MOVIES,
        payload: data
    }
}

export async function fetchSinglePost(showId) {
    const config = {
        method: 'get',
        url: `${BASE_URL}/${showId}?embed[]=cast`,
        headers: { 'Content-Type': 'application/json' }
    };

    const { data } = await axios(config);

    return {
        type: FETCH_SINGLE_POST,
        payload: data
    }
}

export async function renderSearch(query) {

    const config = {
        method: 'get',
        url: `${BASE_SEARCH_URL}?q=${query}`,
        headers: { 'Content-Type': 'application/json' }
    }

    const { data } = await axios(config);

    return {
        type: RENDER_SEARCH,
        payload: data
    }
}

export function resetSearch() {
    return {
        type: RESET_SEARCH
    }
}
