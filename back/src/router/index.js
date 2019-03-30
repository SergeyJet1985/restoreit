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
};
const hostUrl='http://localhost/'
const multer  =   require('multer');
const fs = require('fs');
const path = require('path')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/storageLocal')
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    const filename = file.fieldname + '-' + Date.now()+'.'+extension;
      cb(null,filename);
  }
})

const admin = {
  login:'admin',
  password: 'restoreit1989'
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
      res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept");
      next();
    });
    
    this.httpServer.post('/user/login', async (req, res) => {
      const user =req.body;
      if (!user) {
        console.log(user, 'notlogin');
        res.status(401).json({ message: 'no such user found' });
      }
      if (admin.password === user.password) {
        const payload = 
        { login: user.login,
          verifyKey: this.auth.verifyKey,
        };
        console.log(payload);
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

    this.httpServer.get('/test',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), async (req, res) => {
      this.logger.info(`получил`);
      res.send({
        status: 'ok',
        text:'заебись',
      });
    });

    this.httpServer.get('/catalogs',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), async (req, res) => {
      const data = await this.projectController.getList();
      res.send({
        status: 'ok',
        data,
      });
    });
    
    this.httpServer.get('/catalogs/:brand',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), async (req, res) => {
      const data = await this.projectController.get({
        brand:req.params.brand,
      });
      res.send({
        status: 'ok',
        data,
      });
    });

    this.httpServer.post('/addCatalog',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }),async (req,res) =>{
      var upload = multer({storage:storage}).single('file')
      upload(req,res, async (err) => {
        if(err) {
            console.log(err);
            return res.end("Error uploading file.");
        }
        const data = {
          name: req.body.name,
          img:hostUrl+req.file.filename,
        } 
        const _ = await this.projectController.create(data);       
        res.end("File is uploaded");
      });
    });

    this.httpServer.post('/addBrand/:id',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }),async (req,res) =>{
      console.log(req.body,req.params.id);
      var upload = multer({storage:storage}).single('file')
      upload(req,res, async (err) => {
        if(err) {
            console.log(err);
            return res.end("Error uploading file.");
        }
        const data = {
          name: req.body.name,
          img:hostUrl+req.file.filename,
        };
        const _ = await this.projectController.update({_id:req.params.id},data);
        console.log(req.body,req.params.id);
        res.end("File is uploaded");
      });
    });

    this.httpServer.post('/addService', this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), async (req, res) => {
      console.log(req.body);
      const _ = await this.projectController.addService({
        _id: req.body._id,
      }, req.body);
      res.send({ status: 'ok' });
    });

    this.httpServer.delete('/catalog/:id',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), this.bodyParser.json(), async (req, res) => {
      console.log(123)
      const result = await this.projectController.delete({
        _id: req.params.id,
      });
      // if (result){
      //   this.io.sockets.in(req.user.login).emit('message', {msg: 'Проект '+req.body.name+' успешно удален'}); 
      // }else{
      //   this.io.sockets.in(req.user.login).emit('message', {msg: 'Проект '+req.body.name+' не удален'});
      // }
      res.send({ status: 'ok' });
    });

    this.httpServer.delete('/model/:id',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), this.bodyParser.json(), async (req, res) => {
      console.log(req.body);
      const result = await this.projectController.removeModel({
        _id: req.body.id,
        model:req.body.model
      });
      // if (result){
      //   this.io.sockets.in(req.user.login).emit('message', {msg: 'Проект '+req.body.name+' успешно удален'}); 
      // }else{
      //   this.io.sockets.in(req.user.login).emit('message', {msg: 'Проект '+req.body.name+' не удален'});
      // }
      res.send({ status: 'ok' });
    });

    this.httpServer.delete('/service/:id',this.bodyParser.json(),this.passport.authenticate('jwt', { session: false }), this.bodyParser.json(), async (req, res) => {
      console.log(req.body)
      const result = await this.projectController.removeService({
        id: req.body._id,
        name:req.body.name,
        product:req.body.product,
        price:req.body.price,
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
