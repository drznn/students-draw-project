import { Vue } from "vue";
import { Vuex } from "vuex";
import { api } from "@/services.js";
import { store } from "./store.js";
import { axios } from "axios";


Vue.use(Vuex);

new Vue({
  el: '#app',
  store: store,
  state: state,
}),

 store = new Vuex.Store({
  state: {
      config: 'config',

  },
  getters: {
      config: state => state.config
  },
});


export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: ""
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
    }
  },
  actions: {
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USUARIO", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    }
  }
});
