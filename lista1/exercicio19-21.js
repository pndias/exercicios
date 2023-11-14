// Q19 não exibe a saída e a entrada me parece estranha.

function calculaMinutos(m0) {
  // Utilizando o módulo readline para receber entrada do usuário
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Digite o número de minutos que deseja calcular: ", (M0) => {
    M0 = parseInt(M0);
    var resultado = M0;
    const dias = Math.floor(resultado / 1440);
    const horas = Math.floor((resultado % 1440) / 60);
    const minutos = resultado % 60;

    console.log(
      `${resultado} minutos são ${dias} dias, ${horas} horas e ${minutos} minutos`
    );
    rl.close();
  });
}
calculaMinutos();
