import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.API_URL}/api/`,
  withCredentials: true,
  method: 'get, post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export default api;
