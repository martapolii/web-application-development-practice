import config from './config/config.js'
import app from './express.js'
import dotenv from 'dotenv';

dotenv.config();

app.get("/", (req, res) => {
 res.send("Hello there its mee!!!hey there")
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})
