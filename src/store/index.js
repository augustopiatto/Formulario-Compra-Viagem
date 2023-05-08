import { createStore } from "vuex";

const DURACAO_PADRAO = 5000; // 5 segundos

export default createStore({
  state: {
    toast: {
      duracao: DURACAO_PADRAO,
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
      state.toast.duracao = obj.duracao || DURACAO_PADRAO;
      state.toast.mensagem = obj.mensagem;
      state.toast.tipo = obj.tipo;
    },
  },
  actions: {},
  modules: {},
});
