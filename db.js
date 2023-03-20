const mongoose = require('mongoose')
const {
  MONGODB_URI = "mongodb://127.0.0.1/games"
} = process.env;

const main = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log("DB Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch(err => console.log('DB Conn Err', err));
