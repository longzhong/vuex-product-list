import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    productListData:[
      {name:'土豆', price: 150},
      {name:'西红柿', price: 70},
      {name:'苹果', price: 50},
      {name:'西瓜', price: 20},
    ]
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.productListData.map(product=>{
        return {
          name : '**'+product.name+'**',
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePrice:(state, payload) =>{
      state.productListData.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000);
    }
  }
})
