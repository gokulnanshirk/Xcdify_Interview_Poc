import axios from 'axios';

export function post({ url, payload }) {
    return axios.post(url, payload)
}

export function get({ url }) {
    return axios.get(url)
}