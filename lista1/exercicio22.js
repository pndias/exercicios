const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Por favor, insira o número de segundos: ", (segundos) => {
  let horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  let minutos = Math.floor(segundos / 60);
  segundos %= 60;

  console.log(
    `Tempo formatado: ${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`
  );

  rl.close();
});
