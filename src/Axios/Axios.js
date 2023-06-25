import axios from 'axios';
const _token = localStorage.getItem('user');
const axiosinstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    authorization: _token ? _token : '',
  },
});
export default axiosinstance;
