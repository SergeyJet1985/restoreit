import store from '../store.js';
import router from '../router';



export default {

  test(state, data) {

   // state.appStatus = payload;
  },
  add(state, item) {
    console.log('ss',item)
   state.catalog.push(item);
  },

  
}