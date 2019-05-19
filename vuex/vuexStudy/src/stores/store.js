import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
var store =new Vuex.Store({
  state:{
    count:0
  },
  actions:{
    asyncChange(context,n){
      setTimeout(()=>{
        context.commit("change",n)
      },2000)
    }
  },
  mutations:{
    change(state,n){
      state.count+=n; 
    }
  }
})
export default store;