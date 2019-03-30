import Links from './../JavaScript/navigationLinks'
import miniCategory from './../JavaScript/miniCategory'
import smartphone from './../JavaScript/smartphone'

export default {
  Links,
  miniCategory,
  smartphone,
  category:{},
  catalog: [],
  JWT:localStorage.getItem('token'),
  model:{
    id:undefined,
    name:undefined,
    service:undefined,
  }
}