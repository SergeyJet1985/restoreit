
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
  
  const JWTtoken = () => {
    if (localStorage.getItem('token')){
        return `jwt ${localStorage.getItem('token')}`; 
      }
    return 'jwt heeelp'
    }
  const url = 'http://localhost:3000/'+uri;
  console. log(url);
  const result = axios({
    method,
    url,
    data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: JWTtoken(),
    },
    timeout,
  }) 
    .catch(error => {
      // store.commit('SET_ERROR', error);
    });
  return result;
};

export default{
  request,
}