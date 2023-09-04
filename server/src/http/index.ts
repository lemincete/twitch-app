import axios from 'axios';

import store from '../store';

const $api = axios.create();


import { changeAccessTokenAction } from '../store/reducers/accessToken';
import { getAccessTokenTwitch } from '../services/getAccessTokenTwitch';

$api.interceptors.request.use(req => {

    const { accessToken } = store.getState();

    req.headers.Authorization = `Bearer ${accessToken.token}`
    return req
})


$api.interceptors.response.use(res => {
    return res
}, async (err) => {

    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._isRetry) {
        originalRequest._isRetry = true;

        const token = await getAccessTokenTwitch();

        TODO: // add logging error refreshing token


        if (!token) {
            throw err;
        }

        store.dispatch(changeAccessTokenAction(token.access_token));

        return $api(originalRequest);
    }

    throw err
})


export default $api;