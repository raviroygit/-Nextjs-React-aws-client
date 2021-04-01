import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';


export const listSearchLink = params => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return fetch(`${API}/links/search?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
