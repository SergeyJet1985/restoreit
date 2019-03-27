'use strict';

class  ProjectModel {
  constructor({
    getProjects,
    getProject,
    updateProject,
    createProject,
    deleteProject,
  }) {
    this.getProjects = getProjects;
    this.getProject = getProject;
    this.updateProject = updateProject;
    this.createProject = createProject;
    this.deleteProject = deleteProject;
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

}

module.exports = ProjectModel;
