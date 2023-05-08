<template>
  <transition name="fade">
    <div v-if="toast.mensagem.length" class="toast-modal" :class="toast.tipo">
      <v-row no-gutters align="center">
        <v-col sm="10">
          {{ toast.mensagem }}
        </v-col>
        <v-col sm="2">
          <mdicon name="close" class="clickable" @click="fechaToast" />
        </v-col>
      </v-row>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ToastModal",
  data() {
    return {};
  },
  watch: {
    "toast.mensagem": {
      handler() {
        setTimeout(() => {
          this.fechaToast();
        }, this.toast.duracao);
      },
    },
  },
  computed: {
    toast() {
      return this.$store.getters.toast;
    },
  },
  methods: {
    fechaToast() {
      this.$store.commit("toast", {
        mensagem: "",
      });
    },
  },
};
</script>

<style scoped>
.toast-modal {
  width: 200px;
  height: auto;
  bottom: 0;
  padding: 8px;
  position: absolute;
  left: calc(50% - 100px);
  border-radius: 5px 5px 0 0;
  color: white;
  transition: all 2s ease;
  z-index: 1;
}
.sucesso {
  background-color: #88b04b;
}
.erro {
  background-color: #ed4337;
}
.clickable {
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
