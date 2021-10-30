const { MongoClient } = require('mongodb');

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const MONGO_DB_URL = 'mongodb+srv://dosimples:it23102021@cluster0.7cclw.mongodb.net/dosimples';

connection = () =>
  MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('itsimples'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = connection;