const mongoose = require('mongoose');

// const mongoDb_password = process.env.DB_password;

const uri = "your key should here ";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('database connected sucessfull....'))
  .catch((Error) => console.log(Error));

module.exports = mongoose;
