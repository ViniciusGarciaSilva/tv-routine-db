const app = require('./app')
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem")
};
// Load HTTP module
const port = normalizaPort(process.env.PORT || '8000')
console.log(port);

function normalizaPort (val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

https.createServer(options, app).listen(port);