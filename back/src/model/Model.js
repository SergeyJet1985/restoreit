'use strict';

class Model {
  constructor({ db, collectionName }) {
    this.db = db;
    this.collectionName = collectionName;
  }

  async getList(filter, projection) {
    return this.find(filter, projection).toArray();
  }

  async getObject(filter, projection) {
    return await this.findOne(filter, projection);
  }

  find(filter, projection) {
    //console.log('Model find', filter, projection);
    if (filter)
    {
      filter = {id: filter};
    }
    return this.db.get()
      .collection(this.collectionName)
      .find(this.getFilter(filter)).project(projection);
  }

  async findOne(filter, projection) {
    const result = await this.db.get()
      .collection(this.collectionName)
      .findOne(this.getFilter(filter));
       
      delete result.password;
      //console.log('result=>',result);
    return result;
  }

  async findOneAndUpdate(filter, update, params) {
    filter={
      _id: filter._id,
      }
     //console.log('findOneAndUpdate', filter, update);
    update = {
      model:{
        name:update.name,
        img:update.img,
      }
    }
    const result = await this.db.get()
      .collection(this.collectionName)
      .findOneAndUpdate(
        this.getFilter(filter), {
          $addToSet: update
        }, 
        params
      )
      .catch(err => {
        console.log(err);
      });
    return result;
  }

  async findOneAndUpdateService(filter, update, params) {
     //console.log('findOneAndUpdate', filter, update);
    const addService = {
          product: update.product,
          price:update.price,  
    }
    console.log(filter._id);
    const search = this.getFilter(filter)
    const result = await this.db.get()
      .collection(this.collectionName)
      .findOneAndUpdate(
        {'_id':filter._id,'model.name':update.name}, {
          $addToSet: { "model.$.service": addService } 
        }, 
      )
      .catch(err => {
        console.log(err);
      });
    return result;
  }
  async Insert(filter, update, params) {
    filter={
      _id: filter._id
      }
    const result = await this.db.get()
      .collection(this.collectionName)
      .findOneAndUpdate(
        filter, {
          $addToSet: {
            models: {
             ...update
            },
          },
        }, 
        params
      )
      .catch(err => {
        console.log(err);
      });
      if(result.value == null){
          const resultInsert = await this.db.get()
            .collection(this.collectionName)
            .insertOne(filter)
            .catch(err => {
              console.log(err);
            });
          return resultInsert;
        
      }
    return result;
  }
  async findOneAndInsert(filter, update, params) {
    filter={
      _id: filter._id,
      }
    const result = await this.db.get()
      .collection(this.collectionName)
      .findOneAndUpdate(
        this.getFilter(filter), {
          $push: update
        }, 
        params
      )
      .catch(err => {
      });
    return result;
  }

  async insert(params) {
    const result = await this.db.get()
      .collection(this.collectionName)
      .insertOne(params)
      .catch(err => {
        console.log(err);
      });
    return result;
  }

  async deleteOne(filter) {
    const result = await this.db.get()
      .collection(this.collectionName)
      .deleteOne(this.getFilter(filter))
      .catch(err => {
        console.log(err);
      });
  
    if (result.result.n===0){return false}
    return true
  }

  async deleteOneModel(params) {
    const filter={
      _id: params._id,
      }
    const modelDelete = {
      name : params.model
    }
    const result = await this.db.get()
      .collection(this.collectionName)
      .update(
        this.getFilter(filter), {
          $pull: {model:{'name':params.model}},
        }, 
        params
      )
      .catch(err => {
        console.log(err);
      });
  
    return true
  }

  async deleteOneService(params) {
    const filter={
      _id: params._id,
      }
    const modelDelete = {
      name : params.model
    }
    const result = await this.db.get()
      .collection(this.collectionName)
      .update(
        {'_id':filter._id,'model.name':update.name}, {
          $pull: {"model.$.service":{
            'product':params.product,
            'price':params.price
          }},
        }, 
        params
      )
      .catch(err => {
        console.log(err);
      });
  
    return true
  }

  getFilter(filter) {
    if (filter && filter['_id']) {
      filter['_id'] = this.db.objectId(filter['_id']);
    }
    return filter;
  }
}

module.exports = Model;
