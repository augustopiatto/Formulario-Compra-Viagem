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
  email(valor) {
    if (!valor) {
      return true;
    }
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(valor).toLowerCase()) || "Digite um e-mail";
  },
};

export default rules;
