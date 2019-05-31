module.exports = {
  port: 3000,
  dbpath: {
    dev: 'mongodb://localhost:27017/daily',
    prod: 'mongodb://mongodb:27017/daily', // 此处一定要和docker-compose 里面的container_name 字段保持一致才能连接
    remote: 'mongodb+srv://guygubaby:520guygubaby@cluster0-p78jk.mongodb.net/test?retryWrites=true&w=majority' //mlab
  }
}