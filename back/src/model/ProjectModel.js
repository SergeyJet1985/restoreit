'use strict';

const Model = require('./Model')

class ProjectModel extends Model {
  constructor({ db }) {
    super({ db, collectionName: 'catalog' })
  }
}

module.exports = ProjectModel;
