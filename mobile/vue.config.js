const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '/api': '/',
        },
      },
    },
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      //  启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(`\\.(${['js', 'css'].join('|')})$`),
          threshold: 10240,
          minRatio: 0.8,
          cache: true,
        })
        .tap((args) => {});
    }
    // use cdn start
    const externals = {
      vue: 'Vue',
      axios: 'axios',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      // dayjs: 'dayjs',
      vant: 'vant',
    };

    config.externals(externals);
    const cdn = {
      css: [
        '//unpkg.com/vant@2.0.0-beta.2/lib/index.css',
      ],
      js: [
        // '//unpkg.com/xlsx@0.14.3/dist/xlsx.full.min.js',
        // '//unpkg.com/dayjs@1.8.14/dayjs.min.js',
        '//unpkg.com/vue@2.6.6/dist/vue.min.js',
        '//unpkg.com/vue-router@3.0.2/dist/vue-router.min.js',
        '//unpkg.com/vuex@3.1.0/dist/vuex.min.js',
        '//unpkg.com/axios@0.18.0/dist/axios.min.js',
        '//unpkg.com/vant@2.0.0-beta.2/lib/vant.min.js',
      ],
    };
    config.plugin('html').tap((args) => {
      args[0].cdn = cdn;
      return args;
    });
    // use cdn end
  },
};
