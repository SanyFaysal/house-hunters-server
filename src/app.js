const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./app/modules/user/user.route');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    status: true,
    message: 'YaY route is working !!!',
  });
});

app.use('/api/v1/user', userRouter);
module.exports = app;
