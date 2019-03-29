'use strict';

class  ProjectModel {
  constructor({
    getProjects,
    getProject,
    updateProject,
    createProject,
    deleteProject,
    deleteModel,
  }) {
    this.getProjects = getProjects;
    this.getProject = getProject;
    this.updateProject = updateProject;
    this.createProject = createProject;
    this.deleteProject = deleteProject;
    this.deleteModel = deleteModel;
  }

  async getList(user) {
    return await this.getProjects.get(user);
  }

  async get(params) { 
    return await this.getProject.get(params);
  }

  async update(filter, update) {
    return await this.updateProject.execute(filter, update);
  }

  async create(params) {
    return await this.createProject.execute(params);
  }


  async delete(params) {
    return await this.deleteProject.execute(params);
  }

  async removeModel(params) {
    return await this.deleteModel.execute(params);
  }

}

module.exports = ProjectModel;
