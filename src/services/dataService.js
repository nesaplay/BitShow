import axios from 'axios';
import { BASE_URL } from '../constants';

class DataService {

    fetchAllMovies(successHandler) {
        const config = {
            method: 'get',
            url: BASE_URL,
            headers: { 'Content-Type': 'application/json' }
        }

        axios(config)
            .then(({ data }) => successHandler(data))
            .catch(error => console.warn(error.response));
    }

    fetchSinglePost(showId, successHandler) {
        const config = {
            method: 'get',
            url: `${BASE_URL}/${showId}?embed[]=cast`,
            headers: { 'Content-Type': 'application/json' }
        }

        axios(config)
            .then(({ data }) => successHandler(data))
            .catch(error => console.warn(error.response));
    }
}

export const dataService = new DataService();