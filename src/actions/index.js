// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

import axios from 'axios';
export const GET_CHARS = "GET_CHARS";
export const FETCHING_CHARS = "FETCHING_CHARS";
export const ERROR_FETCHING_CHARS = "ERROR_FETCHING_CHARS";

export const getChars = chars => {
    const promise = axios.get('https://swapi.co/api/people');
    return dispatch => {
        dispatch({type: FETCHING_CHARS});
        promise
            .then(({data}) => {
                dispatch({type: GET_CHARS, payload: data.results});
            })
            .catch(err => {
                dispatch({type: ERROR_FETCHING_CHARS, payload: err});
            });
    };
};

