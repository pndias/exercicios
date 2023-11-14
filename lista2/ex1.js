function arrayPrint() {
  // a declarar vetor 2 posições

  let vetor = new Array(12);
  // b) A primeira, terceira e décima posições do vetor devem receber o valor 108.
  vetor[0] = vetor[2] = vetor[9] = 108;
  // c) A segunda posição deve receber o valor da primeira posição menos 8 e a quarta posição deve receber o valor da terceira mais 6

  vetor[1] = vetor[0] - 8;
  vetor[3] = vetor[2] + 6;

  // d) As posições de índice par a partir da quinta posição devem receber, na ordem, 11, 32, 33, 87
  vetor[4] = 11;
  vetor[6] = 32;
  vetor[8] = 33;
  vetor[10] = 87;

  // e) A posição 5 deve guardar 6 + 3 * o valor da sétima posição(6) a posição v[7] = v[5] + 10
  vetor[5] = 5 + 3 * vetor[6];
  vetor[7] = vetor[5] + 10;

  // f) O valor 72 deve ser inserido na posição dada pelo valor da quinta posição
  vetor[vetor[4]] = 72;

  // g) A posição 4 recebe o valor da oitava posição
  vetor[4] = vetor[7];
  // h) troque o valor da 11a posição com o da 6a
  let temp = vetor[5];
  vetor[5] = vetor[10];
  vetor[10] = temp;
  // i) Troque os valores das posições 0 e 8
  temp = vetor[0];
  vetor[0] = vetor[8];
  vetor[8] = temp;
  // j) escrever todas as posições de trás pra frente usando casting para char
  for (let i = vetor.length - 1; i >= 0; i--) {
    console.log(String.fromCharCode(vetor[i]));
  }
}

arrayPrint();
