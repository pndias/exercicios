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
}
