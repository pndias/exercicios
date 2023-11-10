function cduParaUcd(numero) {
  // Verifica se o número tem 3 dígitos
  if (numero.toString().length !== 3) {
    return "Por favor, insira um número de 3 dígitos.";
  }

  // Separa os dígitos
  var centena = Math.floor(numero / 100);
  var dezena = Math.floor((numero % 100) / 10);
  var unidade = numero % 10;

  // Reescreve no formato UCD
  var novoNumero = unidade * 100 + centena * 10 + dezena;

  return novoNumero;
}

var numeroCdu = 489;

var resultadoUcd = cduParaUcd(numeroCdu);
console.log("O número " + numeroCdu + " no formato UCD é: " + resultadoUcd);
