import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://hospoapp-dev.webreview.xyz/',
    timeout: 3000,
    headers: {'Content-Type': 'multipart/form-data'}
})

// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
// instance.defaults.timeout = 4000;