const mongoose = require('mongoose')
const logger = require('../utils/logger')

const {
  dbpath
} = require('../config')

mongoose.set('useCreateIndex', true);

// const dbUrl = process.env.NODE_ENV === 'development' ? dbpath.dev : dbpath.prod
// const dbUrl = dbpath.dev
const dbUrl = dbpath.remote
// const dbUrl = dbpath.prod

console.log('dbUrl-> ', dbUrl);

mongoose.connect(dbUrl, {
  useNewUrlParser: true
}).then(res => {
  console.log('connect success :)');
}).catch(e => {
  console.log('e: \n', e, '\n');
  logger.error(`MongoDB connection error: ${e}!`);
  process.exit(1);
})

// const db = mongoose.connection;