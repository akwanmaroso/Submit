const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

try {
  mongoose.connect(
    process.env.DB_CONNECT
  );
} catch (error) {
  console.log(`message error : ${error}`);
}