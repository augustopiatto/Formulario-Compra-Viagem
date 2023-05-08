import { createStore } from "vuex";

export default createStore({
  state: {
    toast: {
      duracao: 3000,
      mensagem: "",
      tipo: "erro",
    },
  },
  getters: {
    toast(state) {
      return state.toast;
    },
  },
  mutations: {
    toast(state, obj) {
      state.toast.duracao = obj.duracao || 5000;
      state.toast.mensagem = obj.mensagem;
      state.toast.tipo = obj.tipo;
    },
  },
  actions: {},
  modules: {},
});
