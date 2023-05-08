const rules = {
  campoObrigatorio(valor) {
    return !!valor || "Campo obrigatório";
  },
  somenteLetras(valor) {
    if (!valor) {
      return true;
    }
    const regex = /[^a-zA-Z\s]+/;
    return !regex.test(valor) || "Somente letras";
  },
  email(email) {
    if (!email) {
      return true;
    }
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase()) || "Digite um e-mail";
  },
  dataVoltaAposIda(dataIda, dataVolta) {
    if (!dataIda && !dataVolta) {
      return true;
    }
    return (
      dataVolta >= dataIda ||
      "A data de volta não pode ser antes da data de ida"
    );
  },
};

export default rules;
