function diferencaDatas(d0, m0, a0, d1, m1, a1) {
  // Considerando que um ano tem 360 dias e um mês tem 30 dias
  const diasTotaisData0 = a0 * 360 + m0 * 30 + d0;
  const diasTotaisData1 = a1 * 360 + m1 * 30 + d1;

  const diferencaEmDias = diasTotaisData1 - diasTotaisData0;

  return diferencaEmDias;
}

// Utilizando o módulo readline para receber entrada do usuário
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicitando ao usuário que insira os valores das datas
rl.question("Digite o dia da primeira data: ", (D0) => {
  rl.question("Digite o mês da primeira data: ", (M0) => {
    rl.question("Digite o ano da primeira data: ", (A0) => {
      rl.question("Digite o dia da segunda data: ", (D1) => {
        rl.question("Digite o mês da segunda data: ", (M1) => {
          rl.question("Digite o ano da segunda data: ", (A1) => {
            // Convertendo valores para números inteiros
            D0 = parseInt(D0);
            M0 = parseInt(M0);
            A0 = parseInt(A0);
            D1 = parseInt(D1);
            M1 = parseInt(M1);
            A1 = parseInt(A1);

            // Calculando a diferença em dias
            const resultado = diferencaDatas(D0, M0, A0, D1, M1, A1);

            const anos = Math.floor(resultado / 360);
            const meses = Math.floor((resultado % 360) / 30);
            const dias = resultado % 30;

            // Exibindo o resultado
            console.log(
              `A diferença entre as datas é de ${anos} anos, ${meses} meses e ${dias} dias`
            );

            // Fechando a interface readline
            rl.close();
          });
        });
      });
    });
  });
});
