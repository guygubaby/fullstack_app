import http from '../utils/http';

const user = {
  login(params) {
    return http.post('/user/login', params);
  },
  register(params) {
    return http.post('/user/register', params);
  },
  all() {
    return http.get('/user/all');
  },
};

export default user;
