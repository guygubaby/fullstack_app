import user from './user';

export default {
  install(Vue) {
    Vue.prototype.$api = {
      user,
    };
  },
};
