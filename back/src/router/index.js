const jwt = require('jsonwebtoken');
const Admins = [
  '5c87a19084ddc510b92b87c3',
];
const security = 'ArealIdea'
const isAdmin = function(id){
  console.log(id,Admins[0]);
  if (Admins.indexOf(id)!=-1){
    return true
  }
  return false
} 


class Routes {
  constructor({
    logger,
    httpServer,
    config,
    projectController,
    socketIO,
    auth,
    passport,
    bodyParser,
    http,
  }) {
    this.logger = logger;
    this.httpServer = httpServer;
    this.config = config;
    this.projectController = projectController;
    this.http = http;
    this.io = socketIO;
    this.auth = auth;
    this.passport = passport;
    this.bodyParser = bodyParser;
  }

  async run() {
    const self = this;
    console.log(__dirname, '../../frontend/public');
    const authenticate = () => {

      return this.passport.authenticate('jwt', { session: false });
    };
    
    // this.httpServer.all('/', function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // });
    
    this.httpServer.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    
    this.httpServer.post('/user/login', async (req, res) => {
      const user =req.body;
      if (!user) {
        console.log(user, 'notlogin');
        res.status(401).json({ message: 'no such user found' });
      }
      if (user.password === req.body.password) {
        const payload = 
        { id: user._id,
          login: user.login,
          verifyKey: this.auth.verifyKey,
        };
        const token = jwt.sign(payload, this.auth.jwtOptions.secretOrKey);
        res.json({ message: 'ok', name: user.login , token});
      } else {
        console.log(user, 'notpassword');
        res.status(401).json({ message: 'passwords did not match' });
      }
    });


    this.io.sockets.on('connection',function (socket) {
      socket.on('autorized', function (user) {
        socket.user=user.user;
        socket.join(socket.user);
      });
      socket.on('message', function (msg) {
      });

      socket.on('disconnect', function () {
      });
    });

    this.httpServer.get('/test', async (req, res) => {
      this.logger.info(`получил`);
      res.send({
        status: 'ok',
        text:'заебись',
      });
    });

    this.httpServer.get('/catalog',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), async (req, res) => {
      const data = await this.projectController.getList(req.user.id);
      res.send({
        status: 'ok',
        data,
      });
    });
    
    this.httpServer.get('/catalog/:brand',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), async (req, res) => {
      const data = await this.projectController.get({
        brand:req.params.brand,
      });
      res.send({
        status: 'ok',
        data,
      });
    });

    this.httpServer.post('/projects', this.bodyParser.json(),this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), async (req, res) => {
      this.io.sockets.in(req.user.login).emit('message', {msg: 'Проект '+req.body.name+' успешно создан'});
      const dataProject= req.body;
      dataProject.id=req.user.id;
      const _ = await this.projectController.create(req.body);
      res.send({ status: 'ok' });
    });

    this.httpServer.post('/projects/:id', this.bodyParser.json(), async (req, res) => {
      const _ = await this.projectController.update({
        _id: req.params.id,
      }, req.body);
      res.send({ status: 'ok' });
    });

    this.httpServer.delete('/projects/:id',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), this.bodyParser.json(), async (req, res) => {
      const result = await this.projectController.delete({
        _id: req.params.id,
        password: req.body.password,
      });
      if (result){
        this.io.sockets.in(req.user.login).emit('message', {msg: 'Проект '+req.body.name+' успешно удален'}); 
      }else{
        this.io.sockets.in(req.user.login).emit('message', {msg: 'Проект '+req.body.name+' не удален'});
      }
      res.send({ status: 'ok' });
    });


    this.http.listen(this.config.port, '0.0.0.0', (err) => {
      if (err) {
        self.logger.error('Server error', err);
        return;
      }
      self.logger.info(`Server is listening on ${this.config.port}`);
    });
  }
}

module.exports = Routes;
