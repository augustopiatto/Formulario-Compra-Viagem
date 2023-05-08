<template>
  <v-container class="bg-surface-variant">
    <v-form ref="form">
      <v-row align="center" justify="space-between">
        <v-col>
          <v-autocomplete
            v-model="origem"
            clearable
            label="Origem"
            :items="cidadesFiltradas"
            :rules="[rules.campoObrigatorio]"
          />
        </v-col>
        <v-tooltip text="Inverte origem e destino" location="top">
          <template v-slot:activator="{ props }">
            <mdicon
              v-bind="props"
              class="clickable"
              name="swap-horizontal"
              required
              @click="inverteDestinos"
            />
          </template>
        </v-tooltip>
        <v-col>
          <v-autocomplete
            v-model="destino"
            clearable
            label="Destino"
            :items="cidadesFiltradas"
            :rules="[rules.campoObrigatorio]"
          />
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col>
          <!-- vuetify3 ainda não tem date picker -->
          <v-text-field
            v-model="dataIda"
            type="date"
            label="Data de ida"
            :rules="[rules.campoObrigatorio]"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="dataVolta"
            type="date"
            label="Data de volta"
            :rules="[rules.campoObrigatorio]"
          />
        </v-col>
      </v-row>
      <v-text-field
        v-model="qtdPassageiros"
        label="Quantidade de passageiros"
        type="number"
        :rules="[rules.campoObrigatorio]"
      />
      <v-row no-gutters>
        <v-text-field
          v-model="passageiroPrincipal"
          label="Nome do passageiro principal"
          :rules="[rules.somenteLetras, rules.campoObrigatorio]"
        />
      </v-row>
      <v-row no-gutters>
        <v-text-field
          v-model="emailPrincipal"
          label="E-mail do passageiro principal"
          :rules="[rules.email, rules.campoObrigatorio]"
        />
      </v-row>
      <v-row justify="center">
        <v-btn color="primary" @click="enviar">Enviar</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import rules from "../helpers/rules";

export default {
  data() {
    return {
      cidades: [
        "São Paulo",
        "São José dos Campos",
        "Jacareí",
        "Guarulhos",
        "Campos do Jordão",
      ],
      dataIda: null,
      dataVolta: null,
      destino: null,
      emailPrincipal: null,
      origem: null,
      passageiroPrincipal: null,
      qtdPassageiros: null,
      rules,
    };
  },
  computed: {
    cidadesFiltradas() {
      const cidades = [...this.cidades];
      if (this.origem) {
        cidades.splice(cidades.indexOf(this.origem), 1);
      }
      if (this.destino) {
        cidades.splice(cidades.indexOf(this.destino), 1);
      }
      return cidades;
    },
  },
  methods: {
    async enviar() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        // chama store falha
      } else {
        this.resetarInputs();
        // chama store sucesso
      }
    },
    inverteDestinos() {
      const origem = this.origem;
      this.origem = this.destino;
      this.destino = origem;
    },
    resetarInputs() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
