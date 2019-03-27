
import axios from 'axios';
import store from '../store.js';

const request = (method, uri, data, timeout = 5000) => {
  const refreshDATA = {
    METHOD: method,
    URI: uri,
    DATA: data,
  };

  if (!method) {
    console.error('API function call requires method argument');
    return;
  }

  if (!uri) {
    console.error('API function call requires uri argument');
    return;
  }

  const url = 'http://localhost:3000/'+uri;
  console. log(url);
  const result = axios({
    method,
    url,
    data,
    headers: {
      // Authorization: JWTtoken(),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout,
  }) 
    .then(response =>{
      console.log(response);
    })
    .catch(error => {
      if (error.response.status === 401) {
        // store.dispatch('refreshToken', refreshDATA);
      }
      // store.commit('SET_ERROR', error);
    });
  return result;
};

export default{
  request,
}