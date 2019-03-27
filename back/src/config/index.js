module.exports = {
  port: 3000,
  // healthPeriod: 5,
  db: {
    url: 'mongodb://localhost:27017/',
    name: 'restore',
  },
  rabbit: {
    queues: {
      'backup': {},
      'backuped': {},
    },
  },
}
