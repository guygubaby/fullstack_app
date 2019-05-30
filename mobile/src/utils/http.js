import axios from 'axios';
import {
  Toast,
} from 'vant';

const instance = axios.create();

instance.defaults.baseURL = '/api';
instance.interceptors.request.use(config =>
  // const token = getStorage('token');
  // if (token) {
  //   config.headers = {
  //     Authorization: token
  //   };
  // }
  config, err => Promise.reject(err));

instance.interceptors.response.use(res => res.data, (err) => {
  console.log('err: ', err);
  // if (err.response.status === 401) {
  //   delStorage('token');
  // }
  Toast(err.response.data);
  return Promise.reject(err.response.data);
});


export default instance;
