//this file is the entry point of the application, it connects to the database and starts the server

//Java script is modular, so you must install dependencies with "npm install" and then import them explicitly 
import mongoose from 'mongoose'; // have to import mongoose to connect to the database
import config from './config/config.js'; // have to import the config file to get the port number
import app from './server/express.js'; // have to import the express file to start the server

mongoose.Promise = global.Promise; // uses promises because request is handled by an external server
// below use connect method to connect to mongoDB with the database url 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//The database url is stored in the .env file which is in the .gitignore file, so sensitive information is not pushed to github 
  .then(() => console.log("Database connected")) //happy path (promise is resolved)
  .catch(err => console.error(`Failed to connect to database: ${err.message}`));//sad path (promise is rejected)

app.listen(config.port, () => { // start the server on the port number specified in the config file
  console.info(`Server started on port ${config.port}`);
});
