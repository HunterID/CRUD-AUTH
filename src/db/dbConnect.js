const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const MongoURI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

function dbConnect() {
    mongoose.connect(MongoURI, options)
      .then(() => { console.log('Mongo start...')})
      .catch(err => { console.log(err)});
}

module.exports = dbConnect;
