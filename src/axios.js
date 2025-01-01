import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://adminszamantech.github.io/demo-data-api',
});

export default instance ;