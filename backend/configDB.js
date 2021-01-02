const mongoose = require('mongoose');

// const mongoDb_password = process.env.DB_password;

const uri = `mongodb+srv://Vishwajeet:Vishwajeet@123@cluster0.inh1w.mongodb.net/signup?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('database connected sucessfull....'))
  .catch((Error) => console.log(Error));

module.exports = mongoose;
