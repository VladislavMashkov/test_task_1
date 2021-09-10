const { data } = require('./data.js')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const BACKEND_PORT = 3006;
const BACKEND_HOST = `localhost`;
const app = express();
const log = require("simple-node-logger").createSimpleLogger();
app.enable("trust proxy");
app.use(cors({ origin: `http://${BACKEND_HOST}`, credentials: true }));
app.use(express.static("client/src"));
app.use(bodyParser.urlencoded({ extended: false }));


function showRequestInfo(req, res, next) {
  log.info("request start:");
  log.info("Body of request", req.body);
  log.info("Query of request", req.query);
  log.info("request end:");
  next();
}
app.get("/getData", showRequestInfo, (req, res) => {
  res.json(data);
  return;
});
app.get("/getOfferInfo", showRequestInfo, (req, res) => {
  let result = data.find(objectElement => objectElement.id == req.query.id);
  res.json(result);
  return;
});

app.get("/health", showRequestInfo, (req, res) => {
  res.status(200).send("OK");
  return;
});


app.listen(BACKEND_PORT, () =>
  log.info(`Server listening at http://${BACKEND_HOST}:${BACKEND_PORT}`)
);
