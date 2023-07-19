const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./app/modules/user/user.route');
const houseRoutes = require('./app/modules/house/house.route');
const bookingRoutes = require('./app/modules/booking/booking.route');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    status: true,
    message: 'YaY route is working !!!',
  });
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/house', houseRoutes);
app.use('/api/v1/booking', bookingRoutes);
module.exports = app;
