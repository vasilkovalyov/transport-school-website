import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:4000/api/`,
  withCredentials: true,
  method: 'get, post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export default api;
