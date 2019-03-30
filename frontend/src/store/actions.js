import api from '../api/api';

const getCatalog = ({ commit },test) => {
  api.request('getCatalog')
    .then(data => {
      commit('CATALOG',data);
    })
};
const addCatalog = ({ commit },test) => {
  api.request('post', `addCatalog/`,test)
    .then(data => {
      commit('add',data);
    })
};

const addBrand = ({commit},data) => {
  console.log(data._id,'+',data.model);
  api.request('post', `addBrand/${data._id}`,data.model)
    .then(response => {
      commit('DELETE', response)
    })
}

const addMark = ({commit},data) => {
  api.request('post', `addMark/`,data)
    .then(response => {
      commit('DELETE', response)
    })
}

const addService = ({commit},data) => {
  api.request('post', 'addService',data)
    .then(response => {
      commit('DELETE', response)
    })
}

const signIn = ({ commit }, login) => {
  api.request('post', 'user/login', login)
    .then(data => {
      commit('SIGN_IN', data);
    })
};

const catalog = ({commit}) => {
  api.request('get', 'catalogs')
    .then(data => {
      commit('catalogs', data)
    })
}


const deleteCatalog = ({commit}, id) => {
  api.request('delete', `catalog/${id}`)
    .then(data => {
      commit('DELETE', data)
    })
}
const deleteModel = ({commit}, data) => {
  api.request('delete', `model/${data._id}`, data)
    .then(data => {
      commit('DELETE', data)
    })
}

const deleteService = ({commit}, data) => {
  api.request('delete', `service/${data._id}`, data)
    .then(data => {
      commit('DELETE', data)
    })
}

const editModel = ({commit}, data)=>{
  commit('MODEL', data)
}

export default {
  addCatalog,
  addBrand,
  addMark,
  signIn,
  catalog,
  deleteCatalog,
  deleteModel,
  deleteService,
  editModel,
  addService,
  getCatalog,

  
}