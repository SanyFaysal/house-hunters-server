const mongoose = require('mongoose');
const config = require('./config/index');
const app = require('./app');
async function main() {
  try {
    await mongoose.connect("mongodb+srv://tfoysalahmed:jCPUPULmjG5vvHAE@cluster0.cltnhsn.mongodb.net/");

    console.log(`🛢 Database is connected successfully`);

    app.listen(config.port, () => {
      console.log(`Application  listening on port : ${config.port}`);
    });
  } catch (err) {
    console.log('Failed to connect database', err);
  }
}

main();
