import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
});

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
