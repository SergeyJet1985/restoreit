'use strict';

class CreateProject {
  constructor({
    logger,
    projectModel,
  }) {
    this.logger = logger;
    this.projectModel = projectModel;
  }

  async execute(params) {
    this.logger.debug('CreateProject', params);
    const result = await this.projectModel.insertOne(params);
    this.logger.debug('CreateProject 2', params);
    return true;
  }
}

module.exports = CreateProject;
