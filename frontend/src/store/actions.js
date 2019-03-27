import api from '../api/api';

const test = ({ commit }) => {
  api.request('get', 'test', null, 2500)
    .then(response => {
      commit('test', response);
    });
};

export default {
  test,

  
}