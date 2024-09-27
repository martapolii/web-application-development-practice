import mongoose from 'mongoose';
import config from './config/config.js';
import app from './server/express.js';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.error(`Failed to connect to database: ${err.message}`));

app.listen(config.port, () => {
  console.info(`Server started on port ${config.port}`);
});
