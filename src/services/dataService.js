import axios from 'axios';
import { BASE_URL, BASE_SEARCH_URL } from '../constants';

class DataService {

    async fetchAllMovies(successHandler) {
        const config = {
            method: 'get',
            url: BASE_URL,
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            const { data } = await axios(config);
            successHandler(data);
        } catch (error) {
            console.warn(error.response.data.message);
        }

    }

    async fetchSinglePost(showId, successHandler) {
        const config = {
            method: 'get',
            url: `${BASE_URL}/${showId}?embed[]=cast`,
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            const { data } = await axios(config);
            successHandler(data);
        } catch (error) {
            console.warn(error.response.data.message);
        }
    }

    async renderSearch(query, successHandler) {

        const config = {
            method: 'get',
            url: `${BASE_SEARCH_URL}?q=${query}`,
            headers: { 'Content-Type': 'application/json' }
        }

        try {
            const { data } = await axios(config);
            successHandler(data);
        } catch (error) {
            console.warn(error.response.data.message);
        }

    }
}

export const dataService = new DataService();