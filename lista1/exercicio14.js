function trocaValores(x, y) {
  var a = x;
  var b = y;
  var aux = 0;
  aux = a;
  a = b;
  b = aux;

  console.log("O valor inicial de A é", b, "e o valor inicial de B é", a);
  console.log("O valor final de A é", a, "e o valor final de B é", b);
}

trocaValores(3, 5);
