<template>
  <v-toolbar theme="dark">
    <v-toolbar-title class="titulo">Viagem Turismo</v-toolbar-title>
    <v-tooltip text="Página de compras" location="left">
      <template v-slot:activator="{ props }">
        <!-- Um redirect só para ficar visivel pro usuário, apesar de mandar pra mesma página -->
        <mdicon
          v-bind="props"
          name="cart-arrow-down"
          size="32"
          class="compra"
          to="/"
        >
        </mdicon>
      </template>
    </v-tooltip>
  </v-toolbar>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped>
.titulo {
  font-size: 24px;
  font-weight: bold;
}
.compra {
  margin-right: 16px;
  cursor: pointer;
}
</style>
