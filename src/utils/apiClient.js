import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
    timeout: 1000
  }
});

export default instance;
