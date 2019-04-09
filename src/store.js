import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import Service from "@/api/Service.js";

export default new Vuex.Store({
  state: {
    products: []
  },

  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    }
  },
  actions: {
    addProduct({ commit }, product) {
      Service.addProduct(product).then(() => {
        commit("ADD_PRODUCT", product);
      });
    }
  }
});
