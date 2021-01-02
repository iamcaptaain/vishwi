const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const modeldata = require('./schema');
const { urlencoded } = require('express');
// const modeldata = require('./schema');

require('./configDB');

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  modeldata
    .find()
    .then((result) =>
      res.json({
        length: result.length,
        result: result.length == 0 ? 'no record found' : result,
      })
    )
    .catch((error) => res.json(error));
});

app.post('/students', (req, res) => {
  const { first_name, last_name, email, mobile } = req.body;

  const data = new modeldata({
    first_name,
    last_name,
    email,
    mobile,
  });

  data
    .save()
    .then((result) =>
      res.json({
        message:
          result.length != 0 || result != null
            ? 'data inserted successfully'
            : 'not to be inserted',
        inserted_data:
          result.length != 0 || result != null ? result : 'some error',
      })
    )
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
