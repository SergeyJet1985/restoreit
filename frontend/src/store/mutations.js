import store from '../store.js';
import router from '../router';



export default {

  test(state, data) {

   // state.appStatus = payload;
  },
  add(state, item) {
    console.log('ss',item)
  },
  
  CATALOG(state,data){

  },
  catalogs(state, data) {
    state.catalog = data.data.data;
  },
  MODEL(state,data){
    state.model = data;
    router.push('/admin/panel/model');
  },

  SIGN_IN(state, data) {
    const JWTtoken = data.data.token;
    console.log(JWTtoken);
    localStorage.setItem('token', JWTtoken);
    document.location.reload(true);
  },

  SIGN_IN_FAIL() {
    console.log('LOGIN FAIL');
  },
  DELETE() {
    console.log('DELETED');
  },
  
}