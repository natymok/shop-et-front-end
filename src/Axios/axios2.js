import axios from 'axios';
const _token = localStorage.getItem('user');
const axios2 = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    authorization: _token ? _token : '',
  },
});
export default axios2;
