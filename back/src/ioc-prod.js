const { asClass, asValue, Lifetime } = require('awilix');
const axios = require('axios');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const router = require('./router');
const config = require('./config');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const auth = require('./auth/authorize');
const history = require('connect-history-api-fallback');

const IoC = require('./IoC');
const ioc = new IoC;

const app = express();
const httpServer = http.createServer(app);

const io = socketIO(httpServer);



//app.use(express.static(path.join(__dirname, '../../frontend/dist')));
const staticFileMiddleware = express.static(path.join(__dirname, '../../frontend/dist'));
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);
app.enable('trust proxy');
passport.use(auth);
app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());  

ioc.register({
  excludes: asValue([]),
  config: asValue(config),
  httpClient: asValue(axios),
  httpServer: asValue(app),
  http: asValue(httpServer),
  socketIO: asValue(io),
  router: asClass(router),
  auth: asValue(auth),
  passport: asValue(passport),
  bodyParser: asValue(bodyParser),
});

const container = ioc.loadModules([
  'App.js',
  'utils/*.js',
  'model/*.js',
  'controller/*.js',
  'query/*.js',
  'command/*.js',
  // 'model/__mocks__/*.js',
  // 'query/__mocks__/*.js',
  // 'command/__mocks__/*.js',
], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON
  }
});

module.exports = container;
