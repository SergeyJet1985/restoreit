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
    const collection = { catalog: params};
    const result = await this.projectModel.insert(collection);
    this.logger.debug('CreateProject 2', params);
    return true;
  }
}

module.exports = CreateProject;
