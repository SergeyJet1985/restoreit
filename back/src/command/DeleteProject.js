'use strict';

class DeleteProject {
  constructor({ 
    logger, 
    projectModel,
  }) {
    this.logger = logger;
    this.projectModel = projectModel;
  }

  async execute(filter) {
    const result = await this.projectModel.deleteOne(filter);
    return result;
  }
}

module.exports = DeleteProject;
