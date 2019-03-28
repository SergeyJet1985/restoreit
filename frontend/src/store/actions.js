import api from '../api/api';

const test = ({ commit }) => {
  api.request('get', 'test', null, 2500)
    .then(response => {
      commit('test', response);
    });
};
const addCatalog = ({ commit },item) => {
  api.request('post', `addCatalog/${item}`)
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

export default {
  test,
  addCatalog,
  addBrand,
  signIn,
  catalog,
  deleteCatalog,

  
}