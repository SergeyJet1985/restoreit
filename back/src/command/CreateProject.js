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
    const collection = { catalog: params.name, img:params.img};
    const result = await this.projectModel.insert(collection);
    return true;
  }
}

module.exports = CreateProject;
