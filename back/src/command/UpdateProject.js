'use strict';

class UpdateProject {
  constructor({
    logger,
    projectModel,
  }) {
    this.logger = logger;
    this.projectModel = projectModel;
  }

  async execute(filter, update) {
    const id = update.id;
    delete(update.id);
    await this.projectModel.findOneAndUpdate(filter, update);
    return true;
  }

  async executeService(filter, update) {
    const id = update.id;
    delete(update.id);
    await this.projectModel.findOneAndUpdateService(filter, update);
    return true;
  }
}

module.exports = UpdateProject;
