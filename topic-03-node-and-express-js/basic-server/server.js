//main file - logic for connecting to server. 2 ways:

//1. basic Node.js application:
const http = require('http'); // adding a module called http to a variable called http

http.createServer((req, res) => { // creating a server. request and respond
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // setting the content type to plain text
                /* testing if API is working - status 200 = API working. 
                - 404 = not found, API not working
                - 500 = internal server error
                */
  res.end('Hello, World!'); // ending the response with a message
}).listen(3000, () => { // making the server listen on port 3000. (can change it)

  console.log('Server is listening on port 3000'); 
});


//2. Creating server using middleware application CONNECT:
const connect = require("connect");
const app = connect();

  // Define middleware function
function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}
  // Register middleware
app.use(helloWorld);
  // Listen on port 3000
app.listen(3000);

console.log("Server running at http://localhost:3000/");



// MODIFIED version with more methods:

const connect = require('connect');
const app = connect();
// Logger middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();  // Passes control to the next middleware
}
// Hello World middleware
function helloWorld(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}
// Goodbye World middleware
function goodbyeWorld(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye World');
}
function testing(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Testing middleware');
  }
// Register middleware in order
app.use(logger);  // Logs every request
app.use('/testing',testing)
app.use('/hello', helloWorld);  // Handles /hello path
app.use('/goodbye', goodbyeWorld);  // Handles /goodbye path
// Listen on port 3000
app.listen(3000);



