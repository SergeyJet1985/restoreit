'use strict';

class DeleteProject {
  constructor({ 
    logger, 
    projectModel,
  }) {
    this.logger = logger;
    this.projectModel = projectModel;
  }

  async execute(params) {
    const result = await this.projectModel.deleteOneModel(params);
    return result;
  }

  async executeService(params) {
    const result = await this.projectModel.deleteOneService(params);
    return result;
  }
}

module.exports = DeleteProject;
