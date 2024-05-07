const mongoose = require('mongoose');
const { db, port, host } = require('../configuration');

module.exports.connectDb = () => {
  mongoose.connect(db, { useNewUrlParser: true });

  return mongoose.connection;
}