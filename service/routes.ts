/// <reference path="../typings/tsd.d.ts" />

import * as express from 'express';

var app: express.Express = express();

app.use("/", (req, res) => {
    res.send("hello World");
});

var server = app.listen(3000, "localhost", () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});