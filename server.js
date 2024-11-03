const express = require('express');
const path = require('path');
const fs = require("fs");


const app = express();

app.use(
    express.json(),
    express.urlencoded({
      extended: true,
    })
  );
 // app.use(express.static(path.join(__dirname, 'FrontEnd')));

  app.get('/', (req, res) => {
    const ip = 
    req.headers['cf-connecting-ip'] ||
    req.headers['x-real-ip']||
    req.headers['x-forwarded-for']||
    req.socket.remoteAdresss || '';
    return res.json({
        ip,
    })
  });
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log("Example app listening on port 3000");
  });